Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
//tel = new human();
//tel.speak();
//var
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
// /var
function take_pic() {
    document.getElementById("textarea").innerHTML = "";
    recognition.start();
}

function speak() {
    var synth = window.speechSynthesis;
    value_of_text = "Taking your selfie in 5 seconds";
    console.log(value_of_text);
    utter = new SpeechSynthesisUtterance(value_of_text);
    synth.speak(utter);
    console.log("done");
    Webcam.attach(camera);
    setTimeout(function () {
        take_snap();
        download_img();
    }, 5000);

}
recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textarea").innerHTML = content;
    if (content == "take my selfie") {
        speak();
    }
};

function take_snap() {
    Webcam.snap(function (data_url) {
        document.getElementById("web_pic2").innerHTML = '<img id="selfie_taken_img" src="' + data_url + '">';
    });
}

function download_img() {
    link = document.getElementById("link");
    var img_d = document.getElementById("selfie_taken_img").src;
    link.href = img_d;
    link.click();
}