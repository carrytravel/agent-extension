import React, { Component, PropTypes } from "react";
import HotelSection from "../components/HotelSection";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const hotel_array = [
  {
    hotelId: "19226182",
    hotelName: "Best Western Plus Roland Inn & Suites",
    latLong: "29.40192,-98.44247",
    priceNight: "$81",
    priceTotal: "$94",
    hotelStarRating: "3.5",
    guestRating: "4.4",
    thumbnailUrl:
      "//images.trvl-media.com/hotels/1000000/50000/41300/41233/6a59be60_b.jpg",
    timeWalk: 12,
    timeCar: 3
  },
  {
    hotelId: "41233",
    hotelName: "Best Western Alamo Suites",
    latLong: "29.416095,-98.501917",
    priceNight: "$85",
    priceTotal: "$95",
    hotelStarRating: "4.5",
    guestRating: "4.7",
    thumbnailUrl:
      "//images.trvl-media.com/hotels/3000000/2240000/2239900/2239843/13264643_b.jpg",
    timeWalk: 12,
    timeCar: 3
  },
  {
    hotelId: "945",
    hotelName: "Residence Inn By Marriott San Antonio Airport/Alamo Heights",
    latLong: "29.515941,-98.458149",
    priceNight: "$169",
    priceTotal: "$200",
    hotelStarRating: "3.5",
    guestRating: "4.1",
    thumbnailUrl:
      "//images.trvl-media.com/hotels/1000000/10000/1000/945/59ee5785_b.jpg",
    timeWalk: 12,
    timeCar: 3
  }
];
export default function App() {
  return (
    <div>
      <HotelSection hotels={hotel_array} />
    </div>
  );
}
