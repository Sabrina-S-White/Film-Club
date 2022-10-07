const btn = document.getElementById('btn');

const menu = document.getElementById('testDiv');

menu.style.maxHeight = '0px';

btn.addEventListener('click', () => {
    if (menu.style.maxHeight == "0px") {
        menu.style.maxHeight = "130px";
    } else {
        menu.style.maxHeight = "0px";
    }
})


