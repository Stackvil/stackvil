// src/pages/Home.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaRobot,
  FaBrain,
  FaCloud,
  FaPalette
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode size={30} />,
    title: "Web Development",
    description: "Responsive, fast, and modern websites."
  },
  {
    icon: <FaMobileAlt size={30} />,
    title: "App Development",
    description: "Cross-platform mobile applications."
  },
  {
    icon: <FaRobot size={30} />,
    title: "AI Solutions",
    description: "Smart automation using AI."
  },
  {
    icon: <FaBrain size={30} />,
    title: "Machine Learning",
    description: "Data-driven intelligent solutions."
  },
  {
    icon: <FaCloud size={30} />,
    title: "Cloud Solutions",
    description: "Deploy, manage and scale cloud-native apps."
  },
  {
    icon: <FaPalette size={30} />,
    title: "UI/UX Design",
    description: "Modern interfaces focused on user experience."
  }
];

const posts = [
  {
    title: "Why Your Business Needs a Website",
    image:
      "https://www.qoreinteractive.com/wp-content/uploads/2017/03/V2-%E2%94%82-Why-Every-Business-Needs-a-Website.png",
    caption: "Maximize online presence"
  },
  {
    title: "Benefits of Custom Mobile Apps",
    image: "https://www.techasoft.com/blog/2022/11/1667993263.jpg",
    caption: "Boost productivity"
  },
  {
    title: "How AI is Changing Everything",
    image:
      "https://media.tbistatic.com/bistudios/_00/dev_edit/ai/assets/xAgQN0yT9y/ai-is-changing-everything-desktop-still-1920x1080.jpeg",
    caption: "Smarter business decisions"
  }
];

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="min-h-[75vh] flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-300 text-white px-4 py-20">
        <div className="text-center" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Welcome to <span className="text-white drop-shadow-sm">Stackvil Solutions</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto font-light">
            We specialize in Web, App, AI, Machine Learning, Cloud and Design Solutions to help modern businesses scale.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-700" data-aos="fade-up">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 border border-blue-100 text-center"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-700" data-aos="fade-up">Featured Posts</h2>
        <div className="grid md:grid-cols-3 gap-10" data-aos="fade-up">
          {posts.map((post, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 bg-white border"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-blue-600">{post.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-600 text-white text-center" data-aos="fade-in">
        <h2 className="text-3xl font-bold mb-4">Let’s Build Something Great Together!</h2>
        <p className="mb-6">Get in touch with us for your next project or startup vision.</p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default Home;
