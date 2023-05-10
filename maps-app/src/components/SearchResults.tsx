import { useContext, useState } from "react";
import { MapContext, PlacesContext } from "../context";
import { Feature } from "../interfaces/places";
import { LoadingPlaces } from "./LoadingPlaces";

export const SearchResults = () => {
  const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext);
  const { map, getRouteBetweenPoints } = useContext(MapContext);
  const [activeId, setActiveId] = useState<string>("");
  const onPlaceClicked = (place: Feature) => {
    const [lng, lat] = place.center;
    map?.flyTo({
      zoom: 14,
      center: [lng, lat],
    });
    setActiveId(place.id);
  };

  const getRoute = (place: Feature) => {
    if (!userLocation) return;

    const [lng, lat] = place.center;
    getRouteBetweenPoints(userLocation, [lng, lat]);
  };

  if (isLoadingPlaces) {
    return <LoadingPlaces />;
  }

  if (places.length === 0) {
    return <></>;
  }

  return (
    <ul className="list-group mt-3">
      {places.map((place) => {
        return (
          <li
            key={place.id}
            className={`list-group-item list-group-item-action pointer ${
              place.id === activeId ? "active" : ""
            }`}
            onClick={() => onPlaceClicked(place)}
          >
            <h6> {place.text_es}</h6>
            <p style={{ fontSize: "12px" }}>{place.place_name_es}</p>
            <button
              className={`btn btn-sm ${
                place.id === activeId
                  ? "btn-outline-light"
                  : "btn-outline-primary"
              }`}
              onClick={() => getRoute(place)}
            >
              Direcciones
            </button>
          </li>
        );
      })}
    </ul>
  );
};
