"use client";

import Link from "next/link";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  const navData = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Book", href: "/book" },
  ];

  return (
    <div className="bg-customPrimaryLight">
      <div className="px-6 lg:px-2 py-8 max-w-screen-lg mx-auto grid grid-cols-2 lg:grid-cols-none lg:flex lg:justify-between">
        <Link href="/">
          <Image
            alt="logo"
            src="/favicon.png"
            width={249}
            height={209}
            priority
            className="w-20"
          />
        </Link>

        <Bars3Icon
          className="size-6 justify-self-end self-center cursor-pointer lg:hidden"
          onClick={() => setShowNav(!showNav)}
        />

        <ul className="hidden lg:flex gap-4 items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
        </ul>
      </div>

      {/*  Mobile Menu Items  */}
      {showNav && (
        <ul className="bg-customBackgroundDefault">
          {navData.map((item, index) => (
            <ul key={index} className="text-center">
              <li className="flex text-center items-center justify-center">
                <Link
                  href={item.href}
                  className="w-full py-2 hover:bg-customBackgroundDarker"
                >
                  {item.name}
                </Link>
              </li>
              <hr className="border-black/20" />
            </ul>
          ))}
        </ul>
      )}
    </div>
  );
}
