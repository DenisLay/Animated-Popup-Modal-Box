window.onload = () => {
    const section = document.querySelector('section');
    const hireBtn = section.querySelector('.hireBtn');
    const closeBtn = section.querySelector('.close');

    console.log(section);
    console.log(hireBtn);

    hireBtn.addEventListener('click', () => {
        section.classList.add('show');
    });

    closeBtn.addEventListener('click', () => {
        section.classList.remove('show');
    });
}