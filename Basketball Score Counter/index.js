let team1btn1 = document.getElementById("btn-1-team1")
let team1btn2 = document.getElementById("btn-2-team1")
let team1btn3 = document.getElementById("btn-3-team1")
let team1score = document.getElementById("score-1")
let homescore = 0 

let team2btn1 = document.getElementById("btn-1-team2")
let team2btn2 = document.getElementById("btn-2-team2")
let team2btn3 = document.getElementById("btn-3-team2")
let team2score = document.getElementById("score-2")
let home2score = 0 

function add1_team1(){
    homescore += 1
    team1score.textContent = homescore
}
function add2_team1(){
    homescore += 2
    team1score.textContent = homescore
}
function add3_team1(){
    homescore += 3
    team1score.textContent = homescore
}



function add1_team2(){
    home2score += 1
    team2score.textContent = home2score
}
function add2_team2(){
    home2score += 2
    team2score.textContent = home2score
}
function add3_team2(){
    home2score += 3
    team2score.textContent = home2score
}
