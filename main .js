var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition(); 
var Textbox = document.getElementById("textbox");
function start(){
Textbox.innerHTML = "";
recognition.start();
}

recognition.onresult = function (event) {
console.log(event);
var Content = event.results[0][0].transcript;
console.log(Content);
document.getElementById("textbox").innerHTML = Content;
if (Content == "Toma mi selfie") { 
console.log("toma mi selfie---");
speak(); }
}
function speak(){
var synth = window.speechSynthesis;
speak_data = "Tomando tu selfie en 5 segundos";
var utterThis = new SpeechSynthesisUtterance(speak_data); 
synth.speak(utterThis);
Webcam.attach(camera);
setTimeout(function () { take_selfie(); save(); }, 5000);
}
function take_selfie() { Webcam.snap(function (data_uri) { document.getElementById("result").innerHTML = '<img id="selfie_image" src="' +data_uri+ '"/>'; }); }