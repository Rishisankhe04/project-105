Webcam.attach("#camera");
camera=document.getElementById("camera");
Webcam.set({
    width:350,
    height:300,
    image_format:"jpeg", 
    jpeg_quality:90
});
function takesnap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capture_image' src='"+data_uri+"'>";
    });
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5ED1gGwIL/model.json", modelloaded);
function modelloaded(){
    console.log("model loaded");
}
function check(){
    img=document.getElementById("capture_image");
    console.log("result");
    classifier.classify(img, gotresult);
}
function gotresult(error, results){
    console.log("entered gotresult");
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_face_name").innerHTML=results[0].label;
        document.getElementById("result_face_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}