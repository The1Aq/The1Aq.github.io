function bigger() {
    document.getElementById("input").style.fontSize = "24pt";
}

function fancyShmancy() {
    document.getElementById("input").style.fontWeight = "bold";
    document.getElementById("input").style.color = 'blue';
    document.getElementById("input").style.textDecoration = "underline";

}

function boringBetty() {
    document.getElementById("input").style.fontWeight = "normal";
    document.getElementById("input").style.color = "black";
    document.getElementById("input").style.textDecoration = "none";
}

function moo() {
    var suffix = '-Moo'
    var str = document.getElementById("input");
    var parts = str.value.split(".");  
    str.value = parts.join(suffix);
}