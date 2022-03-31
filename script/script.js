// get display
const Display = document.getElementById("display")
// const keyboard =  document.getElementById("tr1")

// declared variables
let a = "";
let b = "";
let operator2 = "";
let o1 ="";
let dotPresentA = false;
let dotPresentB = false;
let clipBoard = "";
let logInnerHTML = '';
let overflow = false;
let displayOperator ="";
display()

//logic for UI

// function ui(){
//     if((o1==""&&(a=="")){
//         keyboard.innerHTML = "<three-el-wel>"
//     }
//     if(((o1!=="")&&(a==""))||((01=="")&&(a!==""))){
//         keyboard.innerHTML = "<three-el>"
//     }
//     if ((a!=="")&&(o1!=="")||(a.length>2)||((a!=="")&&(operator2!==""))){
//         keyboard.innerHTML = "<four-el>"
//     }
// }

// keypress event listener
document.addEventListener("keypress" , (e) => {
    if(e.key == "="){
        equals()
    }else if(e.key =="d"||e.key == "D"){
        del();
    }else if(e.key == "c"||e.key == "C"){
        allClear();
        console.log("esc clicked")
    }else send(`${e.key}`)
})

//logic for calc
function send(i){
     // for continuation of calculation after equals
    //  if((!a)&&(!b)&&(!o2)){
    //     if ((i=="+")||(i=="-")||(i=="*")||(i=="/")||(i=="%")){
            
    //     if(clipBoard){
    //         a = clipBoard
    //         operator2 = i
    //     }
    // }
    // }
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
        display()
    }   
    }
}

function equals(){
    let num ="";
    if(a&&b){
    if(operator2 == ""){
        result = a
    }
    if(operator2 == "/"){
        if (b == "0"){
            result = "cannot divide by zero"
        }else
            num =  parseFloat(o1+a)/parseFloat(b)
            result = Math.round(num * 100) / 100

    }else if (operator2=="*"){
        num = parseFloat(o1+a)*parseFloat(b)
        result = Math.round(num * 100) / 100
    }else if(operator2 == "%"){
        num = parseFloat(o1+a)%parseFloat(b)
        result = Math.round(num * 100) / 100
    }else if(operator2 == "+"){
        num = parseFloat(o1+a)+parseFloat(b)
        result = Math.round(num * 100) / 100
    }else if(operator2 == "-"){
        num = parseFloat(o1+a) - parseFloat(b)
        result = Math.round(num * 100) / 100
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
    displayOperator = ""
    overflow = false
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
        }else overflow = false
    }else Display.style.fontSize = "50px";
}

function display(){
    // ui()
    operatorDisplay()
    Display.innerHTML = `${o1} ${a} ${displayOperator} ${b}`
    ifFontChange()
    
    console.log(`${o1} ${a} ${displayOperator} ${b}`)
    updateLog()
    
}
function operatorDisplay(){
    if(operator2=="*"){
        displayOperator = "x"
    }else if(operator2=="/"){
        displayOperator = "&divide;"
    } else displayOperator = operator2
}
function del(){
            if(a){
                if(operator2){
                    if(b){ if(b.charAt(b.length-1)=="."){
                        b = b.slice(0,-1);
                        dotPresentB = false;
                    } else b = b.slice(0,-1) }
                     else operator2 = ''
                }else { if(a.charAt(a.length-1)=="."){
                    a = a.slice(0,-1);
                    dotPresentA = false;
                }else a = a.slice(0,-1)}

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

// Popup window code
function newPopup(url) {
    popupWindow = window.open(
        url,'popUpWindow','height=380,width=300')
}
