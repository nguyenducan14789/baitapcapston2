


window.onload = function(){
    
    const urlParam = new URLSearchParams(window.location.search)
    const myParam = urlParam.get("productid")
    console.log("param", myParam)
    getDataProductsId(myParam);
};

function getDataProductsId(id){
    let promise = axios({
        url:'https://shop.cyberlearn.vn/api/Product/getbyid?id=' + id,
        method:'GET',
        responseType:'JSON'
    });

    //Thành công thì làm ?
    promise.then(function (result) {
    console.log('result', result.data.content);
        //Gọi hàm để từ dữ liệu tạo ra thẻ item
        renderDemo(result.data.content);
    });
    //Thất bại 
    promise.catch(function (err) {
        console.log(err)
    })
}





// getDataProductsId(1);
console.log("aaaa");
function renderDemo(a) {
    

    
            html = `
        <div class="item item${a.id}">
            <div class="demo-img">
            <img src="${a.image}" alt="">
        </div>
        <div class="demo-info">
            <div class="demo-name">${a.name}</div>
            <div class="demo-describe">vampire</div>
            <div class="demo-size">${a.size}</div>
            <div class="demo-price">${a.price}</div>
            <a class="demo-buy">buy</a>
        </div>
        </div>
        `
        


    
    document.querySelector(".demo-a").innerHTML = html;
}

// renderDemo(3);
console.log("aaaa");