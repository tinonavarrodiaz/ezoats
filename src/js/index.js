import { verifyMobile, setMobileClass } from "./modules/isMobile";
import {
  d,
  w,
  dd,
  c,
  log,
  dir,
  id,
  q,
  all,
  body,
  cssScrollBarWidth
} from "./modules/initialVariables";
import { loading } from "./modules/loading";
// import { scrollTo } from "./modules/scrollSmooth";
import { activeMenu, toggleMenu } from "./modules/active-menu";
import {banner} from "./modules/banner";
import AOS from 'aos';
import Glide from '@glidejs/glide'

AOS.init({
  easing: 'ease-out-back',
  duration: 850,
  startEvent: 'DOMContentLoaded',
  useClassNames: true,
});

setMobileClass(dd, "mobile", "desktop");

activeMenu();

if (id('year')){
  id('year').innerText = ` ${new Date().getFullYear()}`
}

if(q('.home__text ') && verifyMobile()){
  let br = [...all('.home__text br')]
  br.map(el=>el.remove())
}

// id('mainHeader').style.height=`${150*100/window.innerWidth}vw`
dd.style.setProperty('--windowHeight',`${150*100/window.innerHeight}vh`)
console.log(w.innerHeight,150*100/w.innerHeight)
const loadingEle = document.getElementById("loading");



addEventListener("load", () => {
  cssScrollBarWidth();
  if (loadingEle) loading(loadingEle, 500);
});

addEventListener("resize", () => {
  cssScrollBarWidth();
  setMobileClass(dd, "mobile", "desktop");
});

const setCurrentYear = ele => {
  ele.innerText = new Date().getFullYear();
};

const currentYearElement = id("currentYear");
if (currentYearElement) setCurrentYear(currentYearElement);

(function() {
  scrollTo(".scroll", false, ".main-header");
})();

toggleMenu(verifyMobile(), "#toggle", "#main-menu");

const bannerElement = id('bannerHome');
if (bannerElement) banner(bannerElement,5000);


if(document.querySelector('.glide')){
  new Glide('.glide',{
    type: "carousel",
    perView:4,
    // autoplay:5000,
    hoverpause: false,
    gap: 15,
    breakpoints: {
      800: {
        perView: 3
      },
      600: {
        perView: 1
      }
    }
  }).mount()
}

const br = [...all('br')]
if(verifyMobile() && br){
  br.map(el=>el.remove())
}

const glideSlides = q('.glide__slides')

if(glideSlides){
  glideSlides.addEventListener('click', e=>{
    let value = e.target.parentElement.querySelector('input')
    if(e.target.classList.contains('btn-plus')){
      console.log(parseInt(value.value))
      if(parseInt(value.value) <=3){
        value.value==parseInt(value.value)+1
      }
    }
  })
}

const slider = id('slider')



if (slider){
  const slides = [...slider.querySelectorAll('.slide')]
  const total = slides.length
  let height = 0 
  let text = [...document.querySelectorAll('.slide-text')] //.clientHeight
  text.map(el=>{
    el.clientHeight > height ? height=el.clientHeight : null
  })
  console.log(height)
  dd.style.setProperty('--text-height',0)
  slider.parentElement.addEventListener('click', e=>{
    let active = slider.querySelector('.active');
    let index = slides.indexOf(active)
    let T = e.target
    slides.map(el=>el.classList.remove('active'));
    if (T.classList.contains('right')){
      if (index === total-1){
        slides[0].classList.add('active')
      }else{
        slides[index+1].classList.add('active')
      }
    }
    if (T.classList.contains('left')){
      if (index === 0){
        slides[total-1].classList.add('active')
      }else{
        slides[index-1].classList.add('active')
      }
    }
    // let textHeight = document.querySelector('.active .slide-text').clientHeight
    // console.log(textHeight)
    // dd.style.setProperty('--text-height',`${textHeight}px`)
  })
}