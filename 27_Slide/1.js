document.addEventListener("DOMContentLoaded",function(){
	var nut=document.querySelectorAll(".chuyenslide ul li");
	var slides=document.querySelectorAll(".cacslide ul li");

	   		var thoigian= setInterval(function( ){ autoslide();},3000);
	   			// xem slide naof ddang hieenr thij
	   			

	//bắt sự kiện cho từng nút
	for (var i = 0; i < nut.length; i++) {
		nut[i].addEventListener('click',function(){
			//huyr tuwj chuyeenr ddoongj
			clearInterval(thoigian);
			// bỏ hết kích hoạt
			for (var i = 0; i < nut.length; i++) {
				nut[i].classList.remove("kichhoat");
			}
			//kích hoạt .xủ lý phần chuyển màu nút
			this.classList.add("kichhoat")


			// tính vị trí
			var nutkichhoat=this;
			var vitrinut=0;
			for (var vitrinut = 0;nutkichhoat= nutkichhoat.previousElementSibling; vitrinut++) {
				//nutkichhoat.previousElementSibling: lấy phàn tử trước nó
				// sau vòng lập for nó sẽ tính ra phàn tử hiện tại là vitrinut
			}
			console.log("vi trí của phần tử nút kích hoạt là "+ vitrinut);
			// bước 1: ẩn tất cả slide đi = cách remove class active
			for (var i = 0; i < slides.length; i++) {
				slides[i].classList.remove("active");
				slides[vitrinut].classList.add("active");
			}
		})
	}

	  function autoslide(){
	  	var vitrislide=0;
	   			var slidehientai=document.querySelector(".cacslide ul li.active");

	   			for (vitrislide = 0;slidehientai=slidehientai.previousElementSibling; vitrislide++) {
	   			}
	   			if(vitrislide<(slides.length-1))
	   			{
	   				for (var i = 0; i < slides.length; i++) {
	   				slides[i].classList.remove("active");
	   				nut[i].classList.remove("kichhoat");
	   			}
	   				slides[vitrislide].nextElementSibling.classList.add("active");
	   				nut[vitrislide].nextElementSibling.classList.add("kichhoat");
	   			
	   			}
	   			else
	   			{
	   				for (var i = 0; i < slides.length; i++) {
	   				slides[i].classList.remove("active");
	   				nut[i].classList.remove("kichhoat");
	   			}
	   				slides[0].classList.add("active");
	   				nut[0].classList.add("kichhoat");
	   			}
	   			
	   		
	  
	  }
	   // vieets hamf twuj chuyenr slide
	 
},false);