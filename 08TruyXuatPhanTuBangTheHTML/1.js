document.addEventListener("DOMContentLoaded",function()
{
    var x = document.getElementsByTagName("h1");
    console.log(x);
    x[1].innerText="Anh Thọ Đẹp Trai !";
    x[0].innerHTML= "<div class='btn btn-danger'>Mới thay đổi</div>";
	// innerText chỉ thay đổi đc Text
    // innerHTML thay đổi đc cả thẻ
},false);