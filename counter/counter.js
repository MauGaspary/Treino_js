var count = 0;

document.getElementById("botaoReduzir").onclick = function(){
    count-=1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("botaoReset").onclick = function(){
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("botaoAumentar").onclick = function(){
    count+=1;
    document.getElementById("countLabel").innerHTML = count;
}