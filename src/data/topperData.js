export const topperGroups = [
  {
    title: "BSEB Class 10 Toppers",
    description: "Bihar School Examination Board - Class 10 outstanding performers.",
    students: [
      {
        name: "Ananya Sinha",
        result: "98.6%",
        year: "2025",
        image: "/school-logo.png",
      },
      {
        name: "Satyam Raj",
        result: "97.9%",
        year: "2025",
        image: "/school-logo.png",
      },
      {
        name: "Pooja Kumari",
        result: "97.3%",
        year: "2026",
        image: "/school-logo.png",
      },
      {
        name: "Vivek Anand",
        result: "95.9%",
        year: "2026",
        image: "/school-logo.png",
      },
      {
        name: "Komal Rani",
        result: "95.1%",
        year: "2026",
        image: "/school-logo.png",
      },
    ],
  },
  {
    title: "BSEB Class 12 Toppers",
    description: "Bihar School Examination Board - Class 12 stream-wise top achievers.",
    students: [
      {
        name: "Rohan Kumar",
        result: "96.8%",
        year: "2025",
        image: "/school-logo.png",
      },
      {
        name: "Kajal Kumari",
        result: "97.1%",
        year: "2026",
        image: "/school-logo.png",
      },
      {
        name: "Ayush Raj",
        result: "95.6%",
        year: "2026",
        image: "/school-logo.png",
      },
      {
        name: "Nitesh Kumar",
        result: "95.0%",
        year: "2026",
        image: "/school-logo.png",
      },
      {
        name: "Soni Mishra",
        result: "94.7%",
        year: "2026",
        image: "/school-logo.png",
      },
    ],
  },
  {
    title: "CBSE Class 10 Toppers",
    description: "CBSE Class 10 high scorers with strong foundation and consistency.",
    students: [
      {
        name: "Shreya Gupta",
        result: "97.4%",
        year: "2025",
        image: "/school-logo.png",
      },
      {
        name: "Aman Verma",
        result: "96.6%",
        year: "2025",
        image: "/school-logo.png",
      },
      {
        name: "Nidhi Singh",
        result: "95.8%",
        year: "2026",
        image: "/school-logo.png",
      },
      {
        name: "Aarav Jain",
        result: "95.2%",
        year: "2026",
        image: "/school-logo.png",
      },
      {
        name: "Riya Sharma",
        result: "94.8%",
        year: "2026",
        image: "/school-logo.png",
      },
    ],
  },
  {
    title: "CBSE Class 12 Toppers",
    description: "CBSE Class 12 board achievers across Science, Commerce and Humanities.",
    students: [
      {
        name: "Aditya Raj",
        result: "95.9%",
        year: "2025",
        image: "/school-logo.png",
      },
      {
        name: "Ritika Sharma",
        result: "95.3%",
        year: "2026",
        image: "/school-logo.png",
      },
      {
        name: "Harshita Jha",
        result: "94.9%",
        year: "2026",
        image: "/school-logo.png",
      },
      {
        name: "Mayank Sinha",
        result: "94.5%",
        year: "2026",
        image: "/school-logo.png",
      },
      {
        name: "Sakshi Priya",
        result: "94.1%",
        year: "2026",
        image: "/school-logo.png",
      },
    ],
  },
];

export const spotlightToppers = topperGroups
  .flatMap((group) =>
    group.students.map((student) => ({
      name: "Updated Soon",
      score: `Score Pending - ${group.title.replace(" Toppers", "")}`,
    }))
  );
