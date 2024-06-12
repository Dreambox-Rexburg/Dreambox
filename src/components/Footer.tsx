import SocialMediaIcons from "@/components/SocialMediaIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-customBackgroundDarker">
      <div className="px-6 lg:px-2 py-8 flex flex-col gap-8 text-center md:text-left font-bold items-center md:items-start md:grid md:grid-cols-2 max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-3.5 items-center md:items-start md:text-left w-full">
          <p>&copy; {year} DreamBox. All rights reserved.</p>
          <p>(208) 541-9116</p>
          <div className="hidden md:block">
            <SocialMediaIcons />
          </div>
        </div>

        <div className="flex flex-col gap-3.5 items-center md:items-start md:text-left w-full">
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
    </div>
  );
}
