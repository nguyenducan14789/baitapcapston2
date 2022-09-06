let check = function() {
    if (document.getElementById('password').value ==
        document.getElementById('confirm').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'hợp lệ';
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'không phù hợp';
        return
    }
}