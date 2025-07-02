const display = document.querySelector(".value");
const buttons = document.querySelectorAll("button");

// buttons.forEach((item) => {
//   item.onclick = ()=>{
//     display.value+= item.dataset.button;
//   }
//   });
display.value = "0";
buttons.forEach((item) => {
  item.addEventListener("click", () => {
    try {
      if (item.dataset.button === "C") {
        display.value = "0";
      } else if (item.dataset.button === "CE") {
        let string = display.value;
        display.value =
          string.length > 1 ? string.slice(0, string.length - 1) : "0";
      } else if (item.dataset.button === "=") {
        if (display.value !== "") {
          display.value = eval(display.value);
        }
      } else {
        if (display.value === "0") {
          if (item.dataset.button === "0" || item.dataset.button === "00") {
            display.value = 0;
          } else if (item.dataset.button === ".") {
            display.value = "0.";
          } else {
            display.value = item.dataset.button;
          }
        } else {
          display.value += item.dataset.button;
        }
      }
    } catch (error) {
      display.value = "invalid entry";
      setTimeout(() => {
        display.value = "0";
      }, 1000);
    }
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if ("0123456789+-/*.".includes(key)) {
    const button = document.querySelector(`[data-button="${key}"]`);
    if (button) {
      button.click();
    }
  } else if (key === "Enter" || key === "=") {
    const equalButton = document.querySelector(`[data-button="="]`);
    if (equalButton) {
      equalButton.click();
    }
  } else if (key === "Escape") {
    const clearButton = document.querySelector(`[data-button="C"]`);
    if (clearButton) {
      clearButton.click();
    }
  } else if (key === "Backspace") {
    const ceButton = document.querySelector(`[data-button="CE"]`);
    if (ceButton) ceButton.click();
  }
});
