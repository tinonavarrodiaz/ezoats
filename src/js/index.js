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