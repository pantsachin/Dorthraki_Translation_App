var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#input-text");
var outputText = document.querySelector("#output-text");

var url = "https://api.funtranslations.com/translate/dothraki.json";
// var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTranslationURL(input) {
  return url + "?" + "text=" + input;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("Server is Down, Please Try Again After Some Time");
}

function clickHandler() {
  var textInput = inputText.value; //taking input

  //processing to server
  fetch(getTranslationURL(inputText.value))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputText.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
