const headerEl = document.querySelector("header");
const scrollToTop = document.querySelector(".scrollToTop")


window.addEventListener("scroll",() =>{
  let height = headerEl.getBoundingClientRect().height;

  if(window.pageYOffset - height > 700){
    if(!headerEl.classList.contains("sticky")){
      headerEl.classList.add("sticky");
    }
  }else{
    headerEl.classList.remove("sticky");
  }

  if(window.pageYOffset > 1500){
    scrollToTop.style.display = "block"
  }else{
    scrollToTop.style.display = "none"
  }
})


var mySwiper = new Swiper('.swiper-container', {
  loop: true,

  // 如果需要分页器
  pagination: '.swiper-pagination',
  paginationType: 'bullets',

  // 如果需要前进后退按钮
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',


  speed: 800,


})

// 让图片横放
const isotope = new Isotope(".cases", {
  layoutMode: "fitRows",
  itemSelector: ".case-item"
})

const filterBtns = document.querySelector('.filter-btns');

filterBtns.addEventListener("click", e => {
  let {
    target
  } = e;
  const filterOption = target.getAttribute("data-filter");
  if (filterOption) {
    document
      .querySelectorAll(".filter-btn.active")
      .forEach(btn => btn.classList.remove('active'));
    target.classList.add("active");

    isotope.arrange({
      filter: filterOption
    });
  }
});


// 文字出入动画
const staggeringOption = {
  delay:300,
  distance:"50px",
  duration:500,
  easing:"ease-in-out",
  origin:"bottom"
}

ScrollReveal().reveal(".feature",{...staggeringOption,interval:350})
ScrollReveal().reveal(".service-item",{...staggeringOption,interval:350})

const dataSectionEl = document.querySelector(".data-section");
ScrollReveal().reveal(".data-section",{
  beforeReveal:() => {
    anime({
      targets:".data-piece .num",
      innerHTML:el => {
        return [0,el.innerHTML];
      },
      duration:2000,
      round:1,
      easing:"easeInExpo"
    });
    dataSectionEl.style.backgroundPosition = "center calc(50% - ${dataSectionEl.getBoundingClientRect().bottom / 5}px)";
  }
});


window.addEventListener("scroll",() =>{
  const bottom = dataSectionEl.getBoundingClientRect().bottom;
  const top = dataSectionEl.getBoundingClientRect().top;

  if(bottom >= 0 && top <= window.innerHeight){
    dataSectionEl.style.backgroundPosition = "center calc(50% - ${bottom / 5}px)";
  }
})

// 定位
const scroll = new SmoothScroll('nav a[href*="#"],.scrollToTop a[href*="#"]',{
  header:"header",
  offset:80
})


// 探索更多按钮
document.addEventListener("scrollStart",()=>{
  if(headerEl.classList.contains("open")){
    headerEl.classList.remove("open")
  }
})


const exploreBtnEls = document.querySelectorAll(".explore-btn");

exploreBtnEls.forEach(exploreBtnEl=>{
  exploreBtnEl.addEventListener("click",() =>{
    scroll.animateScroll(document.querySelector("#about-us"));
  })
})


// 折叠按钮
const burgerEl = document.querySelector(".burger");
burgerEl.addEventListener("click",()=>{
  headerEl.classList.toggle("open")
})

