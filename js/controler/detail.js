

function getProductDetail(id){
    var promise = axios({
		url:`https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
		method: 'GET'
	});

	promise.then(function (result){
		console.log(result.data);
		renderProductDetail(result.data.content);
	});

	promise.catch(function(err){
		console.log(err);
	});
}

function renderProductDetail(arrProduct){
    html =`
	<div class="item">
	<img src="${arrProduct.image}" alt="product" />
    </div>
    <div class="detail">
	<h1>${arrProduct.name}</h1>
	<p>${arrProduct.description}</p>
	<h2>Available size</h2>
	<div class="productSize">		
    <button class="btn">${arrProduct.size[0]}</button>
    <button class="btn">${arrProduct.size[1]}</button>
    <button class="btn">${arrProduct.size[2]}</button>
    <button class="btn">${arrProduct.size[3]}</button>
    <button class="btn">${arrProduct.size[4]}</button>
    <button class="btn">${arrProduct.size[5]}</button>
    <button class="btn">${arrProduct.size[6]}</button>
	</div>
	<h4>${arrProduct.price}$</h4>
	<div class="productAmount">
    <button class="btn">+</button>
    <span class="amount">1</span>
    <button class="btn">-</button>
	</div>
	<a href="#" class="btn">Add to cart</a>
    </div>
	`;
	document.querySelector('#item').innerHTML=html;
}

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

function renderProduct(arr){
    let html = '';
    for(let i = 0; i < arr.length; i++){
        let product = arr[i];
        
        html += `
		<div class="col">
		<div class="card">
		  <img src="${product.image}" alt="product" />
		  <div class="cardBody">
			<h2>${product.name}</h2>
			<p>${product.shortDescription}</p>
			<div class="price">
			  <a href="../../detail.html?productid=${product.id}"class="btn">Buy now</a>
			  <p>${product.price}$</p>
			</div>
		  </div>
		</div>
	  </div>
        `
    }
    document.querySelector("#row").innerHTML = html;
}

window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('productid');
	getProductDetail(myParam);
	getDataProducts();

}
