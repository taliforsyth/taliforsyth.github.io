const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["images/seamansres.jpg", "images/longs+meeker.jpg", "images/ski.jpg", "images/la.jpg", "images/goggles.jpg"]


/* Declaring the alternative text for each image file */
const alts = {
    'seamansres.jpg' :'hiking in the fall', 
    'longs+meeker.jpg' : 'long peak and mount meeker at sunrise', 
    'ski.jpg' : 'snowboarders taking a break', 
    'la.jpg' : 'pretty building during sunset', 
    'goggles.jpg' : 'girl wearing goggles'}

/* Looping through images */

for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/${image}');
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
      });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () =>{
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.sytle.backgroundColorado = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColorado = 'rgba(0,0,0,0)';
    }
});