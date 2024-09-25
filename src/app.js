import { getRandomColor } from "./utils";

export default function initApp() {
    const body = document.body;

    const mainButton = document.createElement('button');
    mainButton.className = 'button';
    mainButton.textContent = 'Изменить цвет страницы'
    body.append(mainButton);

    mainButton.addEventListener('click', () => {
        body.style.backgroundColor = getRandomColor();
    })

}