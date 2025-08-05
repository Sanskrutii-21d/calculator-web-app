function appendValue(val) {
    document.getElementById("display").value += val;
  }
  
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
  }
  
  function calculate() {
    try {
      const result = eval(document.getElementById("display").value);
      document.getElementById("display").value = result;
    } catch {
      alert("Invalid expression!");
    }
  }
  
  // Optional: Allow keyboard typing
  document.addEventListener("keydown", function (event) {
    const key = event.key;
    const display = document.getElementById("display");
  
    if (!isNaN(key) || "+-*/.%".includes(key)) {
      display.value += key;
    } else if (key === "Backspace") {
      deleteLast();
    } else if (key === "Enter") {
      calculate();
    } else if (key === "Escape") {
      clearDisplay();
    }
  });
  