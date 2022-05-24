//fix cochino
declare var newpkmn: any


import { Fragment, useState, useEffect } from "react";

import getData from "./helpers/getData";



function App() {
  


  return (
  <Fragment>
      
      <main>
      
     
      <button
      className="nes-btn is-error"
      onClick={()=>{getData()}}>Start!</button>
      
       <div id="newpkmn"></div>
      </main>

  </Fragment>)
}

export default App;
