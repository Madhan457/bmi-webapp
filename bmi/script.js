const Score = document.getElementById("index-value");
const Result = document.getElementById("result");
const Calculate = document.getElementById("calculate");
const Clear = document.getElementById("clear");

Calculate.addEventListener("click", Value);
Clear.addEventListener("click", Reset);
function Value() {
  let bmi;
  const Weight = document.getElementById("weight").value;
  const Height = document.getElementById("height").value;
  let weight = parseFloat(Weight);
  let height = parseFloat(Height);
  if (Weight === "" || Height === "" || isNaN(height) || isNaN(weight)) {
    alert("Fill your height and weight");
    return;
  }
  bmi = (weight / (height * height)).toFixed(2);
  Score.textContent = bmi;
  if (bmi < 18.5) {
    Result.textContent = "Underweight";
    Score.style.color = "blue";
    Result.style.color = "blue";
  } else if (bmi < 24.9) {
    Result.textContent = "Normal Weight";
    Score.style.color = "green";
    Result.style.color = "green";
  } else if (bmi < 29.9) {
    Result.textContent = "Overweight";
    Score.style.color = "yellow";
    Result.style.color = "yellow";
  } else {
    Result.textContent = "Obese";
    Score.style.color = "red";
    Result.style.color = "red";
  }
}
function Reset() {
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  Score.textContent = "0";
  Result.textContent = "N/A";
  Score.style.color = "rgb(106, 0, 255)";
  Result.style.color = "rgb(106, 0, 255)";
}
