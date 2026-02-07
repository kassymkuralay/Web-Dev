const input = document.getElementById("taskinput");
const addbtn = document.getElementById("addbtn");
const tasklist = document.getElementById("tasklist");

addbtn.addEventListener("click", () => {
    const text = input.value.trim();
    if(text === "") return ;

    const task = document.createElement("div") ;
    task.classList.add("tasks") ;
    
    const checkbox = document.createElement("input") ;
    checkbox.type = "checkbox" ;

    const span = document.createElement("span");
    span.textContent = text ;

    const delbtn = document.createElement("button");
    delbtn.innerHTML = '<img src="t.jpg" alt="delete">';

    checkbox.addEventListener("change" , () => {
    span.style.textDecoration = checkbox.checked ? "line-through" : "none" ;
}) ;

delbtn.addEventListener("click", () => {
    task.remove() ;
})

    task.appendChild(checkbox) ;
    task.appendChild(span) ;
    task.appendChild(delbtn);
    tasklist.appendChild(task) ;

    input.value = "" ;
});


