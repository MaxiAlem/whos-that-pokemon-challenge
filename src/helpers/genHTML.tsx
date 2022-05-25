declare var newpkmn: any

import clearHtml from './clearHTML'
import getData from './getData'


import {Pokemon} from '../types'


function genHTML(res:object){
   
    // const {name, id, image}:{name:string, id:number, image:string} = res
    const pokmn : Pokemon = res
    console.log(pokmn.name)
    // console.log(pokmn.id)
    // console.log(pokmn.image)
   //gen html
 
    const box = document.createElement('div');
    const p = document.createElement('h1');
    p.textContent='Quien es ese pokemon?'

    const pokeGuess = document.createElement('form')
    pokeGuess.className= 'nes-field is-inline'
  
    const textGuess = document.createElement('input')
    textGuess.setAttribute('type', 'text');
    textGuess.setAttribute('autocomplete', 'off');
    textGuess.className = 'textGuess nes-input is-inline'
  
    const submitGuess = document.createElement('input')
    submitGuess.setAttribute('type', 'submit');
    submitGuess.value = 'adivinar';
    submitGuess.className = 'nes-btn is-primary submitGuess'
    submitGuess.onclick =async function(e){
      e.preventDefault()
      if(textGuess.value.replace(/[^a-zA-Z]/g,"").toLowerCase()=== pokmn.name){
         pokeImg.classList.add('pokeimg')
         pokeMsg.innerHTML= `
         <p class="nes-text is-primary"> Correcto!</p>
         `
         
         submitGuess.classList.add('is-disabled')
        // setTimeout(() => {
        //     clearHtml()
        //  getData()
        // }, 2000); 
      }else{
        pokeMsg.innerHTML= `
        <p class="nes-text is-primary "> Incorrecto!</p>
        `

        submitGuess.classList.add('is-disabled')
        
        
        // setTimeout(() => {
        //     clearHtml()
        //  getData()
        // }, 2000); 
      }
      
    }
  
    pokeGuess.appendChild(textGuess);
    pokeGuess.appendChild(submitGuess);
  
  
   //  const pokeId = document.createElement('h2')
   //  pokeId.innerHTML = `${pokmn.id}`;
  
    const pokeImg = document.createElement('img')
    //pokeImg.className= 'pokeimg'
    pokeImg.src = `${pokmn.image}`;
    
    const pokeMsg = document.createElement('div')
    pokeMsg.className= 'pokeMsg'
      
    box.appendChild(p);
    box.appendChild(pokeImg);
    box.appendChild(pokeMsg);
    box.appendChild(pokeGuess);
 
    newpkmn.appendChild(box)
 }

 export default genHTML