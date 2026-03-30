/* 
CONVERSIONS given by Scrimba
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// setting up variables for the elements pulled from the DOM

const convertButton = document.getElementById("convert-btn");

convertButton.classList.add("text-output-shown");

const inputValue = document.getElementById("user-input");
const outputCard = document.querySelector(".output-card");

const anySentence = document.querySelectorAll(".text-output-shade");

const lengthSentence = document.getElementById("length-sentence");
const volumeSentence = document.getElementById("volume-sentence");
const massSentence = document.getElementById("mass-sentence");

/* 
fadeOut() is a timer that might be used for visual effects later

function fadeOut() {
    setTimeout(() => inputValue.value = "", 5000);
}
*/

/*
validateInput() will eventually take <input> value as its argument
when we call it within the click handler below.
validateInput() says that IF either of two tests are met then
the user convert button will be dimmed, and
all output text in the anySentence nodeList will be hidden in the UI.
The commented setTimeouts are ideas that may be implemented later.
*/

/* function hideOutput() {
    convertButton.classList.add("button-dimmed");    
    anySentence.forEach(sentence => sentence.style="visibility: hidden");
} */

const validateInput = (a) => {
    // function to remove comma character from input
    const removeComma = (a) => {
        const inputArray = a.split("");
        const cleaned = inputArray.filter(letter => {
            return letter !== ",";
        })
        const rejoined = cleaned.join("");
        return rejoined;
    }

    const notComma = removeComma(a);
    // regEx test, example: 1.2 (purpose: confirm);
    const testReg = /(\d+[\.,]?\d+)/g;
    // regEx test, example: a2 (purpose: eliminate)
    const alphaReg = /([A-Za-z]+\d+)|(\d+[A-Za-z]+)|([A-Za-z]+.\d+)|(\d+.[A-Za-z]+)/g;

    if (!testReg.test(notComma) || alphaReg.test(notComma) /*(a.value[0] === "-" || a.value === "0") || */ /*charsArray.includes(a.value) === false */) {
        convertButton.classList.add("button-dimmed");
        //setTimeout(() => inputValue.value = "", 500);
        
        setTimeout(() => notComma = "", 500);
        setTimeout(() => convertButton.classList.remove("button-dimmed"), 500);
        //setTimeout(() => convertButton.style="opacity: 1.0", 2000);
        anySentence.forEach(sentence => sentence.style="visibility: hidden");
    } else {
        convertButton.classList.remove("button-dimmed");
        anySentence.forEach(sentence => sentence.style="visibility: shown");
        console.log("nocomma", notComma);
    }
}

/*
function validateInput(a) {
    if (a.value[0] === "-" || a.value === "0") {
        convertButton.classList.add("button-dimmed");
        //setTimeout(() => inputValue.value = "", 2000);
        //setTimeout(() => convertButton.style="opacity: 1.0", 2000);
        anySentence.forEach(sentence => sentence.style="visibility: hidden");
    } else {
        convertButton.classList.remove("button-dimmed");
        anySentence.forEach(sentence => sentence.style="visibility: shown");
    }    
}
*/

// the showByTest() function tests <input> value to determine visibility of text output
// it controls the selection of the classes defined in the CSS file
// showByTest() gets called within the convert button event handler below.

function showByTest(sentence) {
    sentence.className = (inputValue.value === "0" || inputValue.value === null) ? "text-output-hidden" : "text-output-shown";
    //console.log(inputValue.value);
}

convertButton.addEventListener("click", () => {
    validateInput(inputValue.value);

    showByTest(lengthSentence);
    showByTest(volumeSentence);
    showByTest(massSentence);
    
    /* 
    keeping this code -- from before the refactoring with showByTest() above.
    
    lengthSentence.className = inputValue.value === ("0" || null) ? "text-output-hidden" : "text-output-shown";
    volumeSentence.className = inputValue.value === ("0" || null) ? "text-output-hidden" : "text-output-shown";
    massSentence.className = inputValue.value === ("0" || null) ? "text-output-hidden" : "text-output-shown";
    */
    
    lengthSentence.innerHTML = buildConversionString("meters");
    volumeSentence.innerHTML = buildConversionString("liters");
    massSentence.innerHTML = buildConversionString("kilos");
    
    // see comments above
    //fadeOut();
})

function buildConversionString(units) {
    // these 3 functions format the singular of whichever unit is being used
    // so that we get e.g. "1 foot" rather than "1 feet"
    // for future, see about making this DRYer.
    
    function meterUnity() {
        return `${inputValue.value} ${units.slice(0, -1)} = ${metersToFeet(inputValue.value)} feet | ${inputValue.value} foot = ${feetToMeters(inputValue.value)} ${units}`
    }
    function literUnity() {
        return `${inputValue.value} ${units.slice(0, -1)} = ${litersToGallons(inputValue.value)} gallons | ${inputValue.value} gallon = ${gallonsToLiters(inputValue.value)} ${units}`
    }
    function kiloUnity() {
        return `${inputValue.value} ${units.slice(0, -1)} = ${kilosToPounds(inputValue.value)} pounds | ${inputValue.value} pound = ${poundsToKilos(inputValue.value)} ${units}`
    }
    
    if (units === "meters") {
        
        if (inputValue.value === "1") {
            return meterUnity()
            //return `${inputValue.value} ${units.slice(0, -1)} = ${metersToFeet(inputValue.value)} feet | ${inputValue.value} foot = ${feetToMeters(inputValue.value)} ${units}`
        } else {
            return `${inputValue.value} ${units} = ${metersToFeet(inputValue.value)} feet | ${inputValue.value} feet = ${feetToMeters(inputValue.value)} ${units}`;
        }
        
    } else if (units === "liters") {
        
        if (inputValue.value === "1") {
            return literUnity()
        } else {
            return `${inputValue.value} ${units} = ${litersToGallons(inputValue.value)} gallons | ${inputValue.value} gallons = ${gallonsToLiters(inputValue.value)} ${units}`;
        }
        
    } else {
        
        if (inputValue.value === "1") {
            return kiloUnity()
        } else {
            return `${inputValue.value} ${units} = ${kilosToPounds(inputValue.value)} pounds | ${inputValue.value} pounds = ${poundsToKilos(inputValue.value)} ${units}`;
        }
        
    }
}

// the 6 simple conversion functions that get called in the buildConversionString() function above

function metersToFeet(meters) {
    return (meters * 3.281).toFixed(3);
}

function feetToMeters(feet) {
    return (feet / 3.281).toFixed(3);
}

function litersToGallons(liters) {
    return (liters * 0.264).toFixed(3);
}

function gallonsToLiters(gallons) {
    return (gallons / 0.264).toFixed(3);
}

function kilosToPounds(kilos) {
    return (kilos * 2.204).toFixed(3);
}

function poundsToKilos(pounds) {
    return (pounds / 2.204).toFixed(3);
}