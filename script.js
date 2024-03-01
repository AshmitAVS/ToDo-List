const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
const counter=document.getElementById("counter");
var count=1;
function addTask(){
    if(inputBox.value===''){
        alert("You Must Write Something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        counter.textContent=count;
        count++;
    }
    inputBox.value="";
    saveData();
}

listContainer.addEventListener("click",function(event){
    if(event.target.tagName==="LI"){
        event.target.classList.toggle("checked");
        saveData();
    }
    else if(event.target.tagName==="SPAN"){
        event.target.parentElement.remove();
        count--;
        counter.textContent=count-1;
        saveData();
    }
},false);

