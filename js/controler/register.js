console.log("aaa")

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


    var promise = axios({
        url:'https://shop.cyberlearn.vn/api/Users/signup',
        method:'POST',
        responseType: 'JSON',
        data: member // dữ liệu gửi về server có format do backend quy định
    })

    promise.then(function(result){
        console.log("seult", result)
        // getDataSVApi()
    })

    promise.catch(function(error){
        console.log("error", error)
    })
}