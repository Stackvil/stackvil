import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const teamMembers = [
  {
    name: "Kiran",
    role: "Manager",
    img: "/images/kiran.jpg", // <-- add your image file in public/images/
    overview: "Kiran brings vision and organization to the team, ensuring projects are delivered with efficiency and precision.",
    strengths: [
      "Strategic planning and execution",
      "Cross-functional team leadership",
      "Client relationship management",
      "Risk assessment and mitigation"
    ],
    highlights: [
      "Successfully managed end-to-end delivery of more than 15 enterprise software projects.",
      "Implemented agile methodologies that increased team productivity by 30%.",
      "Built strong partnerships with clients in fintech, healthcare, and retail."
    ]
  },
  {
    name: "Karthik",
    role: "Team Lead",
    img: "/images/karthik.jpg",
    overview: "Karthik drives technical excellence, mentoring developers and leading the team to solve complex challenges.",
    strengths: [
      "Full-stack web and mobile development",
      "Project architecture and code reviews",
      "Mentorship and technical upskilling",
      "Agile project leadership"
    ],
    highlights: [
      "Led development of scalable SaaS applications serving over 100,000 users.",
      "Orchestrated migration of legacy systems to cloud-native solutions.",
      "Recognized internally for fostering team collaboration and innovation."
    ]
  },
  {
    name: "Kishore",
    role: "Developer",
    img: "/images/kishore.jpg",
    overview: "Kishore specializes in building robust applications with a strong focus on performance, security, and user experience.",
    strengths: [
      "Front-end and back-end development",
      "API and database integration",
      "UI/UX enhancements",
      "CI/CD pipeline automation"
    ],
    highlights: [
      "Developed modular front-end components used across multiple projects.",
      "Integrated advanced security protocols for fintech applications.",
      "Automated deployment workflows, reducing turnaround time by 40%."
    ]
  },
  {
    name: "Ravisankar",
    role: "Developer",
    img: "ravi.jpeg",
    overview: "Ravisankar is passionate about crafting elegant solutions and ensuring top-notch performance across all digital platforms.",
    strengths: [
      "System design and scalability",
      "Performance optimization",
      "Database management",
      "Code quality assurance"
    ],
    highlights: [
      "Engineered backend systems supporting real-time analytics.",
      "Improved app load times by 50% through effective optimizations.",
      "Established best practices for code reviews and documentation."
    ]
  },
  {
    name: "MANU",
    role: "Developer",
    img: "/images/manu.jpg",
    overview: "Manu is passionate about innovation, leveraging the latest technologies to deliver impactful solutions for clients.",
    strengths: [
      "Mobile app development (React Native, Flutter)",
      "AI/ML model integration",
      "Performance optimization",
      "Test-driven development"
    ],
    highlights: [
      "Built and launched several high-performance mobile apps featured on app stores.",
      "Integrated AI-powered recommendation systems into e-commerce projects.",
      "Championed test automation across the team, improving code reliability."
    ]
  }
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <section className="pt-20 p-6 min-h-screen bg-white" data-aos="fade-up" aria-labelledby="about-title">
      <div className="max-w-6xl mx-auto">
        <h2 id="about-title" className="text-3xl font-bold text-blue-700 mb-6">About Stackvil</h2>
        <p className="text-gray-700 text-lg leading-7 max-w-4xl">
          <strong>Stackvil Solutions</strong> is a team of passionate and skilled developers committed to building
          high-performance, scalable, and user-centric digital experiences. We specialize in delivering
          end-to-end solutions for <span className="text-blue-600 font-semibold">web development</span>,{" "}
          <span className="text-blue-600 font-semibold">mobile apps</span>,{" "}
          <span className="text-blue-600 font-semibold">AI integrations</span>, and{" "}
          <span className="text-blue-600 font-semibold">machine learning systems</span>.
        </p>
        <p className="text-gray-700 text-lg leading-7 mt-4 max-w-4xl">
          At Stackvil, innovation meets precision. We don’t just write code—we solve real business problems
          with cutting-edge technologies, creative thinking, and agile delivery models.
          Whether you're a startup looking to launch or an enterprise seeking digital transformation,
          Stackvil Solutions is your trusted technology partner.
        </p>
        <p className="text-gray-700 text-lg leading-7 mt-4 max-w-4xl">
          Our mission is simple: <span className="italic text-blue-600">"Build, Innovate, and Empower."</span> Let's create something impactful together.
        </p>

        {/* Team Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-blue-700 mb-6">Our Team</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-start">
                <img
                  src={member.img}
                  alt={`${member.name} profile`}
                  className="w-24 h-24 rounded-full mb-4 border-2 border-blue-200 object-cover"
                />
                <h4 className="text-xl font-semibold text-blue-800 mb-1">
                  {member.name} <span className="text-gray-600 text-base">— {member.role}</span>
                </h4>
                <p className="text-gray-700 mb-2">{member.overview}</p>
                <div>
                  <span className="text-blue-600 font-semibold">Key Strengths:</span>
                  <ul className="list-disc list-inside ml-2 mb-2 text-gray-700">
                    {member.strengths.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="text-blue-600 font-semibold">Portfolio Highlights:</span>
                  <ul className="list-disc list-inside ml-2 text-gray-700">
                    {member.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
