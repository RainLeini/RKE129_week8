const images = ['1.jpeg', '2.png', '3.png', '4.png'];
const targetImage = document.querySelector('.cv-image img');
let i=0;

targetImage.addEventListener('click', () => {
    targetImage.style.opacity ='0';
    setTimeout(() =>{
        if(i=== images.length -1){
        i=0;

     }   
    targetImage.src = 'images/' + images[i];
    i++;

     targetImage.style.opacity ='1';
    
    },500);
    

});