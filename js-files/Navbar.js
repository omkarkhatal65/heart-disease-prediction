document.addEventListener('DOMContentLoaded', () => {

    const toggleMenuElement = document.querySelectorAll('.menu-item')

    const currentRoute = location.href;
    console.log(34234, currentRoute, Array.from(toggleMenuElement).find((item) => item.href.includes(currentRoute)))

    Array.from(toggleMenuElement).find((item) => item.href.includes(currentRoute)).classList.add('text-rose-700')

})