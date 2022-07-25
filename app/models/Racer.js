export class Racer {
  constructor(name, picture, number, distance){
    this.name = name
    this.picture = picture
    this.number = number
    this.distance = distance
  }

  go(){
    let 
    array.forEach(racer => {
      this.distance.tofixed(0) = (Math.random() * (.95 - 0))*100 +"%"
      document.getElementById("santa").style.left =+ this.distance
    });
  }

get Template(){
  return `
  <div class="bg-dark m-3 p-2 col-12 position-relative">
    <div class="racer" title="santa">
      <span class="racer-icon position-absolute" id="santa">🎅</span>
    </div>
  </div>
  `
}
// get is a method that you do not have to call, you can reference it by name to access the return at Racer.Template


}