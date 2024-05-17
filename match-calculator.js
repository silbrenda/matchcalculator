
var n = Math.random();
n = Math.floor(n * 101) + 1;
console.log(n);

name1 = prompt("Your name");
name2 = prompt("Their name");

if (n >= 70) {
    alert( name1 + " and " + name2 + "," + " Your compatibility is a sucess! " + n + "%");
}

if (n < 70 && n >= 50) {
	 alert( name1 + " and " + name2 + "," + " Your compatibility is average! " + n + "%");
} 

if (n < 50) {
   alert( name1 + " and " + name2 + "," + " Your compatibility is low, only " + n + "%"); 
}