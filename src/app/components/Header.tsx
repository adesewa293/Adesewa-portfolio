"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="border-2 rounded-lg p-6 flex justify-between">
      <Link href="/" className="mt-4 text-2xl font-mono text-amber-700">
        AdesewaTheDev🌷
      </Link>
      <button
        type="button"
        onClick={toggleMobileMenu}
        className="md:hidden inline-flex items-center mt-2 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-expanded={isMobileMenuOpen}
      >
        <span className="sr-only">Open main menu</span>
        {isMobileMenuOpen ? (
          <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 10.586l3.293-3.293 1.414 1.414L13.414 12l3.293 3.293-1.414 1.414L12 13.414l-3.293 3.293-1.414-1.414L10.586 12 7.293 8.707l1.414-1.414L12 10.586z"
            fill="currentColor"
          />
        </svg>
        
        ) : (
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        )}
      </button>
      <div className="hidden md:block mt-4 text-white">
        <Link
          className="mr-4 hover:underline hover:decoration-dotted underline-offset-8"
          href="/"
        >
          Home
        </Link>
        <Link
          className="mr-4 hover:underline hover:decoration-dotted underline-offset-8"
          href="#about"
        >
          About
        </Link>
        <Link
          className="mr-4 hover:underline hover:decoration-dotted underline-offset-8"
          href="#contact"
        >
          Contact
        </Link>
        <Link
          className="mr-4 hover:underline hover:decoration-dotted underline-offset-8"
          href="#projects"
        >
          Projects
        </Link>
        <Link
          target="_blank"
          href="/assets/resume.pdf"
          className="border-amber-700 border-2 rounded-lg p-3"
        >
          RESUME
        </Link>
      </div>
      <div
        className={`flex flex-col md:hidden fixed top-0 left-0 bg-black w-2/3 h-screen z-10 text-amber-200 text-2xl font-serif ${
          isMobileMenuOpen ? "flex" : "hidden"
        }`}
      >
        <div className="self-end" onClick={toggleMobileMenu}>
          <img width="20px" src="/close-icon.png" />
        </div>
        <div className="flex flex-col items-center">
          <Link
            className="mr-4 hover:underline hover:decoration-dotted underline-offset-8 mt-16 mb-8"
            href="/"
          >
            Home
          </Link>
          <Link
            className="mr-4 hover:underline hover:decoration-dotted underline-offset-8 mb-8"
            onClick={handleMobileLinkClick}
            href="#about"
          >
            About
          </Link>
          <Link
            className="mr-4 hover:underline hover:decoration-dotted underline-offset-8 mb-8"
            onClick={handleMobileLinkClick}
            href="#contact"
          >
            Contact
          </Link>
          <Link
            className="mr-4 hover:underline hover:decoration-dotted underline-offset-8 mb-8"
            onClick={handleMobileLinkClick}
            href="#projects"
          >
            Projects
          </Link>
          <Link
            target="_blank"
            href="/assets/resume.pdf"
            onClick={handleMobileLinkClick}
            className="border-amber-700 border-2 rounded-lg p-3 mb-8"
          >
            RESUME
          </Link>
        </div>
      </div>
    </div>
  );
}
