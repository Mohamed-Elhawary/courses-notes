/*global document, console, alert*/
/*jslint evil: true, plusplus: true*/
/*jslint regexp: true*/
/*eslint no-console: "no error"*/


/*var myInput = document.getElementById('input'),
    myDiv = document.getElementById('div');
    //myButton = document.getElementById('button');

myInput.onkeydown = function () {
    "use strict";
    myDiv.innerHTML = myInput.value * 18;
};*/

/*
var friends = [
    "ahmed",
    "mohamed",
    "ali",
    "tarik",
    "adham",
    "soha",
    "adel",
    "seham"
];
var special = friends.indexOf("mimi");
console.log(special);
var mySlice1 = friends.slice(2, 4);
console.log(mySlice1);
var mySlice2 = friends.slice(-7, -3);
console.log(mySlice2);
var lastItem1 = friends.pop();
console.log(lastItem1);
console.log(friends);
var firstItem1 = friends.shift();
console.log(firstItem1);
console.log(friends);
friends.pop();
friends.shift();
console.log(friends);
var lastItem2 = friends.pop();
console.log(lastItem2);
console.log(friends);
var firstItem2 = friends.shift();
console.log(firstItem2);
console.log(friends);

friends.reverse();
console.log(friends);

friends.sort();
console.log(friends);

friends.reverse();
console.log(friends);

var myString = "hello \"javascript\\\"";
console.log(myString);*/


/*var myString = "love javascript",
    x = myString.split(" "),
    y = x.join("&");
console.log(x);
console.log(y);
var sub = myString.substring(4, -5);
console.log(sub);

var sub2 = myString.slice(2, -5);
console.log(sub2);

var sub3 = myString.substr(-5, 13);
console.log(sub3);*/


/*var friends = 
    "ahmed triek love";
   
console.log(friends.indexOf("tr", -2));
console.log(friends.lastIndexOf("tr", -6));
console.log(friends.substring(0, 0));
console.log(friends.slice(2, -3));

var friends1 = [
     "ahmed",
    "mohamed",
    "ali",
    "tarik",
    "adham",
    "soha",
    "adel",
    "seham"
];
console.log(friends1.slice(2, -3));
console.log(friends1.lastIndexOf("adham", -2));
console.log(friends1.lastIndexOf("adham", -7));
console.log(friends1.indexOf("adham", -2));
console.log(friends1.indexOf("adham", -7));*/


/*var string1 = "   hello java",
    string2 = "google",
    trim = string1.trim(),
    link = string2.link("http://www.google.com");
console.log(string1);
console.log(trim);
console.log(link);*/


/*var myCar = {
    colour: "white",
    type  : "sedan",
    price : "1 million"
};
console.log(myCar["type"]);
console.log(myCar.type);

var mypr;
for (mypr in myCar) {
    console.log(mypr + ": " + myCar[mypr]);
}*/


/*var i = 0;
for (;;) {
    if (i > 10) {
        break;
    }
    i++;

    console.log(i);
}*/


/*function generateYears(start, end) {
    "use strict";
    var years;
    document.write("<select>");
    for (years = start; years <= end; years++) {
        document.write("<option value = \"" + years + "\">" + years +  "</option>");
    }
    document.write("</select>");

}
generateYears(1800, 2017);



var startValue = document.getElementById("start"),
    endValue = document.getElementById("end"),
    myButton = document.getElementById("btn");

startValue.onfocus = function () {
    'use strict';
    startValue.placeholder = "";
    endValue.placeholder = "to";
};

endValue.onfocus = function () {
    'use strict';
    endValue.placeholder = "";
    startValue.placeholder = "from";
};

myButton.onclick = function () {
    'use strict';
        
    if (startValue.value === "" || endValue.value === "") {
        alert("Please enter the year ");
        
    } else if (startValue.value < 1800 || endValue.value > 2017) {
        document.getElementById("warning").innerHTML = "you didn't follow the instructions";
    
    } else if (isNaN(startValue.value) || isNaN(endValue.value)) {
        document.getElementById("warning").innerHTML = "you must write only numbers";
    
    } else if (endValue.value < startValue.value) {
        document.getElementById("warning").innerHTML = "end value must be bigger than start value";
    
    } else if (startValue.value >= 1800 && endValue.value <= 2017) {
        
        var years;*/
        
        //for show the result in new window.
        /*document.write("<select>");
        for (years = startValue.value; years <= endValue.value; years++) {
            document.write("<option value = \"" + years + "\">" + years +  "</option>");
        }
        document.write("</select>");*/
        
        //for show the result in the same window
        /*for (years = startValue.value; years <= endValue.value; years++) {
            document.getElementById("select").innerHTML += "<option value = '" + years + "'>" + years + "</option>";
        }
    }
};*/


