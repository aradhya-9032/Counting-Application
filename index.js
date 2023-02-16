let count = 0;
//decreasebtn
document.getElementById("decreasebtn").onclick = function(){
    count -=1;
    document.getElementById("count").innerHTML = count;
}

//restbtn
document.getElementById("resetbtn").onclick = function(){
    count = 0;
    document.getElementById("count").innerHTML = count;
}

//increasebtn
document.getElementById("increasebtn").onclick = function(){
    count +=1;
    document.getElementById("count").innerHTML = count;
}