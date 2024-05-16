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
    <div>
      <div
        className="bg-customPrimaryLight px-8 py-2
        grid grid-cols-2
        lg:grid-cols-none lg:flex lg:justify-between"
      >
        <Link href="/">
          <Image
            alt="logo"
            src="/favicon.png"
            width={100}
            height={100}
            priority
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
              <li className="py-1">
                <Link href={item.href}>{item.name}</Link>
              </li>
              <hr className="border-black/20" />
            </ul>
          ))}
        </ul>
      )}
    </div>
  );
}
