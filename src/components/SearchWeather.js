import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import Favourite from './Favourite'
import GeoLocation from './GeoLocation';
import Clock from './Clock'
import React from 'react';
const SearchWeather = () => {
  const [search, setSearch] = useState("Kukatpalli")
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  let componentMounted = true;

  useEffect(() => {
    const fetchWeather = async () => {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=95e1d012b67722283c3e4139a8f5d7c0`);
      if (componentMounted) {
        setData(await res.json());
        console.log(data);
      }
      return () => {
        componentMounted = false;
      }
    }

    fetchWeather();
  }, [search]);
  
    let emoji = null;
    if (typeof data.main != "undefined") {
      if (data.weather[0].main == "Clouds") {
        emoji = "fa-cloud"
      }
      else if (data.weather[0].main == "Thunderstorm") {
        emoji = "fa-bolt"
      }
      else if (data.weather[0].main == "Drizzle") {
        emoji = "fa-cloud-rain"
      }
      else if (data.weather[0].main == "Rain") {
        emoji = "fa-cloud-shower-heavy"
      }
      else if (data.weather[0].main == "Snow") {
        emoji = "fa-snow-flake"
      }
      else {
        emoji = "fa-smog"
      }

    } else {
      return (
        <div>...loading</div>
      )
    }

    //temp
    let temp = (data.main.temp - 273.15).toFixed(2);
    let temp_min = (data.main.temp_min - 273.15).toFixed(2);
    let temp_max = (data.main.temp_max - 273.15).toFixed(2);
    //date
    let d = new Date();
    let date = d.getDate();
    let year = d.getFullYear();
    let month = d.toLocaleDateString("default", { month: 'long' });
    let day = d.toLocaleDateString("default", { weekday: 'long' });

    //time
    let time = d.toLocaleDateString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    const handleSubmit = (event) => {
      event.preventDefault();
      setSearch(input);
    }
    return (

      <div className='container-fluid mt-0' style={{ backgroundImage: `url(" https://source.unsplash.com/600x900/?${data.weather[0].main}")`, backgroundSize: 'cover', height: '100vh' }}>

        <div className='bg-image card-img-overlay' ></div><div className="container pt-5 ">
          <div className="row justify-content-center">
            <div className="col-11 col-md-8 col-sm-11 col-lg-5 container">
              <div className="card text-white text-center border-0" style={{ width: "550px" }}>

                <img src={` https://source.unsplash.com/600x900/?${data.weather[0].main}`} className="card-img" alt="..." />
                <div className="card-img-overlay">
                  <form onSubmit={handleSubmit}>
                    <div className="input-group w-100 mx-auto p-100">
                      <input type="search" className="form-control" placeholder="Search City" aria-label="Search City" aria-describedby="basic-addon2"
                        name="search"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        required />
                      <button type="submit" className="input-group-text" id="basic-addon2">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                    </div>
                  </form>
                  <div className='location'>
                    <GeoLocation />
                  </div>
                  <div className="bg-dark bg-opacity-50 container p-2">
                    <h2 className="card-title display-5"><i>{data.name}</i></h2>
                    {/* <button className='btn my-btn' onClick={() => addToCart(data)}></button> */}

                    <p className="lead mb-0">

                      <p className='hello '>
                        {<Clock />}
                      </p>

                     <h4> <i > {day},{date} {month}, {year}</i></h4>
                    </p>
                    <hr />
                    <i className={`fas ${emoji} fa-4x`}></i>
                    <h1 className='fw-bolder  '><i>{temp} &deg;C</i></h1>
                    <p className='fw-bolder lead mb-0'><i>{data.weather[0].main}</i></p>
                    <p className='lead'><i>{temp_min}&deg; C | {temp_max}&deg;C</i></p>
                    
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
        </div >
         
        
    );
}

export default SearchWeather;