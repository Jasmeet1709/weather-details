import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudRain, faTemperatureHigh, faTemperatureLow } from '@fortawesome/free-solid-svg-icons'

const Weather= props => (
    <div className="weather-info ">
        
        <div className="container-fluid">
            <div className="row">
                <div className="col col-sm lead">{props.items.date.split(" ")[0].split('-').reverse().join('-')}, {props.items.date.split(" ")[1]}</div>
                <div className="col col-sm">{props.items.humidity}% <FontAwesomeIcon icon={faCloudRain} /></div>
                <div className="col col-sm">{props.items.max_Temperature} <FontAwesomeIcon icon={faTemperatureHigh} /> C </div>    
                <div className="w-100"></div>

                <div className="col col-sm">{props.items.description}</div>
                <div className="col col-sm"></div>  
                <div className="col col-sm">{props.items.min_Temperature} <FontAwesomeIcon icon={faTemperatureLow} /> C </div>
            </div>
        </div>
        
        {/* <table className="table">
            <tbody>
                <tr>
                <th scope="row">{props.decription}</th>
                <td>{props.humidity}</td>
                <td className="d-block">{props.max_Temperature}</td>
                <td className="d-block">{props.min_Temperature}</td>
                </tr>
            </tbody>
        </table> */}
        {/* <div class="d-inline p-2 bg-primary text-white">d-inline</div>
        
        <div class="d-inline p-2 bg-dark text-white">d-inline</div>

        <span class="d-block p-2 bg-primary text-white">d-block</span>
        <span class="d-block p-2 bg-dark text-white">d-block</span> */}

        {/* <div className="d-inline bg-dark text-white">
            <p className="d-inline">Hello</p>
            <p className="d-inline">Hello</p>
        </div>
        <div className="d-inline bg-dark text-white">
            <p>Hello</p>
        </div>
        <div className="d-inline bg-dark text-white">
            <p className="d-block">Hello</p>
            <p className="d-block">Hello</p>
        </div> */}
        {/* <div className="weather-key d-inline">
            {   
                props.date && <p className="weather-key d-block"> Date:
                    <span className="weather-value">{props.date}</span>
                </p>
            }
            {
                props.decription &&  <p className="weather-key d-block"> Weather:
                    <span className="weather-value">{props.decription}</span>
                </p>
            }
        </div>
        
        {
            props.humidity && <p className="weather-key d-inline"> Humidity:
                <span className="weather-value">{props.humidity}</span>
            </p>
        }
        {
            props.max_Temperature && <p className="weather-key d-inline"> Max_Temperature:
                <span className="weather-value">{props.max_Temperature}</span>
            </p>
        }
        {
            props.min_Temperature && <p className="weather-key d-inline"> Min_Temperature:
                <span className="weather-value">{props.min_Temperature}</span>
            </p>
        } */}
    </div>
);

export default Weather;