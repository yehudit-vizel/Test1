 function test()
{
var t=[];
for(var i=0;i<60;i++)
t[i]= false;
for(var i=1;i<=60;i++)
for(var j=i;j<=60;j+=i)
t[j-1]= !t[j-1];
debugger;
}
