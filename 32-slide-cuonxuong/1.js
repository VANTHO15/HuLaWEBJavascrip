// đầu tien phải xd đc slidee hiện tại và slide  tiếp theo
document.addEventListener("DOMContentLoaded",function(){
	var nutphai=document.querySelector(".nuts b.phai");
	var nuttrai=document.querySelector(".nuts b.trai");
	var slides=document.querySelectorAll(".slides ul li");
	console.log(slides);


	var chisohientai=0;
	var soluongslide=slides.length;
	var trangthai=0;
	nutphai.addEventListener('click',function(){
		console.log("Click đc chưa");
		//kiemr tra tranfgh thái
		if(trangthai==1)
		{
			return false;
		}
		
		trangthai=1;
		var trangthaicua2chuyendong=0;
		var phantuhientai=slides[chisohientai];

		if(chisohientai<soluongslide-1)
		{
			chisohientai+=1;
		}
		else
		{
			chisohientai=0;
		}

		var phantutieptheo=slides[chisohientai];

		// hàm dùng nhận biết khi kết thúc chuyển động
		phantuhientai.addEventListener("webkitAnimationEnd",function(){
			console.log("Slide hiện tại đã xong rồi");
			this.classList.remove("dangxem");
			this.classList.remove("bienmatkhiannext");
			trangthaicua2chuyendong++;
			if(trangthaicua2chuyendong==2)
			{
				trangthai=0;
			}
		});
		phantutieptheo.addEventListener("webkitAnimationEnd",function(){
			console.log("Slide tiếp theo đã xong rồi");
			this.classList.remove("divaokhiannext");
			this.classList.add("dangxem");
			trangthaicua2chuyendong++;
			if(trangthaicua2chuyendong==2)
			{
				trangthai=0;
			}
		});
		phantuhientai.classList.add("bienmatkhiannext");
		phantutieptheo.classList.add("divaokhiannext");

	});
	// xong nút phải



	nuttrai.addEventListener('click',function(){
		console.log("oke");
		if(trangthai==1)
		{
			return false;
		}
		
		trangthai=1;
		var trangthaicua2chuyendong=0;

		var phantuhientai=slides[chisohientai];
		if(chisohientai>0)
		{
			chisohientai--;
		}
		else
		{
			chisohientai=soluongslide-1;
		}
		var phantutieptheo = slides[chisohientai];

		// hàm dùng nhận biết khi kết thúc chuyển động
		phantuhientai.addEventListener("webkitAnimationEnd",function(){
			console.log("Slide hiện tại đã xong rồi");
			this.classList.remove("dangxem");
			this.classList.remove("bienmatkhianpreview");
			trangthaicua2chuyendong++;
			if(trangthaicua2chuyendong==2)
			{
				trangthai=0;
			}
		});
		phantutieptheo.addEventListener("webkitAnimationEnd",function(){
			console.log("Slide tiếp theo đã xong rồi");
			this.classList.remove("divaokhianpreview");
			this.classList.add("dangxem");
			trangthaicua2chuyendong++;
			if(trangthaicua2chuyendong==2)
			{
				trangthai=0;
			}
		});
		phantuhientai.classList.add("bienmatkhianpreview");
		phantutieptheo.classList.add("divaokhianpreview");

	});




},false);