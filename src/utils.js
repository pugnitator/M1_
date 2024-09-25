export function getRandomColor() {
    const charArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let color = ['#'];
    for (let i = 0; i < 6; i++) {
        color.push(charArray[Math.floor(Math.random() * charArray.length)])
    } 
    return color.join('');
}