import React from "react"
import "./App.css"
import tulio from "./tulio.jpg"
import srd from "./srd.png"
import pastor from "./pastor.jpg"
import oliver from "./oliver.jpg"
import lola from "./lola.jpg"
import garfield from "./garfield.jpg"

export default class Ing extends React.Component{

  state = {dogs:[{name:'Tulio', breed:'Chiwawa', age:'5 years', image:<img className="tulio" src={tulio}/>},
  {name:'Pipoca', breed:'SRD', age:'9 years', image:<img className="srd" src={srd}/>},
  {name:'Spike', breed:'Pastor', age:'2 years', image:<img className="pastor" src={pastor}/>}],
  cats:[{name:'Oliver', breed:'Angorá', age:'10 years', image:<img className="oliver" src={oliver}/>},
  {name:'Lola', breed:'Persa', age:'12 years', image:<img className="lola" src={lola}/>},
  {name:'Garfield', breed:'Malandro', age:'7 years', image:<img className="garfield" src={garfield}/>},
  ],
  clear:[],
  list:[]
} 

dogPet = () => {
  this.setState({list: this.state.dogs.map((item)=>(
    <div className="container-dog">
      <h2>Dog's name: {item.name} </h2>
      <div>{item.image}</div>
      <h2>Breed: {item.breed}</h2>
      <h2>Age: {item.age}</h2>
    </div>
  ))})
}

 catPet = () => {
  this.setState({list: this.state.cats.map((item)=>(
    <div className="container-cat">
      <h2>Cat's name: {item.name}</h2>
      <div>{item.image}</div>
      <h2>Breed: {item.breed}</h2>
      <h2>Age: {item.age}</h2>
    </div>
  ))})
}

 clearPet = () =>{
   this.setState({list:this.state.clear.map((item)=>(
     <div>{item.list}</div>
   ))})
 }

  render(){
    return(
      <div className="center">
        <h1 className="adopt">Adote seu Pet</h1>
        <button onClick={this.dogPet}>Cão</button>
        <button onClick={this.catPet}>Gato</button>
        <button onClick={this.clearPet}>Clear</button>
        <h2>{this.state.list}</h2>
      </div>
    )
  }
}
