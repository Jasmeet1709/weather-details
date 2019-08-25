import React from 'react';
import Weather from './weather'

const ListItem = (props) => {
    // item = {date:'', description:'', humidity:'', max_Temperature:'', min_Temperature:''}
    console.log(props.lists)
    let id = 1;
    const listElement = props.lists.map((list)=>{
        console.log('A',list.weather[0].main)
        const item = {id:id,
                date:list.dt_txt, 
                description:list.weather[0].description, 
                humidity:list.main.humidity, 
                max_Temperature:list.main.temp_max, 
                min_Temperature:list.main.temp_min
            };
        id+=1;
        return <Weather key={item.id} items={item}/>
        // return <Weather
        //         date={list.dt_txt}
        //         description = {list.weather[0].description}
        //         humidity= {list.main.humidity}
        //         max_Temperature ={list.main.temp_max}
        //         min_Temperature = {list.main.temp_min}
        //         />
    })
    // const lists= props.lists.map((list)=>{
    //     console.log(list)
    //     return <p>list.weather.main</p>
    // })
    return <div>{listElement}</div>
};

export default ListItem;