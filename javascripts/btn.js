export default function btnActive(idButton = "btn-section", classActive = 'is-active', idMenu = '', classMenuActive = '') {
    const $btn = document.getElementById(idButton);
    const $menu= document.getElementById(idMenu);
    document.addEventListener('click', e=> {
        if(  new RegExp(idButton).test(e.target.getAttribute('class'))){
            $menu.classList.toggle(classMenuActive);
            return $btn.classList.toggle(classActive);
        }
        $menu.classList.remove(classMenuActive);
        return $btn.classList.remove(classActive);
    });
}