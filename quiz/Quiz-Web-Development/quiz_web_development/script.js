var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

const chooseBtn = document.getElementById("chooseBtn");
const myInput = document.getElementById("myInput");
const myUL = document.getElementById("myUL");

let searchMode = false; 
chooseBtn.addEventListener("click", () => {
  chooseBtn.classList.toggle("active");
  searchMode = !searchMode;

  if (searchMode) {
    myInput.placeholder = "Search item...";
    console.log("Search mode aktif");
  } else {
    myInput.placeholder = "Title...";
    console.log("Add mode aktif");
  }
});

myInput.addEventListener("keyup", function(e) {
  if (searchMode) {
    const filter = myInput.value.toLowerCase();
    const li = myUL.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
      let text = li[i].textContent || li[i].innerText;
      li[i].style.display = text.toLowerCase().includes(filter) ? "" : "none";
    }
  } else {
    if (e.key === "Enter") {
      newElement();
    }
  }
});
