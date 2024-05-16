const site = document.querySelector('.site');
const preloadContent = document.querySelector('.conteinerPreLoad');
function preLoad(){
    setTimeout(() => {
        preloadContent.style.animation='fadeOut'
        site.style.animationDuration='1s'
        
       console.log('on')
    }, 1000); 
    setTimeout(() => {
        site.style.animation='fadeIn'
        site.style.animationDuration='1s'
        site.style.display='block'
        preloadContent.remove()
        
       console.log('on')
    }, 3000);
}

preLoad()
console.log(site)