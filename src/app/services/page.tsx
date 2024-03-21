import React from "react";
import Service from "@/components/Service";

export interface ServiceProps {
  img: string;
  title: string;
  whatWeOffer: string[];
  AddOns: string[];
  price: number;
  slug: string;
}

const services: ServiceProps[] = [
  {
    img: "/services/birthday.jpeg",
    title: "Birthday Event",
    whatWeOffer: [
      "15 people (including moms, parents, your own photographer etc)",
      "20+ backdrops & rooms",
      "2 hours (including your setup)",
      "Chairs + tables",
      "Plates, cups and table cloths",
      "Color palette of your choice (Blue, Green, Yellow, Orange, Pink, Purple, White, Black, Red)",
      "Exclusive use of DreamBox",
    ],
    AddOns: [
      "Additional persons after 12, $10 per person",
      "20+ backdrops & rooms",
      "Cake smash $50",
      "Confetti $10",
      "Photographer extra $50 (8 edited photos)",
      "A Dozen Helium Balloons $40",
      "Games (musical chairs, pin tail on donkey, Hulu hoop, eye spy Photo Booth) $10",
    ],
    price: 100,
    slug: "birthday-event",
  },
  {
    img: "/services/wedding.jpeg",
    title: "Wedding Event",
    whatWeOffer: [
      "50 people (including bride, groom, photographers etc)",
      "30+ backdrops & rooms",
      "5 hours (including your setup)",
      "Chairs + tables",
      "Plates, cups and table cloths",
      "Color palette of your choice (Blue, Green, Yellow, Orange, Pink, Purple, White, Black, Red)",
      "Exclusive use of DreamBox",
    ],
    AddOns: [
      "Additional persons after 50, $20 per person",
      "30+ backdrops & rooms",
      "Cake smash $100",
      "Confetti $20",
      "Photographer extra $100 (15 edited photos)",
      "A Dozen Helium Balloons $80",
      "Games (musical chairs, pin tail on donkey, Hulu hoop, eye spy Photo Booth) $20",
    ],
    price: 200,
    slug: "wedding-event",
  },
  {
    img: "/services/corporate.jpeg",
    title: "Corporate Event",
    whatWeOffer: [
      "100 people (including employees, managers, photographers etc)",
      "40+ backdrops & rooms",
      "8 hours (including your setup)",
      "Chairs + tables",
      "Plates, cups and table cloths",
      "Color palette of your choice (Blue, Green, Yellow, Orange, Pink, Purple, White, Black, Red)",
      "Exclusive use of DreamBox",
    ],
    AddOns: [
      "Additional persons after 100, $30 per person",
      "40+ backdrops & rooms",
      "Cake smash $150",
      "Confetti $30",
      "Photographer extra $150 (20 edited photos)",
      "A Dozen Helium Balloons $120",
      "Games (musical chairs, pin tail on donkey, Hulu hoop, eye spy Photo Booth) $30",
    ],
    price: 300,
    slug: "corporate-event",
  },
  {
    img: "/services/anniversary.jpeg",
    title: "Anniversary Event",
    whatWeOffer: [
      "25 people (including couple, photographers etc)",
      "25+ backdrops & rooms",
      "3 hours (including your setup)",
      "Chairs + tables",
      "Plates, cups and table cloths",
      "Color palette of your choice (Blue, Green, Yellow, Orange, Pink, Purple, White, Black, Red)",
      "Exclusive use of DreamBox",
    ],
    AddOns: [
      "Additional persons after 25, $15 per person",
      "25+ backdrops & rooms",
      "Cake smash $75",
      "Confetti $15",
      "Photographer extra $75 (10 edited photos)",
      "A Dozen Helium Balloons $60",
      "Games (musical chairs, pin tail on donkey, Hulu hoop, eye spy Photo Booth) $15",
    ],
    price: 150,
    slug: "anniversary-event",
  },
];

const Page = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-semibold pt-2">Services</h1>
      <Service services={services} />
    </div>
  );
};

export default Page;
