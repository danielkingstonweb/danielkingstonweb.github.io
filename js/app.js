
// Hamburger related variables

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav-menu');
const logo = document.querySelector('.navigation__logo');

// HideShow Page Variables
const landingSection = document.querySelector('#landingSection');
const photographySection = document.querySelector('#photographySection');
const projectSection = document.querySelector('#landingSection');


// HideShow Link Variables
const landingWork = document.querySelector('#landingSection');
const landingContact = document.querySelector('#photographySection');

const projects = [
{
    id: 201,
    title: 'Earthenwares',
    links: ['https://github.com/rubyfrancesgit/Earthenwares'],
    linkDescription: 'View Git Repository',
    description: `Earthenwares is a fullstack application created in a group. It's an e-commerce website created to sell pottery targeted at local potters. It included an extensive research & design phase followed by the coding phase.`,
    realm: ['Web/UX Design', 'Front-End Development', 'Back-End Development'],
    tools: ['HTML', 'CSS(Sass)', 'JS', 'jQuery', 'Gulp', 'MongoDB', 'Postman', 'nodeJS', 'Figma', 'Adobe Suite'],
    colourPalette: [],
    typeFaces: [],
    images: ['./img/projects/earthenwares/clear1.png',
    './img/projects/earthenwares/clear2.png',
    './img/projects/earthenwares/clear3.png'],
    showAll:'All'
},
{
    id: 202,
    title: `Ms. Johnson's`,
    links: [''],
    linkDescription: '',
    description: `I made Ms Johnson's Flamin' Hot Vulva Sauce as a birthday gift for someone very dear. The illustrations and some of the copy have been taken from various books and magazines I collect for collage, I've worked these assets into a cohesive design with a simple yet effective colour scheme. I've also scanned in my own textures for this. I decided to include this as I think that it shows an ability to visualize and create packaging but more so that it represents the beauty & fun that I find in design, also I enjoyed making & bottling the hot sauce (it's quite good).`,
    realm: ['Graphic Design'],
    tools: ['Adobe Suite', 'Manual Collage'],
    colourPalette: [],
    typeFaces: [],
    images: ['./img/projects/msJohnsons/clear1.png'],
    showAll:'All'
},
{
  id: 203,
  title: 'Revulva Misc',
  links: [''],
  linkDescription: '',
  description: `Revulva is a local Wellington band that I've been doing some design for, starting with their Album Liners and continuing business with multiple event posters`,
  realm: ['Graphic Design'],
  tools: ['Adobe Suite'],
  colourPalette: [],
  typeFaces: [],
  images: ['./img/projects/revulva/clear1.png',
  './img/projects/revulva/clear2.png',
  './img/projects/revulva/clear3.png'],
  showAll:'All'
},
{
  id: 204,
  title: 'Revulva Tour',
  links: [''],
  linkDescription: '',
  description: `I was entrusted with the design work for Revulva's first nationwide tour, the tour was themed around their single 'This Town'. This was a really fun opportunity to create a cohesive set of works that speak to each other and the audience collectively. Dressing and shooting each of the band and incorporating them into a mix of print & digital designs balancing the western chic and the colourful and playful flair that makes Revulva what they are.`,
  realm: ['Graphic Design'],
  tools: ['Adobe Suite'],
  colourPalette: [],
  typeFaces: [],
  images: ['./img/projects/thisTownTour/clear1.png',
  './img/projects/thisTownTour/clear2.png',
  './img/projects/thisTownTour/clear3.png',
  './img/projects/thisTownTour/clear4.png',
  './img/projects/thisTownTour/clear5.png',
  './img/projects/thisTownTour/clear6.png'],
  showAll:'All'
},

{
  id: 205,
  title: 'James Warrender Artist',
  links: ['https://daniel.kingston.yoobeestudent.net/jameswarrender/?fbclid=IwAR3JzReFTcrnW0Mre40XEFv2OJH294O_pVmAgplG8y4Mis752Nmb2NrY2Zc'],
  linkDescription: 'View Website',
  description: `This website is a fully responsive Wordpress Custom Theme written in PHP with Woocommerce for the storefront. The purpose of this website is to display and sell the artists work. Many aspects of the site are customizable such as the colour scheme, landing page images etc. There are also custom post types for upload new work.`,
  realm: ['Web/UX Design', 'Front-End Development', 'Wordpress'],
  tools: ['HTML', 'CSS(Sass)', 'JS', 'jQuery', 'PHP', 'Laravel Mix', 'Figma', 'Adobe Suite'],
  colourPalette: [],
  typeFaces: [],
  images: ['./img/projects/warrender/clear1.png',
  './img/projects/warrender/clear2.png',
  './img/projects/warrender/clear3.png',
  './img/projects/warrender/clear4.png'],
  showAll:'All'
},
{
  id: 206,
  title: 'Dirty Burger',
  links: [''],
  linkDescription: '',
  description: `This is a table-side ordering system designed for Dirty Burger. At it's core this is a design project based much more in the frontend with limited actual functionality. It is designed for an iPad pro 12.9". Please note that this is not a real client of mine but a project completed while studying`,
  realm: ['Web/UX Design', 'Front-End Development',],
  tools: ['HTML', 'CSS(Sass)', 'JS', 'jQuery', 'Figma', 'Adobe Suite'],
  colourPalette: [],
  typeFaces: [],
  images: ['./img/projects/dirtyburger/clear1.png',
  './img/projects/dirtyburger/clear2.png',],
  showAll:'All'
},
{
  id: 207,
  title: 'Rites of Passage',
  links: [''],
  linkDescription: '',
  description: `Rites of Passage is a coming of age production put on by Long Cloud Youth Theatre - this poster was produced in A1 print and the social tiles present on Facebook & Instagram. I also took the photo assets present in the poster`,
  realm: ['Graphic Design', 'Photography'],
  tools: ['Adobe Suite', 'Digital Photography'],
  colourPalette: [],
  typeFaces: [],
  images: ['./img/projects/riteOfPassage/clear1.png',],
  showAll:'All'
},
{
  id: 208,
  title: 'The Gilded Lily',
  links: [''],
  linkDescription: '',
  description: `The Gilded Lily is an event poster for a Wellington Jazz Festival Event`,
  realm: ['Graphic Design'],
  tools: ['Adobe Suite'],
  colourPalette: [],
  typeFaces: [],
  images: ['./img/projects/gildedLily/gildedLily.png',],
  showAll:'All'
},
{
  id: 209,
  title: 'Frank on Tap',
  links: [''],
  linkDescription: '',
  description: `Frank on Tap are a local Wellington band, these are some variations on an event poster I've completed for them`,
  realm: ['Graphic Design'],
  tools: ['Adobe Suite'],
  colourPalette: [],
  typeFaces: [],
  images: ['./img/projects/frank/clear1.png',],
  showAll:'All'
},
// {
//   id: 210,
//   title: 'NOVA Poster',
//   links: [''],
//   linkDescription: '',
//   description: `Frank on Tap are a local Wellington band, these are some variations on an event poster I've completed for them`,
//   realm: ['Graphic Design'],
//   tools: ['Adobe Suite'],
//   colourPalette: [],
//   typeFaces: [],
//   images: ['./img/projects/frank/clear1.png',],
//   showAll:'All'
// },
// {
//   id: 211,
//   title: 'NOVA EP',
//   links: [''],
//   linkDescription: '',
//   description: `Frank on Tap are a local Wellington band, these are some variations on an event poster I've completed for them`,
//   realm: ['Graphic Design'],
//   tools: ['Adobe Suite'],
//   colourPalette: [],
//   typeFaces: [],
//   images: ['./img/projects/frank/clear1.png',],
//   showAll:'All'
// },
]

