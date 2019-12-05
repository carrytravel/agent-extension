import React, { Component, PropTypes } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import { Icon } from "@blueprintjs/core";
import { IconName } from "@blueprintjs/icons";
var _ = require("lodash");

const HotelOption = styled.div`
  background-color: rgb(245, 245, 245);
`;

const CoverImage = styled.div`
  overflow: hidden;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 150px;
`;

export function StarRating(props) {
  const { stars } = props;
  let rating = [];
  _.times(Math.floor(parseFloat(stars)), i => {
    rating.push(
      <span key={i}>
        <Icon icon="star"></Icon>
      </span>
    );
  });
  return rating;
}
export function Hotel(props) {
  const { hotel } = props;
  return (
    <HotelOption className="m-2">
      <Row>
        <Col xs={4}>
          <CoverImage
            style={{
              backgroundImage: `url(http:${hotel.thumbnailUrl}`
            }}
          />
        </Col>
        <Col xs={8}>
          <Row className="mt-2">
            <Col xs={12}>{hotel.hotelName}</Col>
          </Row>
          <Row>
            <Col xs={6}>
              <StarRating stars={hotel.hotelStarRating} />
            </Col>
            <Col xs={6}>{hotel.priceNight}/night</Col>
          </Row>
        </Col>
      </Row>
    </HotelOption>
  );
}

export default function HotelSection(props) {
  const { hotels } = props;
  return (
    <Container>
      {hotels.map(hotel => (
        <Hotel key={hotel.hotelId} hotel={hotel} />
      ))}
    </Container>
  );
}
