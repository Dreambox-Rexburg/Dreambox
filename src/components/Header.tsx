import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-customPrimaryLight flex justify-between px-8 py-2">
      <Link href="/">
        <Image
          alt="logo"
          src="/favicon.png"
          width={100}
          height={100}
          priority
        />
      </Link>
      <ul className="flex gap-4 items-center">
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
    </header>
  );
}
