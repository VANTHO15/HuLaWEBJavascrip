document.addEventListener("DOMContentLoaded",function(){
    var nut=document.getElementsByClassName("declick");
    var nd=document.getElementsByClassName("dehienthi");
    for(var i=0;i<nut.length;i++)
    {
        nut[i].onclick=function()
        {
            if(this.classList[1]=="mautrang")
            {
                 this.classList.remove("mautrang");
                 //xoa di cais noij dung hien ra
                 var ndhienra=this.getAttribute("data-hienlen");
                 var phan_tu_hien_ra=document.getElementById(ndhienra);  
                 phan_tu_hien_ra.classList.remove("ra");
            }
            else
            {
             for(var k=0;k<nut.length;k++)
             nut[k].classList.remove("mautrang");// xoa het cac mau trang
 
             this.classList.toggle("mautrang"); 
          //lay ve data-hienlen
             var ndhienra=this.getAttribute("data-hienlen");
             var phan_tu_hien_ra=document.getElementById(ndhienra);
          //remove het class "ra"
            for(var j=0;j<nd.length;j++)
                nd[j].classList.remove("ra");
 
            phan_tu_hien_ra.classList.toggle("ra");
            }     
        }
    }
 },false)
 