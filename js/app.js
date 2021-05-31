`Use strict`
//create the header of the table 
let times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let locations = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima']
// Create the table 
let placeEl = document.getElementById('seattle');
let tableEl = document.createElement('table');
placeEl.appendChild(tableEl);
let thfEl = document.createElement('th')
tableEl.appendChild(thfEl);
thfEl.textContent = '';

for (let index = 0; index < times.length; index++) {
  let thEl = document.createElement('th');
  tableEl.appendChild(thEl);
  thEl.textContent = times[index];
}
let thtEl=document.createElement('th')
tableEl.appendChild(thtEl);
  thtEl.textContent = 'daily location total';

// create the constructor
let dataArray = [];
let cookies = [];
function Shop(location, minCust, maxCust, AvgCookies) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.AvgCookies = AvgCookies;
  dataArray.push(this);
}
//fill the constructor
// let seattle = new Shop("seattle", 23, 65, 6.3);
// let Tokyo = new Shop("Tokyo", 3, 24, 1.2);
// let Dubai = new Shop("Dubai", 11, 38, 3.7);
// let Paris = new Shop("Paris", 20, 38, 2.3);
// let Lima = new Shop("Lima", 2, 16, 4.6);

// generate a random number of customers per hour.
Shop.prototype.randomNum = function () { 
  return Math.random() * (this.maxCust - this.minCust ) + this.minCust;
 }

Shop.prototype.cookiesPurch = function () {
  let r = parseInt(this.AvgCookies * this.randomNum());
  cookies.push(this);
  return r
}
// fill the table 

Shop.prototype.render = function () {
  // tableEl.textContent='';
   let trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  let tdfEl = document.createElement('td');
  trEl.appendChild(tdfEl)
  tdfEl.textContent = `${this.location}`;
  let total1=0;
  for (let index = 0; index < times.length; index++) {
    let tdEl = document.createElement('td');
    trEl.appendChild(tdEl)
    tdEl.textContent =this.cookiesPurch();
    total1=total1+ parseInt(tdEl.textContent);
  }
  
let tdtoEl=document.createElement('td');
trEl.appendChild(tdtoEl);
tdtoEl.textContent = total1;


}
// call the functions
// seattle.render();
// Tokyo.render();
// active the submit in the form 
let branchFormEl=document.getElementById('branchForm');
branchFormEl.addEventListener('submit', handle)
function handle(event){
  event.preventDefault();
  let location = event.target.loc.value;
  let minCust=event.target.min.value;
  let maxCust=event.target.max.value;
  let AvgCookies= event.target.avg.value;
  let newObj= new Shop(location,minCust,maxCust,AvgCookies)
  setitems()
  newObj.render()
}
// set the data in loal storage
function setitems(){
  let data =JSON.stringify(dataArray);
  localStorage.setItem('Shop',data);

}

function getitems(){
  let st=localStorage.getItem('Shop');
  let nor=JSON.parse(st);
  console.log(nor)
  let obj;
  if (nor !== null){
    for (let index=0; index<nor.length ; index++){

      obj = new Shop (nor[index].location , nor[index].minCust , nor[index].maxCust , nor[index].AvgCookies); 
      console.log(obj)
      
      obj.render();
    }
  }

}
getitems()
console.log(dataArray)