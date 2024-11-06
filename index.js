let kk=document.querySelector(".kk")

console.log(kk)


let open=false
kk.addEventListener("click",function(e){
   if(!open){
    document.querySelector(".lll").classList.add("lll_mobile")
    open=!open
   }
   else{
    document.querySelector(".lll").classList.remove("lll_mobile")
    open=!open
   }

})