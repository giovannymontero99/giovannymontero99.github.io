export default function interObserver(observers, secondClass) {
    let target = document.querySelector('.' + observers );
    let targetEfect = document.getElementById(observers);
    let  options = {
        threshold: 0.5
    }
    function callback(entries){
        entries.forEach( entrie => entrie.isIntersecting?
            targetEfect.classList.add(secondClass):
            targetEfect.classList.remove(secondClass));
    }
    let observer = new IntersectionObserver( callback, options);
    observer.observe(target);
}