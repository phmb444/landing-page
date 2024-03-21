// faça uma função chamada toggleMenu que pegue troque o display dos elementos "a" dentro da div com a class nav

function toggleMenu() {
    const nav = document.querySelector('.nav');
    const links = nav.querySelectorAll('a');

    links.forEach(link => {
        if (link.style.display === 'none' || link.style.display === '') {
            link.style.display = 'block';
        } else {
            link.style.display = 'none';
        }
    });
}