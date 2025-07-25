import { useRef, useState } from 'react';
import Lottie from 'lottie-react';
import emailjs from 'emailjs-com';
import animationData from '../assets/Robot-Bot 3D.json';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_gh9q2qi',       // your actual service ID
        'template_glil151',    // replace with your actual template ID from EmailJS
        formRef.current,         // assuming you're using React with a ref on the form
        'qJMvYML1-hcRlMJq8'      // your public key from EmailJS
      )

      .then(
        () => {
          setStatus('Message sent successfully!');
          formRef.current?.reset();
        },
        () => {
          setStatus('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <section id="contact" className="w-full min-h-screen px-4 py-16 text-primary">
      <h2 className="text-hero-name text-center mb-16">CONTACT</h2>

      <div className="flex flex-col md:flex-row justify-center items-start gap-10 max-w-7xl mx-auto">

        {/* Robot */}
        <div className="hidden md:flex justify-center w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
          <Lottie animationData={animationData} loop className="w-full h-auto" />
        </div>

        {/* Looking for Work - Contact Form */}
        <div className="w-full md:w-1/2 lg:w-[40%] xl:w-[35%]">
          <h3 className="text-section-title mb-6">Message Me!</h3>
          <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="border-b p-3 text-base text-primary focus:outline-none"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="border-b p-3 text-base text-primary focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="border-b p-3 text-base text-primary focus:outline-none"
              rows={6}
            />
            <button
              type="submit"
              className="mt-4 bg-primary text-white text-caption py-2 px-6 rounded-full hover:bg-muted_alt transition"
            >
              Let’s Connect
            </button>
            {status && <p className="text-sm mt-2">{status}</p>}
          </form>
        </div>

        {/* More Enquiries */}
        <div className="w-full md:w-1/2 lg:w-[25%] xl:w-[25%]">
          <h3 className="text-section-title mb-6">More Enquiries</h3>

          <div className="mb-6">
            <p className="text-base tracking-wide text-secondary_alt mb-2 uppercase">GENERAL CONTACT</p>

            <a
              href="mailto:vmsandoval00@gmail.com"
              className="block text-lg text-primary hover:underline transform transition-transform duration-200 hover:scale-105"
            >
              vmsandoval00@gmail.com
            </a>

            <a
              href="tel:+18187990531"
              className="block text-lg text-primary hover:underline transform transition-transform duration-200 hover:scale-105"
            >
              +1 818-799-0531
            </a>
          </div>


          <div>
            <p className="text-base text-secondary_alt mb-1">SOCIALS</p>

            <p className="text-lg">
              <a
                href="https://www.linkedin.com/in/victor-sandoval-vargas/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline transform transition-transform duration-200 hover:scale-105 inline-block"
              >
                LinkedIn
              </a>
            </p>

            <p className="text-lg">
              <a
                href="https://github.com/VMSandoval25"
                target="_blank"
                rel="noreferrer"
                className="hover:underline transform transition-transform duration-200 hover:scale-105 inline-block"
              >
                GitHub
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
