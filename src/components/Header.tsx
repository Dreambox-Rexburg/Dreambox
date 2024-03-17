import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div id="logo">
        <Link href="/">
          <Image alt="logo" src="/favicon.png" width={200} height={200} priority />
        </Link>
      </div>
      <ul id="navigationList">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
      </ul>
    </header>
  );
}
