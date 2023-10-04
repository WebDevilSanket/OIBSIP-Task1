// Get a reference to the display input element
const display = document.querySelector('input[name="display"]');

// Add an event listener for keypress events on the document
document.addEventListener("keydown", (event) => {
    // Get the key that was pressed
    const key = event.key;

    // Handle different keys
    switch (key) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            // Append the digit to the display
            display.value += key;
            break;
        case ".":
            // Append a decimal point to the display
            display.value += ".";
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            // Append the operator to the display
            display.value += key;
            break;
        case "Enter":
            // Evaluate the expression when Enter key is pressed
            display.value = eval(display.value);
            break;
        case "Backspace":
            // Remove the last character when Backspace key is pressed
            display.value = display.value.slice(0, -1);
            break;
        case "Escape":
            // Clear the display when Escape key is pressed
            display.value = "";
            break;
    }
});

// Prevent the default behavior for certain keys (e.g., preventing Enter key from submitting the form)
document.addEventListener("keydown", (event) => {
    if (["Enter", "Backspace", "Escape"].includes(event.key)) {
        event.preventDefault();
    }
});