const photography = [
    {
        id: 101,
        title: 'Ezra Phoenix',
        description: `I was hired by Studio Halfgray (Wellington) to do prop sourcing and set design for Ezra Phoenix's NZ on Air funded music video 'FOMO', this gave me a great opportunity to bring my passion for design into a physical space in way that I had never done before. Ezra also hired me to shoot some portraits on the day.`,
        links: 'https://www.youtube.com/watch?v=TZgWmcRN5_M&ab_channel=EzraPhoenix',
        linkDescription: 'FOMO Video',
        timestamp: 'August 2022',
        location: 'Newtown, Wellington',
        format: '35mm',
        film: ['Portra 400'],
        images: ['./img/photography/ezra (1).jpg',
        './img/photography/ezra (2).jpg',
        './img/photography/ezra (3).jpg',
        './img/photography/ezra (4).jpg',
        './img/photography/ezra (5).jpg',
        './img/photography/ezra (6).jpg'],
        showAll:'All'  
    },
    {
        id: 102,
        title: 'Mirror Ritual',
        description: 'In September 22 I followed Wellington favourites Mirror Ritual to two shows in Auckland & Wellington shooting behind the scenes and gig photos, one of these images headed an article on Rolling Stone Aus',
        links: 'https://au.rollingstone.com/music/music-features/5-artists-to-see-at-the-others-way-festival-2022-43401/',
        linkDescription: 'Rolling Stone',
        timestamp: 'Sept 2022',
        location: 'Various Locations',
        format: '35mm',
        film: ['Lomography 800'],
        images: ['./img/photography/mirror ritual (1).jpg',
        './img/photography/mirror ritual (2).jpg',
        './img/photography/mirror ritual (3).jpg',
        './img/photography/mirror ritual (4).jpg',
        './img/photography/mirror ritual (5).jpg',
        './img/photography/mirror ritual (6).jpg', 
        './img/photography/mirror ritual (7).jpg',
        './img/photography/mirror ritual (8).jpg'],
        showAll:'All'
    },
    {
      id: 103,
      title: 'Flat Portraits',
      description: 'Inspired by old "I Spy" books and for a love for my home, homies and decorating I decided to organize this photo shoot with the intention of having these hang in our flat. These images are taken using a mix of natural and studio lighting to catch the intricacies of the scene, giving each subject their opportunity to customize aspects of the scene while also maintaining consistency Shot on a Mamiya 645',
      links: '',
      linkDescription: '',
      timestamp: 'Apr 2023',
      location: 'Kilbirnie, Wellington',
      format: 'Medium Format',
      film: ['Portra 400'],
      images: ['./img/photography/flatFam (1).jpg',
      './img/photography/flatFam (2).jpg',
      './img/photography/flatFam (3).jpg',
      './img/photography/flatFam (4).jpg',
      './img/photography/flatFam (5).jpg',
      './img/photography/flatFam (6).jpg', 
      './img/photography/flatFam (7).jpg',
      './img/photography/flatFam (8).jpg',
      './img/photography/flatFam (9).jpg',
      './img/photography/flatFam (10).jpg'],
      showAll:'All'
  },
  {
    id: 104,
    title: 'Revulva Video',
    description: `These images were taken behind the scenes during the filming of Revulva's music video for their single 'This Town. I used a range of cameras to capture 35mm & Medium format images. These images were used for press releases, social media, and the single cover.`,
    links: 'https://www.youtube.com/watch?v=8YP7A05SsD4&ab_channel=BrownPriderFunk',
    linkDescription: 'This Town Video',
    timestamp: 'Dec 2023',
    location: 'Red Rocks, Wellington',
    format: 'Medium Format | 35mm',
    film: ['Portra 400', 'Cinestill 400D', 'Provia 100f (Expired)'],
    images: ['./img/photography/vulva (1).jpg',
    './img/photography/vulva (2).jpg',
    './img/photography/vulva (3).jpg',
    './img/photography/vulva (4).jpg',
    './img/photography/vulva (5).jpg',
    './img/photography/vulva (6).jpg', 
    './img/photography/vulva (7).jpg',
    './img/photography/vulva (8).jpg',
    './img/photography/vulva (9).jpg',
    './img/photography/vulva (10).jpg',
    './img/photography/vulva (11).jpg',
    './img/photography/vulva (12).jpg',
    './img/photography/vulva (13).jpg',
    './img/photography/vulva (14).jpg',
    './img/photography/vulva (15).jpg',
    './img/photography/vulva (16).jpg', 
    './img/photography/vulva (17).jpg',
    './img/photography/vulva (18).jpg',
    './img/photography/vulva (19).jpg',
    './img/photography/vulva (20).jpg',
    './img/photography/vulva (21).jpg',
    './img/photography/vulva (22).jpg',
    './img/photography/vulva (23).jpg',
    './img/photography/vulva (24).jpg',
    './img/photography/vulva (25).jpg',
    './img/photography/vulva (26).jpg'],
    showAll:'All'
},
];


