import React from "react";
import './App.css';

import d from './data.json';

const Photo = (props) => {
    const hex = props.item.color;
    var align;
    if(props.item.orientation === 0) {align = "left";}
    else if(props.item.orientation === 2) {align = "right";}
    else if(props.item.orientation === 1) {align = "center";}
    if(props.item.orientation === 0) {
        return(
            <div className="photo-block" style={{display: props.disp, backgroundColor: hex}}>
                <div className="image-grid" style={{gridTemplateColumns: "1fr 3fr 1fr"}}>
                    <img src={require(`./photos/${props.item.filename}`)} style={{verticalAlign: "middle"}} className="photo" alt = ":("></img>
                    <div style={{padding: "50px"}} dangerouslySetInnerHTML={{__html: props.item.statement}}></div>
                </div>
                <div dangerouslySetInnerHTML={{__html: props.item.id}} style={{textAlign: align}}></div>
            </div>
    );} else if (props.item.orientation === 1) {
        return (
            <div className="photo-block" style={{display: props.disp, backgroundColor: hex, textAlign: align}}>
                <img src={require(`./photos/${props.item.filename}`)} style={{verticalAlign: "middle"}} className="photo" alt = ":("></img>
                <div dangerouslySetInnerHTML={{__html: props.item.id}} style={{textAlign: align}}></div>
            </div>
    );} else {
    return(
        <div className="photo-block" style={{display: props.disp, backgroundColor: hex}}>
            <div className="image-grid" style={{gridTemplateColumns: "1fr 3fr 1fr"}}>
                <div></div>
                <div style={{padding: "50px"}} dangerouslySetInnerHTML={{__html: props.item.statement}}></div>
                <img src={require(`./photos/${props.item.filename}`)} style={{verticalAlign: "middle", textAlign: "right"}} className="photo" alt = ":("></img>
                
            </div>
            <div dangerouslySetInnerHTML={{__html: props.item.id}} style={{textAlign: align}}></div>
        </div>
    );}
}

const Essay = (props) => {
    return(
        <div id="essay-block" style={{display: props.disp}}>
            essay!
        </div>    
    );
}

const Citations = (props) => {
    return(
        <div id="citation-block" style={{display: props.disp}}>
            citations!
        </div>    
    );
}

const Teleport = () => {
    return(
        <div id="teleport"></div>
    );
}

const App = () => {
    const [data, setData] = React.useState([]); //writing, citations, button text vv
    const [display, setDisplay] = React.useState(["block", "none", "citations"]);
    React.useEffect(() => {
        setData(d.photos);
    }, []);
    //console.log(data);
    const teleport = document.getElementById('teleport');
    const handleScroll = (e) => {
        const top = teleport.getBoundingClientRect().top;
        if(top < 0) {document.getElementById("container").scrollTop = 1025;}
    };
    const changeDisplay = (e) => {
        e.preventDefault();
        const text = (display[2] === "citations") ? "exhibition" : "citations";
        setDisplay([display[1], display[0], text]);
    }
    return (
        <div id="container" style={{height: "98.5vh", overflowY: "scroll", scrollbarWidth: "none"}} onScroll={handleScroll}>
            <button id="changedisplay" onClick={changeDisplay}>display {display[2]}</button>
            <Citations disp = {display[1]}/>
            <Essay disp = {display[0]}/>
            {data.map((item,i) => {return(<Photo key= {i} item = {item} disp = {display[0]}/>)})}
            <Teleport/>
            {data.map((item,i) => {if(item.duplicated) {return(<Photo key= {i+10} item = {item} disp = {display[0]}/>)}else{return(<div key= {i+10}></div>)}})}
        </div>
    );
}

export default App;