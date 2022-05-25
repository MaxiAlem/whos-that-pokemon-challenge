import { Fragment,useState} from "react"

const Nav = () => {


  let [aciertos, setAciertos] = useState(0)
    const [errores, seterrores] = useState(0)
   


  // if(document.getElementsByClassName('acierto')){
  //   console.log('acierto')
  // }

  // if(document.getElementsByClassName('error')){
  //   console.log('error')
  // }
  return (
    <Fragment>
    <nav>
        <div className="nes-field is-inline">
        <div className="nes-badge is-splited">
    <span className="is-success"><i className="nes-icon trophy is-small"></i></span>
    <span className="is-primary">{aciertos} </span>
    </div>
    <div className="nes-badge is-splited">
    <span className="is-error"><i className="nes-icon close is-small"></i></span>
    <span className="is-primary">15 </span>
    </div>
    <div id="navBtns">
    <a className="nes-icon linkedin is-medium" href="https://www.linkedin.com/in/maxialem90/"></a>
    <a className="nes-icon github is-medium" href="https://github.com/MaxiAlem"></a>
    </div></div>
    </nav>
        

    </Fragment>
  
  )
}

export default Nav