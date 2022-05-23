
declare var newpkmn: any

function clearHtml(){
  while(newpkmn.firstChild){
    newpkmn.removeChild(newpkmn.firstChild)
  }
}

export default clearHtml