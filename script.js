function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculator() {
  try {
  display.value = eval(display.value);
} catch {
  display.value = 'Error';
}

}
