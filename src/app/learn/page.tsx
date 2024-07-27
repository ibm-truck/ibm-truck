import ContactCard from "@/components/contact-card";
import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";
import React from "react";

export default function Page() {
  return (
    <main>
      <header className="bg-black text-white py-4">
        <div className="container mx-auto">
          <Navbar />
        </div>
      </header>
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1
            data-aos="fade-up"
            className="text-2xl sm:text-3xl font-bold mb-4"
          >
            Learn How to Drive Trucks
          </h1>
          <p data-aos="fade-up" className="mb-6">
            Our comprehensive truck driving course is designed to equip you with
            all the necessary skills and knowledge to become a proficient truck
            driver. Whether you&apos;re aiming for a career in transportation or
            just looking to enhance your driving skills, our course offers
            everything you need to succeed.
          </p>
          <ContactCard />
          <h2 data-aos="fade-up" className="text-2xl font-bold mb-2">
            Minimum Requirements
          </h2>
          <ul data-aos="fade-up" className="list-disc list-inside mb-6">
            <li>Must be at least 21 years old</li>
            <li>Possess a valid driver&apos;s license</li>
            <li>Pass a medical examination</li>
            <li>Have a clean driving record</li>
            <li>Provide proof of identity and residency</li>
          </ul>

          <h2 data-aos="fade-up" className="text-2xl font-bold mb-2">
            Course Duration
          </h2>
          <p data-aos="fade-up" className="mb-6">
            The truck driving course spans a period of 12 weeks. During this
            time, you&apos;ll undergo extensive training that covers both
            theoretical and practical aspects of truck driving. The curriculum
            is structured as follows:
          </p>
          <ul data-aos="fade-up" className="list-disc list-inside mb-6">
            <li>
              <strong>Weeks 1-4:</strong> Classroom instruction on traffic laws,
              safety regulations, and basic mechanics
            </li>
            <li>
              <strong>Weeks 5-8:</strong> Hands-on driving practice in a
              controlled environment
            </li>
            <li>
              <strong>Weeks 9-12:</strong> Real-world driving experience under
              the supervision of experienced instructors
            </li>
          </ul>

          <h2 data-aos="fade-up" className="text-2xl font-bold mb-2">
            Course Fee
          </h2>
          <p data-aos="fade-up" className="mb-6">
            The total fee for the truck driving course is{" "}
            <strong>₦350,000</strong>. This includes all instructional
            materials, classroom sessions, and practical driving practice.
            Payment plans are available to accommodate your financial needs.
          </p>

          <h2 data-aos="fade-up" className="text-2xl font-bold mb-2">
            Why Choose Our Course?
          </h2>
          <p data-aos="fade-up" className="mb-6">
            Our truck driving course is designed to provide you with the best
            possible training experience. Here are a few reasons why you should
            choose us:
          </p>
          <ul data-aos="fade-up" className="list-disc list-inside mb-6">
            <li>Experienced and certified instructors</li>
            <li>State-of-the-art training facilities and equipment</li>
            <li>
              Comprehensive curriculum covering all aspects of truck driving
            </li>
            <li>Flexible payment plans</li>
            <li>Job placement assistance upon course completion</li>
          </ul>

          <h2 data-aos="fade-up" className="text-2xl font-bold mb-2">
            Enroll Today!
          </h2>
          <p data-aos="fade-up">
            Don&apos;t miss out on the opportunity to start a rewarding career
            as a professional truck driver. Enroll in our truck driving course
            today and take the first step towards a successful future on the
            road. For more information or to register, please contact us at{" "}
            <span className="text-blue-500">+1 (920) 815-8385</span>.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
