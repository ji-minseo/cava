import React from 'react';
import "./Style.css"
import "./Fonts.css"
import Obj from "./components/Obj";
// import {apple} from "/public/apple.png";


class App extends React.Component {
  componentDidMount() {
    // document.getElementsByTagName("body")[0].style.backgroundImage = 'url(/bg.png)';
    this.random();
  }
  random() {

    let posx = Math.random() * (100 - 0) + 0;
    let posy = Math.random() * (100 - 0) + 0;
    console.log(posx);
    let temp = document.getElementsByClassName("drag-wrapper");
    for(let i = 0; i < temp.length; i++) {
      temp[i].style.left = posx +"%";
      temp[i].style.top = posy +"%";
      posx = Math.random() * (100 - 0) + 0;
      posy = Math.random() * (100 - 0) + 0;
    }
    // temp[0].style.left = Math.random() * (400 - 300) + 300 +"px";
    // temp[0].style.top = Math.random() * (100 - 10) + 10 +"px";

    // temp[1].style.right = Math.random() * (200 - 50) + 50 +"px";
    // temp[1].style.bottom = Math.random() * (200 - 50) + 50 +"px";


    // temp[2].style.right = Math.random() * (200 - 10) + 10 +"px";
    // temp[2].style.bottom = Math.random() * (200 - 50) + 50 +"px";

    // temp[3].style.left = Math.random() * (300 - 200) + 200 +"px";
    // temp[3].style.top = Math.random() * (100 - 50) + 50 +"px";

    // temp[4].style.right = Math.random() * (200 - 50) + 50 +"px";
    // temp[4].style.bottom = Math.random() * (200 - 50) + 50 +"px";


  }


  render () {
  
    return(<div className ="container flex">
    
        <a href="/cava/"><div className="title fs-h2"><img src={process.env.PUBLIC_URL + '/cava.svg'}/></div></a>
      
      <div className="text"><img src={process.env.PUBLIC_URL + '/bg.svg'}/></div>
      <section className ="letter-right mg-nav">
      <h3 className="nav fs-base fw-light">onlineshowroom</h3>

      


        
      
      </section>

      <Obj name="/01.png"/>
      <Obj name="/02.png"/>
      <Obj name="/03.png"/>
      <Obj name="/04.png"/>
      <Obj name="/05.png"/>
      <Obj name="/06.png"/>
      <Obj name="/07.png"/>
      <Obj name="/08.png"/>
      <Obj name="/09.png"/>
      <Obj name="/10.png"/>
      <Obj name="/11.png"/>
      <Obj name="/12.png"/>

      {/* <Obj name="/13.png"/> */}
      <Obj name="/14.png"/>
      <Obj name="/15.png"/>
      <Obj name="/16.png"/>
      <Obj name="/17.png"/>
      <Obj name="/18.png"/>
      <Obj name="/19.png"/>
      <Obj name="/20.png"/>
      <Obj name="/21.png"/>
      <Obj name="/22.png"/>
      <Obj name="/23.png"/>
      <Obj name="/24.png"/>
      <Obj name="/25.png"/>
      <Obj name="/26.png"/>
      <Obj name="/27.png"/>
      <Obj name="/28.png"/>
      <Obj name="/29.png"/>
      
      
      </div>)
  };
}

export default App;
