import axios from 'axios';
import { useEffect,useState } from 'react';



const GeoLocation = ()=>{
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [weather, setWeather] = useState("");
    const [temperature, setTemperature] = useState(0);
    const [cityName, setCityName] = useState("");

const savePositionToState = (position)=>{
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
}

const fetchWeather= async()=>{
    try{
        await window.navigator.geolocation.getCurrentPosition(savePositionToState);
        const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=60d505bb48f9c02e8d1f29a621cd125f&units=metric`
          );
          setTemperature(res.data.main.temp);
          setCityName(res.data.name);
          setWeather(res.data.weather[0].main);
          console.log(res.data);
        } catch (err) {
          console.error(err);
        }
      };
    
      useEffect(() => {
        fetchWeather();
      }, [latitude, longitude]);
    
      return (
        <div className="app">
          <div className="app__container">
            <div className='display-5'><i>{cityName}</i></div>
            <div className='display-6'><i>{temperature}ºC</i></div>
            <div className='display-6'><i>{weather}</i></div>
          </div>
        </div>
        
      );
    }
export default GeoLocation;