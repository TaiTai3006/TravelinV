import React, { useEffect, useState } from "react";
import Map from "../../components/Map/Map";
import { CssBaseline, Grid } from "@material-ui/core";
import List from "../../components/List/List";
import { useDispatch, useSelector } from "react-redux";
import { getPlacesData } from "../../redux/actions/places.action";
import Header from "../../components/Header/Header";
import { getWeatherData } from "../../redux/actions/weather.action";


const MapScreen = () => {
  // const [places, setPlaces] = useState([]);
  const places = useSelector((state) => state.places.placesData);
  console.log(useSelector(state=>state.weather.weatherData))
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [bounds, setBounds] = useState({});
  const [filteredPlaces, setFillteredPlaces] = useState([])
  const [chidClicked, setChildCliked] = useState(null);
  const dispatch = useDispatch();
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState(0);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log({ lat: latitude, lng: longitude });
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  });

  useEffect(()=>{
    const filteredPlaces = places.filter((place)=> place.rating > rating)
    setFillteredPlaces(filteredPlaces)
  },[rating])
  
  useEffect(() => {
    // dispatch(getWeatherData(coordinates.lat, coordinates.lng))
    // console.log(coordinates, bounds);
    // getPlacesData(bounds.sw, bounds.ne).then((data) => {
    //  console.log(data)
    //   setPlaces(data);
    // });
    // dispatch(getPlacesData(type,bounds.sw, bounds.ne))
    setFillteredPlaces([])
    
  }, [type,coordinates, bounds, dispatch]);
  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates}/>
      <Grid container spacing={3} style={{ width: "100%", marginTop: "50px" }}>
        <Grid item xs={12} md={4}>
          <List
            chidClicked={chidClicked}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
            filteredPlaces={filteredPlaces}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          {/* <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            setChildCliked={setChildCliked}
           filteredPlaces={filteredPlaces}
          /> */}
        </Grid>
      </Grid>
    </>
  );
};

export default MapScreen;
