 
    function togglePopup() {
        $(".content").fadeToggle(700); // Toggle popup visibility
        $("#backdrop").toggle(); // Toggle backdrop visibility

    }

    $(".product-card").hover(function1, function2)
    function function1(){
      $(".cover-card").slideDown()
    }
    function function2(){
        $(".cover-card").slideUp()
    }
   

const productContainers = [...document.querySelectorAll('.product-container')];
const ntBtn = [...document.querySelectorAll('.nt-btn')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    
    ntBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
    

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

function readMore(){
    window.open('https://fylehq.com', '_blank');
}



const cardData = [
    {
        id: 1,
        img: "/images/new1.svg",
        text: "Clarified Vision & Target",
        para: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
    },
    {
        id: 2,
        img: "/images/new2.svg",
        text: "High Performance",
        para: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
    },
    {
        id: 3,
        img: "/images/new3.svg",
        text: "Maintain Security",
        para: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
    },
    {
        id: 4,
        img: "/images/new4.svg",
        text: "Better Strategy & Quality",
        para: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
    }
];

const cardContainer = document.getElementById('card-container');

cardData.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';

    const imgElement = document.createElement('img');
    imgElement.src = card.img;
     

    const textElement = document.createElement('h6');
    textElement.textContent = card.text;

    const paraElement = document.createElement('p');
    paraElement.textContent = card.para;

    cardElement.appendChild(imgElement); 
    cardElement.appendChild(textElement);
    cardElement.appendChild(paraElement);

    cardContainer.appendChild(cardElement);
});

const imgTags = document.querySelector('.img-card');
const imgSrc = document.createElement("img");
imgSrc.src = "/images/room.jpg";
       
function functionChange1() {
    const imgTags = document.querySelector('.img-card');
     imgTags.innerHTML=""
            const imgSrc = document.createElement("img");
            imgSrc.src = "/images/nature.jpg";
            imgTags.appendChild(imgSrc);
   
}
function functionChange2() {
    const imgTags = document.querySelector('.img-card');
     imgTags.innerHTML=""
            const imgSrc = document.createElement("img");
            imgSrc.src = "/images/image.png";
            imgTags.appendChild(imgSrc);
   
}
function functionChange3() {
    const imgTags = document.querySelector('.img-card');
    imgTags.innerHTML=""
            const imgSrc = document.createElement("img");
            imgSrc.src = "/images/room.jpg";
            imgTags.appendChild(imgSrc);
   
}
