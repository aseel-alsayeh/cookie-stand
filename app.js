`Use strict`
let time = ["     " ,"6:00am " , "7:00am " , "8:00am " , "9:00am " , "10:00am " , "11:00am " , "12:00pm", "1:00pm" ,"2:00pm" , "3:00pm", "4:00pm", "5:00pm", "6:00pm", "7:00pm" , "Daily Location Total"]
let mainEl = document.getElementById("seattle");
//  let h1El = document.createElement("h1");
//  h1El.textContent =`${this.loction}`
//  mainEl.appendChild(h1El);
let tableEl = document.createElement("table");
mainEl.appendChild(tableEl);
let head = document.createElement("tr");
tableEl.appendChild(head);
for (let i=0; i<=15; i++){
   let tdEl = document.createElement("td");
   tdEl.textContent= time[i] ;
   head.appendChild(tdEl);}

   // constructor
   
 
let arr =[];
let sumArray=[];
let ShopArray=[];
function Shop (location , MinCust , MaxCust , AvgCocPerCust,){
    this.loction= location;
    this.MinCust=MinCust;
    this.MaxCust=MaxCust;
    this.AvgCocPerCust=AvgCocPerCust;
    this.cookies = [];
    this.total=0
    ShopArray.push(this)
   }

     Shop.prototype.randomCustHour =function () {
      
        return Math.random() * (this.MaxCust - this.MinCust + 1) + this.MinCust; //The maximum is inclusive and the minimum is inclusive
      } 

      Shop.prototype.CockPurshHour = function(){
     f = parseInt(this.AvgCocPerCust * this.randomCustHour());
     this.cookies.push(f);
     return f ;
   }

   Shop.prototype.totalco=function(){
     
     for(i=0;i<this.cookies.length;i++){
       this.total += this.cookies[i];
     }
   }

   let seattle = new Shop ("seattle", 23 , 65 , 6.3);
   let Tokyo = new Shop ("Tokyo", 3 , 24 , 1.2);
   let Dubai = new Shop ("Dubai", 11 , 38 , 3.7);
   let Paris = new Shop ("Paris", 20 , 38 , 2.3);
   let Lima = new Shop ("Lima", 2 , 16 , 4.6);

   
   
   Shop.prototype.render = function(){   
     let r2El = document.createElement("tr");
     tableEl.appendChild(r2El);
     let thEl = document.createElement("th");
     r2El.appendChild(thEl);
     thEl.textContent= this.loction;
     let Total= 0;
     for(let i=0; i<14 ; i++){
       let tdE2 = document.createElement("td");
       r2El.appendChild(tdE2);
       tdE2.textContent=`${this.CockPurshHour()}`;
       Total = Total + this.cookies[i];
      }
      //console.log(Total);
      let dlTotal =document.createElement("td");
      r2El.appendChild(dlTotal);
      dlTotal.textContent=(`${Total}`);
      
      // total at each hour
    }
    
  
  
  
  seattle.render();
  Tokyo.render();
  Dubai.render();
  Paris.render();
  Lima.render();
  seattle.totalco();
  Tokyo.totalco();
  Dubai.totalco();
  Paris.totalco();
  Lima.totalco();
  
  // footer
  let r7El=document.createElement("tr");
  tableEl.appendChild(r7El);
  let thE6 = document.createElement("th");
    r7El.appendChild(thE6);
    thE6.textContent="total";
    
   
      
    
    
    let cookiee = 0;
    let time1 =(time.length-1)
    for(let i=1; i<time1 ;i++){
       cookiee = 0;
  
  
      for (let j=0;j<ShopArray.length; j++){
        // let name=ShopArray[j].cookies
        // console.log(name)
        // console.log(ShopArray[j],i);
         cookiee += ShopArray[j].cookies[(i-1)];
        //  console.log(cookiee)
        //  console.log(ShopArray[j].cookies[(i-1)])
      } 
      let tdE3 =document.createElement("td");
      r7El.appendChild(tdE3);
      tdE3.textContent=(cookiee);
    }
     let sum = 0
    for (let i=0;i<ShopArray.length;i++){
     sum = sum+ShopArray[i].total

    }
  console.log(sum)
  let tdE4 =document.createElement("td");
  r7El.appendChild(tdE4);
  tdE4.textContent=(sum);
    
