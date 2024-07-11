const imageSources = ['img1.jpg','img2.jpg','img3.jpg','img4.webp','img5.jpg','img5.png','img6.jpg','img7.jpg','img8.jpg'];
function changeBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;
    }
    // Change the background image every 1 seconds (1000 milliseconds)
    setInterval(changeBackgroundImage, 1000);