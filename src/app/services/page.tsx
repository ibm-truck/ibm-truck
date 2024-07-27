// pages/services.tsx
import Navbar from "@/components/navigation/navbar";
import Link from "next/link";
import { ArrowRightCircle, Dot } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/navigation/footer";

export default function Services() {
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
            <p>Our Services</p>
          </div>
          <p
            data-aos="fade-right"
            className="text-3xl sm:text-4xl font-bold sm:w-[80%]"
          >
            From truck and engine sales to rentals and driver training, we offer
            a wide range of services to meet your trucking needs.
          </p>
        </div>
      </section>
      <section className="bg-neutral-100 py-10">
        <div className="container px-4">
          <h2 data-aos="fade-up" className="text-2xl sm:text-3xl font-semibold text-center mb-5">
            IBM Services: Empowering Your Enterprenural Journey
          </h2>
          <p data-aos="fade-up" className="text-center text-neutral-700">
            At IBM Trucks, we offer a comprehensive range of services tailored
            to meet the diverse needs of our clients. Whether you are looking to
            purchase a truck, hire a driver, or learn how to drive, our
            dedicated team is here to assist you. Explore our services to find
            the perfect solution for your trucking needs.
          </p>

          <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            <div data-aos="fade-right" className="w-full h-full p-3 rounded-md bg-black">
              <h3 className="text-lg mb-3">Trucks for Sale</h3>
              <p className="text-sm">
                We sell quality trucks, including foreign used, UK used,
                and brand new trucks. Each truck is thoroughly inspected for
                faults before sale, and we offer a 3-month warranty for your
                peace of mind.
              </p>
              <Link href={"/trucks"} className="inline-block mt-5">
                <button className="flex  items-center gap-2 hover:bg-white hover:text-black py-1 px-2 duration-300 transition-all rounded-md">
                  <p>Proceed</p> <ArrowRightCircle size={20} />
                </button>
              </Link>
            </div>
            <div data-aos="fade-up" className="w-full h-full p-3 rounded-md bg-green-500 md:row-span-2">
              <h3 className="text-lg mb-3">Hire a Truck</h3>
              <p className="text-sm">
                Need a truck for a short-term project or a one-time job? Our
                rental service offers a variety of trucks to suit your needs.
                All our rental trucks are well-maintained and available at
                competitive rates. Whether you need a truck for moving goods,
                construction projects, or any other purpose, we have the right
                vehicle for you. Our flexible rental terms and responsive
                support ensure you have a hassle-free experience.
              </p>
              <Link href={"/hire-truck"} className="inline-block mt-5">
                <button className="flex  items-center gap-2 hover:bg-white hover:text-green-500 py-1 px-2 duration-300 transition-all rounded-md">
                  <p>Proceed</p> <ArrowRightCircle size={20} />
                </button>
              </Link>
            </div>
            <div data-aos="fade-left" className="w-full h-full p-3 rounded-md bg-pink-500">
              <h3 className="text-lg mb-3">Learn Truck Driving</h3>
              <p className="text-sm">
                Interested in joining the trucking industry? Our comprehensive
                truck driving courses are designed to equip you with the skills
                and knowledge needed to drive safely and efficiently. Our
                experienced instructors provide hands-on training and valuable
                insights.
              </p>
              <Link href={"/learn"} className="inline-block mt-5">
                <button className="flex  items-center gap-2 hover:bg-white hover:text-pink-500 py-1 px-2 duration-300 transition-all rounded-md">
                  <p>Proceed</p> <ArrowRightCircle size={20} />
                </button>
              </Link>
            </div>
            <div data-aos="fade-right" className="w-full h-full p-3 rounded-md bg-orange-500">
              <h3 className="text-lg mb-3">Truck Engines for Sale</h3>
              <p className="text-sm">
                We offer a range of high-quality truck engines, suitable for
                various makes and models. Each engine undergoes rigorous testing
                to ensure optimal performance. Whether you need an engine
                replacement or an upgrade, we have the right solution for you.
              </p>
              <Link href={"/parts"} className="inline-block mt-5">
                <button className="flex  items-center gap-2 hover:bg-white hover:text-orange-500 py-1 px-2 duration-300 transition-all rounded-md">
                  <p>Proceed</p> <ArrowRightCircle size={20} />
                </button>
              </Link>
            </div>
            <div data-aos="fade-left" className="w-full h-full p-3 rounded-md bg-teal-500">
              <h3 className="text-lg mb-3">Hire a Truck Driver</h3>
              <p className="text-sm">
                Finding a reliable truck driver has never been easier. Our pool
                of professional drivers is available for hire, whether you need
                them for a single trip or a long-term assignment. All our
                drivers are certified and have extensive experience in the
                trucking industry.
              </p>
              <Link href={"/hire-driver"} className="inline-block mt-5">
                <button className="flex  items-center gap-2 hover:bg-white hover:text-teal-500 py-1 px-2 duration-300 transition-all rounded-md">
                  <p>Proceed</p> <ArrowRightCircle size={20} />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="container pt-10" id="faqs">
          <h2 data-aos="zoom-out-down" className="text-3xl font-semibold text-center mb-5">FAQs</h2>
          <p data-aos="zoom-out-down" className="text-center text-neutral-700 mb-10">
            Find answers to some of the most common questions about our services
            and operations.
          </p>
          <Accordion data-aos="flip-left" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What types of trucks do you sell?
              </AccordionTrigger>
              <AccordionContent>
                We sell a variety of trucks including foreign used, UK
                used, and brand new trucks. Each truck is thoroughly inspected
                to ensure quality.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How can I hire a truck?</AccordionTrigger>
              <AccordionContent>
                You can hire a truck by visiting our &apos;Hire a Truck&apos; page,
                selecting the truck that fits your needs, and completing the
                rental form. We offer flexible rental terms and competitive
                rates.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What in the truck driving course?
              </AccordionTrigger>
              <AccordionContent>
                Our truck driving course includes hands-on training with
                experienced instructors, covering both practical driving skills
                and theoretical knowledge to ensure safe and efficient driving.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Do you offer a warranty on trucks?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we offer a 3-month warranty on all trucks sold to ensure
                your peace of mind. This covers any mechanical issues that may
                arise during the warranty period.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                How can I hire a truck driver?
              </AccordionTrigger>
              <AccordionContent>
                You can hire a professional truck driver by visiting our &apos;Hire a
                Truck Driver&apos; page and choosing from our pool of certified
                and experienced drivers.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <Footer />
    </main>
  );
}
