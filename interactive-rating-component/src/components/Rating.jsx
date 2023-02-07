import React, { useState } from 'react'
import Card from './Card'

import star from '../imgs/icon-star.svg';

import './Rating.css'
const Rating = ({ rating, setRating, setShowThanks }) => {
    const [active, setActive] = useState({
        oneStar: false,
        twoStars: false,
        threeStars: false,
        fourStars: false,
        fiveStars: false,
    })

    const handleSubmit = () => {
        if (!rating) return;
        setShowThanks(true);
    };

    return (
        <Card>
            <div className="star">
                <img src={star} alt="star" />
            </div>
            <h1 className='title'>How did we do?</h1>
            <p className='text'>
                Please let us know how we did with your support request. All feedback is appreciated to help us improve
                our offering!
            </p>
            <div className="rating-container">
                <div
                    className={active.oneStar ? "rating active" : "rating"}
                    onClick={() => {
                        setActive({
                            oneStar: true,
                            twoStars: false,
                            threeStars: false,
                            fourStars: false,
                            fiveStars: false,
                        });
                        setRating(1);
                    }}
                >
                    1
                </div>
                <div
                    className={active.twoStars ? "rating active" : "rating"}
                    onClick={() => {
                        setActive({
                            oneStar: false,
                            twoStars: true,
                            threeStars: false,
                            fourStars: false,
                            fiveStars: false,
                        });
                        setRating(2);
                    }}
                >
                    2
                </div>
                <div
                    className={active.threeStars ? "rating active" : "rating"}
                    onClick={() => {
                        setActive({
                            oneStar: false,
                            twoStars: false,
                            threeStars: true,
                            fourStars: false,
                            fiveStars: false,
                        });
                        setRating(3);
                    }}
                >
                    3
                </div>
                <div
                    className={active.fourStars ? "rating active" : "rating"}
                    onClick={() => {
                        setActive({
                            oneStar: false,
                            twoStars: false,
                            threeStars: false,
                            fourStars: true,
                            fiveStars: false,
                        });
                        setRating(4);
                    }}
                >
                    4
                </div>
                <div
                    className={active.fiveStars ? "rating active" : "rating"}
                    onClick={() => {
                        setActive({
                            oneStar: false,
                            twoStars: false,
                            threeStars: false,
                            fourStars: false,
                            fiveStars: true,
                        });
                        setRating(5);
                    }}
                >
                    5
                </div>
            </div>
            <button
                className="submit"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </Card>
    )
}

export default Rating;