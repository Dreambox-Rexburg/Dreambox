import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div id="logo">
        <Link href="/">
          <Image
            alt="logo"
            src="/favicon.png"
            width={200}
            height={200}
            priority
          />
        </Link>
      </div>
      <ul id="navigationList">
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