// Load animations begin

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// Load animations end

// ! Running through Photo Array 
function postPhotography(){

    let i = 0;
    for(i = 0; i < photography.length; i++){

          
        document.getElementById("photographyContent").innerHTML += `

        <button class="photography__card" onclick="toggleSectionsTwo();" id="${photography[i].id}">
        <a href="#galleryInfo" class="photography__card-link">
            <div class="photography__card-img">
                <img src="${photography[i].images[1]}" alt="" class="photography-card-img">
            </div>
            <div class="photography__card-title">
            <h3 class="photography-card-title">${photography[i].title}</h3>
            </div>
            </a>
        </button>
        
        `;
    }
}

postPhotography();

const cards = document.querySelectorAll('.photography__card');

// ! Individual Photo Hide Show

function photoHideShow(){
    let i = 0;
    for(i = 0; i < photography.length; i++){
        if (parseInt(this.id) === photography[i].id){

            const images = photography[i].images;
            document.getElementById('galleryInfo').innerHTML =`
            <div class="single-right__title">
              <h2 class="single-right-title fade-in-bottom-1">${photography[i].title}.</h2>
              <p class="single-right-description fade-in-bottom-2">${photography[i].description}</p>
            </div>
            <div class="single-right__content">
              <div class="single-right__film fade-in-bottom-3">
                  <a class="single-right-link" target="_blank" rel="noopener noreferrer" href="${photography[i].links}" data-replace="${photography[i].linkDescription}"><span>${photography[i].linkDescription}<span/></a>
                  <p class="single-right-film fade-in-bottom-5">${photography[i].film.join(' | ')}</p>
              </div>
              <div class="single-right__other fade-in-bottom-4">
                  <p class="single-right-other">${photography[i].timestamp}</p>
                  <p class="single-right-other">${photography[i].format}</p>
              </div>
            </div>
            `;

            const emptyGallery = document.getElementById('gallery');

            while (emptyGallery.firstChild) emptyGallery.removeChild(emptyGallery.firstChild);
            

            for(image of images){

              document.getElementById('gallery').innerHTML +=`
              <img src="${image}" alt="" class="gallery-img">
              <div class="modal">
              <span class="close"><i class="fas fa-times"></i></span>
              <div class="modal-content">
                <img src="" class="modal-img" />
                <span class="modal-txt"></span>
              </div>
              </div>
              `;
            }
          }
    }
    const galleryImages = document.querySelectorAll(".gallery-img");
    const modal = document.querySelector(".modal");
    const modalImg = document.querySelector(".modal-img");
    const modalTxt = document.querySelector(".modal-txt");
    const close = document.querySelector(".close");
    
    galleryImages.forEach((image) => {
      image.addEventListener("click", () => {
        modalImg.src = image.src;
        modalTxt.innerHTML = image.alt;
        modal.classList.add("appear");
    
        close.addEventListener("click", () => {
          modal.classList.remove("appear");
        });
      });
    });

}
  cards.forEach(photography__card => {
    photography__card.addEventListener('click', photoHideShow)
  });

