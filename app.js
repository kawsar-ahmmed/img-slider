const images = [
    'img/img.jpg',
    'img/img-2.jpg',
    'img/img-3.jpeg'
];
let imgIndex = 0;
const slideImg = document.getElementById('img-slide');
setInterval( () =>{
    if (imgIndex >= images.length){
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgIndex ++;
    slideImg.setAttribute('src', imgUrl);
    console.log(imgUrl);
}, 2000);