import React from 'react';
import PropTyeps from 'prop-types';

const GeocodeResult = ({address, lat, lng}) => (
    <ul className="geocode-result">
      <li>住所: {address}</li>
      <li>緯度: {lat}</li>
      <li>経度: {lng}</li>
    </ul>
);

GeocodeResult.PropTyeps = {
    address: PropTyeps.string,
    lat: PropTyeps.number,
    lng: PropTyeps.number,
};

GeocodeResult.defaultProps = {
    address: '',
    lat: 0,
    lng: 0,
};

export default GeocodeResult;

