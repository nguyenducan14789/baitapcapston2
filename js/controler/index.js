console.log("bbbbb")

function getDataProducts() {
    let promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
        responseType: 'JSON'
    });

    //Thành công thì làm ?
    promise.then(function (result) {
        console.log('result', result.data.content);
        //Gọi hàm để từ dữ liệu tạo ra thẻ item
        renderProduct(result.data.content);
    });
    //Thất bại 
    promise.catch(function (err) {
        console.log(err)
    })
}

function getDataProductsId() {
    let promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
        responseType: 'JSON'
    });

    //Thành công thì làm ?
    promise.then(function (result) {
        console.log('result', result.data.content);
        //Gọi hàm để từ dữ liệu tạo ra thẻ item
        renderProduct(result.data.content);
    });
    //Thất bại 
    promise.catch(function (err) {
        console.log(err)
    })
}

window.onload = function () {
    getDataProducts()
    const urlParam = new URLSearchParams(window.location.search)
    const myParam = urlParam.get("productid")
    console.log("param", myParam)
};


function renderProduct(arr) {
    let html = '';
    for (let i = 0; i < arr.length; i++) {
        let product = arr[i];

        html += `
        <div class="item item${product.id}">
            <div class="item-img">
                <img src="${product.image}" alt="">
            </div>
            <div class="item-info">
             <h1 class="name">${product.name}</h1>
                <p class="description">short Descript...</p>
            </div>
            <div class="item-btn">
                <div class="buy">
                    <a href="./demo.html?productid=${product.id}">Buy now</a>
                </div>
                <div class="price">
                    <p>${product.price}$</p>
                </div>
            </div>
        </div>
        `


    }
    document.querySelector(".product-item").innerHTML = html;
}

function renderDemo(arr) {
    let html = '';
    for (let i = 0; i < arr.length; i++) {
        let product = arr[i];

        if (product[i] === productid) {
            html += `
        <div class="item item${product.id}">
            <div class="demo-img">
            <img src="${product.img}" alt="">
        </div>
        <div class="demo-info">
            <div class="demo-name">${product.name}</div>
            <div class="demo-describe">ádsads</div>
            <div class="demo-size">${product.size}</div>
            <div class="demo-price">${product.price}</div>
            <a class="demo-buy">buy</a>
        </div>
        </div>
        `
        }


    }
    document.querySelector("#demo").innerHTML = html;
}

console.log("aaaa")


