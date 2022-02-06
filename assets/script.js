let count = 0;

const toggleHamburger = () => {
    console.log("hamburger")
}

const getCart = () => {
    console.log('Cart')
}

const getAvatar = () => {
    console.log('avatar')
}

const addItemAmount = () => { 
    let countDown = document.querySelector('.product-count-amount');
    countDown.innerHTML = `<span class="count-output" >${count += 1}</span>`;
}

const subtractItemAmount = () => {
    let countDown = document.querySelector('.product-count-amount');
    countDown.innerHTML = `<span class="count-output">${count == 0 ? 0 : count -= 1}</span>`;
}

const addToCart = () => {
    console.log('Added item')
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

const arrowLeft = () => {
    
    
}

const arrowRight = () => {
    
    
}

