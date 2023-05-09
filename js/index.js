//VARIABLES

//background-image
const divBackground = document.querySelector(".div-background");

//cards-render
const divCards = document.querySelector(".div-cards");

//header-animation
const header = document.querySelector(".header");

//INFO-PRESENTATION
const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");
const line3 = document.querySelector(".line-3");
const line4 = document.querySelector(".line-4");
const line5 = document.querySelector(".line-5");

const text1 = document.querySelector(".text-1");
const text2 = document.querySelector(".text-2");
const text3 = document.querySelector(".text-3");
const text4 = document.querySelector(".text-4");
const text5 = document.querySelector(".text-5");

const infoTitle = document.querySelector(".info-title");
const kind = document.querySelector(".kind");
const subtitle = document.querySelector(".subtitle");

//CARDS-RENDER

const dataCards = [
    {
        image: "assets/Images/aczino.jpg",
        title: "Ya puedes escuchar el último album de Aczino: `EL G.O.A.T`",
        subtitle: "El tricampeón de Red Bull Batalla se atreve en este disco con nuevos géneros y demuestra que su...",
        kind: "RED BULL BATALLA - ARTISTS"
    },
    {
        image: "assets/Images/doodle-art.webp",
        title: "Final Nacional Argentina Red Bull Doodle Art",
        subtitle: "¡El ganador nacional viajará a Amsterdam a la final internacional!",
        kind: "ART & DESIGN"
    },
    {
        image: "assets/Images/F1.webp",
        title: "Hitorias de los monoplazas Red Bull Racing | Parte 2",
        subtitle: "Seguimos con nuestro recuento histórico de los monoplazas de Red Bull Racing.",
        kind: "F1"
    },
    {
        image: "assets/Images/choque-red-bull-batalla-national-final-peru-2022.jpg",
        title: "Los tipos de estrofas más comunes para improvisar",
        subtitle: "Aprende a usar las estructuras y estrofas más usadas para mejorar tu arsenal en tus improvisaciones con...",
        kind: "MC BATTLE"
    },
    {
        image: "assets/Images/virtual.webp",
        title: "La entrada más facil a la realidad virtual: la Sony PlayStation VR2 ",
        subtitle: "Las gafas de realidad virtual de la PlayStation 5 suponen una gran mejora con respecto a su...",
        kind: "GAMES"
    },
    {
        image: "assets/Images/lentes.webp",
        title: "Colección  Oracle Red Bull Racing",
        subtitle: "Echa un vistazo a nuestra primera colaboración con...",
        kind: "F1"
    },
    {
        image: "assets/Images/skate.webp",
        title: "Dale un vistazo al estado actual del skateWRC",
        subtitle: "Pushing Forward T2 E3",
        kind: "SKATEBOARD"
    },
    {
        image: "assets/Images/rally.jpg",
        title: "2023: Contulta el candelario de pruebas",
        subtitle: "El Campeonato del Mundo de Rallies de la FIA ya está en pleno apogeo, así que para que no te pierd...",
        kind: "WRC"
    },
    {
        image: "assets/Images/skate2.webp",
        title: "¿Quien controla el skateboarding?",
        subtitle: "Pushing Forward T1 E3",
        kind: "SKATEBOARD"
    },
    {
        image: "assets/Images/recursos.webp",
        title: "Recursos estilísticos para enriquecer las rimas",
        subtitle: "El lenguaje es una herramienta rica y poderosa. Conoce algunas de las estrategias poéticas que...",
        kind: "MC BATTLE"
    },
    {
        image: "assets/Images/omori.webp",
        title: "Omori, el más entremecedor de los juegos independientes",
        subtitle: "Diponible en Game Pass, Omori es una aventura emotiva y trágica, a media camino entre Undertale...",
        kind: "GAMES"
    },
    {
        image: "assets/Images/grefg.webp",
        title: "The Grefg",
        kind: "redbull.com"
    }
];

for(let item of dataCards){
    divCards.innerHTML += `
        <div class="card">
            <img class="img-card" src=${item.image} alt="image">
            <p class="title">${item.title}</p>
            <p class="subtitle">${item.subtitle}</p>
            <p class="kind">${item.kind}</p>
        </div>
    `; 
};

//HEADER-ANIMATION

let lastScrollTop = 0;

window.addEventListener("scroll",()=>{
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        header.style.top = "-80px";
    }else{
        header.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

//INFO-PRESENTATION

const loading = ()=>{
    line1.style.width = "100%";
    divBackground.style.transition = "all 1s";
    divBackground.style.backgroundImage = "url(assets/Images/rb-batalla-2023.jpg)";

    kind.textContent = "MC BATTLE";
    infoTitle.textContent = text1.textContent;

    text1.style.opacity = "10";
    text2.style.opacity = "0.3";
    text3.style.opacity = "0.3";
    text4.style.opacity = "0.3";
    text5.style.opacity = "0.3";

    setTimeout(()=>{
        divBackground.style.transition = "all 1s";
        divBackground.style.backgroundImage = "url(assets/Images/doodle-2.webp)";
        line2.style.width = "100%";
        line1.style.width = "0";

        kind.textContent = "ART & DESIGN";
        infoTitle.textContent = text2.textContent;

        text1.style.opacity = "0.3";
        text2.style.opacity = "10";
        text3.style.opacity = "0.3";
        text4.style.opacity = "0.3";
        text5.style.opacity = "0.3";
    },5000);

    setTimeout(()=>{
        divBackground.style.transition = "all 1s";
        divBackground.style.backgroundImage = "url(assets/Images/autos-locos.jpg)";
        line3.style.width = "100%";
        line2.style.width = "0";

        kind.textContent = "SOAP BOX RACE";
        infoTitle.textContent = text3.textContent;
        subtitle.textContent = "1 - 30 Septiembre 2023";

        text1.style.opacity = "0.3";
        text2.style.opacity = "0.3";
        text3.style.opacity = "10";
        text4.style.opacity = "0.3";
        text5.style.opacity = "0.3";
    },10000);

    setTimeout(()=>{
        divBackground.style.transition = "all 1s";
        divBackground.style.backgroundImage = "url(assets/Images/img-1.webp)";
        line4.style.width = "100%";
        line3.style.width = "0";

        kind.textContent = "BMX";
        infoTitle.textContent = text4.textContent;
        subtitle.textContent = "";

        text1.style.opacity = "0.3";
        text2.style.opacity = "0.3";
        text3.style.opacity = "0.3";
        text4.style.opacity = "10";
        text5.style.opacity = "0.3";
    },15000);

    setTimeout(()=>{
        divBackground.style.transition = "all 1s";
        divBackground.style.backgroundImage = "url(assets/Images/soloq.webp)";
        line5.style.width = "100%";
        line4.style.width = "0";

        kind.textContent = "ESPORTS";
        infoTitle.textContent = text5.textContent;
        subtitle.textContent = "24 Febrero - 21 Abril 2023";

        text1.style.opacity = "0.3";
        text2.style.opacity = "0.3";
        text3.style.opacity = "0.3";
        text4.style.opacity = "0.3";
        text5.style.opacity = "10";
    },20000);

    setTimeout(()=>{
        line5.style.width = "0";
        loading();
    },25000);
};

loading();