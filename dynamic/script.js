function colorChanger(col, amt) {
  var usePound = false;

  if (col[0] === "#") {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col, 16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  var b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  var g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}

function rgbToHex(rgb) {
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  function hex(x) {
    return ("0" + parseInt(x).toString(16)).slice(-2);
  }
  return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", init, false);
} else {
  document.attachEvent("onDOMContentLoaded", init);
}

function init() {
  var elements = document.querySelectorAll("td");
  var container = document.querySelector(".container");
  var members = [
    {
      memberID: 1,
      color: "#ce266b",
      number: 45
    },
    {
      memberID: 2,
      color: "#f5b041",
      number: 32
    },
    {
      memberID: 3,
      color: "#f6546a",
      number: 20
    },
    {
      memberID: 4,
      color: "#40dbdb",
      number: 11
    },
    {
      memberID: 5,
      color: "#501d73",
      number: 36
    }
  ];
  var counter = 0;
  for (let index = 0; index < members.length; index++) {
    for (let i = 0; i < members[index].number; i++) {
      elements[counter].style.backgroundColor = members[index].color;
      elements[counter].innerHTML = members[index].memberID;
      counter++;
    }
    var percentage = ((members[index].number * 100) / 144).toFixed(2);

    container.insertAdjacentHTML(
      "beforeend",
      '<div class="outer"><div class="inner" style="width:' +
        percentage +
        "%;background-color:" +
        members[index].color +
        '"></div><span class="label" style="left:' +
        percentage +
        '%">' +
        percentage +
        "%</span></div>"
    );
  }

  for (var i = 0; i < elements.length; i++) {
    elements[i].onmouseover = function(e) {
      var hex = rgbToHex(this.style.backgroundColor);
      var darkenHex = colorChanger(hex, -20);
      this.style.backgroundColor = darkenHex;
    };
    elements[i].onmouseout = function() {
      var hex = rgbToHex(this.style.backgroundColor);
      var lightenHex = colorChanger(hex, 20);
      this.style.backgroundColor = lightenHex;
    };
  }
}
