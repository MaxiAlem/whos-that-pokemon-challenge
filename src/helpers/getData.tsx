import api from "../api"
import clearHtml from "./clearHTML";
import genHTML from "./genHTML";
const {random} = api
  
  

    
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
    

export default getData