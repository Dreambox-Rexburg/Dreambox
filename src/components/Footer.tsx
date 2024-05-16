import SocialMediaIcons from "@/components/SocialMediaIcons";

export default function Footer() {
  return (
    <div className="grid grid-cols-2 text-left bg-customBackgroundDarker py-16 mt-8 font-bold p-4">
      <div className="pl-8 flex flex-col gap-6 justify-center">
        <p>&copy; 2024 DreamBox. All rights reserved.</p>
        <p>(208) 541-9116</p>
        <SocialMediaIcons />
      </div>

      <div className="pl-8 flex flex-col gap-6">
        <p>Working Hours:</p>
        <p>Monday - Friday: 9am - 5pm</p>
        <p>Find us here!</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.1880951928215!2d-111.82225762272407!3d43.78970987109601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53540dbf7718ece7%3A0xfa0ff2ff9b30a667!2sDreamBox%20Rexburg!5e0!3m2!1sen!2sus!4v1715835652712!5m2!1sen!2sus"
          width="100%"
          height="auto"
          className="border-none"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
