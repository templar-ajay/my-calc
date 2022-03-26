// get display
const Display = document.getElementById("display")

// declared variables
let a = "";
let b = "";
let operator2 = "";
let o1 ="";
let dotPresentA = false;
let dotPresentB = false;
let clipBoard;
let logInnerHTML = '';
let overflow = false;


//logic
function send(i){
    if(!overflow){

    if(((!o1)||(o1=="+"||o1=="-"))&&(i=="+"||i=="-")&&(!a)){
        o1 = i
    }
    if((!operator2)&&(i!=="*")&&(i!=="/")&&(i!=="%")&&(i!=="+")&&(i!=="-")){
        if((a=="0")&&(i=="0")){
            a = i
        }else if((i==".")&&(!dotPresentA)){
            a += i    
            dotPresentA = true        
        } else if(i!=="."){
            a += i
        }
    }
    if((a)&&(!b)&&((i=="+")||(i=="-")||(i=="/")||(i=="*")||(i == "%"))){
        operator2 = i
    }
    if((a)&&(operator2)){
        if((b==0)&&(i=="0")){
            b = i
        }else if((i===".")&&(!dotPresentB)){
            b += i
            dotPresentB = true
        } else if((i!==".")&&("-"!==i)&&("+"!==i)&&("/"!==i)&&("*"!==i)&&("%"!==i)){
            b += i
        }
    }
    display();
    if((a)&&(b)&&((i=="-")||(i=="+")||(i=="/")||(i=="%")||(i=="*"))){
        equals()
        a = Display.innerHTML;
        operator2 = i
        // display()
    }   
    }
}

function equals(){
    if(a&&b){
    if(operator2 == ""){
        result = a
    }
    if(operator2 == "/"){
        if (b == "0"){
            result = "cannot divide by zero"
        }else
            result = parseFloat(o1+a)/parseFloat(b)
    }else if (operator2=="*"){
        result = parseFloat(o1+a)*parseFloat(b)
    }else if(operator2 == "%"){
        result = parseFloat(o1+a)%parseFloat(b)
    }else if(operator2 == "+"){
        result = parseFloat(o1+a)+parseFloat(b)
    }else if(operator2 == "-"){
        result = parseFloat(o1+a) - parseFloat(b)
    }
    clear()
    clipBoard = result
    display()
    Display.innerHTML = clipBoard
    ifFontChange()
    console.log(clipBoard)
    // updateLog()
}
}

function clear(){
    a = ""
    b = ""
    operator2 = ""
    o1 = ""
    dotPresentA = false
    dotPresentB = false
}
function allClear(){
    clear()
    display()
}
function ifFontChange(){
    
    if(Display.innerHTML.length>10){
        Display.style.fontSize = "25px";
        if(Display.innerHTML.length>20){
            overflow = true
            let x = Display.innerHTML;
            Display.innerHTML = "plz reduce the input value"
            setTimeout(function(){
               Display.innerHTML = x} , 2200)
        }
    }else Display.style.fontSize = "50px";
}

function display(){
    Display.innerHTML = `${o1} ${a} ${operator2} ${b}`
    ifFontChange()
    console.log(`${o1} ${a} ${operator2} ${b}`)
    updateLog()
    
}
function del(){
            if(a){
                if(operator2){
                    if(b){
                        b = b.slice(0,-1)
                    } else operator2 = ''
                }else a = a.slice(0,-1)
            } else o1 = ''
    display()
}

function copy(){
    navigator.clipboard.writeText(clipBoard)
    Display.style.fontSize = "25px"
    Display.innerHTML = "output copied to Clipboard"
    setTimeout(function(){
        Display.innerHTML = clipBoard
    }, 2200)
}
function updateLog(){
    if(!o1&&!a&&!operator2&&!b){
        logInnerHTML += ` = <br> ${clipBoard}`
    }
    logInnerHTML += `${o1} ${a} ${operator2} ${b} <br>`
}
function openLog(){
    // window.open("logs.html");
    console.log(logInnerHTML)
    localStorage.setItem("InnerHtml",logInnerHTML)
    window.open("logs.html");
}