console.log(ShopArray)


  
  // test
  
  //  let r3El = document.createElement("tr");
  //  tableEl.appendChild(r3El);
  //  let thE2 = document.createElement("th");
  //  r3El.appendChild(thE2);
  //  thE2.textContent=Tokyo.loction;
  //  let Total1=0;
  //  for(let i=0; i<14 ; i++){
    //  let tdE2 = document.createElement("td");
    //  r3El.appendChild(tdE2);
    //  tdE2.textContent=`${Tokyo.CockPurshHour()}`;
    //  Total1 = Total1 + Tokyo.cookies[i];
    // }
    // console.log(Total);
    // let dlTotal1 =document.createElement("td");
    // r3El.appendChild(dlTotal1);
    // dlTotal1.textContent=(`${Total1}`);
    
    
    //  let r4El = document.createElement("tr");
    //  tableEl.appendChild(r4El);
    //  let thE3 = document.createElement("th");
    //  r4El.appendChild(thE3);
    //  thE3.textContent=Dubai.loction;
    //  let Total2=0;
//  for(let i=0; i<14 ; i++){
  //  let tdE3 = document.createElement("td");
  //  r4El.appendChild(tdE3);
  //  tdE3.textContent=`${Dubai.CockPurshHour()}`;
  //  Total2 = Total2 + Dubai.cookies[i];
  // }
  // let dlTotal2 =document.createElement("td");
  // r4El.appendChild(dlTotal2);
  // dlTotal2.textContent=(`${Total2}`);
  
  
  
  
  //  let r5El = document.createElement("tr");
  //  tableEl.appendChild(r5El);
  //  let thE4 = document.createElement("th");
  //  r5El.appendChild(thE4);
  //  thE4.textContent=Paris.loction;
  //  let Total3=0;
  //  for(let i=0; i<14 ; i++){
    //  let tdE4 = document.createElement("td");
    //  r5El.appendChild(tdE4);
    //  tdE4.textContent=`${Paris.CockPurshHour()}`;
    //  Total3 = Total3 + Paris.cookies[i];
    // }
    // let dlTotal3 =document.createElement("td");
    // r5El.appendChild(dlTotal3);
    // dlTotal3.textContent=(`${Total3}`);
    
    
    
    
    
    
    //  let r6El = document.createElement("tr");
    //  tableEl.appendChild(r6El);
    //  let thE5 = document.createElement("th");
    //  r6El.appendChild(thE5);
    //  thE5.textContent=Lima.loction;
    //  let Total4=0;
    //  for(let i=0; i<14 ; i++){
      //  let tdE5 = document.createElement("td");
      //  r6El.appendChild(tdE5);
//  tdE5.textContent=`${Lima.CockPurshHour()}`;
//  Total4 = Total4 + Lima.cookies[i];
// }
// let dlTotal4 =document.createElement("td");
// r6El.appendChild(dlTotal4);
// dlTotal4.textContent=(`${Total4}`);




//Tokyo.render();


//  let j=6;
//  let total=0;
//  for(let i=0 ; i<14;i++ ){
//  let liEl = document.createElement("li");
//  ulEl.appendChild(liEl);
//  if (j<12){
//  liEl.textContent = `${j} am: ${this.CockPurshHour(1,10)} cookies`;
// total=total+ this.CockPurshHour(1,10)}
//  else if (j>12) {
//     liEl.textContent = `${j-12} pm: ${this.CockPurshHour(1,10)} cookies`;
//     total=total+ this.CockPurshHour(1,10);
//  }
//  else if (j=12){
//     liEl.textContent = `${j} pm: ${this.CockPurshHour(1,10)} cookies`;
//     total=total+ this.CockPurshHour(1,10)}

//  j++;
//  }
//  let liEl = document.createElement("li");
//  ulEl.appendChild(liEl);
//  liEl.textContent =`Total:${total} cookies`;


//   }
// console.log(seattle.cookies);


// Seattle.randomCustHour(1, 10);
// Seattle.CockPurshHour(1,10);
// Seattle.render();


// let Tokyo ={
//     loction: "Tokyo",
//     MinCust:3,
//     MaxCust:24,
//     AvgCocPerCust:1.2,
//      randomCustHour: function (min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
//       } 

//       , CockPurshHour : function(a,b){
//      f = this.AvgCocPerCust * this.randomCustHour(a,b);
//      return f ;
//  }

//   , render : function(){
//  let mainEl = document.getElementById("seattle");
//  let h1El = document.createElement("h1");
//  h1El.textContent =this.loction;
//  mainEl.appendChild(h1El);
//  let ulEl = document.createElement("ul");
//  mainEl.appendChild(ulEl);
// //  let j=6;
// //  for(let i=0 ; i<=14;i++ ){
// //  let liEl = document.createElement("li");
// //  ulEl.appendChild(liEl);
// //  if (j<12){
// //  liEl.textContent = `${j} am: ${this.CockPurshHour(1,10)} cookies`;}
// //  else if (j>12) {
// //     liEl.textContent = `${j-12} pm: ${this.CockPurshHour(1,10)} cookies`;
// //  }
// //  else if (j=12){
// //     liEl.textContent = `${j} pm: ${this.CockPurshHour(1,10)} cookies`;}
// //  j++;
// //  }

