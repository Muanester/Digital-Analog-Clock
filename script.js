let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime() {
  let date = new Date();

  // Getting hour, mins, secs from date
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  document.querySelector(".date-time").innerHTML = date;

  let hRotation = 30 * hh + mm / 2;
  let mRotation = 6 * mm;
  let sRotation = 6 * ss;

  hr.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  sec.style.transform = `rotate(${sRotation}deg)`;

  const handIcon = document.querySelector("#sec b");
  if (ss % 5 === 0) {
    handIcon.style.display = "none";
  } else {
    handIcon.style.display = "block";
  }

  document.querySelector(".hour").innerHTML = hh;
  document.querySelector(".min").innerHTML = mm;
  document.querySelector(".sec").innerHTML = ss;
}

let dotToggled = "";
let dotsToggled = "";
const blinkDot = document.querySelector(".digital span");
function displayDots() {
  document.querySelectorAll(".dots").forEach((dot) => {
    if (dotsToggled) {
      dot.innerHTML = "";
      blinkDot.style.background = "red";
    } else {
      dot.innerHTML = ":";
      blinkDot.style.background = "white";
    }
  });

  if (dotToggled) {
    dotsToggled = true;
    dotToggled = false;
  } else {
    dotsToggled = false;
    dotToggled = true;
  }
}

setInterval(displayTime, 1000);
setInterval(displayDots, 500);
