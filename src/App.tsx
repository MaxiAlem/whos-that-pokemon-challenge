import { Fragment, useState, useEffect } from "react";

import api from './api'
import {Pokemon} from './types'

function App() {
  const {random} = api
  
  const[count, setCount] = useState(0)
  const [pkmn, setPkmon] = useState('')
  const [pkmnName, setPkmonName]=useState<string>('name')
  const [pkmnImg, setPkmonImg]=useState('img')
  const [pkmnId, setPkmonId]=useState(0)
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true)
  
    
  //getData()
  async function getData(){
    try {
        const res = await random()
        
        pokemon(res)
    }catch(e){
        console.error(e)
    }

}
 
async function pokemon(res:object) {
  clearHtml()
  // const {name, id, image}:{name:string, id:number, image:string} = res
  const pokmn : Pokemon = res
  console.log(pokmn.name)
  console.log(pokmn.id)
  console.log(pokmn.image)
  
  //gen html
  const box = document.createElement('div');

  const pokeGuess = document.createElement('form')

  const textGuess = document.createElement('input')
  textGuess.setAttribute('type', 'text');
  textGuess.setAttribute('autocomplete', 'off')

  const submitGuess = document.createElement('input')
  submitGuess.setAttribute('type', 'submit');
  submitGuess.value = 'adivinar'
  submitGuess.onclick =function(e){
    e.preventDefault()
    if(textGuess.value === pokmn.name){
      console.log('bien')
      setCount(count + 1)
    }else{
      console.log('mal')
    }
    
  }

  pokeGuess.appendChild(textGuess);
  pokeGuess.appendChild(submitGuess);


  const pokeId = document.createElement('h2')
  pokeId.innerHTML = `${pokmn.id}`;

  const pokeImg = document.createElement('img')
  pokeImg.className = 'pokeImg'
  pokeImg.src = `${pokmn.image}`;


  box.appendChild(pokeImg);
  box.appendChild(pokeGuess);
  box.appendChild(pokeId);
  

  newpkmn.appendChild(box)

}

function clearHtml(){
  while(newpkmn.firstChild){
    newpkmn.removeChild(newpkmn.firstChild)
  }
}
  return (
  <Fragment>
      
      <main>
      <p>You clicked {count} times</p>
     
      <p>pokemon</p>
     
      <button onClick={()=>{getData()}}>new Pokemon</button>
      
       <div id="newpkmn"></div>
      </main>

  </Fragment>)
}

export default App;
