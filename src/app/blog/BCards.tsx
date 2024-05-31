import React from 'react';
import Card from './BCard';
import './styles.css';  // Ensure this path is correct

const BCards = () => {
    const cardData = [
        { name: 'Al Pacino' },
        { name: 'Ben Stiller' },
        { name: 'Patrick Stewart' }
    ];

    return (
        <div className="container">
            {cardData.map((card, index) => (
                <Card key={index} name={card.name} />
            ))}
        </div>
    );
}

export default BCards;
