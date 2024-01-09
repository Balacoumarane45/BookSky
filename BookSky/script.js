var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopup=document.getElementById("popup-button")

function popup(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"

}

var cancel=document.getElementById("cancel")
cancel-addEventListener("click",function(event){
    event.preventDefault()
    

})

function popupclose(){
    popupoverlay.style.display="none"
    popupbox.style.display="none"


}

var container=document.querySelector(".container")
var booktitle=document.getElementById("book-title")
var bookauthor=document.getElementById("book-author")
var description=document.getElementById("short")
var add=document.getElementById("add")

add.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${description.value}</p>
    <button onclick="deletebook(event)">Delete</button>
    `

    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})

function deletebook(event){
    event.target.parentElement.remove()
}