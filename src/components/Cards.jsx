import React from 'react';
import style from './Cards.module.css';
import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  return (
    <div className={style.containCards}>
      {
        cities.map(city => <Card
            max={city.max}
            min={city.min}
            name={city.name}
            img={city.img}
            onClose={() => onClose(city.id)}
            id={city.id}
            key={city.id}
          /> )
        }
    </div>
  );
}
