export const markdown = `# ShoppersMap

**Shopper's Map** is an engaging new way for users to shop at their supermarket. The user can form a shared shopping list and the app allows for a better supermarket navigation experience.

![image](/work/smap/Untitled.png)

## Table of Contents

- [Problems](#problems)
- [Goal](#goal)
- [Process](#process)
  - [Phase 1: Empathise](#phase-1-empathise)
    - [12 User Interviews](#12-user-interviews)
    - [Key Findings of the interviews](#key-findings-of-the-interviews)
  - [Phase 2: Define](#phase-2-define)
  - [Phase 3: Ideate](#phase-3-ideate)
    - [User Journey Map](#user-journey-map)
    - [Design Sprint](#design-sprint)
  - [Phase 4: Prototype](#phase-4-prototype)
  - [Testing](#testing)
  - [Task Scenarios](#task-scenarios)
  - [UEQ Analysis](#ueq-analysis)
  - [Issues & Solutions](#issues-solutions)
- [Takeaways](#takeaways)
  - [User Research](#user-research)
  - [Ideation & Lo-fi Prototype](#ideation-lo-fi-prototype)
  - [Hi-fi prototype](#hi-fi-prototype)

## Problems

- Shopping for a group is difficult, considering all the individual requirements, updating them and delivering items.
- I want to be flexible on how I do the shopping. Quick, when I don't have time to look around for items.

## Goal

- To create an application that allows the whole family to use a shared shopping list.
- To create an in-store navigation map of the supermarket and aid in a better collection of items.

## Process

![image](/work/smap/Untitled%201.png)

### Phase 1: Empathise

Going off from our personal experience, we hypothesized that shopping for a family could have some difficulties and wanted to investigate further.

#### 12 User Interviews

All interviews were held online through video calls. As a team, we collectively prepared the interview questionnaire and an observational template.

#### Key Findings of the interviews

**Planning**

- Most people want to shop quickly. But depending on their time availability they want to look around.
- Majority writes a list and know what they want to buy.
- Written list vs. mental list.

**Shopping**

- General problems: getting lost in the supermarket, not finding items.
- Most people plan the order of putting items in their cart to some extent.
- Everyone is annoyed when supermarket changes the location of items.

### Phase 2: Define

Then we came down as a group and had a brainstorming session to note down our ideas and aggregate our findings to set the goal. The outcome of a series of 3 meetings was:

- **Affinity Diagram.**
- Two **User Profiles**.
- **Value proposition canvas**.
- **Empathy map** derived from the VPC.

![image](/work/smap/Affinity-Mapping-Shoppers-MAp.png)

We found that based on the way users shop, there are two profiles emerging with different goals and expectations. And we did not have enough information on each profile to make a persona. So we made User profiles.

![image](/work/smap/User-ProfileStudent-Shopper.png)

![image](/work/smap/User-Profile-Family-Shopper.png)

We identified two problems and defined the goal that needs to be achieved to solve the problems. They are mentioned at the starting of the case study.

### Phase 3: Ideate

#### User Journey Map

From the information gathered, we organized the user tasks and then created a User Journey Map to understand the users' experience throughout the process.

We then focused only on the family shopper, as addressing the needs of this profile would address most of the needs of the Student profile. During prototyping, we wanted to test with profiles and validate this.

![image](/work/smap/Family-Shopper-journey.png)

#### Design Sprint

We used the **4 step sketch** framework:

- Notes
- Ideas
- Crazy 8s
- Solution Sketch

**Crazy 8s**

![image](/work/smap/Supermarket-Guide-Crazy8.png)

We then mapped our ideas onto the **Task Organization Model** we built during the sprint from our User Journey Map.

![image](/work/smap/My-Solution-Shetch-our-TOM.png)

**Story Board**

![image](/work/smap/Supermarket-storyboard.png)

### Phase 4: Prototype

The **Usability Attributes** which were given top priority for the design were:

- **Efficiency**
- **Effectiveness**
- **Satisfaction**

Interaction style would be **Menus and Form**s, for a **Mobile** device.

Based on the TOM, we defined a controlled Task and a Task Scenario with our Low-fi Sketches. Due to time constraints, we couldn't test our Low Fi sketches so we conducted testing on the High Fidelity prototype.

We have tried to use Material Design in our design.

**Style Guide**

![image](/work/smap/SoppersMap-Style-Guide.png)

We gained a deep understanding of the principles of modular design, design systems, libraries and variants for fast and efficient prototyping.

![image](/work/smap/Components.png)

![image](/work/smap/Shoppers-Map-UI.png)

### Testing

Usability Test: 16 subjects

![image](/work/smap/ShoppersMap-User-Testing.png)

https://youtu.be/_HdFf0K2j6Y?list=TLGG3gIo053oYo4wOTA5MjAyMg

### Task Scenarios

**Task 1:** "Imagine that you are Nancy, a 54-year-old mother, living in Dublin with your husband Mike and your son Milan. You have been doing the grocery shopping for the whole family for 20 years. Being responsible of buying the groceries for everyone as well as working full-time has its obstacles and is stressful. Nancy's goal is to have a fast shopping experience and to buy all needed items for the family. Apps like the ShoppersMap app help you to manage the planning of the shopping in collaboration with your family as well as to get the shopping itself done quickly, adjustable to your needs and current situation."

**Task 2:** "Imagine that you already used the ShoppersMap app several times; you and your family as well as friends use it regularly. Recently, your friend recommended the Chardonnay white wine from the newly opened Cornershop supermarket to you. Since you have never been at the Cornershop supermarket before, and you have a weakness for Chardonnay, you decide to visit the supermarket when you pass it the next day on your way home after work. You don't intend to do the big, weekly family shopping there because you don't have that much time as you need to get home to prepare dinner afterwards. Therefore, you create a new shopping list specifically for the Cornershop supermarket and want to get the shopping itself done quickly then."

### UEQ Analysis

We used UEQ analysis for benchmarking our application, our evaluation results are below:

![image](/work/smap/Shoppers-Map-UEQ.png)

- **Attractiveness** is highest with 1,86. The app is attractive and likable for the users.
- **Hedonic Quality** (Stimulation, Novelty): 1,62. The users enjoy interacting and engaging with the app.
- **Pragmatic Quality** (Perspicuity, Efficiency, Dependability): 1,57. The users find the app practicable and they can reach their goals.
- Compared to the Benchmark, our app has (very) positive results and a high relative quality.

### Issues & Solutions

- **75%** of users did not understand that they had to click on the map to select the store. Solution: Add a clear label or sentence like "Choose the store on the map".

- **37.5%** were somewhat confused by certain button labels. Solution: Change button labels.

![image](/work/smap/Untitled%202.png)

- **56.25%** expected the + and – to be the other way around. Solution:

![image](/work/smap/Untitled%203.png)

- **81.25%** were confused with exploring / zooming / moving the map of the supermarket. Solution: Implement auto center functionality.
- **68.75%** did not swipe to find the snack promotions. Solution: Categories could look more like tabs.
- Increase colour contrast to make categories stand out more.
- Add scroll bar.

- **31.25%** were confused when adding contributors to a list. Solution: Use chips for contributors.

![image](/work/smap/Untitled%204.png)

## Takeaways

The following are key takeaways from each phase of the project:

### User Research

- The project began with our own experience of shopping for a family, but the twelve interviews showed how much we had taken for granted. The frustrations that mattered most were surprisingly small: not finding an item, or being slowed down when the supermarket moved things around.
- We resisted forcing the research into personas. The interviews pointed to two distinct shoppers, the Student and the Family shopper, but not to enough detail for rich personas, so user profiles were the more honest tool.
- The affinity diagram, value proposition canvas and empathy map did the real work: turning scattered quotes into two clearly stated problems and a goal we could design against.

### Ideation & Lo-fi Prototype

- Choosing to design for the family shopper was the decision that kept the project manageable. Their needs covered most of the student profile as well, so we could commit to one journey instead of splitting the design in two.
- The 4-step sketch and Crazy 8s pushed us past our first, obvious ideas. Mapping the results onto the Task Organization Model we had built from the User Journey Map kept the concepts anchored to real tasks rather than to individual screens.
- We agreed on efficiency, effectiveness and satisfaction as the attributes to optimise, and the style guide followed from that: a mobile, menus-and-forms interaction model built on Material Design patterns.

### Hi-fi prototype

- Testing only the high-fidelity prototype was a constraint rather than a plan, but 16 participants gave us a solid read. The prototype scored well above the benchmark on the UEQ, with attractiveness highest, a sign that the visual direction was working.
- The most useful output was the issue list. Learning that 81.25% struggled to explore and zoom the map, or that 75% never realised they had to tap the map to choose a store, turned vague impressions into specific, fixable defects.
- Every fix was small and local: clearer labels, flipping the + and – controls, auto-centring the map, treating categories as tabs and contributors as chips; yet together they removed most of the friction we had measured.`;