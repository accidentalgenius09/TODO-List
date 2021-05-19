var nodelist = document.getElementsByTagName("li");
var i;
for(i=0;i<nodelist.length;i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    nodelist[i].appendChild(span);
}
var input = document.getElementById("myinput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});
var close = document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++){
    close[i].onclick = function(){
        var hihi = this.parentElement;
        hihi.style.display = "none";
    }
}
function newelement(){
    var li = document.createElement("LI");
    var inp = document.getElementById("myinput").value;

    var t=document.createTextNode(inp);
    li.appendChild(t);

    if(inp == ""){
        alert("Please write some value!")
    }
    else{
        document.getElementById("myul").appendChild(li);
        li.className = "list-group-item list-group-item-action";

    }

    document.getElementById("myinput").value="";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";

    span.appendChild(txt);
    li.appendChild(span);

    for(i=0;i<close.length;i++){
        close[i].onclick = function(){
            var hihi = this.parentElement;
            hihi.style.display = "none";
        }
    }
}