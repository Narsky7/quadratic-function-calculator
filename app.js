const deltaDisplay = document.querySelector("#delta");
const zeroOAFDisplay = document.querySelector("#zeroOfaFunction");
const resultsScreen = document.querySelector(".results");
const mistaken = document.querySelector(".mistake");

document.querySelector("#btn").onclick = function () {
  let a = parseFloat(document.querySelector("#a").value);
  let b = parseFloat(document.querySelector("#b").value);
  let c = parseFloat(document.querySelector("#c").value);

  let delta = Math.pow(b, 2) - 4 * a * c;

  if (a == 0) {
    resultsScreen.style.display = "none";
    mistaken.textContent = " a cannot equals 0";
    return;
  } else {
    resultsScreen.style.display = "block";
    mistaken.textContent = "";
    if (delta > 0) {
      deltaDisplay.textContent = delta;
      let pierwiastekZDelty = Math.sqrt(delta);
      let xOne = (-b + pierwiastekZDelty) / (2 * a);
      let xTwo = (-b - pierwiastekZDelty) / (2 * a);
      zeroOAFDisplay.textContent = xOne.toFixed(2) + " and " + xTwo.toFixed(2);
      return;
    } else if (delta == 0) {
      deltaDisplay.textContent = "0";
      let x = (-b / 2) * a;
      zeroOAFDisplay.textContent = x.toFixed(2);
      return;
    } else if (delta < 0) {
      deltaDisplay.textContent = delta;
      zeroOAFDisplay.textContent = "You do not have any zeros of a function";
      return;
    }
  }
  return;
};
