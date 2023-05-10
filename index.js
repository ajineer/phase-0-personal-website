const listOfItems = document.getElementById("listItems");
const entBtn = document.getElementById("EnterItem");
let userInput = document.getElementById('toDo');


entBtn.addEventListener("click", ()=>{

    if(userInput.value !== ""){
        let toDoItem = document.createElement('li');
        let chkBox = document.createElement("input");
        
        chkBox.type = "checkbox"
        toDoItem.innerText = userInput.value;
        toDoItem.appendChild(chkBox);
        listOfItems.appendChild(toDoItem);

    }else{
        alert("You must enter something!");
    }
})



