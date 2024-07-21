var c=0;
const makeTwoDidNum =(x)=>{
    if(x>9)
        return x;
    else
        return (`0${x}`);
}
let dobString=localStorage.getItem('dobStringInLocal');

//condition if data present in local Storage
if (dobString) {
    document.querySelector('#initialText').classList.add('hide');
    document.querySelector('#afterDobText').classList.remove('hide');
    calc();
}

function settingButton(){
c++;
if(c%2==0)
document.querySelector('#settingContainer').classList.add('hide');
else
document.querySelector('#settingContainer').classList.remove('hide');
};

function buttonClick(){
    document.querySelector('#initialText').classList.add('hide');
    document.querySelector('#afterDobText').classList.remove('hide');
    let dobString=document.querySelector('#dobInput').value;

    //storing
     localStorage.setItem('dobStringInLocal',dobString);
    
     calc(dobString);
    //  setInterval(()=>calc(dobString),1000);    
}


function calc(){
    let dobString=localStorage.getItem('dobStringInLocal');
    setInterval(()=>calc(dobString),1000);
    let dob=new Date(dobString);
    let todayDate=new Date();
    let sec=(todayDate - dob)/1000 ;
    
    let year=Math.floor(sec / (60*60*24*365));
    let month=Math.floor(((sec / (60*60*24*30))%12));
    let day = Math.floor((sec/(60*60*24))%30);
    let hour = Math.floor((sec/(60*60))%24);
    let min=Math.floor((sec/60%60));
    let second = Math.floor( (sec%60));
    addHTML(year,month,day,hour,min,second);
}

function addHTML(year,month,day,hour,min,second){    
   let conEle= document.querySelector('.timeContainer');
   conEle.innerHTML=`
   <div><h2>${makeTwoDidNum(year)}</h2><h2>Years</h2></div>
   <div><h2>${makeTwoDidNum(month)}</h2><h2>Month</h2></div>
   <div><h2>${makeTwoDidNum(day)}</h2><h2>Day</h2></div>
   <div><h2>${makeTwoDidNum(hour)}</h2><h2>Hour</h2></div>
   <div><h2>${makeTwoDidNum(min)}</h2><h2>Minute</h2></div>
   <div><h2>${makeTwoDidNum(second)}</h2><h2>Second</h2></div>`;
}

