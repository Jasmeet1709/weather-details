import React from 'react';
import axios from 'axios';
import Titles from './components/title';
import Form from './components/form';
import ListItems from './components/listItems';
import './App.css';

class App extends React.Component {
  state={lists:[]};
  API_KEY = "4e8e2d219bd9f75a359691792d6846b8";
  onSearchSubmit = async term => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${term}%7Bterm%7D&appid=${this.API_KEY}&units=metric`)
      this.setState({lists: response.data.list},);
    }catch(e){
      console.log(e.response);
      this.setState({lists:['Not found']})
      // this.render("Not Found!!")
    }
    // const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${term}%7Bterm%7D&appid=4e8e2d219bd9f75a359691792d6846b8&units=metric`)
      // console.log(response.data.list);
    // if (response.status !== 200) {
    //     // You can do your error handling here
    //     console.log("errrrrrr")
    // } else {
    //     // Call the .json() method on your response to get your JSON data
    //     // const data = await api_call.json();
    //     this.setState({lists: response.data.list});
    // }
    // this.setState({lists: response.data.list});
  };

    // axios.get('https://api.openweathermap.org/data/2.5/forecast',{
    //   params: {q:term},
    //   // auth: 'appid 4e8e2d219bd9f75a359691792d6846b8',
    //   headers:{
    //     Authorization:'appid 4e8e2d219bd9f75a359691792d6846b8'
    //   }
    // })
  
  
  render(){
    return (
      <div className="background" style={{  
        // backgroundImage: "url(" + "/Users/jasmeetsingh/Desktop/weather-app/public/weatherBackground.jpg" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
      <div className="App">
        <div className="container-fluid">
          <Titles/>
          <Form onSubmit={this.onSearchSubmit}/>
          
        {/* found: {this.state.lists.length} lists */}
        { this.state.lists.length >= 2 && <ListItems lists={this.state.lists}/>}
        { this.state.lists.length === 1 && <p>Please enter correct city and country....</p>}
      </div>
      </div>
    </div>
    );
  }  
}

export default App;
