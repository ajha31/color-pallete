

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

let lid=[{id:'item'},{id:'item 2'},{id:'item 3'},{id:'item 4'}]
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
	li.setAttribute('id',`${c.value}`)
	lid.push({id:c.value.toLowerCase()})

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
			list.style.display="none"
			var id=`${list.id}`
			for( var i = 0; i < lid.length; i++)
			if(lid[i].id==id){
				lid.splice(i,1);
			}
			
		}
	} 
}

//search paricular id
var filter=document.getElementById('filter');
const search=()=>{
	var text=filter.value.toLowerCase();
	
	//console.log(text,lid);
	lid.forEach(element => {
		var el=document.getElementById(`${element.id}`)
		if(element.id.search(`${text}`)!=-1){
			el.style.display='inline-block';
		}
		else{
			el.style.display='none'
		}
	});


}

	
	

