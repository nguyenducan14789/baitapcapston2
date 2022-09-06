console.log("aaa")
let check = function() {
    if (document.getElementById('password').value ==
        document.getElementById('confirm').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'hợp lệ';
        return true
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'không phù hợp';
        return false;
    }
}

document.querySelector("#submit").onclick = () => {
    // debugger
    let member = new Member();

    member.email = document.querySelector("#email").value;
    member.password = document.querySelector("#password").value;
    member.name = document.querySelector("#name").value;
    
    if(document.querySelector("#gender").checked){
        member.gender = true;
        // return member.gender;
    } else if(document.querySelector("#gender1").checked){
        member.gender = false;
        // return member.gender;
    }
    member.phone = document.querySelector("#phone").value;

    console.log("member", member)
    console.log("bbb")
    let valid = check();

    if(valid == true){
        let promise = axios({
            url:'https://shop.cyberlearn.vn/api/Users/signup',
            method:'POST',
            responseType: 'JSON',
            data: member // dữ liệu gửi về server có format do backend quy định
        })
    
        promise.then(function(result){
            console.log("seult", result)
            
        })
    
        promise.catch(function(error){
            console.log("error", error)
        }) 
    } else{
        return;
    }
    
    
}

