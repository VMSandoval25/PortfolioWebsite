import React, { useEffect, useState } from "react";
import Typed from "react-typed";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";

const Header: React.FC = () => {
  const [showH2, setShowH2] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowH2(true);
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      id="header"
      className="bg-slate-700 text-white h-screen flex items-center justify-center"
    >
      <div className="text-center">
        <h1 className="header-text text-6xl font-bold mb-4">
          <Typed
            strings={["Hello, world", "Hi, I am Victor Sandoval"]}
            backSpeed={60}
            typeSpeed={70}
            onComplete={() => setShowH2(true)}
          />
        </h1>
        {showH2 && (
          <h2 className="header-text text-3xl font-semibold mb-4">
            <Typed
              strings={["Recent Grad • Full Stack • Data Analysis"]}
              typeSpeed={100}
            />
          </h2>
        )}
          <div>
            <a
              href="https://github.com/VMSandoval25"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mr-4"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/victor-sandoval-a32162165/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mr-4"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="/Resume_Victor_Sandoval.pdf"
              target="_blank"
              className="inline-block mr-4"
            >
              <FaFilePdf size={30} />
            </a>
          </div>
      </div>
    </section>
  );
};

export default Header;



