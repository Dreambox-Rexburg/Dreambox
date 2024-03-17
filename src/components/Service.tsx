import React from "react";
import BookNow from "@/components/BookNow";

const services: ServiceProps[] = [{
    img: "https://placehold.co/600x400",
    title: "Birthday Event",
    whatWeOffer: ["15 people (including moms, parents, your own photographer etc)",
        "20+ backdrops & rooms",
        "2 hours (including your setup)",
        "Chairs + tables",
        "Plates, cups and table cloths",
        "Color palette of your choice (Blue, Green, Yellow, Orange, Pink, Purple, White, Black, Red)",
        "Exclusive use of DreamBox"],
    AddOns: ["Additional persons after 12, $10 per person",
        "20+ backdrops & rooms",
        "Cake smash $50",
        "Confetti $10",
        "Photographer extra $50 (8 edited photos)",
        "A Dozen Hellium Balloons $40",
        "Games (musical chairs, pin tail on donkey, Hulu hoop, eye spy Photo Booth) $10"],
    price: 100,
    slug: "birthday-event",
}];

interface ServiceProps {
    img: string,
    title: string
    whatWeOffer: string[]
    AddOns: string[]
    price: number
    slug: string
}

const Service = () => {
    return (
        <div className="p-4 sm:p-16">
            {services.map((service, index) => (
                <div key={index} className="grid grid-rows-1 sm:grid-rows-none sm:grid-cols-2">
                    <img src={service.img} alt={service.title} className="rounded-xl m-auto"/>
                    <div className="flex flex-col text-center px-4 pt-2 sm:px-8 sm:pt-4 justify-between">
                        <div>
                            <h1>{service.title}</h1>
                            {service.whatWeOffer.map((listItem, index) => (
                                <ul key={index} className="list-disc text-left pl-4">
                                    <li>{listItem}</li>
                                </ul>
                            ))}
                        </div>
                        <div className="flex flex-col justify-end">
                            <h1 className="text-2xl font-bold text-right">$100</h1>
                            <div className="flex justify-end">
                                <BookNow slug={service.slug} small/>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Service;
