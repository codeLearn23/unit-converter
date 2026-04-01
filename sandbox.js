/*
these are drafts that might be used later
*/ 


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





/*
function handleInput(a) {
    console.log("inputValue", a);
    a.addEventListener("input", (event) => {
        const presentValue = event.target.value;
        console.log(presentValue);
        console.log("whole input: ", typeof presentValue);
        
        const zerosTest = /-/g;
        //console.log(zerosTest);
        console.log("match?", zerosTest.test(presentValue));
        /*
        if (zerosTest.test(presentValue)) {
            //event.preventDefault();
            convertButton.classList.add("button-dimmed");
            setTimeout(() => a.value = "", 500);
            setTimeout(() => convertButton.style="opacity: 1.0", 500);
            anySentence.forEach(sentence => sentence.style="visibility: hidden");
        } else {
            convertButton.classList.remove("button-dimmed");
            anySentence.forEach(sentence => sentence.style="visibility: shown");
        } 
    })
} */

//handleInput(inputValue);

/*
inputValue.addEventListener("input", (event) => {
    const userInput = event.target.value;
    console.log("user input is ", userInput);
    const digitsTest = /[0-9]+[.]?([0-9]?)+/g;
    if (!digitsTest.test(userInput)) {
        //alert("Please enter numbers only")
        convertButton.classList.add("button-dimmed");
        inputValue.value = null;
        //setTimeout(() => inputValue.value = "", 0);
        setTimeout(() => convertButton.style="opacity: 1.0", 1000);
        anySentence.forEach(sentence => sentence.style="visibility: hidden");
        //event.preventDefault();
    } else {
        convertButton.classList.remove("button-dimmed");
        anySentence.forEach(sentence => sentence.style="visibility: shown");
    } 
})
*/


    

    //const digitsTest = /[0-9]+[.]?([0-9]?)+/g;
    /*
    if (/[A-Za-z]/.test(firstCharacter)) {
        console.log("first char is alpha.");
    };
    if (/[A-Za-z]/.test(lastCharacter)) {
        console.log("last char is alpha type");
    }
    */

    //if (!digitsTest.test(getInput())) { ... see below

    /*
    const firstCharacter = getInput()[0];
    const lastCharacter = getInput().slice(length - 1);
    console.log(firstCharacter, lastCharacter);
    */
    
    //const cleanedInput = getInput().split("").filter(item => /[0-9]/.test(item)).join("");

    /*
    if () {
    //if (/[A-Za-z]/.test(firstCharacter) || /[A-Za-z]/.test(lastCharacter)) {
        convertButton.classList.add("button-dimmed");
        inputValue.textContent.replace("");
        //inputValue.textContent = null;
        setTimeout(() => inputValue.value = "", 500);
        //setTimeout(() => convertButton.style="opacity: 1.0", 1000);
        
        //anySentence.forEach(sentence => sentence.style = "visibility: hidden");
        anySentence.forEach(sentence => sentence.className = "text-output-hidden");
        //event.preventDefault();
    } else {
        //convertButton.classList.remove("button-dimmed");
        //anySentence.forEach(sentence => sentence.style="visibility: shown");
        showByTest(lengthSentence);
        showByTest(volumeSentence);
        showByTest(massSentence);
    } */
    /* 
    keeping this code -- from before the refactoring with showByTest() above.
    
    lengthSentence.className = inputValue.value === ("0" || null) ? "text-output-hidden" : "text-output-shown";
    volumeSentence.className = inputValue.value === ("0" || null) ? "text-output-hidden" : "text-output-shown";
    massSentence.className = inputValue.value === ("0" || null) ? "text-output-hidden" : "text-output-shown";
    */

