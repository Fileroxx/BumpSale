
$(document).ready(function(){
    $(".hamburguer").click(function () {
        $(this).toggleClass('active');
        $('.menu').toggleClass("active");
    });
});


setTimeout(function() {
    $('.preloader').fadeToggle();
},3000)



const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})




const faqs = document.querySelectorAll(".faq");


faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});