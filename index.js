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
const alertMsg = document.getElementById("alert-message");
const outputCard = document.querySelector(".output-card");
const anySentence = document.querySelectorAll(".text-output-shade");
const lengthSentence = document.getElementById("length-sentence");
const volumeSentence = document.getElementById("volume-sentence");
const massSentence = document.getElementById("mass-sentence");

let builtString = "";

inputValue.addEventListener("input", (event) => {
    
    event.target.value.split("").filter(item => /[0-9.]/g.test(item)).join("");
    //inputValue.value.className = "text-output-hidden";
})



//inputValue.value.className = "text-output-hidden";

// the showByTest() function tests <input> value to determine visibility of text output
// it controls the selection of the classes defined in the CSS file
// showByTest() gets called within the convert button event handler below.

function showByTest(sentence) {
    sentence.className = (inputValue.value === "0" || inputValue.value === "") ? "text-output-hidden" : "text-output-shown";
    //console.log("//", inputValue.value);
}

//console.log("whynot".slice(length - 1));
console.log("12345,&^@#9".split("").filter(item => /[0-9]/.test(item)).join(""));
alertMsg.style = "visibility: hidden";
convertButton.addEventListener("click", () => {

    if (/[A-Za-z]/.test(inputValue.value)) {
        inputValue.value = "";
        alertMsg.style = "visibility: visible";
        alertMsg.textContent = "Numbers or decimal point only";
    } else {

        alertMsg.style = "visibility: hidden";

        showByTest(lengthSentence);
        showByTest(volumeSentence);
        showByTest(massSentence);

        
        lengthSentence.innerHTML = buildConversionString("meters");
        volumeSentence.innerHTML = buildConversionString("liters");
        massSentence.innerHTML = buildConversionString("kilos");
        
        inputValue.value = "";

        // see comments above
        //fadeOut();
    }
})

function buildConversionString(units) {
    // these 3 functions format the singular of whichever unit is being used
    // so that we get e.g. "1 foot" rather than "1 feet"
    // for future, see about making this DRYer.
    
    const getInput = () => inputValue.value;
    const cleanedInput = getInput().split("").filter(item => /[0-9.]/g.test(item)).join("");
    console.log("cleaned", cleanedInput);

    function meterUnity() {
        return `${cleanedInput} ${units.slice(0, -1)} = ${metersToFeet(cleanedInput)} feet | ${cleanedInput} foot = ${feetToMeters(cleanedInput)} ${units}`
    }
    function literUnity() {
        return `${cleanedInput} ${units.slice(0, -1)} = ${litersToGallons(cleanedInput)} gallons | ${cleanedInput} gallon = ${gallonsToLiters(cleanedInput)} ${units}`
    }
    function kiloUnity() {
        return `${cleanedInput} ${units.slice(0, -1)} = ${kilosToPounds(cleanedInput)} pounds | ${cleanedInput} pound = ${poundsToKilos(cleanedInput)} ${units}`
    }
    
    if (units === "meters") {
        
        if (cleanedInput === "1") {
            return meterUnity()
            //return `${inputValue.value} ${units.slice(0, -1)} = ${metersToFeet(inputValue.value)} feet | ${inputValue.value} foot = ${feetToMeters(inputValue.value)} ${units}`
        } else {
            return `${cleanedInput} ${units} = ${metersToFeet(cleanedInput)} feet | ${cleanedInput} feet = ${feetToMeters(cleanedInput)} ${units}`;
        }
        
    } else if (units === "liters") {
        
        if (cleanedInput === "1") {
            return literUnity()
        } else {
            return `${cleanedInput} ${units} = ${litersToGallons(cleanedInput)} gallons | ${cleanedInput} gallons = ${gallonsToLiters(cleanedInput)} ${units}`;
        }
        
    } else {
        
        if (cleanedInput === "1") {
            return kiloUnity()
        } else {
            return `${cleanedInput} ${units} = ${kilosToPounds(cleanedInput)} pounds | ${cleanedInput} pounds = ${poundsToKilos(cleanedInput)} ${units}`;
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