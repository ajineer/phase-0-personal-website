function set(num){
    let v = document.getElementById("output");
    v.value += num;
}

const loadCalc = document.getElementById("loadCalculator");
const loadToDo = document.getElementById("loadToDo");
const loadHome = document.getElementById("loadHome");

$(".pageLoad").load("./home.html");

loadCalc.addEventListener("click", ()=>{
    $(".pageLoad").load("./calculator.html");
})

loadToDo.addEventListener("click", ()=>{
    $(".pageLoad").load("./toDo.html");
})

loadHome.addEventListener("click", ()=>{
    $(".pageLoad").load("./home.html");
})