/*var x = Math.max(1000.5);
console.log(x);
console.log(Math.ceil(x));
console.log(Math.round(x) + Math.floor(x));
console.log(Math.floor(Math.round(x) + 10.5));

var y = "I Love ELzero web school67",
    r1 = y.replace(/[l]/gi, "@"),
    r2 = y.replace(/[^l]/gi, "@"),
    r3 = y.replace(/[^l]/g, "@"),
    r4 = y.replace(/[a-e]/gi, "@"),
    r5 = y.replace(/[^a-e]/gi, "@"),
    r6 = y.replace(/[A-e]/g, "@"),
    r7 = y.replace(/[^A-e]/g, "@"),
    r8 = y.replace(/[3-7]/g, "@"),
    r9 = y.replace(/[3-7]/, "@"),
    r10 = y.replace(/[^3-7]/, "@"),
    r11 = y.replace(/[0-8a-z]/, "@"),
    r12 = y.replace(/[^0-8a-s]/, "@"),
    r13 = y.replace(/[0-8a-s]/gi, "@"),
    r14 = y.replace(/[0-8a-sA-Z]/g, "@"),
    r15 = y.replace(/[^0-8a-sA-Z]/g, "@"),
    r16 = y.replace(/[ 0-8 a-sA-Z]/g, "@"),
    r17 = y.replace(/ /g, "@");

console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);
console.log(r5);
console.log(r6);
console.log(r7);
console.log(r8);
console.log(r9);
console.log(r10);
console.log(r11);
console.log(r12);
console.log(r13);
console.log(r14);
console.log(r15);
console.log(r16);
console.log(r17);*/


/*var z = "i love elzeeeero weeb scholeeeeeeeeeee",
    r18 = z.replace(/e+/, "@"),
    r19 = z.replace(/e+/g, "@"),
    r20 = z.replace(/e{2}/, "@"),
    r21 = z.replace(/e{2}/g, "@"),
    r22 = z.replace(/e{2,5}/, "@"),
    r23 = z.replace(/e{2,5}/g, "@"),
    r24 = z.replace(/e{2,}/, "@"),
    r25 = z.replace(/e{2,}/g, "@");
    
console.log(r18);
console.log(r19);
console.log(r20);
console.log(r21);
console.log(r22);
console.log(r23);
console.log(r24);
console.log(r25);*/


/*var myDate1 = new Date(),
    myDate2 = new Date(-100000000000),
    myDate3 = new Date(2016, 0, 24, 10, 33, 30, 0),
    myDate4 = new Date("4-25-2016 9:20:50");
    
var myDate5 = Date.now();
var myDate6 = new Date().valueOf();
var myDate7 = new Date().getTime();

    
console.log(myDate1.getSeconds());
console.log(myDate2);
console.log(myDate3);
console.log(myDate4);
console.log(myDate5);
console.log(myDate6);
console.log(myDate7);*/


/*var d1 = new Date(),
    d2 = new Date(),
    d3 = new Date(),
    d4 = new Date(),
    d5 = new Date(),
    d6 = new Date(),
    d7 = new Date(),
    d8 = new Date(),
    d9 = new Date(),
    d10 = new Date();

d1.setDate(6);
d2.setHours(8);
d3.setMinutes(120);
d4.setSeconds(50);
d5.setMilliseconds(50);
d6.setMonth(-2);
d7.setFullYear(2012);
d8.setHours(15, 23, 40);
d9.setMonth(5, 25);
d10.setUTCHours(8, 40, 50);
 
console.log(d1);
console.log(d2);
console.log(d3);
console.log(d4);
console.log(d5);
console.log(d6);
console.log(d7);
console.log(d8);
console.log(d9);
console.log(d10);*/


