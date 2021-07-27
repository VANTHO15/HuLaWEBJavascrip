document.addEventListener("DOMContentLoaded",function()
{
	
},false);

for(var i=1;i<5;i++)
{
    console.log(i);
}
var a = ["Thạo","Thanh","Tài"];
for( var i in a)
{
    console.log(i);
}
a.forEach(x => {
    console.log(x);
});
i=0;
while(i<5)
{
    i++;
    console.log(i);
}

var HocVien ={
    Ten: "Tho",
    Tuoi:22
}
for(x in HocVien)
{
    console.log(HocVien[x]);
}
for( var i=1;i<a.length;i++)
{
    console.log(a[i]);
}