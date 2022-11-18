import btnActive from "./btn.js";
import interObserver from "./observer.js";

btnActive('hamburger', 'is-active', 'ulContainer' , 'ul-container-active');

interObserver('firstObserver', 'welcome-section-observer');
interObserver('secondObserver', 'welcome-section-observer');
interObserver('thirdObserver', 'welcome-section-observer');
interObserver('htmlObserver', 'welcome-section-observer');
interObserver('cssObserver', 'welcome-section-observer');
interObserver('jsObserver', 'welcome-section-observer');
interObserver('bootObserver', 'welcome-section-observer');
interObserver('mysqlObserver', 'welcome-section-observer');
interObserver('nodejsObserver', 'welcome-section-observer');
interObserver('gitObserver', 'welcome-section-observer');


const cvContentLine = document.querySelector('.cv-content__line');



/*document.addEventListener("mouseover", e=> {
    if(e.target.className.match(/cv-content__/) !== null) return console.log()
    return cvContentLine.innerHTML = 'Conoce sobre mi'
})*/
