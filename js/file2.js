const arrColors = ['red', 'yellow', 'green', 'blue', 'purple'];
const columns = document.querySelectorAll('.column');
const circle = document.querySelector('.circle');

console.log(circle);

columns.forEach((elem, index) => {
    const color = arrColors[index];
    elem.style.backgroundColor = color;
    
    elem.addEventListener('mousemove', () =>{
        circle.style.backgroundColor = color;
    });
});

