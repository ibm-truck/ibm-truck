"use client";
// pages/about.tsx
import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";
import { Dot } from "lucide-react";
import Image from "next/image";
import ceo from "@/assets/ceo.jpg";
import cfo from "@/assets/cfo.jpg";
import cmo from "@/assets/cmo.jpg";
import hos from "@/assets/hos.jpg";
import csa from "@/assets/csa.jpg";
import fgc from "@/assets/fgc.webp";
import stba from "@/assets/stba.jpg";
import "swiper/css";
import TruckGallery from "@/features/about/truck-gallery";

export default function About() {
  return (
    <main className="w-full overflow-x-hidden">
      <header className="bg-black text-white">
        <div className="container">
          <Navbar />
        </div>
      </header>
      <section className="py-10 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-primary font-bold mb-4 flex items-center">
            <Dot strokeWidth={10} />
            <p>About Us</p>
          </div>
          <p data-aos="fade-right" className="text-3xl sm:text-4xl font-bold sm:w-[80%]">
            The next-gen trucking company, focused on delivering exceptional
            service, quality goods, and happy customers.
          </p>
        </div>
      </section>
      <section className="bg-neutral-100">
        <div
          data-aos="fade-left"
          className="container pt-10 sm:pt-20 mx-auto px-4 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Introduction</h2>
          <p className="text-lg text-neutral-700 mb-8">
            IBM Trucks was founded in 2010 with a mission to revolutionize the
            trucking industry. Our founders, inspired by the need for reliable
            and efficient transportation solutions, embarked on a journey to
            create a company that prioritizes customer satisfaction and
            innovation.
          </p>
        </div>

        <TruckGallery />

        <div className="container pt-10 mx-auto px-4 text-center">
          <h2  data-aos="fade-down" className="text-3xl font-bold mb-4">Who We Are</h2>
          <p  data-aos="fade-down" className="text-lg mb-8 text-neutral-700">
            At IBM Trucks, we pride ourselves on being a forward-thinking,
            customer-centric company. Our team is dedicated to providing
            top-notch services and solutions to meet the diverse needs of our
            clients. We leverage the latest technology and best practices in the
            industry to ensure that we deliver beyond expectations.
          </p>
          <div className="grid grid-cols-2 grid-rows-3 lg:grid-rows-1  lg:grid-cols-5 text-white mt-10 gap-2 lg:gap-5">
            <div data-aos="flip-down" data-aos-delay="100" className="h-full p-5 bg-orange-600">
              <h2 className="font-semibold mb-2">Reliability</h2>
              Our commitment to reliability ensures that your goods are
              transported safely and on time, every time.
            </div>
            <div data-aos="flip-down" data-aos-delay="200" className="h-full p-5 bg-green-600">
              <h2 className="font-semibold mb-2">Innovation</h2>
              We continuously adopt innovative technologies to improve our
              services and operations.
            </div>
            <div data-aos="flip-down" data-aos-delay="300" className="h-full p-5 bg-yellow-500">
              <h2 className="font-semibold mb-2">Sustainability</h2>
              We are dedicated to sustainable practices that reduce our
              environmental impact.
            </div>
            <div data-aos="flip-down" data-aos-delay="400" className="h-full p-5 bg-blue-600">
              <h2 className="font-semibold mb-2">Customer Focus</h2>
              Our customers are at the heart of everything we do, and their
              satisfaction is our top priority.
            </div>
            <div data-aos="flip-down" data-aos-delay="500" className="h-full p-5 bg-pink-600">
              <h2 className="font-semibold mb-2">Integrity</h2>
              We uphold the highest standards of integrity in all our actions.
            </div>
          </div>
        </div>

        <div className="container pt-20 mx-auto px-4 text-center">
          <h2 data-aos="fade-up" className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
          <p data-aos="fade-up" className="text-lg mb-8 text-neutral-700">
            Our mission is to provide reliable, efficient, and innovative
            trucking solutions that exceed customer expectations. Our vision is
            to be the leading trucking company, recognized for our commitment to
            excellence and sustainability.
          </p>
          <div className="flex sm:flex-row flex-col text-black text-left mt-10 gap-5 max-w-[1000px] mx-auto">
            <div data-aos="fade-right" className="h-full p-5 bg-white rounded-lg">
              <h2 className="font-semibold mb-5">Vision Statement</h2>
              <p>
                To be the most trusted and innovative trucking company,
                delivering unparalleled service and sustainable solutions for
                our customers and communities.
              </p>
            </div>
            <div data-aos="fade-left" className="h-full p-5 bg-white rounded-lg">
              <h2 className="font-semibold mb-5">Mission Statement</h2>
              <p>
                To provide exceptional trucking services by leveraging
                technology, fostering innovation, and prioritizing customer
                satisfaction and environmental responsibility.
              </p>
            </div>
          </div>
        </div>

        <div className="container pt-20 mx-auto px-4 text-center">
          <h2 data-aos="flip-down" className="text-3xl font-bold mb-4">Our Values</h2>
          <p data-aos="flip-down" className="text-lg mb-8 text-neutral-700">
            Our values guide our actions and define our company culture. We
            believe in integrity, innovation, sustainability, and customer
            focus.
          </p>
          <div data-aos="fade-right" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-black mt-10 gap-5">
            <div className="h-full p-5 bg-white border">
              <h1 className="font-semibold text-xl mb-5">Integrity</h1>
              We uphold the highest standards of integrity in all our actions,
              ensuring honesty and fairness in everything we do.
            </div>
            <div className="h-full p-5 bg-white border">
              <h1 className="font-semibold text-xl mb-5">Innovation</h1>
              We embrace innovation to continuously improve our services and
              stay ahead in the industry.
            </div>
            <div className="h-full p-5 bg-white border">
              <h1 className="font-semibold text-xl mb-5">Sustainability</h1>
              We are committed to sustainable practices that protect the
              environment and support the well-being of our communities.
            </div>
            <div className="h-full p-5 bg-white border">
              <h1 className="font-semibold text-xl mb-5">Customer Focus</h1>
              Our customers are at the center of everything we do, and we strive
              to exceed their expectations with every service we provide.
            </div>
          </div>
        </div>

        <div className="container pt-20 mx-auto px-4 text-center">
          <h2 data-aos="zoom-in" className="text-3xl font-bold mb-4">Our Achievements</h2>
          <p data-aos="zoom-in" className="mb-10">
            Over the years, IBM Trucks has reached significant milestones and
            earned numerous accolades. Our achievements reflect our commitment
            to excellence, innovation, and customer satisfaction. From industry
            awards to community recognition, we are proud of the progress we
            have made and the impact we have created in the trucking industry.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="achievement p-4 bg-white rounded-lg shadow-lg"
              data-aos="fade-up"
            >
              <Image
                width={500}
                height={500}
                src={fgc}
                alt="Ceo"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Fastest growth</h3>
              <p className="text-gray-700">
                Recognized as the fastest-growing trucking company in 2015.
              </p>
            </div>
            <div
              className="achievement p-4 bg-white rounded-lg shadow-lg"
              data-aos="fade-up"
            >
              <Image
                width={500}
                height={500}
                src={csa}
                alt="Achievement 2"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Excellent performance</h3>
              <p className="text-gray-700">
                Awarded for excellence in customer service in 2018.
              </p>
            </div>
            <div
              className="achievement p-4 bg-white rounded-lg shadow-lg"
              data-aos="fade-up"
            >
              <Image
                width={500}
                height={500}
                src={stba}
                alt="Achievement 3"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Sustainablility goals</h3>
              <p className="text-gray-700">
                Leader in sustainability initiatives within the trucking
                industry in 2020.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto py-20 px-4 text-center">
          <h2 data-aos="flip-down" className="text-3xl font-bold mb-4">Our Team</h2>
          <p data-aos="flip-down" className="mb-10">
            Meet the dedicated professionals who drive our success. Our team is
            composed of experienced and passionate individuals committed to
            providing the highest level of service and innovation in the
            trucking industry. Together, we strive to exceed our customers&apos;
            expectations and achieve excellence in everything we do.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[800px] mx-auto">
            {[
              {
                image: ceo,
                title: "Chief Executive Officer",
                name: "John Barker",
              },
              {
                image: cfo,
                title: "Chief Financial Officer",
                name: "Emily Johnson",
              },
              {
                image: cmo,
                title: "Chief Marketing Officer",
                name: "Michael Brown",
              },
              { image: hos, title: "Head of Sales", name: "Jane Smith" },
            ].map((_, index) => (
              <div
                key={index}
                className="team-member p-4 bg-white rounded-lg shadow-lg"
                data-aos="fade-up"
              >
                <Image
                  width={500}
                  height={500}
                  src={_.image}
                  alt={`Team Member ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{_.name}</h3>
                <p className="text-gray-700">{_.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
