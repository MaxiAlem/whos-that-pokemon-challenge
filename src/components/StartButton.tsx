
import getData from "../helpers/getData";

const startButton = () => {
  function StartButton(){
        const StarBtn = document.getElementById('start')
        StarBtn.textContent='reintentar'
        getData()
    }
    return (
    
      <button id="start"
      className="nes-btn is-error"
      onClick={()=>{StartButton()}}>Start!</button>
      
       
  )
}

export default startButton








