import React from "react";

export interface ExperienceCardProps {
  title: string;
  content?: string;
  square?: boolean;
}

const Card = ({ title, content, square }: ExperienceCardProps) => {
  return (
    <div
      className={`w-full border border-black rounded-md pt-8 pb-4 md:pt-16 md:pb-8 pl-4 ${square && "aspect-square md:max-w-72 max-w-64"}`}
    >
      <h2 className={`text-xl md:text-2xl font-semibold ${content && "mb-2"}`}>
        {title}
      </h2>
      {content && <p className="text-md md:text-lg">{content}</p>}
    </div>
  );
};

export default Card;