function postProjects(){

  let i = 0;
  for(i = 0; i < projects.length; i++){
      
      document.getElementById("projectsList").innerHTML += 
      `
      
      <button class="projects__single" 
      onclick="toggleSectionsThree();" id="${projects[i].id}">
      
      <div class="projects__single-top">
      <div class="projects-photo" id="projectsPhoto">
      <img src="${projects[i].images[0]}" alt="" class="projects-card-image">
      </div>
      </div>

      <div class="projects__single-bottom">
      
        <h3 class="projects__single-title">${projects[i].title}</h3>
        <p class="projects__single-medium">${projects[i].realm.join(' | ')}</p>
        </div>
        <div class="go-corner" href="#">
        <div class="go-arrow">
          →
        </div>
      </div>
        
      </button>
      `;
  // }
  }
}

postProjects();


const projectsSingle = document.querySelectorAll('.projects__single');

// function postProjectsPhoto(){
//   let i = 0;
//   for(i = 0; i < projects.length; i++){

//       if (parseInt(this.id) == projects[i].id){

//       document.getElementById("projectsPhoto").style.backgroundImage =`url(${projects[i].images[0]})`;
//       }
//     }
// }

function singleProject(){
  let i = 0;
  for(i = 0; i < projects.length; i++){

      if (parseInt(this.id) == projects[i].id){

      const images = projects[i].images;

      document.getElementById("singleProject").innerHTML = 
      `
      <div id="projectJump" class="single-project__anchor"></div>
 
      <div class="single-project__heading">
        <div class="single-project-back">
          <button onclick="toggleSectionsThree();" class="single-project-btn">
            <i class="fa-solid fa-arrow-left"></i>
            <p class="single-btn-text">Go Back</p>
          </button>
        </div>
          <h2 class="single-project-heading">${projects[i].title}</h2>
        <div class="single-project-back-alt">
        <div class="prompt">
        <div class="single-project__prompt">
                <p class="single-project-prompt">scroll</p>
                <div class="scroll-prompt" scroll-prompt="" ng-show="showPrompt" style="opacity: 1;">
                <div class="scroll-prompt-arrow-container">
                    <div class="scroll-prompt-arrow"><div></div></div>
                    <div class="scroll-prompt-arrow"><div></div></div>
                </div>
            </div>
        </div>
    </div>
        </div>
      </div>
      <div class="single-project-content">
          <div class="single-project-intro">
              <div class="single-project-left">
              <p class="single-project-description">
              ${projects[i].description}
              </p>
              <a class="single-project-link" target="_blank" rel="noopener noreferrer" href="${projects[i].links}" data-replace="${projects[i].linkDescription}"><span>${projects[i].linkDescription}<span/></a>
              </div>
              
              <div class="single-project-div"></div>
              <div class="single-project-right">
                <div class="single-project-medium">${projects[i].realm.join(' | ')}</div>
                <div class="single-project-tools">${projects[i].tools.join(' | ')}</div>
                </div>
          </div>
          <div class="single-project-images" id="projectGallery">
            
          </div>
      </div>
  `;


        const emptyGallery = document.getElementById('projectGallery');
        
        while (emptyGallery.firstChild) emptyGallery.removeChild(emptyGallery.firstChild);

        for(image of images){

        document.getElementById('projectGallery').innerHTML +=`
        <img src= "${image}" alt="" class="single-project-image reveal">
        `
        }
      }
    }
}

