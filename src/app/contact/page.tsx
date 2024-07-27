// pages/contact.tsx
import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";
import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="w-full">
      <header className="bg-black text-white">
        <div className="container">
          <Navbar />
        </div>
      </header>

      <section className="py-10 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-primary font-bold mb-4 flex items-center">
            <Dot strokeWidth={10} />
            <p>Contact Us</p>
          </div>
          <p
            data-aos="fade-right"
            className="text-3xl sm:text-4xl font-bold sm:w-[80%]"
          >
            We&apos;re here to help! Reach out to us with any questions or
            inquiries.
          </p>
        </div>
      </section>
      <section className="bg-neutral-100 py-10">
        <div className="container mx-auto px-4">
          <p data-aos="fade-left" className="mb-3">
            Before contacting us, check our{" "}
            <Link href={"/services#faqs"} className="underline">
              FAQs
            </Link>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              data-aos="fade-up"
              className="contact-form p-4 bg-white rounded-lg shadow-lg"
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-1">
                Get in Touch
              </h2>
              <p className="mb-4 text-neutral-700">
                Provide your correct information details and leave a message, we
                will be sure to get back to you within 48hrs via Email
              </p>
              <form className="space-y-4">
                <div>
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    required
                  />
                </div>
                <button
                  className="w-full bg-black text-white font-bold py-2 rounded-lg"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div
              data-aos="fade-down"
              className="contact-details p-4 bg-white rounded-lg shadow-lg"
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                Contact Details
              </h2>
              <p className="text-lg mb-2">IBM Trucks Headquarters</p>
              <p className="text-gray-700 mb-2">Florida, USA</p>
              <p className="mb-2 text-gray-700">infoibmtrucks@gmail.com</p>
              <p className="mb-4 text-gray-700">+1 (920) 815-8385</p>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7248272.862893797!2d-89.09775503528651!3d27.49428754088126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d35bc74ed0!2sFlorida%2C%20USA!5e0!3m2!1sen!2sng!4v1721412943623!5m2!1sen!2sng"
                  height="400"
                  className="border-0 w-full"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
