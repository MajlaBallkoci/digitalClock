const oret= document.querySelector('#ore');
const minutat= document.querySelector('#min');
const sekondat= document.querySelector('#sek');
const amOsePm= document.querySelector('#ampm');

function oraDixhitale(){
    let h = new Date().getHours();
    let m= new Date().getMinutes();
    let s= new Date().getSeconds();
    let ampm = "AM";
    if (h>12){
        h= h-12;
        ampm= "PM";
    }  
    h = h<10 ? "0"+h : h;
    m = m<10 ? "0"+m : m;
    s = s<10 ? "0"+s : s;

    oret.innerText=h;
    minutat.innerText=m;
    sekondat.innerText=s;
    amOsePm.innerText= ampm;


    setTimeout(()=>{
oraDixhitale()
    }, 1000)
}

oraDixhitale();
