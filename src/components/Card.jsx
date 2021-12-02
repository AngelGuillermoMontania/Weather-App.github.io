import React from 'react';
import style from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className={style.containCard}>
        <div className={style.containButton}>
            <button onClick={onClose}>X</button>
        </div>
        <div className={style.containTitle}>
          <Link to={`/ciudad/${id}`}>
            <h2>{name}</h2>
          </Link>
        </div>
        <div className={style.containTime}>
          <div>
            <h5>Min</h5>
            <h5>{`${min}°`}</h5>
          </div>
          <div>
            <h5>Max</h5>
            <h5>{`${max}°`}</h5>
          </div>
          <div>
            <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
          </div>
        </div>
      </div>
    );
};
