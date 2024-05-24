const preloadContent = document.querySelector('.conteinerPreLoad');
const site = document.querySelector('.site')
function preLoad(){
    setTimeout(() => {
        preloadContent.style.animation='fadeOut'
        site.style.animationDuration='1s'
        
    }, 1000); 
    setTimeout(() => {
        site.style.animation='fadeIn'
        site.style.animationDuration='1s'
        site.style.display='block'
        preloadContent.remove()
    }, 2000);
}

preLoad()

//----------------------------------------//

const button = document.querySelector('.conteinerNav2')
const optionsNav = document.querySelector('.conteinerOpcoes')
button.addEventListener('click',()=>{
    setTimeout(() => {
        button.style.display='none'
       
//===================
        optionsNav.style.animation='fadeInRight'
        optionsNav.style.animationDuration='1s'
        optionsNav.style.display='block'
        
    }, 200);
})

