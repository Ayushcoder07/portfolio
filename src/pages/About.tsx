import aboutmeicon from "../assets/aboutpageicon.png";

function About() {
  const aboutme = [
  "👨‍💻 Hi, I'm <b>Ayush Goyal </b> currently working at <b>Infosys</b> and undergoing specialized training for the <b>Digital Specialist Engineer (DSE)</b> role. I hold a <b>Bachelor of Technology</b> in <b>Computer Science and Engineering</b> from <b>Graphic Era Hill University</b>, Bhimtal, with a <b>CGPA</b> of <b>8.17</b>. My academic foundation is built on strong core concepts such as Data Structures and Algorithms, Operating Systems, Database Management Systems, and Computer Networks.",
  
  "💻 I am proficient in multiple programming languages, including C++, C, Java, HTML, CSS, JavaScript, and SQL. My development experience spans from crafting clean and responsive user interfaces to building secure and scalable backend systems. I have hands-on expertise in frontend technologies like HTML, CSS, and JavaScript, and backend technologies including Python with frameworks, MySQL, and modern tools such as Git and GitHub for version control.",
  
  "Currently, at Infosys, my DSE training is sharpening my technical problem-solving skills and equipping me with industry best practices.",
  
  "🚀 Over time, I have built impactful projects such as an <b>Attendance Management System using Face Recognition</b>, an <b>E-Commerce Website</b>, and a <b>Hotel Management System</b>. These projects showcase my ability to integrate multiple technologies, deliver user-friendly solutions, and manage complete software development lifecycles.",
  
  "🏆 Beyond academics and work, I have a passion for logical problem-solving, having secured 1st place in a Rubik’s Cube competition and 3rd place in a district-level chess tournament. These achievements reflect my analytical mindset and ability to think strategically.",
  
  "🤝 I am eager to collaborate on innovative projects, contribute to impactful solutions, and grow as a professional in the tech industry. Whether it’s developing applications, solving complex problems, or learning new tools, I am driven by curiosity and a desire to make a meaningful impact."
];
  return (
    <div className="w-11/12 max-w-7xl mx-auto py-6 mt-28 flex flex-col items-center ">
      <div className="flex items-center gap-x-3 mx-auto">
        <img src={aboutmeicon} className="w-9" />
        <div className="text-3xl sm:text-4xl font-bold text-center tracking-wider bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 dark:bg-gradient-to-l dark:from-blue-300 dark:to-teal-200 text-transparent">
          About me
        </div>
      </div>

      <div className="flex flex-col gap-y-3 pt-4 ">
        {aboutme.map((value, index) => (
          <p
            key={index}
            dangerouslySetInnerHTML={{ __html: value }}
            className="text-center   text-lg tracking-wide bg-card/70 border rounded-xl shadow p-4 sm:p-6"
          />
        ))}
      </div>
    </div>
  );
}

export default About;
