document.addEventListener("DOMContentLoaded",function()
{
	
},false);

var x=10;
 function FuncTho()
 {
 	x--;
 	console.log("value= "+ x);
 }

 function tinhtong( x,y)
 {
	 return x+y;
 }
 console.log( tinhtong(2,3));

//  anonymous
 var z = function(x,y)
 {
	 return (x+y)/2;
 }
 console.log(z(2,6));