/*console.log(new Date(2015, -1, 25, 23, 45));
console.log(new Date("2016/10/16 16:24:45"));
console.log(new Date (Date.parse("16 oct 2016 16:24:45")));
console.log(Date.parse("16 oct 2016 16:24:45"));
console.log(Date.parse(2016));

var d1 = new Date("16 oct 2016"),
    d2 = new Date(2016, 9, 16),
    d3 = new Date(),
    d4 = new Date();

d4.setFullYear(2015, 10, 25);
console.log(d4);
console.log(d1.getTime());
console.log(d1.valueOf());
console.log(d2.getTime());
console.log(d2.valueOf());
console.log(d3.getTime());
console.log(d3.valueOf());
console.log(Date.now());

console.log(Math.round(Date.parse("2015/10/25") / (1000 * 60 * 60 * 24 * 30 * 12)));
console.log(Math.round(Date.parse(2015, 10, 25) / (1000 * 60 * 60 * 24 * 30 * 12)));
console.log(Math.round(Date.now("2015/10/25") / (1000 * 60 * 60 * 24 * 30 * 12)));
console.log(Math.round(Date.now(2015, 10, 25) / (1000 * 60 * 60 * 24 * 30 * 12)));
console.log(Math.round(Date.now() / (1000 * 60 * 60 * 24 * 30 * 12)));
console.log(Date.parse());
console.log(new Date(100000000000));*/


/*var da = new Date(Date.parse(70));
var da2 = new Date(Date.parse("10-10-5"));
var da3 = new Date(2018, 10, 25);
var da4 = new Date("11-25-2018");

console.log(Date.now());
console.log(Date.parse("11-25-2018"));
console.log(Date.parse(2018, 10, 25));
console.log(da3.getTime());
console.log(da3.valueOf());
console.log(da4.getTime());
console.log(da4.valueOf());
console.log(da);
console.log(da2);*/


/*console.log(new Date("0/32<=Y(FROM 2000)/(FROM 2032 TO 2049)/(FROM 1950 TO 1999)-MM"));
console.log(new Date("MM-DD- Y=>0 FROM 1950 to 2049"));
console.log(new Date("0/32<=Y -MM-DD"));
console.log(new Date("0=Y >> JAN2000/12=>Y=>1 >> FROM JAN 2001 TO DEC 2001"));
console.log(new Date(0<=Y<=99 , MM));
var de  = new Date(7),
    de1 = new Date(Date.parse(10)),
    de2 = new Date();

console.log(de);
console.log(de1);
console.log(Date.parse(7));
console.log(de.getTime());
console.log(de1.toISOString());
console.log(de2.toDateString());
console.log(de2.toTimeString());*/


/*var n = 9999999999999999;
var n1 = 9999999999999999999999;
var n2 = 0.2 + 0.1;
var n3 = 100 / "APPLE";

console.log(n);
console.log(n1);
console.log(n2);
console.log(typeof NaN);


var myNum = 2;
var txt = "";
while (myNum !== Infinity) {
    myNum = myNum * myNum;
    txt = txt + myNum + "<bsr>";
}
console.log(txt);
console.log(typeof Infinity);*/


/*var x = 200;
var newx = x.toString();
console.log(typeof newx);
console.log(typeof x);

console.log(x.toExponential(2));
console.log((459).toExponential());
console.log((459).toExponential(1));
console.log((459).toExponential(0));

console.log((4.59).toFixed());
console.log((4.54579).toFixed(4));
console.log(4.5457.toFixed());


console.log(parseInt("10"));
console.log(parseInt("10.00"));
console.log(parseInt("10.33"));
console.log(parseInt("34 45 66"));
console.log(parseInt("   60   "));
console.log(parseInt("40 years"));
console.log(parseInt("He was 40"));
console.log(parseInt("10", 10));
console.log(parseInt("010"));
console.log(parseInt("10", 8));
console.log(parseInt("0x10"));
console.log(parseInt("10", 16));*/


