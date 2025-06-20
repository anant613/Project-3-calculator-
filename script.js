let expression = "";

function pressNum(num) {
  expression += num;
  document.getElementById("num").value = expression;
}

function add() {
  expression += "+";
  document.getElementById("num").value = expression;
}

function sub() {
  expression += "-";
  document.getElementById("num").value = expression;
}

function multi() {
  expression += "*";
  document.getElementById("num").value = expression;
}

function divide() {
  expression += "/";
  document.getElementById("num").value = expression;
}

function equal() {
  try {
    let result = eval(expression);
    document.getElementById("num").value = result;
    expression = result.toString(); // Let you continue calculation
  } catch {
    document.getElementById("num").value = "Error";
    expression = "";
  }
}

function clear() {
  expression = "";
  document.getElementById("num").value = "";
}
