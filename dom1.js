//console.dir(document);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.all[9]);
//const a=(document.getElementById('header'))
//console.log(a);
//a.textContent='hellp'
//a.innerText='hello'
//console.log(header.innerText)
//const a=(document.getElementById('header'));
//a.innerHTML='<marquee>hello</marquee>';
//const a=(document.getElementById('main-header'));
//a.style.backgroundColor='red';
//ar a=document.querySelector('input');
//a.value='aman';
//var a=document.querySelector('input[type="submit"]');
//var a=document.querySelector('li:last-child');
//a.innerText='aman';
//var a=document.querySelector('li:nth-child(3)');
//a.style.color='red';

//traversing through multiple elements

//var a=document.querySelectorAll('li:nth-child(even)');
//for (var i =0; i<a.length; i++) {
//a[i].style.backgroundColor='red';}
//var a=document.querySelectorAll('li:nth-child(even)');
//for (var i = 0; i <a.length; i++) {
//a[i].style.backgroundColor='blue';}

/*
//creating appending and inserting in dom
var a=document.createElement('div');
a.id=('new');
a.className=('newdiv')
a.setAttribute('title','titlediv')
var b=document.createTextNode('hello world');
a.appendChild(b);
var c=document.querySelector('.content')
var d=document.querySelector('h1')
c.insertBefore(a,d);
a.style.fontSize='30px'
console.log(d);*/


var a=document.getElementById('button').addEventListener
('click',function(){
	console.log('123');});
var b=document.getElementById('button').addEventListener
('click',clickbtn);
function clickbtn(){
document.querySelector('.container').style.backgroundColor='grey';}

var a=document.getElementById('button');
a.addEventListener('click',click);
function click(e){
	if (e.altKey) {
	document.querySelector('.container').style.backgroundColor='coral';
}
}
//color combination
var bk=document.getElementById('box');
var output=document.getElementById('output');
var form=document.querySelector('.container')
bk.addEventListener('mousemove',mousemo)
function mousemo(e){
	output.innerHTML='<h3>mouseX:'+e.offsetX+'</h3><h3>mouseY:'+e.offsetY+'</h3>'
}
bk.addEventListener('mousemove',mousemove)
function mousemove(e){
	document.body.style.backgroundColor='rgb('+e.offsetX+','+e.offsetY+',59)'
}
bk.addEventListener('mousemove',mousemov)
function mousemov(e){
	form.style.backgroundColor='rgb('+e.offsetY+','+e.offsetX+',59)'
}


//actual application
//adding element
var a=document.getElementById('submit');
var c=document.getElementById('bar');
var ul=document.getElementById('items');
a.addEventListener('click',add);
function add(e){
	e.preventDefault();
	var li=document.createElement('li');
	li.setAttribute('class','list')
	var t=document.createTextNode(c.value);
	li.appendChild(t);
	
	var but=document.createElement('button');
	but.setAttribute('class','x');
	var bt=document.createTextNode('X');
	but.appendChild(bt);
	li.appendChild(but);
	
	ul.appendChild(li);
}
//deleting element
ul.addEventListener('click',del)
function del(e){
	if (e.target.classList.contains('x')) {
		if(confirm('are you sure')){
			var list=e.target.parentElement;
			ul.removeChild(list);
		}
	} 
}

//filter
var filter=document.getElementById('filter');
filter.addEventListener('keydown',search)
function search(e){

	var text=e.target.value.toLowerCase();
	var item=ul.getElementsByTagName('li');
	//converting to aray
	Array.from(item).forEach(function(i){
		var itemName=i.firstChild.textContent;
		if(itemName.toLowerCase().indexOf(text)!=-1){
			i.style.display='inline-block';
		}
		else{
			i.style.display='none'
		}

	});
}

	
	

