import React, { useState } from "react";

export default function SearchBar({onSearch}) {

  const [city, setCity] = useState("");

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      if(city !== '') {
        e.target[0].value = '';
        onSearch(city);
      } else {
        alert('Debes ingresar una ciudad')
      }
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
