const db = {
    count: 0,
    thumbnailArray: [
        {
            id:1,
            thumbnail: '/images/image-product-1-thumbnail.jpg',
            mainImg: '/images/image-product-1.jpg',
        
        },
        {
            id:2,
            thumbnail: '/images/image-product-2-thumbnail.jpg',
            mainImg: '/images/image-product-2.jpg',
        
        },
        {
            id:3,
            thumbnail: '/images/image-product-3-thumbnail.jpg',
            mainImg: '/images/image-product-3.jpg',
        
        },
        {
            id:4,
            thumbnail: '/images/image-product-4-thumbnail.jpg',
            mainImg: '/images/image-product-4.jpg',
        
        }
    ]
}



const displayThumbnails = (database) => {
    const thumbnailDiv = document.querySelector('.product-img-list');
    database.thumbnailArray.forEach(item => {
        thumbnailDiv.innerHTML += `
        <div class="product-img-list-item">
            <img onclick="setThumbnail(this)" src="${item.thumbnail}" alt="" class="product-thumbnail thumbnail-${item.id}">
        </div>
        `; 
    });
    document.querySelector('.thumbnail-1').classList.add('thumbnail-active');
}

displayThumbnails(db);

const toggleHamburger = () => {
    console.log("hamburger")
}

const getCart = () => {
    console.log('Cart')
}

const checkCart = (count) => {
    let cart = document.querySelector('.cart-count');
    cart.innerHTML = `<span class="cart-count-int" >${count}</span>`
    if(count > 0){
        cart.style.display = 'flex';
    }else {
        cart.style.display = 'none';
    }
}

const getAvatar = () => {
    console.log('avatar')
}

const addItemAmount = () => { 
    let countDown = document.querySelector('.product-count-amount');
    countDown.innerHTML = `<span class="count-output" >${db.count += 1}</span>`;
}

const subtractItemAmount = () => {
    let countDown = document.querySelector('.product-count-amount');
    countDown.innerHTML = `<span class="count-output">${db.count == 0 ? 0 : db.count -= 1}</span>`;
}

const addToCart = () => {
    checkCart(db.count)
}

const setThumbnail = (thumbnail) => {
    let imgDictionary = {
        '/images/image-product-1-thumbnail.jpg':'/images/image-product-1.jpg',
        '/images/image-product-2-thumbnail.jpg':'/images/image-product-2.jpg',
        '/images/image-product-3-thumbnail.jpg':'/images/image-product-3.jpg',
        '/images/image-product-4-thumbnail.jpg':'/images/image-product-4.jpg',
    };
    const src = thumbnail.getAttribute('src');
    const mainProduct = document.querySelector('.main-img');
    mainProduct.setAttribute("src", imgDictionary[src]);
    const thumbnailList = thumbnail.parentNode.parentNode.children;
    for (let i=0; i < thumbnailList.length; i++){
        let el = thumbnailList[i].children[0];
        if(el.classList.contains('thumbnail-active')){
            el.classList.remove('thumbnail-active')
        }
    }
    thumbnail.classList.add('thumbnail-active')
}

let iterate = 1;
let images = []

const arrowFunction = (arrow) => {

    images[0] = '/images/image-product-1.jpg';
    images[1] = '/images/image-product-2.jpg';
    images[2] = '/images/image-product-3.jpg';
    images[3] = '/images/image-product-4.jpg';


    const mainProduct = document.querySelector('.main-img');
    mainProduct.setAttribute("src", images[iterate]);
    if(arrow.id == 'right'){
        if (iterate < images.length - 1){
            iterate++;
        }else {
            iterate = 0;
        }
    }

    if(arrow.id == 'left'){
        if (iterate <= 0){
            iterate = 3;  
            console.log(iterate)
        }else {
            iterate--;
        }
    }

  



    
}