// ! Hover for project section OLD

// projectsSingle.forEach(projects__single => {
//   projects__single.addEventListener('mouseover', postProjectsPhoto)
// });

// ! Hover for project section OLD ENDS

projectsSingle.forEach(projects__single => {
  projects__single.addEventListener('click', singleProject)
});



// ! Hamburger

// Hamburger Click Function
function hamburgerNavToggle(){
  hamburger.addEventListener('click', function(){
      this.classList.toggle('is-active');
      nav.classList.toggle('reveal-nav');
      navMenu.classList.toggle('nav-reveal-items');
  })
}

hamburgerNavToggle();
// ! Dark Mode

const page = document.querySelector(".page");
const toggle = document.querySelector(".dark-mode-input");
const toggleIcon = page.querySelector(".dark-mode-icon");
const toggleLogo = document.querySelector("navigation__logo");


setCheckedState();

function setCheckedState() {
  // checks if localStorage has a "checked" value set at all
  if (!(localStorage.checked === undefined)) {
    // if it does, it sets the state of the toggle accordingly
    toggle.checked = isTrue(localStorage.getItem("checked"));
    // after setting the toggle state, the theme is adjusted according to the checked state
    toggleTheme();
  }
}

function toggleTheme() {
    if (toggle.checked) {
        page.classList.replace("light", "dark");
      } else {
        page.classList.replace("dark", "light");
      }
      // replace icons on page
      toggleLogos();
      // set the value of the "checked" key in localStorage
      localStorage.setItem("checked", toggle.checked);

      
}


