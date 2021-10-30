
// Setting Image to Model
function setImage(elment){
    let model = document.querySelector('.model-box');
    let modelImg = document.querySelector('.model-image');
    model.style.display = 'flex';
    modelImg.src = elment.src;
}
//  Closing Model
function closeModel(){
    let model = document.querySelector('.model-box');
    model.style.display = "none";
    
}