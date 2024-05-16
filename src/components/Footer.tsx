import SocialMediaIcons from "@/components/SocialMediaIcons";

export default function Footer() {
  return (
    <div className="bg-customBackgroundDarker p-8 flex flex-col gap-4 text-center font-bold items-center md:grid md:grid-cols-2">
      <div className="flex flex-col gap-2 items-center w-full">
        <p>&copy; 2024 DreamBox. All rights reserved.</p>
        <p>(208) 541-9116</p>
        <div className="hidden md:block">
          <SocialMediaIcons />
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center w-full">
        <p>Working Hours</p>
        <p>Monday - Friday: 9am - 5pm</p>
        <p>Find us here!</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.1880951928215!2d-111.82225762272407!3d43.78970987109601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53540dbf7718ece7%3A0xfa0ff2ff9b30a667!2sDreamBox%20Rexburg!5e0!3m2!1sen!2sus!4v1715885086869!5m2!1sen!2sus"
          width="400"
          height="300"
          loading="lazy"
          className="w-full h-auto"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="md:hidden">
          <SocialMediaIcons />
        </div>
      </div>
    </div>
  );
}
