window.addEventListener('load', start);

var rangeRed = null;
var rangeGreen = null;
var rangeBlue = null;
var txtRed = null;
var txtGreen = null;
var txtBlue = null;
var divColor = null;
var dinamicStyle = null;

function start() {
    rangeRed = document.querySelector('#red');
    rangeGreen = document.querySelector('#green');
    rangeBlue = document.querySelector('#blue');
    txtRed = document.querySelector('#txtRed');
    txtGreen = document.querySelector('#txtGreen');
    txtBlue = document.querySelector('#txtBlue');
    divColor = document.querySelector('#divColor');
    dinamicStyle = document.querySelector('#dinamicStyle');

    rangeRed.value = 255;
    rangeGreen.value = 255;
    rangeBlue.value = 255;
    preventFormSubmit();
    render();
    activateRanges();
}

function preventFormSubmit() {
    function handleFormSubmit(event) {
        event.preventDefault();
    }

    var form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
}

function activateRanges() {
    function handleChange(event) {
        render();
    }

    rangeRed.addEventListener('input', handleChange);
    rangeGreen.addEventListener('input', handleChange);
    rangeBlue.addEventListener('input', handleChange);
}

function render() {
    txtRed.value = rangeRed.value;
    txtGreen.value = rangeGreen.value;
    txtBlue.value = rangeBlue.value;

    divColor.style.backgroundColor = 'rgb(' + rangeRed.value + ',' + rangeGreen.value + ',' + rangeBlue.value + ')';
    dinamicStyle.innerHTML =
        '.slider[id="green"]::-webkit-slider-thumb { background-color: rgb(' +
        (255 - rangeGreen.value) +
        ', 255, ' +
        (255 - rangeGreen.value) +
        ') }' +
        '.slider[id="blue"]::-webkit-slider-thumb { background-color: rgb(' +
        (255 - rangeBlue.value) +
        ', ' +
        (255 - rangeBlue.value) +
        ', 255) }' +
        '.slider[id="red"]::-webkit-slider-thumb { background-color: rgb(255, ' +
        (255 - rangeRed.value) +
        ', ' +
        (255 - rangeRed.value) +
        ') }' +
        '.love { color: rgb(' +
        rangeRed.value +
        ',' +
        rangeGreen.value +
        ',' +
        rangeBlue.value +
        ')}';
}
