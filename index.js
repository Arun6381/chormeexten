let myleads = []
let oldleads =[]
const inputel = document.getElementById("input-el")
const inputbtn = document.getElementById("input-btn")
const ulel = document.getElementById("ul-el")
const delectbtn = document.getElementById("delect-btn")
 
const leadsfromlocal=JSON.parse(localStorage.getItem("myleads") )


if(leadsfromlocal){
  myleads = leadsfromlocal
  render(myleads)
}

function render(leads){
  let listitems =""
    for (let i=0;i<leads.length;i++){
       listitems += `
       <li>
       <a target='_blank' href="${leads[i]}">
           ${leads[i]}
       </a>
       `
 }

ulel.innerHTML =listitems

}
delectbtn.addEventListener("dblclick",function(){
  localStorage.clear()
  myleads = []
render(myleads)

})
 
console.log(leadsfromlocal)

inputbtn.addEventListener("click",function(){

       myleads.push(inputel.value)
       inputel.value = ""

       localStorage.setItem("myleads",JSON.stringify(myleads))
       render( myleads)

       console.log(localStorage.getItem("myleads"))

})


