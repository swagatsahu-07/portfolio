import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const socials = [
  {
    name: "Gmail",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=swagatsahu9090@gmail.com",
    icon: SiGmail,
    color: "text-red-400",
    glow: "hover:text-red-300",
  },
  {
    name: "GitHub",
    href: "https://github.com/swagatsahu-07",
    icon: FaGithub,
    color: "text-white",
    glow: "hover:text-white",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/swagatsahu2001/",
    icon: FaLinkedin,
    color: "text-blue-400",
    glow: "hover:text-blue-300",
  },
];

const Contact = () => {
  const [greeting, setGreeting] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour < 12) {
      setGreeting("Good Morning");
      setMessage("One cup of coffee ☕ and some clean code to start the day.");
    } else if (hour < 17) {
      setGreeting("Good Afternoon");
      setMessage("Hope your day is going great — let’s build something impactful.");
    } else {
      setGreeting("Good Evening");
      setMessage("Perfect time to connect, collaborate, and exchange ideas.");
    }
  }, []);

  return (
    <section className="relative w-full px-6 py-24">
      <div className="flex flex-col items-center text-center">

        {/* Greeting */}
        <p className="uppercase tracking-widest text-gray-400 mb-2 text-[clamp(1.25rem,3vw,3rem)]">
          {greeting}
        </p>

        {/* Heading */}
        <h1 className="font-thin text-gray-100 text-[clamp(3.5rem,10vw,9rem)] leading-[1.05]">
          Let’s Connect
        </h1>

        {/* Messages */}
        <p className="text-gray-300 max-w-xl mt-4 text-[clamp(0.9rem,2.2vw,1rem)]">
          {message}
        </p>

        <p className="text-gray-400 max-w-xl mt-4 mb-10 text-[clamp(1rem,2.5vw,1.125rem)]">
          Open to opportunities, collaborations, and meaningful conversations.
        </p>

        {/* Social Links */}
        <div className="flex gap-8 mt-4">
          {socials.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex flex-col items-center gap-2
                  transition-transform duration-200
                  hover:-translate-y-1
                "
              >
                <Icon
                  className={`
                    text-4xl sm:text-5xl
                    transition-colors duration-200
                    ${item.color} ${item.glow}
                  `}
                />
                <span className="text-xs sm:text-sm text-white/60">
                  {item.name}
                </span>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Contact;
