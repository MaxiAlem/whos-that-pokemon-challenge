import { Fragment, useState, useEffect } from "react";

import api from './api'
import {Pokemon} from './types'

function App() {
  const {random} = api
  
  let[count, setCount] = useState(0)
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
 
   genHTML(res)

}

function clearHtml(){
  while(newpkmn.firstChild){
    newpkmn.removeChild(newpkmn.firstChild)
  }
}

function genHTML(res:object){
   
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
   submitGuess.onclick =async function(e){
     e.preventDefault()
     if(textGuess.value === pokmn.name){
       console.log('bien')
        clearHtml()
        getData()
        setCount(count +1) 
     }else{
       console.log('mal')
       clearHtml()
       await getData()
        

       setCount(count = 0)
     }
     
   }
 
   pokeGuess.appendChild(textGuess);
   pokeGuess.appendChild(submitGuess);
 
 
  //  const pokeId = document.createElement('h2')
  //  pokeId.innerHTML = `${pokmn.id}`;
 
   const pokeImg = document.createElement('img')
   pokeImg.className = 'pokeImg'
   pokeImg.src = `${pokmn.image}`;
 
 
   box.appendChild(pokeImg);
   box.appendChild(pokeGuess);
  // box.appendChild(pokeId);
   
 
   newpkmn.appendChild(box)
 
}
  return (
  <Fragment>
      
      <main>
      
     
      <button onClick={()=>{getData()}}>new Pokemon</button>
      
       <div id="newpkmn"></div>
       
       
       <p>You have {count} pokepoints</p>
       <button onClick={()=>{setCount(count +1)}}>new score</button>
       <button onClick={()=>{setCount(count +1)}}>new score</button>
      </main>

  </Fragment>)
}

export default App;
