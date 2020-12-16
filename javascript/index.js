window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myBtn").style.display = "block";
        document.getElementById("myBtn2").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
        document.getElementById("myBtn2").style.display = "none";
    }
}
 
// 点击按钮，返回顶部
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var register = document.getElementById("register");
var header = document.getElementById("header");

var myBtn2 = document.getElementById('myBtn2');
var flag = 0;
myBtn2.onclick = function() {
    if (flag == 0) {
        document.body.style.backgroundColor = 'black';
        register.style.backgroundColor = 'black';
        header.style.backgroundColor = 'black';
        flag = 1;
    } else {
        document.body.style.backgroundColor = '#fff';
        register.style.backgroundColor = '#fff';
        header.style.backgroundColor = '#fff';
        flag = 0;
    }
}
var reg = document.getElementById("reg")
var regPanel = document.getElementById("regPanel");
var username = document.getElementById("username");
var password = document.getElementById("password");
var submit = document.getElementById("submit");
var hint = document.getElementById("hint");
var cencel = document.getElementById("cencel");
reg.onclick = function () {
    regPanel.style.display = "block";
    username.focus();
}
submit.onclick = function () {
    if (username.value == "" || password.value == "") {
        hint.innerHTML = "请输入用户名和密码";
    } else {
        regPanel.style.display = "none";
    }
}

username.onfocus = function () {
    if (username.value == "") {
        hint.innerHTML = "请输入用户名";
        hint.style.color = "lightskyblue";
    } else {
        hint.innerHTML = "";
    }
    
}
username.onblur = function () {
    if (username.value == "") {
        hint.style.color = "red";
        hint.innerHTML = "用户名不能为空";
    } else {
        hint.innerHTML = "";
    }
}
password.onfocus = function () {
    if (password.value == "") {
        hint.innerHTML = "请输入密码";
        hint.style.color = "lightskyblue";
    } else {
        hint.innerHTML = "";
    }
    
}
password.onblur = function () {
    if (password.value == "") {
        hint.style.color = "red";
        hint.innerHTML = "密码不能为空";
    } else {
        hint.innerHTML = "";
    }
}
cencel.onclick = function () {
    regPanel.style.display = "none";
}

window.onload =  function(){ 
    var img = document.getElementById("img");
    var arr=["images/1.jpg","images/2.jpg","images/3.jpg","images/5.jpg","images/4.jpg"]; 
    var num=0;
    function inv(){
       num++;
       if(num>=arr.length){
           num=0;
       }
       console.log(num);
       img.src=arr[num];
     }   
     setInterval(inv,5000); 
}
