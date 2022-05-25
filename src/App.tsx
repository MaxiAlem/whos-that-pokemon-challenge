//fix cochino
declare var newpkmn: any


import { Fragment, useState, useEffect } from "react";

import getData from "./helpers/getData";

import StartButton from "./components/StartButton";
import Nav from "./components/Nav";


function App() {
  


  return (
  <Fragment>
      <Nav
      /> 
      <main>
       
       <StartButton/>
      <div id="newpkmn"></div>
      </main>

  </Fragment>)
}

export default App;
