function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function getAMPM(i){
    return (i < 13) ? "AM" : "PM";
}

function getCorrectedHour(i){
    var h = i % 12;
    return (h == 0) ? 12 : h;
}

function getPlaceholder(){
    var rand = Math.floor(Math.random()*10);
    return placeholders[rand];
}

var placeholders = [
	"Say something interesting.",
	"Don't just sit there, say something!",
	"Hahaha isn't this great?",
	"Your mom.",
	"Say something funny.",
	"Nice weather today, isn't it?",
	"I had fun once, it was awful.",
	"Show the world how funny (you think) you are!",
	"Make a new virtual friend",
	"Cat got your tongue?" 
];

var NAME_CHANGE_TIME_LIMIT = 900000;
var AVATAR_CHANGE_TIME_LIMIT = 300000;