/*var x = 500;
var y = new Number(500);
var z = new Number(500);

console.log(typeof x);
console.log(typeof y);

if (x == y) {
    console.log("true");
} else {
    console.log("false");
}

if (x === y) {
    console.log("true");
} else {
    console.log("false");
}

if (z === y) {
    console.log("true");
} else {
    console.log("false");
}*/





         /*            JAVASCRIPT HTML DOM              */


/*var element1 = document.getElementById("test"),
    element2 = document.getElementsByClassName("one"),
    element3 = document.getElementsByTagName("div"),
    element4 = document.querySelectorAll('.one');

element1.innerHTML = "changed from js";
element2[2].innerHTML = "changed from js2";
element3[1].innerHTML = "changed from js3";
element4[0].innerHTML = "changed from js4";*/

/*function myFunction() {
    "use strict";
    var x = document.forms,
        txt = "",
        i;
    for (i = 0; i < x.length; i++) {
        txt = txt +  x[i].id + "<br>";
    }
    document.getElementById("demo").innerHTML = txt;
}
myFunction();

var i;
for (i = 0; i < document.images.length; i = i + 1) {
    document.write(document.images[i].src + "<br>");
}*/

//document.getElementById("demo").innerHTML = document.body.innerHTML;

//var x = document.getElementById("demo");

/*alert(x.innerHTML);
alert(x.innerText);
alert(x.textContent);*/

//x.innerText;
//x.innerHTML;
//x.textContent;

//x.innerText   =   "  hello this   is new <span>div</span>";
//x.innerText   =   "  hello this   is new <span>div</span>";
//x.textContent =   "  hello this   is new <span>div</span>";

/*alert(x.innerText   = "  hello this   is new <span>div</span>");
alert(x.innerHTML   = "  hello this   is new <span>div</span>");
alert(x.textContent = "  hello this   is new <span>div</span>");*/


/*var myDiv = document.querySelector("div"),
    myDiv2 = document.querySelector("div.first-class");


myDiv.setAttribute("id", "id-from-js");
myDiv.setAttribute("style", "border: 3px solid #ddd; width: 100px");
myDiv2.style.width = "300px";
myDiv2.className = "class-from-js";*/


/*document.getElementById("btn").onclick = function myFun() {
    "use strict";
    document.getElementById("my-div").classList.toggle("show");
};*/


/*
//var c = document.getElementById("myDIV").children;
//var c = document.getElementById("myDIV").childNodes;
//var c = document.getElementById("myDIV").children.length;
//var c = document.getElementById("myDIV").childElementCount;
//var c = document.getElementById("myDIV").childNodes.length;
//var c = document.getElementById("myDIV").children[1];
//var c = document.getElementById("myDIV").childNodes[1];
//var c = document.getElementById("myDIV").children[1].tagName;
//var c = document.getElementById("myDIV").childNodes[1].tagName;
//var c = document.getElementById("myDIV").children[1].textContent;
//var c = document.getElementById("myDIV").childNodes[1].textContent;
//var c = document.getElementById("myDIV").firstChild;
//var c = document.getElementById("myDIV").firstElementChild;
//var c = document.getElementById("myDIV").firstChild.textContent;
//var c = document.getElementById("myDIV").firstElementChild.textContent;
//var c = document.getElementById("myDIV").firstChild.tagName;
//var c = document.getElementById("myDIV").firstElementChild.tagName;
//var c = document.getElementById("myDIV").lastChild;
//var c = document.getElementById("myDIV").lastElementChild;
//var c = document.getElementById("myDIV").lastChild.textContent;
//var c = document.getElementById("myDIV").lastElementChild.textContent;
//var c = document.getElementById("myDIV").lastChild.tagName;
var c = document.getElementById("myDIV").lastElementChild.tagName;

document.getElementById("demoo").innerHTML = c;
console.log(c);
*/

