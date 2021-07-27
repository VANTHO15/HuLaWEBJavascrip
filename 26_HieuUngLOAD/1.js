document.addEventListener("DOMContentLoaded",function(){
	var load=document.getElementsByClassName('load');
	var vitriload=load[0].offsetTop;
	var trangthai=0;
    vitriload=vitriload-200;
	//phần cuộn chuột cho menu
	window.addEventListener('scroll',function(){
		if(window.pageYOffset > vitriload)
		{
			if(trangthai==0)
			{
				trangthai=1;
				load[0].classList.add("hieuungload");
			}
		}
		else
		if(window.pageYOffset<vitriload)
		{
			if(trangthai==1)
			{
				trangthai=0;
				load[0].classList.remove("hieuungload");
			}
		}

	})
},false);