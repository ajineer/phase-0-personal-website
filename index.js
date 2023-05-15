const entBtn = document.getElementById("EnterItem");
let userInput = document.getElementById('toDo');
let itemCount = 0;
let charCount = userInput.value.length;

function createNewElement(tagName, idName, aClassName){
    let newElm = document.createElement(tagName);
    newElm.setAttribute('id', idName);
    newElm.setAttribute('class', aClassName);
    return newElm;
}

entBtn.addEventListener("click", (e)=>{

    e.preventDefault();
    let checked = false;

    if(userInput.value !== "" && itemCount <= 12 && charCount <= 14){
        const listOfItems = document.getElementById('toDoList');
        let completeBox = createNewElement('button', 'checKBox', 'boxCheck');
        console.log(completeBox.getAttribute('id'));
        let todoItem = createNewElement('li', "", "")
        let trashButton = createNewElement('button', 'trashButton', '');
        let todoText = createNewElement('p', '', '');

        
        todoText.innerText = userInput.value;
        trashButton.innerHTML = '<i>&#10006;</i>'
        completeBox.innerHTML = '<i>&check;</i>';
        
        todoItem.appendChild(todoText);
        todoItem.appendChild(completeBox);
        todoItem.appendChild(trashButton);
        listOfItems.appendChild(todoItem);
        itemCount++;

        completeBox.addEventListener("click", ()=>{
            if(checked === false){
                completeBox.style.backgroundColor = "green";
                checked = true;
                todoText.style.textDecoration = "Line-through";
            }else{
                completeBox.style.backgroundColor = "limegreen";
                checked = false;
                todoText.style.textDecoration = "none";
            }
        })

        trashButton.addEventListener("click", ()=>{
            todoItem.remove();
            itemCount--;
        })

    }else{
        alert("You must enter something or their are too many items in list.");
    }
    userInput.value = "";
})







