const entBtn = document.getElementById("EnterItem");
let userInput = document.getElementById('toDo');
let itemCount = 0;

function createNewElement(tagName, idName, aClassName){
    let newElm = document.createElement(tagName);
    newElm.setAttribute("id", idName);
    newElm.setAttribute("class", aClassName);
    return newElm;
}

entBtn.addEventListener("click", (e)=>{

    e.preventDefault();

    if(userInput.value !== "" && itemCount <= 12){
        const listOfItems = document.getElementById("toDoList");
        //let checkBox = document.createElement('button');
        let checkBox = createNewElement("button", "checKBox", "");
        let todoItem = document.createElement('li');
        let trashButton = document.createElement('button');
        let todoText = document.createElement('span');
        
        todoText.innerText = userInput.value;
         
        trashButton.setAttribute("id", "trashButton");
        trashButton.innerHTML = '<i>&#10006;</i>'
        trashButton.addEventListener("click", ()=>{
            todoItem.remove();
            itemCount--;
        })
        
        //checkBox.setAttribute("id", "checkBox");
        checkBox.innerHTML = '<i>&check;</i>';
        checkBox.addEventListener("click", ()=>{
            checkBox.style.backgroundColor = "limegreen";
        })
        
        todoItem.appendChild(todoText);
        todoItem.appendChild(checkBox);
        todoItem.appendChild(trashButton);
        listOfItems.appendChild(todoItem);
        itemCount++;

    }else{
        alert("You must enter something or their are too many items in list.");
    }
    userInput.value = "";
})







