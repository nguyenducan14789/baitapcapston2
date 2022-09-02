console.log("bbbbb")

function getDataProducts(){
    let promise = axios({
        url:'https://shop.cyberlearn.vn/api/Product',
        method:'GET',
        responseType:'JSON'
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


window.onload = function(){
    getDataProducts()
};


function renderProduct(arr){
    let html = '';
    for(let i = 0; i < arr.length; i++){
        let product = arr[i];
        
        html += `
        <div class="item item-${product.id}">
            <div class="item-img">
                <img src="${product.image}" alt="">
            </div>
            <div class="item-info">
             <h1 class="name">${product.name}</h1>
                <p class="description">short</p>
            </div>
            <div class="item-btn">
                <div class="buy">Buy now</div>
                <div class="price">${product.price}</div>
            </div>
        </div>
        `

        
    }
    document.querySelector(".product-item").innerHTML = html;
}