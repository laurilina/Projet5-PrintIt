const slides = [
    {
      "image": "slide1.jpg",
      "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
      "image": "slide2.jpg",
      "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
      "image": "slide3.jpg",
      "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
      "image": "slide4.png",
      "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
  ];

let currentSlide = 0;
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

arrowLeft.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
}
  updateSlide();
});

arrowRight.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  updateSlide();
});

function updateSlide() {
  const bannerImg = document.querySelector('.banner-img');
  const tagLine = document.querySelector('#banner p');
  const dotsContainer = document.querySelector('.dots');
  // Mettre à jour l'image
  bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
  // Mettre à jour le texte
  tagLine.innerHTML = slides[currentSlide].tagLine;
  // Mettre à jour les bullet points
  dotsContainer.innerHTML = '';
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === currentSlide) {
      dot.classList.add('dot_selected');
    }
    dotsContainer.appendChild(dot);
  }
}
// Appel initial pour afficher le premier slide
updateSlide();

/*
// Définir la fonction updateSlide
function updateSlide() {
  // 1. Obtenir l'élément image du bannière à partir du document HTML
  const bannerImg = document.querySelector('.banner-img');
  // 2. Obtenir l'élément de texte de tagline à partir du document HTML
  const tagLine = document.querySelector('#banner p');
  // 3. Obtenir le conteneur des points à partir du document HTML
  const dotsContainer = document.querySelector('.dots');
  // 4. Mettre à jour le source de l'image de la bannière avec l'image de la diapositive courante
  bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
  // 5. Mettre à jour le texte de la tagline avec la tagline de la diapositive courante
  tagLine.innerHTML = slides[currentSlide].tagLine;
  // 6. Effacer tous les anciens points du conteneur des points
  dotsContainer.innerHTML = '';
  // 7. Pour chaque diapositive dans la liste des diapositives :
  for (let i = 0; i < slides.length; i++) {
    // 7.1 Créer un nouvel élément de point
    const dot = document.createElement('div');
    // 7.2 Ajouter la classe 'dot' à ce point
    dot.classList.add('dot');
    // 7.3 Si l'index de la diapositive actuelle est égale à l'index de la diapositive courante :
    if (i === currentSlide) {
      // 7.3.1 Ajouter la classe 'dot_selected' au point
      dot.classList.add('dot_selected');
    }
    // 7.4 Ajouter le point au conteneur des points
    dotsContainer.appendChild(dot);
  }
}



// Définir la fonction updateSlide
  function updateSlide() {
  // 1. Obtenir l'élément image du bannière à partir du document HTML
  const bannerImg = document.querySelector(".banner-img");
  // 2. Obtenir l'élément de texte de tagline à partir du document HTML
  const tagLine = document.querySelector("#banner p");
  // 3. Obtenir le conteneur des points à partir du document HTML
  const dotsContainer = document.querySelector(".dots");
  // 4. Mettre à jour la source de l'image de la bannière avec l'image de la diapositive courante
  bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
  // 5. Mettre à jour le texte de la tagline avec la tagline de la diapositive courante
  tagLine.innerHTML.slides[currentSlide].tagLine;
  // 6. Effacer tous les anciens points du conteneur des points
  dotsContainer.innerHTML = '';
  // 7. Pour chaque diapositive dans la liste des diapositives :
  for (let i = 0; i < slides.length; i++) {
    // 7.1 Créer un nouvel élément de point
    const dot = document.createElement("div");
    // 7.2 Ajouter la classe 'dot' à ce point
    dot.classList.add("dot");
    // 7.3 Si l'index de la diapositive actuelle est égale à l'index de la diapositive courante :
    if (i === currentSlide) {
      // 7.3.1 Ajouter la classe 'dot_selected' au point
      dot.classList.add('dot_selected');
    }
    // 7.4 Ajouter le point au conteneur des points
    dotsContainer.appendChild(dot);
  }
}


*/




