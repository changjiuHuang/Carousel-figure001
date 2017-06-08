
var aBanner = document.getElementsByClassName("banner");
var banner_box = document.getElementsByClassName("banner-box");
var aSpan = document.getElementsByClassName("banner-tab")[0].getElementsByTagName("span");

//初始化样式
aBanner[0].style.opacity = "1";
aSpan[0].className = "on";

//用于存储当前单击按钮的索引
var num = 0;
var time;

//点击轮播
for (var i = 0; i < aSpan.length; i ++) {
    aSpan[i].index = i;
    aSpan[i].onclick = function () {
        for (var j = 0; j < aSpan.length; j ++) {
            num = this.index;
            aSpan[j].className = "";
            aBanner[j].style.opacity = "0";
        }
        
        aSpan[num].className = "on";
        aBanner[num].style.opacity = "1";
    };
}

//定时轮播
time = setInterval(function () {   
    num++;
    num %= aBanner.length;
    for (var j = 0; j < aSpan.length; j ++) {
        aSpan[j].className = "";
        aBanner[j].style.opacity = "0";
    }
        
    aSpan[num].className = "on";
    aBanner[num].style.opacity = "1";
}, 2000);