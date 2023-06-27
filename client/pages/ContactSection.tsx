import React, { useState, useEffect } from "react";
import Typed from "react-typed";

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

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
    <section id="contact" className="bg-contact bg-slate-700 h-max flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="section-text-2 text-5xl font-bold mb-4">
          <Typed strings={["Contact_"]} backSpeed={100} />
        </h2>

        <div className={isVerticalLayout ? "flex flex-col" : "flex flex-row"}>
          <div
            className={
              isVerticalLayout
                ? "contact-info flex flex-col justify-center mb-6 md:mb-0 py-10"
                : "contact-info w-1/2 flex flex-col justify-center mb-6 md:mb-0 py-10"
            }
          >
            <div className="w-fit bg-gray-300 rounded-lg border-4 border-green-800">

            <div className="p-10 text-xl">
            <div className="">
              <h3>Email: <a href={"mailto:" + "vmsandoval00@gmail.com"}>vmsandoval00@gmail.com</a></h3>
            </div>
            <div className="">
              <h3>Email: <a href={"mailto:" + "vsand012@ucr.edu"}>vsand012@ucr.edu</a></h3>
            </div>
            <div>
              <h4>Phone number: <span>818-799-0531</span></h4>
            </div>
            </div>

            </div>


          </div>

          <div className={isVerticalLayout ? "mb-6" : "w-1/2"}>
            <div className="contact-form">
              <h3>Send Me A Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name/Organization:</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                  ></textarea>
                </div>
                <button className="button-text" type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
