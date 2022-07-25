import { AppState } from './AppState.js'

function _drawRacers(){
  console.log("draw racers");
  let racers = AppState.racers
  let template = ""
  racers.forEach(racer => template += racer.Template)
  document.getElementById("racetrack")
}

class Controller{
  constructor(){

    _drawRacers()
    setInterval(Racer.go, 100)
  }
}

let controller = new Controller()

RaceController()

window['app'] = {controller : Controller}