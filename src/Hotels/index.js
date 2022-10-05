import React from "react";
import Hotel from "./Hotel.js";
import { hotels } from "../data.js";

const renderHotel = (hotel) => <Hotel key={hotel.id} hotel={hotel} />;
// renders a single hotel, assigns a unique key prop to each Hotel component, passes
// the 'hotel' argument to each 'Hotel' component as a prop called 'hotel'.
// you need to assign a unique key prop for each element that the callback function returns. 

const HotelsList = (props) => {
  /* see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter to learn how the .filter array method works

  see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every to learn how the .every array method works
  */
  const filterCallback = (hotel) => {
    const everyCallback = (filter) => hotel[filter];
    return props.selectedFilters.every(everyCallback);
  }; // the filterCallback variable passes the hotel argument, by declaring a variable called EveryCallback which passes a filter argument 
  // and assigns a filter that calls a callback function once for each element in an array and 
  // constructs a new array of all the values for which tbe callback function returns. 
  const filteredHotels = hotels.filter(filterCallback);
  // a 

  const hotelListElements = filteredHotels.map(renderHotel);
  // maps over the array of hotels data, calling the 'render hotel' call back function to render a 'hotel' component for each item in the array.
  return <ul className="hotels-list">{hotelListElements}</ul>;
};

export default HotelsList;