/*
var x = document.getElementById("main");

document.getElementById("main-length1").innerHTML = x.childNodes.length;
console.log(x.childNodes);

x.removeChild(x.childNodes[3]);

document.getElementById("main-length2").innerHTML = x.childNodes.length;
console.log(x.childNodes);
*/

var b = document.forms
function myFun () {
    var txt = "";
    var i;
    for(i=0; i < b.length; i++){
        txt = txt + b[i].id + "<br>";
    }
    console.log(b);

}
myFun();

var mainDiv = document.getElementById("big"),
    myDemo = document.getElementById("demo");
myDemo.innerHTML = mainDiv.childNodes[2].nextSibling.innerHTML;


/*
function myfunn() {
    var h = document.body.innerText;
    document.getElementById("demoo").innerHTML = h;
}
myfunn();*/



/*Set for innerHtml & InnerText & TextContent*/

//alert(document.getElementById("demoo").innerText ="  hello     my  div &lt;p&gt");
//alert(document.getElementById("demoo").innerText ="  hello     my  div <span>");
//alert(document.getElementById("demoo").innerHTML ="  hello     my  div &lt;p&gt");
//alert(document.getElementById("demoo").innerHTML ="  hello     my  div <span>");
//document.getElementById("demoo").innerText ="  hello     my  div <span></span>";
//document.getElementById("demoo").innerText ="  hello     my  div &lt;&gt;";
//document.getElementById("demoo").innerHTML ="  hello     my  div &lt;&gt;";
//document.getElementById("demoo").innerHTML ="  hello     my  div <span></span>";



/*Get for innerHtml & InnerText & TextContent*/

/*var g = document.getElementById("para").textContent;
//document.getElementById("demo3").innerHtml = g;
alert(g);*/







                 /*CANVAS*/

var myCanvas = document.getElementById("c"),
    myContext = myCanvas.getContext("2d");

myContext.fillStyle = "#080";
myContext.fillRect(10,10,100,50);
myContext.fillStyle = "#f00";
myContext.fillRect(20,20,100,50);
myContext.strokeStyle = "#ff0";
myContext.lineWidth = 5;
myContext.strokeRect(100,125,100,50);
/*myContext.fillRect(0,0,300,300);
myContext.clearRect(10,10,100,100);*/

var myCanvasWidth = myCanvas.Width,
    myCanvasHeight = myCanvas.Height;

myContext.fillStyle = "#eee";
myContext.fillRect = (0,0,myCanvasWidth,myCanvasHeight);
myContext.strokeStyle = "080";
myContext.lineWidth = 5;

myContext.moveTo(10,10);
myContext.lineTo(130,130);

myContext.moveTo(290,10);
myContext.lineTo(170,130);

myContext.moveTo(10,290);
myContext.lineTo(130,170);

myContext.moveTo(290,290);
myContext.lineTo(170,170);

myContext.stroke();

myContext.font = "30px Arial";
myContext.fillStyle = "#f00";
myContext.strokeStyle = "#0ff";
myContext.lineWidth = 4;

myContext.fillText("elzero web school", 50, 80);
myContext.strokeText("elzero web school", 50, 80);

myContext.strokeStyle = "#080";
myContext.lineWidth = 2;
myContext.strokeText = ("elzero web school", 50, 80);



      /*client,scroll,offset (Width/Height) & client (Left/Top)*/

var mainDiv = document.getElementById("main");
//console.log(mainDiv.scrollHeight);
//console.log(mainDiv.scrollWidth);

//console.log(mainDiv.clientHeight);
//console.log(mainDiv.clientWidth);

//console.log(mainDiv.offsetHeight);
//console.log(mainDiv.offsetWidth);

//console.log (mainDiv.clientLeft);




    /* onfocus,onblur,onsubmit */

var myForm = document.getElementById("form10"),
    myNote = document.getElementById("notice"),
    myInput = document.getElementById("input");


myInput.onfocus = function () {
    "use strict";

    myNote.textContent = "please enter a strong password";
};

myInput.onblur = function () {
    "use strict";
    if (myInput.value.length < 10) {
        myNote.textContent = "short password";
    }
};

