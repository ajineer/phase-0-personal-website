const entBtn = document.getElementById("EnterItem");
let userInput = document.getElementById('toDo');

entBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    if(userInput.value !== ""){
        const listOfItems = document.getElementById("toDoList");
        let checkBox = document.createElement('button');
        let todoItem = document.createElement('li');
        let trashButton = document.createElement('button');
        let todoText = document.createElement('span');
        
        todoText.innerText = userInput.value;
         
        trashButton.setAttribute("id", "trashButton");
        trashButton.innerHTML = '<i>&#10006;</i>'
        trashButton.addEventListener("click", ()=>{
            todoItem.remove();
        })
        
        checkBox.setAttribute("id", "checkBox");
        checkBox.innerHTML = '<i>&check;</i>';
        checkBox.addEventListener("click", ()=>{
            checkBox.style.backgroundColor = "limegreen";
        })
        
        todoItem.appendChild(todoText);
        todoItem.appendChild(checkBox);
        todoItem.appendChild(trashButton);
        listOfItems.appendChild(todoItem);

    }else{
        alert("You must enter something!");
    }
})







