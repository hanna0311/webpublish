let allMenu = document.querySelector(".all-menu"),
    allMeniMask = document.querySelector(".all-menu-mask"),
    allMenuWrapper = document.querySelector(".all-menu-wrapper"),
    allMenuClose = document.querySelector(".all-menu-close");
    
// all-menu 버튼이 클릭되면
// - 전체메뉴 모달창과 mask-layer가 나타난다.
allMenu.addEventListener("click", function(){
    allMenuWrapper.classList.add("active")
    allMeniMask.classList.add("active")
})
allMenuClose.addEventListener("click", function(){
    allMenuWrapper.classList.remove("active")
    allMeniMask.classList.remove("active")
})
// 모바일 버튼이 클릭되면
// 1. 모바일 메뉴가 생기고
// 2. 모바일 버튼이 x로 변함
let mbBtn = document.querySelector(".mb-bt"),
    mbNav = document.querySelector(".mb-nav"),
    mbMenuMask = document.querySelector(".mb-menu-mask");
    // console.log(mbBtn)
    // console.log(mbNav)
    // console.log(mbMenuMask)

mbBtn.addEventListener("click", function(event){
    event.preventDefault(); //a태그의 링크
    // 토글: 대개 2개의 기능이 있으며 누를 때마다 전환되는 식
    mbBtn.classList.toggle("active")
    mbNav.classList.toggle("active")
    mbMenuMask.classList.toggle("active")
})

// 모바일 서브메뉴 펼치기(아코디언)기능
let mbMenuList = document.querySelectorAll(".mb-menu > li"),
    mbSubMenu = document.querySelectorAll(".mb-subMenu"),
    mbMainMenu = document.querySelectorAll(".mb-mainMenu");

// 펼쳐질 서브메뉴의 높이값 저장
let mbSubmenuHeight = []; //배열선언

// 서브메뉴의 높이값을 계산하여 배열값으로 저장
mbSubMenu.forEach(function(list, index){  //투숙객정보, 객실정보
    console.log(list.querySelectorAll("li"))
    let conut = list.querySelectorAll("li").length;
    console.log(conut)
    mbSubmenuHeight[index]=52*conut + 22 //각각의 li높이*갯수 + 패딩 높이값
})
console.log(mbSubmenuHeight)

// 모바일메뉴(li > a(.mb-mainMenu))를 클릭했을 때
mbMainMenu.forEach(function(mainList,index){
    mainList.addEventListener("click",function(event){
        event.preventDefault();
        mainList.classList.toggle("open");
        let isOpen = mainList.classList.contains("open")
        if(isOpen){
            let submenuHeight = mbSubmenuHeight[index]
            console.log(submenuHeight)
            mbMenuList[index].style.height = `${submenuHeight+55}px`
        }else {
            mbMenuList[index].style.height = `55px`
        }
    })
})

// 화면 사이즈 체크
window.addEventListener("resize",function(){
    let temp = this.window.innerWidth;
    console.log(temp)
    if(temp > 1220) {
        mbBtn.classList.remove("active")
        mbNav.classList.remove("active")
        mbMenuMask.classList.remove("active")
        mbMenuList.forEach(function(list,index){
            list.style.height="55px"
        })
    }else {
        allMenuWrapper.classList.remove("active")
        allMeniMask.classList.remove("active")
    }
})







new Swiper('.sw-visual',{
    loop:true,
    autoplay: {
        delay: 5000,
    },
    effect: "fade",
    speed: 2500,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }  ,
})

new Swiper('.sw-banner',{
    // slidesPerView: 6,
    // spaceBetween: 13,
    slidesPerView: "auto",
    navigation: {
        prevEl: '.banner-back',
        nextEl: '.banner-forward',
    },
    autoplay: true,
    rewind: true,
})