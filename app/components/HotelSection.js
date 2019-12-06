import React, { Component, PropTypes } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import { Icon, H1, H2, H3, H4, H5, H6 } from "@blueprintjs/core";
import { IconName } from "@blueprintjs/icons";
var _ = require("lodash");

const HotelOption = styled(Row)`
  background-color: rgb(245, 245, 245);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const CoverImage = styled(Col)`
  overflow: hidden;
  background-size: cover;
  background-position: center;
  height: auto;
`;

const PriceText = styled.span`
  margin-bottom: 0;
  line-height: 1;
  font-size: 3em;
`;

const NameText = styled.span`
  margin-bottom: 0;
  line-height: 1;
  font-size: 1.5em;
`;

const Hotels = styled(Container)`
  background-image: linear-gradient(20deg, rgb(0, 21, 50), rgb(62, 127, 165));
`;

export function StarRating(props) {
  const { stars } = props;
  let rating = [];
  _.times(Math.floor(parseFloat(stars)), i => {
    rating.push(
      <span key={i}>
        <Icon color="#999999" icon="star"></Icon>
      </span>
    );
  });
  return rating;
}

export function CancellationText(props) {
  const { free } = props;
  if (free)
    return (
      <span style={{ color: "rgb(62, 127, 165)" }}>Free cancellation</span>
    );
  else return <span className="text-muted">Non-refundable</span>;
}

export function Hotel(props) {
  const { hotel } = props;
  return (
    <HotelOption className="my-3 pr-2">
      <CoverImage
        xs={4}
        style={{
          backgroundImage: `url(http:${hotel.thumbnailUrl}`
        }}
      />
      <Col xs={8} className="py-3">
        <Row>
          <Col xs={12}>
            <div className="text-truncate">
              <NameText>{hotel.hotelName}</NameText>
            </div>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col xs={7}>
            <Row>
              <Col xs={5}>
                <StarRating stars={hotel.hotelStarRating} />
              </Col>
              <Col xs={7}>
                <Icon color="#999999" icon="heart"></Icon>
                <span className="text-muted">
                  &nbsp;&nbsp;{hotel.guestRating}/5
                </span>
              </Col>
            </Row>
            <Row className="mt-1">
              <Col>
                <Icon color="rgb(62, 127, 165)" icon="walk"></Icon>
                <i style={{ color: "rgb(62, 127, 165)" }}>
                  &nbsp;5 min walk from destination
                </i>
              </Col>
            </Row>
          </Col>
          <Col
            className="d-flex align-self-end align-items-end justify-content-end"
            xs={5}
          >
            <PriceText>{hotel.priceNight}</PriceText>
            <span className="text-muted">&nbsp;/night</span>
          </Col>
        </Row>
        <hr className="mt-2 mb-0" />
        <Row className="mt-2">
          <Col xs={5}>
            <CancellationText free={hotel.freeCancellation} />
          </Col>
          <Col xs={7} className="text-right">
            {hotel.priceTotal} total incl. fees &amp; taxes
          </Col>
        </Row>
      </Col>
    </HotelOption>
  );
}

export default function HotelSection(props) {
  const { hotels } = props;
  return (
    <Hotels className="py-2 px-5">
      {hotels.map(hotel => (
        <Hotel key={hotel.hotelId} hotel={hotel} />
      ))}
    </Hotels>
  );
}
