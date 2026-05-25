const display = document.getElementById("display");
const historyList = document.getElementById("history-list");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function showSection(id){

    document.querySelectorAll(".section").forEach(section=>{
        section.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}

function addHistory(text){

    const item = document.createElement("div");

    item.classList.add("history-item");

    item.innerText = text;

    historyList.prepend(item);

    localStorage.setItem(
        "calcHistory",
        historyList.innerHTML
    );
}

window.onload = ()=>{

    historyList.innerHTML =
        localStorage.getItem("calcHistory") || "";
};

function calculate(){

    try{

        let expression =
            display.value.replace("^","**");

        let result = eval(expression);

        addHistory(`${display.value} = ${result}`);

        display.value = result;

    }catch{

        display.value = "ERROR";
    }
}

function scientific(type){

    let value = parseFloat(display.value);

    let result;

    if(type === "sin"){
        result = Math.sin(value * Math.PI / 180);
    }

    else if(type === "cos"){
        result = Math.cos(value * Math.PI / 180);
    }

    else if(type === "tan"){
        result = Math.tan(value * Math.PI / 180);
    }

    else if(type === "sqrt"){
        result = Math.sqrt(value);
    }

    else if(type === "log"){
        result = Math.log10(value);
    }

    addHistory(`${type}(${value}) = ${result}`);

    display.value = result;
}

function convert(type){

    let value = parseFloat(display.value);

    let result;

    if(type === "cm_inch"){
        result = value / 2.54;
    }

    else if(type === "inch_cm"){
        result = value * 2.54;
    }

    else if(type === "kg_pound"){
        result = value * 2.20462;
    }

    else if(type === "pound_kg"){
        result = value / 2.20462;
    }

    else if(type === "c_f"){
        result = (value * 9/5) + 32;
    }

    else if(type === "f_c"){
        result = (value - 32) * 5/9;
    }

    addHistory(`${value} → ${result}`);

    display.value = result;
}

function toggleHistory(){

    const panel =
        document.getElementById("historyPanel");

    panel.classList.toggle("show");
}

function clearHistory(){

    localStorage.removeItem("calcHistory");

    historyList.innerHTML = "";
}