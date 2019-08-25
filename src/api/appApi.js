import axios from 'axios';


export default axios.create ({
    baseURL:'https://api.openweathermap.org/data/2.5/forecast',
    headers:{
        Authorization:'appid 4e8e2d219bd9f75a359691792d6846b8'
    }
});