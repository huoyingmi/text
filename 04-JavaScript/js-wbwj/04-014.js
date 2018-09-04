function tored(){
		document.getElementById('box').style.backgroundColor='red';
			    }
document.getElementById('box').onclick=tored;
		  
 // 当外部文件中没有了window.onload = function()即当页面加载完成后的命令时，需要添加一个延迟属性defer或者异步属性async命令在主页面中。