function toggleLogos(){
  if (page.classList.contains("light")) {
    logo.classList.replace('navigation__logo-alt','navigation__logo');
  } else {
    logo.classList.replace('navigation__logo','navigation__logo-alt');
  }
}


  function isTrue(value) {
    // convert string to boolean
    return value === "true";
  }

  toggle.addEventListener("change", toggleTheme);
  
  

// import Typed from 'typed.js';

let options = {
    strings: ['Web Developer', 'Web Designer','Graphic Designer', 'Photographer'],
    // IPColor: 'white',
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
}

let typed = new Typed('.auto-type', options);


// hide show toggles

let activeSection = 'landingSection';


function toggleSections(sectionIds, sectionToShow) {
  console.log('heyBro hope ur enjoying the site x');
  for (let i = 0; i < sectionIds.length; i++) {
    let section = document.getElementById(sectionIds[i]);
    if (section.id === sectionToShow) {
      section.classList.remove('hide');
    } else {
      section.classList.add('hide');
    }
  }
}

function closeActiveSection() {
  let section = document.getElementById(activeSection);
  if (section) {
    section.classList.add('hide');
  }
}

function handleNavClick(sectionId) {
  closeActiveSection();
  toggleSections(['landingSection', 'contactSection', 'photographySection', 'projectSection'], sectionId);
  activeSection = sectionId;
}

const navItem = document.querySelectorAll('.nav__item');

function closeNavOnItemClick() {
  for (let i = 0; i < navItem.length; i++){
    navItem[i].addEventListener('click', function(){
      hamburger.classList.remove('is-active'); // Remove 'is-active' class from hamburger icon
      nav.classList.toggle('reveal-nav');
      navMenu.classList.toggle('nav-reveal-items');
    });
  }
}

closeNavOnItemClick();

// !

// ! Photography Section Hide Show Starts

let singlePhotoSection = document.getElementById("singlePhotoSection");
singlePhotoSection.classList.add("hidden");

function toggleSectionsTwo() {
  let photographyMain = document.getElementById("photographyMain");
  
  photographyMain.classList.toggle("hidden");
  singlePhotoSection.classList.toggle("hidden");
}

// ! Photography Section Hide Show Ends

// ! Project Section Hide Show Starts

let singleProjectSection = document.getElementById("singleProjectSection");
singleProjectSection.classList.add("hidden");

function toggleSectionsThree() {
  let projectsMain = document.getElementById("projectsMain");
  
  projectsMain.classList.toggle("hidden");
  singleProjectSection.classList.toggle("hidden");
}

// ! Project Section Hide Show Ends

// ! Reveal Event Listener

window.addEventListener("scroll", reveal);
