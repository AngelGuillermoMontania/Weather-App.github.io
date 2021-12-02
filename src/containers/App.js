import React, { useState } from 'react';

import './normalize.css';
import './general.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import { Route, Switch } from 'react-router-dom';
import About from '../components/About';
import Ciudad from '../components/Ciudad';


export default function App() {
  const [cities, setCities] = useState([]);
  const apiKey = '4f3c88ba651a35b3eda9f05221decec6';

  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        if(data !== undefined){
          const ciudad = {
            min: Math.round(data.main.temp_min),
            max: Math.round(data.main.temp_max),
            img: data.weather[0].icon,
            id: data.id,
            wind: data.wind.speed,
            temp: data.main.temp,
            name: data.name,
            weather: data.weather[0].main,
            clouds: data.clouds.all,
            latitud: data.coord.lat,
            longitud: data.coord.lon
          };
          for (let i = 0; i < cities.length; i++) {
            if(cities[i].id === ciudad.id) {
              return(alert('Ciudad repetida'))
            }
          }
          setCities(oldCities => [...oldCities, ciudad])
        } else {
          alert("Ciudad no encontrada");
        }
      });
    }
    

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }


  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        alert('Esta ciudad no se encuentra en la lista')
    }
  }

  
  return (
    <div className="App">

                                      {/* FORMA CORRECTA */}
      <Nav onSearch={onSearch} />
        <Switch>

                      {/*  FORMA ACTUAL Y PARA PASAR PROPS SE USA HOOK EN EL COMPONENTE RENDERIZADO(useDirectory, useLocation) */}
          <Route path='/About'>
            <About />
          </Route>

                       {/* FORMA QUE YA NO SE USA TANTO PARA PASAR PROPS MEDIANTE RENDER Y SU FUNCION FLECHA */}
          <Route path='/ciudad/:ciudadId' render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)} />}/>
          <Route exact path='/'>
            <Cards cities={cities} onClose={onClose}/>
          </Route>
        </Switch>



                    {/* FORMA EN QUE LO HICE EN PRIMER LUGAR Y NO LA MAS RECOMENDABLE */}

      {/* <Route path='/' render={() => <Nav onSearch={onSearch}/>}/>
      <Route exact path='/' render={() => <Cards cities={cities} onClose={onClose}/>}/>
      <Route path='/About' component={About} />
      <Route path='/ciudad/:ciudadId' render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)} />}/> */}


    </div>
  );
}
