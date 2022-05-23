//fix cochino
declare var newpkmn: any


import { Fragment, useState, useEffect } from "react";

import api from './api'

import getData from "./helpers/getData";



function App() {
  


  return (
  <Fragment>
      
      <main>
      
     
      <button onClick={()=>{getData()}}>new Pokemon</button>
      
       <div id="newpkmn"></div>
       
       
     
      </main>

  </Fragment>)
}

export default App;
