import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const SocialMediaIcons = () => {
  return (
    <div className="flex gap-4">
      <Link
        href="https://www.facebook.com/profile.php?id=100087282444247"
        target="_blank"
      >
        <FontAwesomeIcon icon={faFacebook} className="w-8 h-8" />
      </Link>
      <Link href="https://www.instagram.com/dreambox_rexburg/" target="_blank">
        <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
      </Link>
      <Link
        href="https://www.tiktok.com/@dreambox_rexburg?lang=en"
        target="_blank"
      >
        <FontAwesomeIcon icon={faTiktok} className="w-8 h-8" />
      </Link>
    </div>
  );
};

export default SocialMediaIcons;
