import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div id="logo">
        <Link href="/">
          <Image alt="logo" src="/favicon.png" width={200} height={200} />
        </Link>
      </div>
      <ul id="navigationList">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
      </ul>
    </header>
  );
}
