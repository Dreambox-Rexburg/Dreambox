import React from "react";

export interface ExperienceCardProps {
    title: string
    content: string
}

const Card = ({title, content}: ExperienceCardProps) => {
    return (
        <div className="w-full border border-black rounded-md pt-8 pb-4 md:pt-16 md:pb-8 pl-4">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-md md:text-lg">{content}</p>
        </div>
    );
};

export default Card;
