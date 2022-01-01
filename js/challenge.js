let count=0
const subtractor=document.querySelector('#minus')
subtractor.addEventListener('click',(e)=>{
   
changeZero.innerHTML--
})
const adder=document.querySelector('#plus')
adder.addEventListener('click',(e)=>{
    
    changeZero.innerHTML++
    
})


 const bar=document.querySelector('#comment-input')
const changeZero=document.getElementById('counter')
const heart=document.querySelector('#heart')
const likes=document.querySelector('.likes')
const comment=document.querySelector('#comment-form #submit')
comment.addEventListener('click',(e)=>{e.preventDefault()
       
let input=document.querySelector(
    '#list')
    p=document.createElement('p')

p.textContent=bar.value
input.append(p)
document.querySelector('#comment-form').reset()
})

heart.addEventListener('click',(e)=>{e.preventDefault()
likes.textContent=`${changeZero.innerHTML} has been liked ${count=count+1} time(s)`
})
function timerIncrease(){
changeZero.innerHTML++;}
timerIncrease()
setInterval(timerIncrease,1000)
const pause= document.querySelector("#pause")

function pauser(){
    if (pause.innerText==='pause')
        pause.addEventListener('click',(e)=>{
    
        pause.textContent='resume';
      adder.disabled=true
      subtractor.disabled=true
      heart.disabled=true
      comment.disabled=true})
      else if (pause.innerHTML==='resume'){pause.addEventListener('click',(e)=>{console.log(e.target)
      
})}}
      
     

pauser()  
 
//console.log(changeZero.innerHTML)
//changeZero.addEventListener('click',(e)=>{
    //changeZero.innerHTML=adder
//})
