const loadCalcPage = document.getElementById("loadCalculator");
const loadToDoPage = document.getElementById("loadToDo");
const loadHomePage = document.getElementById("loadHome");

$(".pageLoad").load("./home.html");

loadCalcPage.addEventListener("click", ()=>{
    $(".pageLoad").load("./calculator.html");
})

loadToDoPage.addEventListener("click", ()=>{
    $(".pageLoad").load("./toDo.html");
})

loadHomePage.addEventListener("click", ()=>{
    $(".pageLoad").load("./home.html");
})
