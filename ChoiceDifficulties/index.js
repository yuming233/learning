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
})