"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function page() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex-1">
          <div className="text-6xl text-amber-700 font-serif mt-14 ml-3" data-aos="fade-up">
            HI, I AM ADESEWA, A BUDDING WEB DEVELOPER
          </div>
          <div className="ml-3 mt-14 font-mono text-sm">
            "I am passionate about building beautiful projects and making a
            difference"
          </div>
        </div>
<div className="flex-1" data-aos="fade-left">
        <Image
          className="mt-4 border-4 border-amber-400 rounded-full"
          src="/webdevtoon.jpeg"
          alt="my cartoon web developer"
          width={600}
          height={0}
        />
        </div>
      </div>
      <div className="font-mono">
        <div className="border-2 border-amber-400 rounded-lg w-2/3 m-auto p-3 mt-14">
          <div data-aos="fade-up" className="p-5 text-3xl">
            About Me
          </div>
          <p data-aos="fade-up">
            Hello, I'm Adesewa, a passionate and innovative web developer
            dedicated to crafting exceptional digital experiences. With a
            profound love for coding and a keen eye for design, I create
            websites and web applications that not only meet but exceed the
            expectations of clients and users.
          </p>
        </div>
        <div data-aos="fade-down" className="border-2 border-amber-600 rounded-lg w-2/3 m-auto p-3 mt-4">
          <div className="text-3xl p-5">My Journey</div>
          <p data-aos="fade-down">
            My journey in the world of web development began a year ago, and it
            has been an exciting ride ever since. I started with a strong
            foundation in HTML, CSS, and JavaScript and continually expanded my
            skills in response to the ever-evolving landscape of web
            technologies. I thrive on the challenges and problem-solving that
            web development presents, and I am always eager to embrace new tools
            and techniques.
          </p>
        </div>
        <div className="border-2 rounded-lg border-amber-700 w-2/3 m-auto p-3 mt-4">
          <div data-aos="fade-left" className="p-5 text-3xl">
            What I Do
          </div>
          <p data-aos="fade-left">
            I specialize in building clean, responsive, and user-friendly
            websites. Whether it's a personal blog, a corporate platform, or an
            e-commerce site, I'm committed to delivering solutions that not only
            look great but also function flawlessly. My skills extend to: -
            Front-end development with HTML, CSS, JavaScript, and modern
            frameworks like React and Vue.js. - Back-end development using
            languages such as Node.js and Python, along with database
            management. - Integrating third-party APIs and services to enhance
            website functionality. - Optimizing websites for performance, speed,
            and SEO.
          </p>
        </div>
        <div className="border-2 rounded-lg w-2/3 border-amber-800 m-auto p-3 mt-4">
          <div data-aos="fade-right" className="text-3xl p-5">
            Why Choose Me
          </div>
          <p data-aos="fade-right">
            I take pride in my ability to transform ideas into interactive,
            visually appealing, and high-performing websites. I believe in
            strong communication and collaboration with my clients, ensuring
            that I understand their unique needs and goals. I'm also dedicated
            to continuous learning, staying up-to-date with the latest trends
            and best practices in the field.{" "}
          </p>
        </div>
        <div className="border-2 rounded-lg w-2/3 border-amber-900 m-auto p-3 mt-4">
          <div data-aos="fade-left" className="text-3xl p-5">
            Let's Collaborate
          </div>
          <p data-aos="fade-left">
            If you're looking for a web developer who can turn your vision into
            reality, I'm here to help. Whether you have a specific project in
            mind or you need guidance on how to enhance your online presence,
            I'm ready to discuss your goals and explore how we can work
            together. Feel free to [contact me](mailto:youremail@example.com) to
            start a conversation. I look forward to working with you to create
            exceptional web solutions that make a lasting impact.
          </p>
        </div>
      </div>
      <div>My works</div>
      <div>
        <div>
        <div>Fromscratch-recipes</div>
        <div>
          "From-Scratch Recipes", a web platform crafted with HTML, CSS, and
          JavaScript. Where food enthusiasts come together to share, discover,
          and savor delectable dishes created entirely from scratch.
          "From-Scratch Recipes" celebrates the art of cooking from the heart,
          and with its HTML, CSS, and JavaScript foundation, it ensures a
          seamless and enjoyable browsing experience for all users. Join us in
          embracing the pleasures of wholesome, homemade cuisine. Visit
          "From-Scratch Recipes" today and embark on a culinary adventure like
          no other.
        </div>
        <div className="">
          <button className="border-2 rounded-lg p-4 mr-3">View Demo</button>
          <button className="border-2 rounded-lg p-4">Source Code</button>
        </div>
        <Image
          src="/mockup2-recipe.png"
          alt="my cartoon web developer"
          width={1400}
          height={2500}
        />
        <Image
          className=""
          src="/mockup-recipe.png"
          alt="my cartoon web developer"
          width={1400}
          height={2500}
        />
        </div>
        <div>
          <div>Can of books</div>
          <div>
            "Can of Books," where the world of literature comes alive. Our book
            sharing platform, built with the dynamic duo of React and Express,
            is the digital gathering place for bookworms worldwide. we offer a
            📖 Diverse Library where you can dive into an extensive collection
            of books spanning genres from suspenseful thrillers to heartwarming
            classics. At "Can of Books," we're more than a website; we're a
            gathering place for those who believe in the transformative power of
            words. Our user-friendly design, empowered by React and Express,
            ensures a seamless and enjoyable experience for all users, whether
            you're a seasoned book aficionado or new to the world of reading.
            Join us in celebrating the magic of books, and become a part of the
            global conversation about literature. Tech Stack: React, Express.
          </div>
          <div className="">
            <button className="border-2 rounded-lg p-4 mr-3">View Demo</button>
            <button className="border-2 rounded-lg p-4">Source Code</button>
          </div>
        </div>
        <div>
          <div>resident choice</div>
          <div>
            "Resident Choice" is a digital haven dedicated to enhancing the
            well-being and quality of life for residents in care homes.
            Meticulously crafted with React and Express, this platform places
            the power of choice in the hands of those we care for. Keep
            residents informed and engaged with a calendar of events and
            activities, tailored to their interests and schedules. Tech Stack:
            React, Express.
          </div>
          <div className="">
            <button className="border-2 rounded-lg p-4 mr-3">View Demo</button>
            <button className="border-2 rounded-lg p-4">Source Code</button>
          </div>
        </div>
        <div>
          <div>explore enroute</div>
          <div>
            Explore Enroute" is your passport to a world of adventure and
            exploration. This captivating travel blog, expertly designed with
            Next.js, is your gateway to discovering the wonders of our planet.
            Find valuable insights and practical tips for your journeys, curated
            by seasoned travelers. "Explore Enroute" is more than just a blog;
            it's a virtual odyssey that brings the world to your screen. Built
            with Next.js, this platform offers a responsive and immersive
            experience for all readers. Whether you're a seasoned traveler or an
            armchair explorer, "Explore Enroute" invites you to join us on this
            journey of wanderlust and exploration. Tech Stack: Next.js.
          </div>
          <div className="">
            <button className="border-2 rounded-lg p-4 mr-3">View Demo</button>
            <button className="border-2 rounded-lg p-4">Source Code</button>
          </div>
        </div>
        <div>
          <div>Calculator</div>
          <div>
            "React Calculator" is your go-to digital calculator app, designed to
            simplify and streamline your mathematical tasks. Built entirely with
            React, it offers a responsive and user-friendly tool for your daily
            calculations.
          </div>
          <div className="">
            <button className="border-2 rounded-lg p-4 mr-3">View Demo</button>
            <button className="border-2 rounded-lg p-4">Source Code</button>
          </div>
        </div>
        <div>
          <div>GET IN TOUCH</div>
          <form>
            <input></input>
          </form>
        </div>
      </div>
    </div>
  );
}
