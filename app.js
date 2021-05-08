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

   Shop.prototype.footer= function(){
    let r7El=document.createElement("tr");
    tableEl.appendChild(r7El);
    let thE6 = document.createElement("th");
      r7El.appendChild(thE6);
      thE6.textContent="total";

      let sumcolumm = 0;
    let time1 =(time.length-1)
    for(let i=1; i<time1 ;i++){
       sumcolumn = 0;
       
  
       for (let j=0;j<ShopArray.length; j++){
         // let name=ShopArray[j].cookies
        // console.log(name)
        // console.log(ShopArray[j],i);
         sumcolumm += ShopArray[j].cookies[(i-1)];

        //  console.log(ShopArray[j].cookies[(i-1)])
      }   
       console.log(sumcolumm) 
      let tdE3 =document.createElement("td");
      r7El.appendChild(tdE3);
      tdE3.textContent=(sumcolumm);
    }  
     let sum = 0
     for (let i=0;i<ShopArray.length;i++){
       sum = sum+ShopArray[i].total 
       
    } 
    console.log(sum)  
    let tdE4 =document.createElement("td");
    r7El.appendChild(tdE4);
    tdE4.textContent=(sum);}


    
  
   
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
      // dlTotal.textContent=(ShopArray[i].total); 
      
      
      
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

      let sumcolumm = 0;
    let time1 =(time.length-1)
    for(let i=1; i<time1 ;i++){
       sumcolumn = 0;
       
  
       for (let j=0;j<ShopArray.length; j++){
         // let name=ShopArray[j].cookies
        // console.log(name)
        // console.log(ShopArray[j],i);
         sumcolumm += ShopArray[j].cookies[(i-1)];

        //  console.log(ShopArray[j].cookies[(i-1)])
      }   
       console.log(sumcolumm) 
      let tdE3 =document.createElement("td");
      r7El.appendChild(tdE3);
      tdE3.textContent=(sumcolumm);
    }  
     let sum = 0
     for (let i=0;i<ShopArray.length;i++){
       sum = sum+ShopArray[i].total 
       
    } 
    console.log(sum)  
    let tdE4 =document.createElement("td");
    r7El.appendChild(tdE4);
    tdE4.textContent=(sum);


  




  
    

    
    
    let branchForm = document.getElementById('branchForm')
    branchForm.addEventListener('submit', addABranch);
    
    function addABranch(event){
      event.preventDefault();
      let location = event.target.loc.value;
      let MinCust = event.target.min.value;
      let MaxCust = event.target.max.value;
      let AvgCocPerCust = event.target.avg.value;
      
       tableEl.removeChild(tableEl.lastChild);

      
      
      let newBranch = new Shop(location , MinCust , MaxCust , AvgCocPerCust,)
      newBranch.render();
      newBranch.footer();
      newBranch.totalco();
      
  
    }
    