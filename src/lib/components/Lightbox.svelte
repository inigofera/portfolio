<script lang="ts">
	import { onMount } from 'svelte';

	let {
		images,
		index,
		onclose,
		onnavigate
	}: {
		images: string[];
		index: number;
		onclose: () => void;
		onnavigate: (index: number) => void;
	} = $props();

	const MIN_SCALE = 1;
	const MAX_SCALE = 8;

	let dialog: HTMLDialogElement;
	let imgEl: HTMLImageElement | undefined = $state();

	let scale = $state(1);
	let offsetX = $state(0);
	let offsetY = $state(0);
	let dragging = $state(false);
	let loadTick = $state(0);

	let mouse: { startX: number; startY: number; baseX: number; baseY: number; moved: boolean } | null = null;
	let touch:
		| { mode: 'pan'; startX: number; startY: number; baseX: number; baseY: number; moved: boolean; startedAt: number }
		| { mode: 'pinch'; startDist: number; startScale: number }
		| null = null;

	let percent = $derived.by(() => {
		void index;
		void loadTick;
		if (!imgEl || imgEl.naturalWidth === 0) return 0;
		return Math.round((scale * imgEl.clientWidth / imgEl.naturalWidth) * 100);
	});

	onMount(() => {
		dialog.showModal();
		document.body.style.overflow = 'hidden';
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mouseup', handleMouseUp);
		return () => {
			document.body.style.overflow = '';
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseup', handleMouseUp);
		};
	});

	function clamp(v: number, min: number, max: number) {
		return Math.max(min, Math.min(max, v));
	}

	function resetView() {
		scale = 1;
		offsetX = 0;
		offsetY = 0;
	}

	function clampOffset() {
		if (!imgEl) return;
		offsetX = clamp(offsetX, (-imgEl.clientWidth * scale) / 2, (imgEl.clientWidth * scale) / 2);
		offsetY = clamp(offsetY, (-imgEl.clientHeight * scale) / 2, (imgEl.clientHeight * scale) / 2);
	}

	function go(i: number) {
		resetView();
		onnavigate(i);
	}

	function toggleZoom() {
		if (!imgEl) return;
		const hundred = imgEl.naturalWidth / imgEl.clientWidth;
		if (hundred <= 1 || Math.abs(scale - hundred) < 0.05) {
			resetView();
		} else {
			scale = Math.min(hundred, MAX_SCALE);
			offsetX = 0;
			offsetY = 0;
			clampOffset();
		}
	}

	function zoomAt(factor: number, clientX?: number, clientY?: number) {
		const next = clamp(scale * factor, MIN_SCALE, MAX_SCALE);
		if (next === scale) return;
		const k = next / scale;
		if (clientX !== undefined && clientY !== undefined) {
			const dx = clientX - window.innerWidth / 2;
			const dy = clientY - window.innerHeight / 2;
			offsetX = dx * (1 - k) + offsetX * k;
			offsetY = dy * (1 - k) + offsetY * k;
		} else {
			offsetX *= k;
			offsetY *= k;
		}
		scale = next;
		if (scale === MIN_SCALE) {
			offsetX = 0;
			offsetY = 0;
		}
		clampOffset();
	}

	function handleWheel(e: WheelEvent) {
		e.preventDefault();
		zoomAt(e.deltaY < 0 ? 1.15 : 1 / 1.15, e.clientX, e.clientY);
	}

	function handleKeydown(e: KeyboardEvent) {
		if (images.length > 1) {
			if (e.key === 'ArrowRight') {
				go((index + 1) % images.length);
				return;
			}
			if (e.key === 'ArrowLeft') {
				go((index - 1 + images.length) % images.length);
				return;
			}
		}
		if (e.key === '+' || e.key === '=') {
			zoomAt(1.25);
		} else if (e.key === '-') {
			zoomAt(1 / 1.25);
		} else if (e.key === '0') {
			resetView();
		}
	}

	function handleDialogClick(e: MouseEvent) {
		if (e.target === dialog) onclose();
	}

	function handleButtonClick(e: MouseEvent) {
		// Keyboard activation (Enter/Space) arrives as a click with detail === 0.
		// Mouse activation is already handled in handleMouseUp.
		if (e.detail === 0) toggleZoom();
	}

	function handleMouseDown(e: MouseEvent) {
		if (e.button !== 0) return;
		e.preventDefault();
		mouse = { startX: e.clientX, startY: e.clientY, baseX: offsetX, baseY: offsetY, moved: false };
		dragging = true;
	}

	function handleMouseMove(e: MouseEvent) {
		if (!mouse || scale <= 1) return;
		const dx = e.clientX - mouse.startX;
		const dy = e.clientY - mouse.startY;
		if (Math.abs(dx) > 4 || Math.abs(dy) > 4) mouse.moved = true;
		offsetX = mouse.baseX + dx;
		offsetY = mouse.baseY + dy;
		clampOffset();
	}

	function handleMouseUp() {
		if (!mouse) return;
		const wasClick = !mouse.moved;
		mouse = null;
		dragging = false;
		if (wasClick) toggleZoom();
	}

	function touchDistance(t: TouchList) {
		return Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY);
	}

	function handleTouchStart(e: TouchEvent) {
		if (e.touches.length === 2) {
			touch = { mode: 'pinch', startDist: touchDistance(e.touches), startScale: scale };
		} else if (e.touches.length === 1) {
			touch = {
				mode: 'pan',
				startX: e.touches[0].clientX,
				startY: e.touches[0].clientY,
				baseX: offsetX,
				baseY: offsetY,
				moved: false,
				startedAt: Date.now()
			};
		}
	}

	function handleTouchMove(e: TouchEvent) {
		if (!touch) return;
		e.preventDefault();
		if (touch.mode === 'pinch' && e.touches.length === 2) {
			scale = clamp((touch.startScale * touchDistance(e.touches)) / touch.startDist, MIN_SCALE, MAX_SCALE);
			if (scale === MIN_SCALE) {
				offsetX = 0;
				offsetY = 0;
			}
			clampOffset();
		} else if (touch.mode === 'pan' && e.touches.length === 1 && scale > 1) {
			const dx = e.touches[0].clientX - touch.startX;
			const dy = e.touches[0].clientY - touch.startY;
			if (Math.abs(dx) > 8 || Math.abs(dy) > 8) touch.moved = true;
			offsetX = touch.baseX + dx;
			offsetY = touch.baseY + dy;
			clampOffset();
		}
	}

	function handleTouchEnd(e: TouchEvent) {
		if (!touch) return;
		const t = touch;
		touch = null;
		if (t.mode === 'pan' && !t.moved && e.touches.length === 0 && Date.now() - t.startedAt < 300) {
			toggleZoom();
		}
	}
