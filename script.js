let cashier = 0
let c_tot = 0
let c_num = 0
let overall = 0
let o_tot = 0
let o_num = 0


cashierScoreBtn1 = document.getElementById("cashier-1")
cashierScoreBtn1.addEventListener('click',function(){
    c_tot = c_tot + 1
    c_num = c_num + 1
    cashier = c_tot / c_num
    cashierScore.textContent = cashier
})

cashierScoreBtn2 = document.getElementById("cashier-2")
cashierScoreBtn2.addEventListener('click',function(){
    c_tot = c_tot + 2
    c_num = c_num + 1
    cashier = c_tot / c_num
    cashierScore.textContent = cashier
})

cashierScoreBtn3 = document.getElementById("cashier-3")
cashierScoreBtn3.addEventListener('click',function(){
    c_tot = c_tot + 3
    c_num = c_num + 1
    cashier = c_tot / c_num
    cashierScore.textContent = cashier
})

cashierScoreBtn4 = document.getElementById("cashier-4")
cashierScoreBtn4.addEventListener('click',function(){
    c_tot = c_tot + 4
    c_num = c_num + 1
    cashier = c_tot / c_num
    cashierScore.textContent = cashier
})

overallScoreBtn1 = document.getElementById("overall-1")
overallScoreBtn1.addEventListener('click',function(){
    o_tot = o_tot + 1
    o_num = o_num + 1
    overall = o_tot / o_num
    overallScore.textContent = overall
})

overallScoreBtn2 = document.getElementById("overall-2")
overallScoreBtn2.addEventListener('click',function(){
    o_tot = o_tot + 2
    o_num = o_num + 1
    overall = o_tot / o_num
    overallScore.textContent = overall
})

overallScoreBtn3 = document.getElementById("overall-3")
overallScoreBtn3.addEventListener('click',function(){
    o_tot = o_tot + 3
    o_num = o_num + 1
    overall = o_tot / o_num
    overallScore.textContent = overall
})

overallScoreBtn4 = document.getElementById("overall-4")
overallScoreBtn4.addEventListener('click',function(){
    o_tot = o_tot + 4
    o_num = o_num + 1
    overall = o_tot / o_num
    overallScore.textContent = overall
})

let cashierScore = document.getElementById("cashierScore")
let overallScore = document.getElementById("overallScore")

let showHide = document.getElementById("show-hide")
showHide.addEventListener('click',function(){
    let scoresDiv = document.getElementById("show-scores")

    cashierScore.textContent = cashier
    overallScore.textContent = overall
    
    let btnText = showHide.textContent
    if(btnText === "Display Ratings"){
        scoresDiv.style.display = "block"
        showHide.innerHTML = "Hide Ratings"

    }
    else{
        scoresDiv.style.display = "none"
        showHide.innerHTML = "Display Ratings"
    }
})