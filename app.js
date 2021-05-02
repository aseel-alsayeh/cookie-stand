`Use strict`
let locations=["Seattle" , "Tokyo", "Dubai" , "Paris" ,"Lima"]
let Seattle ={
    loction: locations[0],
    MinCust:23,
    MaxCust:65,
    AvgCocPerCust:6.3,
     randomCustHour: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
      } 

      , CockPurshHour : function(a,b){
     f = this.AvgCocPerCust * this.randomCustHour(a,b);
     return f ;
 }

  , render : function(){
 let mainEl = document.getElementById("seattle");
 let h1El = document.createElement("h1");
 h1El.textContent ="Seattle"
 mainEl.appendChild(h1El);
 let ulEl = document.createElement("ul");
 //ulEl.textContent = this.CockPurshHour(1,10);
 mainEl.appendChild(ulEl);
 let j=6;
 let total=0;
 for(let i=0 ; i<=14;i++ ){
 let liEl = document.createElement("li");
 ulEl.appendChild(liEl);
 if (j<12){
 liEl.textContent = `${j} am: ${this.CockPurshHour(1,10)} cookies`;
total=total+ this.CockPurshHour(1,10)}
 else if (j>12) {
    liEl.textContent = `${j-12} pm: ${this.CockPurshHour(1,10)} cookies`;
    total=total+ this.CockPurshHour(1,10);
 }
 else if (j=12){
    liEl.textContent = `${j} pm: ${this.CockPurshHour(1,10)} cookies`;
    total=total+ this.CockPurshHour(1,10)}

 j++;
 }
 let liEl = document.createElement("li");
 ulEl.appendChild(liEl);
 liEl.textContent =`Total:${total} cookies`;


  }

}

Seattle.randomCustHour(1, 10);
Seattle.CockPurshHour(1,10);
Seattle.render();


let Tokyo ={
    loction: "Tokyo",
    MinCust:3,
    MaxCust:24,
    AvgCocPerCust:1.2,
     randomCustHour: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
      } 

      , CockPurshHour : function(a,b){
     f = this.AvgCocPerCust * this.randomCustHour(a,b);
     return f ;
 }

  , render : function(){
 let mainEl = document.getElementById("seattle");
 let h1El = document.createElement("h1");
 h1El.textContent =this.loction;
 mainEl.appendChild(h1El);
 let ulEl = document.createElement("ul");
 mainEl.appendChild(ulEl);
 let j=6;
 for(let i=0 ; i<=14;i++ ){
 let liEl = document.createElement("li");
 ulEl.appendChild(liEl);
 if (j<12){
 liEl.textContent = `${j} am: ${this.CockPurshHour(1,10)} cookies`;}
 else if (j>12) {
    liEl.textContent = `${j-12} pm: ${this.CockPurshHour(1,10)} cookies`;
 }
 else if (j=12){
    liEl.textContent = `${j} pm: ${this.CockPurshHour(1,10)} cookies`;}
 j++;
 }

  }

}
Tokyo.randomCustHour(1, 10);
Tokyo.CockPurshHour(1,10);
Tokyo.render();

let Dubai ={
    loction: locations[2],
    MinCust:11,
    MaxCust:38,
    AvgCocPerCust:3.7,
     randomCustHour: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
      } 

      , CockPurshHour : function(a,b){
     f = this.AvgCocPerCust * this.randomCustHour(a,b);
     return f ;
 }

  , render : function(){
 let mainEl = document.getElementById("seattle");
 let h1El = document.createElement("h1");
 h1El.textContent =this.loction;
 mainEl.appendChild(h1El);
 let ulEl = document.createElement("ul");
 mainEl.appendChild(ulEl);
 let j=6;
 for(let i=0 ; i<=14;i++ ){
 let liEl = document.createElement("li");
 ulEl.appendChild(liEl);
 if (j<12){
 liEl.textContent = `${j} am: ${this.CockPurshHour(1,10)} cookies`;}
 else if (j>12) {
    liEl.textContent = `${j-12} pm: ${this.CockPurshHour(1,10)} cookies`;
 }
 else if (j=12){
    liEl.textContent = `${j} pm: ${this.CockPurshHour(1,10)} cookies`;}
 j++;
 }

  }

}
Dubai.randomCustHour(11, 38);
Dubai.CockPurshHour(1,10);
Dubai.render();


let Paris ={
    loction: locations[3],
    MinCust:20,
    MaxCust:38,
    AvgCocPerCust:2.3,
     randomCustHour: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
      } 

      , CockPurshHour : function(a,b){
     f = this.AvgCocPerCust * this.randomCustHour(a,b);
     return f ;
 }

  , render : function(){
 let mainEl = document.getElementById("seattle");
 let h1El = document.createElement("h1");
 h1El.textContent =this.loction;
 mainEl.appendChild(h1El);
 let ulEl = document.createElement("ul");
 mainEl.appendChild(ulEl);
 let j=6;
 for(let i=0 ; i<=14;i++ ){
 let liEl = document.createElement("li");
 ulEl.appendChild(liEl);
 if (j<12){
 liEl.textContent = `${j} am: ${this.CockPurshHour(1,10)} cookies`;}
 else if (j>12) {
    liEl.textContent = `${j-12} pm: ${this.CockPurshHour(1,10)} cookies`;
 }
 else if (j=12){
    liEl.textContent = `${j} pm: ${this.CockPurshHour(1,10)} cookies`;}
 j++;
 }

  }

}
Paris.randomCustHour(11, 38);
Paris.CockPurshHour(1,10);
Paris.render();


let Lima ={
    loction: locations[4],
    MinCust:2,
    MaxCust:16,
    AvgCocPerCust:4.6,
     randomCustHour: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
      } 

      , CockPurshHour : function(a,b){
     f = this.AvgCocPerCust * this.randomCustHour(a,b);
     return f ;
 }

  , render : function(){
 let mainEl = document.getElementById("seattle");
 let h1El = document.createElement("h1");
 h1El.textContent =this.loction;
 mainEl.appendChild(h1El);
 let ulEl = document.createElement("ul");
 mainEl.appendChild(ulEl);
 let j=6;
 for(let i=0 ; i<=14;i++ ){
 let liEl = document.createElement("li");
 ulEl.appendChild(liEl);
 if (j<12){
 liEl.textContent = `${j} am: ${this.CockPurshHour(1,10)} cookies`;}
 else if (j>12) {
    liEl.textContent = `${j-12} pm: ${this.CockPurshHour(1,10)} cookies`;
 }
 else if (j=12){
    liEl.textContent = `${j} pm: ${this.CockPurshHour(1,10)} cookies`;}
 j++;
 }

  }

}
Lima.randomCustHour(11, 38);
Lima.CockPurshHour(1,10);
Lima.render();