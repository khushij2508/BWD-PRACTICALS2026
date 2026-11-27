    function changeMessage() {
      document.getElementById("message").textContent = "I hope your day goes well!";
    }

    function setColor(color) {
      document.getElementById("title").style.color = color;
    }

    function showDate() {
      document.getElementById("date").textContent = new Date().toLocaleString();
    }

    function addNumbers() {
      const a = parseFloat(document.getElementById("num1").value);
      const b = parseFloat(document.getElementById("num2").value);
      const result = document.getElementById("result");
      if (isNaN(a) || isNaN(b)) {
        result.textContent = "Please enter two valid numbers.";
      } else {
        result.textContent = "Sum: " + (a + b);
      }
    }

    const colors = ["tomato", "gold", "lightgreen", "skyblue", "violet"];
    let colorIndex = 0;
    function changeBoxColor() {
      document.getElementById("box").style.backgroundColor = colors[colorIndex];
      colorIndex = (colorIndex + 1) % colors.length;
    }