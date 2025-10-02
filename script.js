let createNotes = document.querySelector(".new");
let deletebtn = document.querySelector(".deletebtn");
let inputbox = document.querySelector(".input");
let container = document.querySelector(".notesContainer");

function shownotes(){
    container.innerHTML= localStorage.getItem("notes");
}
shownotes();

// function stclear(){
//     container.innerHTML=localStorage.clear();
// }
// stclear();
function updateStorage(){
    localStorage.setItem("notes" , container.innerHTML);
}

createNotes.addEventListener("click", () => {
    let newp = document.createElement("p");
    let imge = document.createElement("img");

    newp.classList.add("input");
    newp.setAttribute("contenteditable", "true");
    // imge.setAttribute("type","button");
    imge.src = "delete.png";
    imge.style.cursor = "pointer";



    container.appendChild(newp).appendChild(imge);
    // updateStorage();
})
container.addEventListener("click", (e) => {
    if(e.target.tagName=== "IMG"){

        e.target.parentElement.remove();
        updateStorage();

    }
    else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".input");
        notes.forEach(nt => {
            nt.onkeyup=function(){
                updateStorage();
            }
        });

    }
    if(
        (inputbox.innertext)===""
    ){
        inputbox.parentElement.remove();
    }

    document.addEventListener("keydown", event=>
    {
        if(event.key=== "Enter"){
            document.execCommand("insertLineBreak");
            event.preventDefault();
        }
    })

    // updateStorage();
});