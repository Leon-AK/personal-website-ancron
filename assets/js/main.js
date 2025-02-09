//==== header ====
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navbarMenuBtn = document.querySelector('.navbar-menu-btn');

const navbarForm = document.querySelector('.navbar-form');
const navbarFormCloseBtn = document.querySelector('.navbar-form-close');
const navbarSearchBtn = document.querySelector('.navbar-search-btn');

function navIsActive(){
    header.classList.toggle('active');
    nav.classList.toggle('active');
    navbarMenuBtn.classList.toggle('active');
}

navbarMenuBtn.addEventListener('click', navIsActive);

const searchBarIsActive = () => navbarForm.classList.toggle('active');

navbarSearchBtn.addEventListener('click', searchBarIsActive);
navbarFormCloseBtn.addEventListener('click', searchBarIsActive);

//==== back to top ====
const backToTop = document.getElementById('backToTop');
const footer = document.querySelector('footer');

// 显示/隐藏返回顶部按钮，并处理颜色反转
window.addEventListener('scroll', () => {
    // 获取页面总高度
    const pageHeight = document.documentElement.scrollHeight;
    // 获取视窗高度
    const viewportHeight = window.innerHeight;
    // 获取当前滚动位置
    const scrollPosition = window.scrollY;
    // 获取距离页面底部的距离
    const distanceFromBottom = pageHeight - (scrollPosition + viewportHeight);
    
    // 检查是否需要显示按钮
    if (scrollPosition > 300) {
        backToTop.classList.add('active');
        
        // 当距离底部小于等于 footer 高度（50vh）时触发反色
        if (distanceFromBottom <= viewportHeight * 0.5) {
            backToTop.classList.add('inverse');
        } else {
            backToTop.classList.remove('inverse');
        }
    } else {
        backToTop.classList.remove('active');
        backToTop.classList.remove('inverse');
    }
});

// 点击返回顶部
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
