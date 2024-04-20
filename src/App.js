import React from "react";
import './App.css';

import d from './data.json';

const Photo = (props) => {
    var hex = "#" + Math.floor(Math.random()*16777215).toString(16);
    if(props.color) hex = "#" + props.color;
    return(
        <div className="photo" style={{backgroundColor: hex}}>photo: {props.name} ({hex})</div>
    );
}

const Essay = () => {
    return(
        <div id="essay-block">
            essay!
        </div>    
    );
}

const Teleport = () => {
    return(
        <div id="teleport">teleport</div>
    );
}

const App = () => {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        setData(d.photos);
    }, []);
    console.log(data);
    const teleport = document.getElementById('teleport');
    const handleScroll = (e) => {
        //console.log("current top? " + document.getElementById("photodiv").scrollTop);
        const offsets = teleport.getBoundingClientRect();
        const top = offsets.top;
        //console.log("top: " + top);
        if(top < 0) {document.getElementById("photodiv").scrollTop = 1000;}

    };
    
    
    return (
        <div id="photodiv" style={{height: "98.5vh", overflowY: "scroll", scrollbarWidth: "none"}} onScroll={handleScroll}>
            <Essay/>
            {/*three above, three below*/}
            <Photo key= {1} item = {"p1"} color = "abc123"/>
            <Photo key= {2} name = {"p2"} color = "fdf183"/>
            <Photo key= {3} name = {"p3"} color = "fdadaa"/>
            {data.map((item,i) => {return(<Photo key= {i+3} item = {item}/>)})}
            <Teleport/>
            <Photo key= {11} name = {"p1"} color = "abc123"/>
            <Photo key= {12} name = {"p2"} color = "fdf183"/>
            <Photo key= {13} name = {"p3"} color = "fdadaa"/>
        </div>
    );
}

export default App;