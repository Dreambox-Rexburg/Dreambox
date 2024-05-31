import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faInstagram, faDribbble, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './styles.css';  // Ensure this path is correct

const BCard = ({ name }: { name: string }) => {
    return (
        <div className="card">
            <div className="border">
                <h2>{name}</h2>
                <div className="icons">
                    <FontAwesomeIcon icon={faCodepen} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faDribbble} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faFacebook} />
                </div>
            </div>
        </div>
    );
}

export default BCard;