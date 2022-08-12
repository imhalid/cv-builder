// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    name: "Halit islam içli",
    jobTitle: "Frontend Developer1",
    location: "Turkey",
    email: "halidiislam@gmail.com",
    linkedin: "",
    twitter: "halidislm",
    github: "imhalid",
    website: "halid.dev",
    aboutme:
      "After graduating from the programming department, I worked remotely on graphic design for about 5 years. I have been working to be a Front End Developer for the last 4 months and I am looking for a job in this field. Because of my old job, I give importance to design and visuality in my work.",

    toolsAndTechSkills: ["Photoshop", "Final Cut Pro", "Figma", "Webflow"],
    industryKnowledge: ["Javascript", "CSS", "HTML", "Next.js"],
    languages: ["Turkish(Native)", "English(A2)"],
    projects: [
      {
        title: "halid.dev",
        summary: `My personal website, that I created with Next.js, Tailwind Css, Content Layer.`,
      },
    ],
    experience: [
      {
        title: "Graphic Designer, Editor, Data analysis",
        company: "Suriye Gündemi",
        from: new Date(2009, 1, 1),
        to: new Date(2012, 1, 1),
        current: true,
        summary: `It is an impartial information sharing platform about Syria. My job task: Preparation of up-to-date maps according to the situation in the war zone. Preparing visual infographics about the obtained data and organizing these data. Adding articles and content to the site with Wordpress.`,
      },
    ],

    displayEducation: true,
    displayProjects: true,
    activeColor: "#5B21B6",
  });
}
