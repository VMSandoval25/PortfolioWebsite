import React, { useEffect, useState } from "react";
import Image from "next/image";
import Typed from "react-typed";


const AboutSection: React.FC = () => {
  const [isVerticalLayout, setIsVerticalLayout] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsVerticalLayout(window.innerHeight > window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="about" className="bg-about-me h-max flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="section-text-1 text-5xl font-bold mb-4">
        <Typed
            strings={["About_"]}
            backSpeed={100}
          />
          </h2>
        <div className={isVerticalLayout ? "flex flex-col" : "flex flex-row"}>
          <div
            className={
              isVerticalLayout
                ? "flex justify-center mb-6 md:mb-0 py-10"
                : "w-1/2 flex justify-center mb-6 md:mb-0 py-10"
            }
          >
            <div
              className={
                isVerticalLayout
                  ? "w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden"
                  : "w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden"
              }
            >
              <Image
                src="/profile.jpeg"
                alt="Profile Image"
                className="object-cover w-full h-full"
                layout="responsive"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className={isVerticalLayout ? "mb-6" : "w-1/2"}>
            <div className="max-w-lg mx-auto">
              <p className="profile-text text-lg mb-4">
                Nice to meet you! I am a first-generation college graduate from
                the University of California, Riverside. My expertise lies in
                building full-stack applications for both mobile and web
                environments.
              </p>
              <p className="profile-text text-lg mb-4">
                I am also constantly improving my skills in data analysis and
                machine learning. I firmly believe that these data-driven
                technologies hold immense potential for revolutionizing
                industries and driving informed decision-making.
              </p>
              <p className="profile-text text-lg">
                I'm really excited about technology and eager to
                collaborate with awesome people and organizations who share my
                passion. Let's bring our creativity and drive together to make a
                real difference. I love pushing boundaries and solving
                challenges, so let's dive in and create a future that's even
                more amazing!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