// //   }

// // }
// Tokyo.randomCustHour(1, 10);
// Tokyo.CockPurshHour(1,10);
// Tokyo.render();

// let Dubai ={
//     loction: locations[2],
//     MinCust:11,
//     MaxCust:38,
//     AvgCocPerCust:3.7,
//      randomCustHour: function (min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
//       } 

//       , CockPurshHour : function(a,b){
//      f = this.AvgCocPerCust * this.randomCustHour(a,b);
//      return f ;
//  }

//   , render : function(){
//  let mainEl = document.getElementById("seattle");
//  let h1El = document.createElement("h1");
//  h1El.textContent =this.loction;
//  mainEl.appendChild(h1El);
//  let ulEl = document.createElement("ul");
//  mainEl.appendChild(ulEl);
//  let j=6;
//  for(let i=0 ; i<=14;i++ ){
//  let liEl = document.createElement("li");
//  ulEl.appendChild(liEl);
//  if (j<12){
//  liEl.textContent = `${j} am: ${this.CockPurshHour(1,10)} cookies`;}
//  else if (j>12) {
//     liEl.textContent = `${j-12} pm: ${this.CockPurshHour(1,10)} cookies`;
//  }
//  else if (j=12){
//     liEl.textContent = `${j} pm: ${this.CockPurshHour(1,10)} cookies`;}
//  j++;
//  }

//   }

// }
// Dubai.randomCustHour(11, 38);
// Dubai.CockPurshHour(1,10);
// Dubai.render();


// let Paris ={
//     loction: locations[3],
//     MinCust:20,
//     MaxCust:38,
//     AvgCocPerCust:2.3,
//      randomCustHour: function (min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
//       } 

//       , CockPurshHour : function(a,b){
//      f = this.AvgCocPerCust * this.randomCustHour(a,b);
//      return f ;
//  }

//   , render : function(){
//  let mainEl = document.getElementById("seattle");
//  let h1El = document.createElement("h1");
//  h1El.textContent =this.loction;
//  mainEl.appendChild(h1El);
//  let ulEl = document.createElement("ul");
//  mainEl.appendChild(ulEl);
//  let j=6;
//  for(let i=0 ; i<=14;i++ ){
//  let liEl = document.createElement("li");
//  ulEl.appendChild(liEl);
//  if (j<12){
//  liEl.textContent = `${j} am: ${this.CockPurshHour(1,10)} cookies`;}
//  else if (j>12) {
//     liEl.textContent = `${j-12} pm: ${this.CockPurshHour(1,10)} cookies`;
//  }
//  else if (j=12){
//     liEl.textContent = `${j} pm: ${this.CockPurshHour(1,10)} cookies`;}
//  j++;
//  }

//   }

// }
// Paris.randomCustHour(11, 38);
// Paris.CockPurshHour(1,10);
// Paris.render();


// let Lima ={
//     loction: locations[4],
//     MinCust:2,
//     MaxCust:16,
//     AvgCocPerCust:4.6,
//      randomCustHour: function (min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
//       } 

//       , CockPurshHour : function(a,b){
//      f = this.AvgCocPerCust * this.randomCustHour(a,b);
//      return f ;
//  }

//   , render : function(){
//  let mainEl = document.getElementById("seattle");
//  let h1El = document.createElement("h1");
//  h1El.textContent =this.loction;
//  mainEl.appendChild(h1El);
//  let ulEl = document.createElement("ul");
//  mainEl.appendChild(ulEl);
//  let j=6;
//  for(let i=0 ; i<=14;i++ ){
//  let liEl = document.createElement("li");
//  ulEl.appendChild(liEl);
//  if (j<12){
//  liEl.textContent = `${j} am: ${this.CockPurshHour(1,10)} cookies`;}
//  else if (j>12) {
//     liEl.textContent = `${j-12} pm: ${this.CockPurshHour(1,10)} cookies`;
//  }
//  else if (j=12){
//     liEl.textContent = `${j} pm: ${this.CockPurshHour(1,10)} cookies`;}
//  j++;
//  }

//   }

// }
// Lima.randomCustHour(11, 38);
// Lima.CockPurshHour(1,10);
// Lima.render();