document.addEventListener("DOMContentLoaded",function(){

	var trangthai=0;
	var menu=document.getElementsByClassName('menu');
	// bắt đầu sự kiện cuộn chuột
	window.addEventListener('scroll',function(){
		if(window.pageYOffset>200)
		{
			if(trangthai==0)
			{
				menu[0].classList.add('nholai');
				trangthai=1;
			}
		}
		else
			if(window.pageYOffset<200)
			{
				if(trangthai==1)
				{
					menu[0].classList.remove('nholai');
					trangthai=0;
				}
			}
	})
},false);