</script>

<dialog
	bind:this={dialog}
	aria-label="Image viewer"
	onkeydown={handleKeydown}
	onclick={handleDialogClick}
	oncancel={onclose}
>
	<button type="button" class="lightbox-btn lightbox-close" onclick={onclose} aria-label="Close image viewer">
		✕
	</button>

	{#if images.length > 1}
		<button
			type="button"
			class="lightbox-btn lightbox-prev"
			onclick={() => go((index - 1 + images.length) % images.length)}
			aria-label="Previous image"
		>
			←
		</button>
	{/if}

	<figure class="lightbox-figure">
		<button
			type="button"
			class="lightbox-image"
			aria-label="Toggle full size"
			onclick={handleButtonClick}
			onwheel={handleWheel}
			onmousedown={handleMouseDown}
			ontouchstart={handleTouchStart}
			ontouchmove={handleTouchMove}
			ontouchend={handleTouchEnd}
		>
			<img
				bind:this={imgEl}
				src={images[index]}
				alt={`Image ${index + 1} of ${images.length}`}
				draggable={false}
				style:transform={`translate(${offsetX}px, ${offsetY}px) scale(${scale})`}
				class:zoomed={scale > 1}
				class:dragging={dragging && scale > 1}
				onload={() => (loadTick += 1)}
			/>
		</button>
		<figcaption class="lightbox-meta">
			<span class="lightbox-counter">{percent}%</span>
			{#if images.length > 1}
				<span class="lightbox-counter">{index + 1} / {images.length}</span>
			{/if}
		</figcaption>
	</figure>

	{#if images.length > 1}
		<button
			type="button"
			class="lightbox-btn lightbox-next"
			onclick={() => go((index + 1) % images.length)}
			aria-label="Next image"
		>
			→
		</button>
	{/if}
</dialog>

<style>
	dialog {
		position: fixed;
		inset: 0;
		width: 100%;
		height: 100%;
		max-width: none;
		max-height: none;
		margin: 0;
		padding: 0;
		border: 0;
		background: transparent;
		display: grid;
		place-items: center;
	}

	dialog::backdrop {
		background: rgb(0 0 0 / 0.85);
	}

	.lightbox-figure {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		margin: 0;
	}

	.lightbox-image {
		display: block;
		margin: 0;
		padding: 0;
		border: 0;
		background: none;
		line-height: 0;
	}

	.lightbox-image:focus-visible {
		outline: 2px solid white;
		outline-offset: 4px;
		border-radius: 0.5rem;
	}

	.lightbox-figure img {
		display: block;
		max-width: 90vw;
		max-height: calc(90vh - 3rem);
		object-fit: contain;
		border-radius: 0.5rem;
		cursor: zoom-in;
		will-change: transform;
		transition: transform 120ms ease-out;
		user-select: none;
		-webkit-user-select: none;
	}

	.lightbox-figure img.zoomed {
		cursor: grab;
	}

	.lightbox-figure img.dragging {
		cursor: grabbing;
		transition: none;
	}

	.lightbox-meta {
		display: flex;
		gap: 1rem;
	}

	.lightbox-counter {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		letter-spacing: 0.05em;
		color: rgb(255 255 255 / 0.7);
	}

	.lightbox-btn {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 9999px;
		background: rgb(255 255 255 / 0.1);
		color: white;
		font-size: 1rem;
		line-height: 1;
		cursor: pointer;
		transition: background-color 150ms;
	}

	.lightbox-btn:hover {
		background: rgb(255 255 255 / 0.25);
	}

	.lightbox-close {
		top: 1rem;
		right: 1rem;
	}

	.lightbox-prev {
		left: 1rem;
		top: 50%;
		translate: 0 -50%;
	}

	.lightbox-next {
		right: 1rem;
		top: 50%;
		translate: 0 -50%;
	}
</style>
