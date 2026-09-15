export interface Education {
	degree: string;
	institution: string;
	dates: string;
	details?: string;
}

export const education: Education[] = [
	{
		degree: 'MSc, Interaction Technology, User Experience Design',
		institution: 'University of Twente',
		dates: 'Aug 2021 - Aug 2022'
	},
	{
		degree: 'MSc, Human-Computer Interaction Design',
		institution: 'Universidad Politécnica de Madrid',
		dates: 'Aug 2020 - Aug 2021',
		details: 'Final Project: MedBot, an NLP-powered chatbot to assist first responders.'
	},
	{
		degree: 'MSc, Digital Innovation',
		institution: 'EIT Digital Master School',
		dates: 'Sep 2020 - Jul 2022'
	},
	{
		degree: 'BSc, Computer Science',
		institution: 'University of Twente',
		dates: '2017 - 2020',
		details: 'Final Thesis: Mental Health in a Pandemic, a Design and Interaction Perspective (9.5/10).'
	},
	{
		degree: 'BSc Minor, International Marketing',
		institution: 'Tecnológico de Monterrey',
		dates: 'Aug 2019 - Jan 2020'
	},
	{
		degree: 'Summer School, Data and Democracy, Data Journalism',
		institution: 'University of Amsterdam',
		dates: '2021 - Present'
	}
];
