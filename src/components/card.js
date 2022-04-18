import { useState } from 'react';
import CardDetail from './detailCard';

const Card = () => {
    const [items, setItem] = useState([
        { id: 1, image: '/image/heart.jpg', status: "" },
        { id: 1, image: '/image/heart.jpg', status: "" },
        { id: 2, image: '/image/magician.jpg', status: "" },
        { id: 2, image: '/image/magician.jpg', status: "" },
        { id: 3, image: '/image/raigeki.jpg', status: "" },
        { id: 3, image: '/image/raigeki.jpg', status: "" },
        { id: 4, image: '/image/skyDragon.jpg', status: "" },
        { id: 4, image: '/image/skyDragon.jpg', status: "" },
        { id: 5, image: '/image/whiteDragon.jpg', status: "" },
        { id: 5, image: '/image/whiteDragon.jpg', status: "" },
        { id: 6, image: '/image/wingedDragon.jpg', status: "" },
        { id: 6, image: '/image/wingedDragon.jpg', status: "" }
    ].sort(() => Math.random() - 0.5));

    const [before, setBefore] = useState(-1);

    const check = (current) => {
        if (items[current].id === items[before].id) {
            items[current].status = "correct";
            items[before].status = "correct";
            setItem([...items]);
            setBefore(-1);

        } else {
            items[current].status = "wrong";
            items[before].status = "wrong";
            setItem([...items]);
            setTimeout(() => {
                items[current].status = "";
                items[before].status = "";
                setItem([...items]);
                setBefore(-1);
            }, 1000);
        }
    }

    const handleClick = (id) => {
        if (before === -1) {
            items[id].status = "active"
            setItem([...items])
            setBefore(id)
        } else {
            check(id)
        }
    }

    return (
        <div className="container">
            {items.map((item, index) => (
                <CardDetail key={index} item={item} id={index} handleClick={handleClick} />
            ))}
        </div>
    );
}

export default Card;