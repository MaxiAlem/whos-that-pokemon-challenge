
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
         
         //pokeImg.className = 'pokeImg'
         pokeImg.classList.remove('pokeimg')
        setTimeout(() => {
            clearHtml()
         getData()
        }, 3000); 
      }else{
        console.log('mal')
        clearHtml()
        await getData()
         
 
        
      }
      
    }
  
    pokeGuess.appendChild(textGuess);
    pokeGuess.appendChild(submitGuess);
  
  
   //  const pokeId = document.createElement('h2')
   //  pokeId.innerHTML = `${pokmn.id}`;
  
    const pokeImg = document.createElement('img')
    pokeImg.className= 'pokeimg'
    pokeImg.src = `${pokmn.image}`;
  
  
    box.appendChild(pokeImg);
    box.appendChild(pokeGuess);
   // box.appendChild(pokeId);
    
  
    newpkmn.appendChild(box)
  
 }

 export default genHTML