myForm.onsubmit = function (e) {
    "use strict";

        e.preventDefault();
    
};


             /*create simple timer by using setInterval()*/


var    myDivv = document.getElementById("timer"),
       myBtnn = document.getElementById("click-timer");

myBtnn.onclick = function countDown(){
        myTime1 = setInterval(timer, 1000);   
};

function timer() {
            if (myDivv.textContent <= 0) {
                myDivv.textContent = "done";
                clearInterval(myTime1);
        
            } else {
                myDivv.textContent -= 1;
            }
}

var myBaloot = document.getElementById("baloot");

function myWindow() {
    "use strict";
    window.open("https://shahid.mbc.net/ar/","","height=300,width=300,top=300,left=300,location=no,channelmode =yes,titlebar=0,resizable=no","false");
}


if (window.location.hash.indexOf("chat") > -1) {
    alert("hello");
}


var  sum = "elzero web scheol";

console.log(sum.startsWith("sch",10));


/*const food = ["fish","rice","meat",["mango","apple",["egyorange","usaorange"]]];
const [one,two,three,[fr1,fr2="defualt fruit",[o1,o2,o3 = "default"]]] = food;
console.log(`i love ${one},${two},${fr1},${fr2},${o1} and ${o2} ${o3}`);*/

var user1 = {};
user1["20"] = "string"; 

user1[10] = "number1";
user1[20] = "number";

console.log(user1);

const mySym = Symbol.for("one");
console.log(mySym.description);


let y = "1234";
for(let g=0; g< y.length;g++) {
    console.log(y[g]);
}


const arr = [ "a", "b", "c", "d"];
let call = 0;
arr.forEach((elem,u) => {
    console.log(`${u} - ${elem}`);
    call++;
});

let myMap = new Map([
    [{a:2}, "test"],
    [{b:2}, "object2"],
    ["osama", "string"],
    [12, "number"]
]);

console.log(myMap.keys());
myMap.delete(myMap[1]);
console.log(myMap.get(myMap[1]));
console.log(myMap.has(myMap[1]));
console.log(myMap.size);
console.log(myMap);



function * generateT() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

let iterator = generateT();
console.log(iterator.next().value);
console.log(iterator.next());

/*function * orderBooks() {
    alert("hello 1");
    console.log("hello 1");
    alert("hello 11");
    console.log("hello 11");
    alert("hello 21");
    console.log("hello 21");
}

let order = orderBooks();
console.log(order.next());*/

let myLetters = ["A", "B", "C", "D", "E" , "F" , "G" , "H"];

myLetters.copyWithin(0, 2);
console.log(myLetters);
myLetters.copyWithin(1, 3, 6);
console.log(myLetters);
myLetters.copyWithin(4, 1, 6);
console.log(myLetters);

let n = [10,20,30,40,50];
let myFilter = n.filter(e => e > 10);
console.log(myFilter);

const eObj = {};
Object.defineProperty(eObj, "a", {value : 1, configurable: false});
console.log(eObj);

const o = {name:"osama"};
delete o.name;
console.log(delete o.name);
console.log(o);
console.log(o.name);

const user = {
    name1 : "osama",
    country : "egypt",
    age: 10
    
};

for (let info in user){
    console.log(user[info]); //INFO must be without double quotes ""
}

function User (name,email,age,showEmail) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.updateName = function(newName) {
        if(this.age > 18) {
             return`${this.name = newName}`;
        } else {
            return `sorry cannot change your name for ${this.name}`;
        }
    }
};
let user11 = new User("osama", "oo@yahoo", 20);
let user21 = new User("ahmed","hh@hjd", 17);

console.log(user11.updateName("gamal"));
console.log(user11.name);

console.log(user21.updateName("salah"));
console.log(user21.name);

console.log(User.prototype);

const PP = [1,2,3,4,5];
console.log(Array.prototype);
console.log(arr.proto)






                         /*jQuery*/

$(document).ready(function(){
    $("button").click(function(){
        $("#p0, #p000, #div0").hide(1000, function(){
            $("#p00").show(6000);
        });
        $("#div00").toggle(10000,function() {$("#p00").css({backgroundColor : 'red', color: 'green'})});
    });
});


