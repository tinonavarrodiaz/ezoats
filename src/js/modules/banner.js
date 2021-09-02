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
} from "./initialVariables";

export const banner = (banner,timer)=>{
  const imgs = [...banner.querySelectorAll('img')]
  const Total = imgs.length;
  const SliderSI = setInterval(() => {
    let active = banner.querySelector('.show')
    let index = imgs.indexOf(active)
    // c.log(`active= ${index}`, `Total: ${Total}`)
    imgs.map(el=>el.classList.remove('show'))
    if (index < Total-1){
      imgs[index+1].classList.add('show')
    }else{
      imgs[0].classList.add('show')
    }
  }, timer);
}