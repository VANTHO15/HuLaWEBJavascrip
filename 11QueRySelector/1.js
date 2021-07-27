document.addEventListener("DOMContentLoaded",function()
{
    // lấy ra phần tử đầu tiên ( class id tên thẻ đều OK)
    // có dấu CHẤM 
	var x= document.querySelector(".list-group-item");
    console.log(x);

    // gọi theo class hay thẻ từ ngoài vào trong ( Truy xuất đến phần tử mình cần)
    var y = document.querySelectorAll(".list-group .list-group-item");
    console.log(y);
    for( var i=0;i<y.length;i++)
    {
        if(i==1)
        {
            y[i].innerHTML="Phần tử thứ " + i;
        }
    }

    var z = document.querySelectorAll("[data-VanTho]");
    console.log(z[0]);
},false);