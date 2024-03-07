import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div id="logo">
        <img alt="logo" src="favicon.png"></img>
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
