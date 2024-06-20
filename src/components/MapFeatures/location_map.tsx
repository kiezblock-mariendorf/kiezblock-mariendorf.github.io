import React from "react";
import { Map, Marker } from "pigeon-maps";

interface LocationMapProps {
  marker: [number, number];
  height?: number;
  zoom?: number;
}

/**
 * Renders a map with a location marker.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.marker - The coordinates of the marker.
 * @param {number} [props.height=300] - The height of the map container.
 * @param {number} [props.zoom=16] - The zoom level of the map.
 * @returns {JSX.Element} The rendered location map component.
 */
export default function LocationMap({ marker, height = 300, zoom = 16 }: LocationMapProps) {
  return (
    <Map height={height} defaultCenter={marker} defaultZoom={zoom}>
      <Marker width={40} anchor={marker} />
    </Map>
  );
}