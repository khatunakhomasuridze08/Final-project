const slideItems = document.querySelectorAll('.slider_item');
const sliderIndex = document.querySelector('#slider_index');

let activeIndex = 0;
let secActiveIndex = 0;


initSliders()

function initSliders(){
  setInterval(showNextSlide, 5000)
}

function renderSliders() {
  slideItems.forEach((item, i) => {
    if(activeIndex === i){
      item.classList.add('active');
      if(activeIndex + 1 < 10){
        sliderIndex.textContent=`0${activeIndex+1}`
      } else {
        sliderIndex.textContent=activeIndex+1
      }
    } else {
      item.classList.remove('active');
    }
  })
}

function showNextSlide() {
  activeIndex = activeIndex + 1;
  if(activeIndex > slideItems.length - 1){
    activeIndex = 0;
  }
  renderSliders();
}

// .....................

const recSlideItems = document.querySelectorAll('.recSlider_item')
const squares = document.querySelectorAll('.square')

function initSecondSlider() {
  for (let i = 0; i < squares.length; i++) {
    const button = squares[i];
    button.addEventListener("click", ()=>{
      secActiveIndex = i
      renderSecondSliders();
    })
  }
}
initSecondSlider()

function renderSecondSliders() {
  recSlideItems.forEach((item, i) => {
    if(secActiveIndex === i){
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  })
}

// ......................................




const categoryBtns = document.querySelectorAll('.left_item_button');
const categoryItems = document.querySelectorAll('.right_item');

for (let i = 0; i < categoryBtns.length; i++) {
  const button = categoryBtns[i];
  button.addEventListener("click", (e)=>{
    const catId = e.target.getAttribute('cat_id')
    if(catId == -1){
      showAllCategories()
    } else {
      showFilteredCategories(catId)
    }
    switchSelectedCategoryButton(catId);
  })
}


function showAllCategories(){
  for(let n = 0; n < categoryItems.length; n++){
    const item = categoryItems[n]
    item.classList.remove('hide')
  }
}


function showFilteredCategories(catId){
  for(let n = 0; n < categoryItems.length; n++){
    const item = categoryItems[n]
     
    if(item.getAttribute('cat_id') === catId){
      item.classList.remove('hide')
    } else {
      item.classList.add('hide')
    }
  }
}

function switchSelectedCategoryButton(selectedCatId){
  for(let n = 0; n < categoryBtns.length; n++){
    const button = categoryBtns[n]
    const catId = button.getAttribute('cat_id')
    if(catId == selectedCatId){
      button.classList.add('active')
    } else {
      button.classList.remove('active')
    }
  }
}

// ---------------------






const mapForm = document.querySelector('#map-form')
const contactModalCloser = document.querySelector('#contact_modal_closer')
const contactModal = document.querySelector('#contact_modal')


mapForm.addEventListener('submit', (e)=>{
  e.preventDefault();

  sendContactData(new FormData(e.target))
})

contactModalCloser.addEventListener('click', ()=>{
  contactModal.classList.remove('show')
})

async function sendContactData(formData){
  try {
    const response = await fetch('http://api.kesho.me/v1/user-test/contact', {
      method: 'post',
      body: formData,
    });
    const responseData = await response.json();
    console.log(responseData)
    contactModal.classList.add('show')
  }catch (e){

    console.log('Error - ', e);
  }
}

// -------------------------------





const progressBox = document.querySelector('#personal-info-content')
const skillBox = document.querySelector('#skills_box')
let isProgressVisible = false;


function initProgress(){
  document.addEventListener('scroll', function(e) {
    if(!isProgressVisible){
      checkScrollDistanceForSkills()
    }
  });
  checkScrollDistanceForSkills()
}

initProgress()

function checkScrollDistanceForSkills(){
  if(window.scrollY > progressBox.getBoundingClientRect().height + progressBox.getBoundingClientRect().top){
    skillBox.classList.add('show_progress')
    isProgressVisible = true;
  }
}

// ..................................


