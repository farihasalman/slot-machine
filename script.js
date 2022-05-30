let value1=document.getElementById("value1")
let value2=document.getElementById("value2")
let value3=document.getElementById("value3")

let inspeed=document.getElementById("inspeed")

let values=['😀','🥰','😂','🥶','😎','🥵','😇']

function getrandomvalue(){
    return values[Math.floor(Math.random()*7)]
}

let animationId;
function updateAnimation(newSpeed){
    if(animationId) clearInterval(animationId)
    animationId=setInterval(()=>{
        value1.innerText=getrandomvalue()
        value2.innerText=getrandomvalue()
        value3.innerText=getrandomvalue()
    },1000/newSpeed)
}
window.onchange=function(event){
    //root element
    document.documentElement.style.setProperty('--speed',event.target.value)
    updateAnimation(event.target.value)
}