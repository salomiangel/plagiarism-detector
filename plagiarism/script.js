const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");   
const imageView = document.getElementById("img-view");

inputFile.addEventListener("change",uploadImage);

function uploadImage(){
    inputFile.files[0];
    let imglink=URL.createObjectURL(inputFile.files[0]);
    imageView.style.backgroundImage=URL(${imglink});
    imageView.textContent="";
}
