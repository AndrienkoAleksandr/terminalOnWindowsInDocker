kinput.onkeydown = kinput.onkeyup = kinput.onkeypress = handle;

var lastTime = Date.now();

function handle(e) {

  if ("keydown" == e.type) {
    console.log("test")
    return
  }

  if (form.elements[e.type + 'Ignore'].checked) return;

  var text = e.type +
    ' keyCode=' + e.keyCode +
    ' which=' + e.which +
    ' charCode=' + e.charCode +
    ' char=' + String.fromCharCode(e.keyCode || e.charCode) +
    (e.shiftKey ? ' +shift' : '') +
    (e.ctrlKey ? ' +ctrl' : '') +
    (e.altKey ? ' +alt' : '') +
    (e.metaKey ? ' +meta' : '') + "\n";

  symbol = getChar2(e)
  if (symbol != null) {
    text += "unicode key " + symbol + "\n"
  }

  if (area.value && Date.now() - lastTime > 250) {
    area.value += new Array(81).join('-') + '\n';
  }
  lastTime = Date.now();

  area.value += text;

  if (form.elements[e.type + 'Stop'].checked) {
    e.preventDefault();
  }
}

function getChar(event) {
  if (event.which == null) { // IE
    if (event.keyCode < 32) return null; // спец. символ
    return String.fromCharCode(event.keyCode)
  }

  if (event.which != 0 && event.charCode != 0) { // все кроме IE
    if (event.which < 32) return null; // спец. символ
    return String.fromCharCode(event.which); // остальные
  }

  return null; // спец. символ
}

function getChar2(ev) {
 var key;
 if (ev.charCode) {
    key = ev.charCode;
  } else if (ev.which == null) {
    key = ev.keyCode;
  } else if (ev.which !== 0 && ev.charCode !== 0) {
    key = ev.which;
  }
  if (key != null) {
    key = String.fromCharCode(key);
  }
  return key;
}