/*$(function(){

    $("#div00").animate({
        width: "+=" + 50
    });
    $("#div00").animate({
      height : "-=30px",
      width : "+=100px"  
    });
    $("#div00").animate({
      borderRadius: "40px",
      fontSize: "40px",
      color: "blue"
    });
    $("#div00").animate({
        width: ["toggle", "swing"],
        height: "toggle",
      },1000, "linear");

      $("#div00").animate({
        width: ["toggle", "swing"],
        height: "toggle"
      },2000, "linear", function(){$("#div00").css({"backgroundColor": "green", "color": "white"})});

     $("#p00").show(20000);
     $("#div00").css("backgroundColor", "yellow");
     $("#div00").fadeOut();

})
*/

//animantion other options (alternative syntax)
/*$( "#div00" ).animate({
    opacity: .5,
    height: "400px"
  }, {
    step: function( now, fx ) {
      var data = fx.elem.id + " " + fx.prop + ": " + now;
      $( "body" ).append( "<div>" + data + "</div>" );
    },
    duration : 200
  }
);*/


var div = $("#mydiv");
    $('#pp').text(div.text());
    $('#pp').text(div.html());
    $('#pp').html(div.text());
    //$('#pp').html(div.html());

    $("#input2").val(div.text());
    $("#input2").val(div.html());
    //$("#input2").val($("a").attr("href"));

    $("a").attr({
        href: "fdggffy",
        "target" : "fdfdf"
    });
    $("#input2").val($("a").attr("href"));
    //alert(div.html());
    //alert(div.text());


  

    $("#bb").click(function(){
        var size = $("#myp").css("font-size");
        var bc = $("#myin").val();
        $("#myp").css({
            backgroundColor: bc,
            'padding' : "20px"
        });

        $("<span></span>",{ 
            text: size
        }).appendTo("body");
    })
    

             /*traversing*/

//$("div.div4").next("p").css("border", "5px solid red");

/*$("div, p").click(function(){
    $(this).nextAll().css("border", "5px solid red");
})*/

/*$("div, p").click(function(){
    $(this).nextAll("aside").css("border", "5px solid red");
})*/

/*$("div:contains('jQuery')").click(function(){
    $(this).nextUntil($(".test3"),"p, aside").css("border", "5px solid red");
})*/

$(".test2").click(function(){
    $(this).siblings("div").css("border", "5px solid red");
})

console.log(130%60)

let myarrr = [1,2,3,4,5];

console.log(myarrr.indexOf("4"));

let age = 50;
age = 80;
console.log(age);

const calcArea = function (radius) {
    let area = 3.14*radius**2;
    return area;
};

const myA = calcArea(5);
console.log(myA);

console.log(document.querySelector("p.para").classList);

const products = [
    {name: "shaun", price: 50},
    {name: "shaun", price: 40},
    {name: "shaun", price: 10},
    {name: "shaun", price: 20},    
];

const productsSales = products.map((product) => {
    if (product.price > 30) {
        return {name: product.name, price: product.price / 2};
    } else {
        return product;
    }
});

console.log(productsSales);

console.log($(".para").find(".child").css({color:"red"}));

const before = new Date("August 18 2020 7:30:59");
const now = new Date();

const diff = now.getTime() - before.getTime();

const  dateCreated = new Date(diff).toDateString();

console.log(dateCreated);

const person = {name: "ahmed", age: 30, job: "ninja"};
console.log(person);
let personTwo = {...person}; //try one more time >> let personTwo = person; //reference data
console.log(person);
console.log(personTwo);
personTwo.name= "ali";
console.log(person);
console.log(personTwo);


var i; 
var yyy = 6; 
var xxx= ["b",1,2,5]; 
for(i=0; i<xxx.length ; i++) { yyy+=xxx[i];} 
console.log(yyy);

console.log("131313".split("3").join("3"));

const myTeaItems = document.querySelectorAll(".my-tea-list li");

myTeaItems.forEach(item => {
    item.addEventListener("click", function(e) {
        console.log(this);
        e.target.remove();
        console.log(e.target)
    });
})