/*存在问题是：1、关闭的时候调用startMove设为heigth为0时，关不上，初步怀疑是padding的原因，还有offsetHeight*/

function startMove(obj,json,fun)
{
	clearInterval(obj.timer);
	obj.timer = setInterval (function(){
		var allStop = true;
		var cur = 0;
		var speed = 0;
		for ( var attr in json)
		{
			if (attr == "opacity")
			{
				cur = Math.round(parseFloat(getStyle(obj,attr))*100);
			}
			else
			{	
				cur = parseInt (getStyle(obj,attr));
			}
			speed = (json[attr] - cur)/6;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if ( cur != json[attr])
			{
				allStop = false;
			}
			if (attr == "opacity")
			{
				obj.style.filter = "alpha(opacity = "+(cur + speed)+")";
				obj.style.opacity = (cur + speed)/100;
			}
			else
			{
				obj.style[attr] = cur + speed + "px";
			}
		}
		if (allStop)
		{
			clearInterval(obj.timer);
			if (fun)
			{
				fun();
			}
		}
	},30)
	
}
function getStyle(obj,name)
{
	if (obj.currentStyle)
	{
		return obj.currentStyle[name];
	}
	else
	{
		return getComputedStyle(obj,false)[name];
	}
}
function getByClass(oParent,sClass)
{
	var aEle = oParent.getElementsByTagName("*");
	var aResult = [];
	for ( var i = 0; i < aEle.length ; i++)
	{
		if (aEle[i].className == sClass)
		{
			aResult.push(aEle[i]);
		}
		return aResult ;
	}
}
window.onload = function()
{
	var oDiv = document.getElementById("container");
	var oUl = oDiv.getElementsByTagName("ul")[0];
	var oLi = oUl.getElementsByTagName("li");
	
	
	var oContent = document.getElementById("content");
	
	var oTxtLi = oContent.getElementsByTagName("li");
	
	var oContentUl = oContent.getElementsByTagName('ul');
	var oSkin = document.getElementById("skin");
	var oSkinUl = oSkin.getElementsByTagName('ul')[0];
	var oSkinLi = oSkin.getElementsByTagName('li');
	//选出每个选项卡页面中的div,他们共有class名为class1,父元素均为id为content的元素
	var oTxt = oContent.getElementsByTagName("div");
	//对每个选项卡页面中所有的li标题添加事件。
	for ( var i = 0 ; i < oTxt.length ; i ++ )
	{
		var oTitleLi = oTxt[i].getElementsByTagName('li');		
		for (var j = 0 ; j < oTitleLi.length ; j++ )
		{
			
		   
			oTitleLi[j].isOpen = false;
		    oTitleLi[j].index = j;
			oTitleLi[j].onclick = function()
			{
				//alert("this.index ="+ this.index);
				//alert(oTxtUl.length);
				var oTxtUl = this.parentNode.getElementsByTagName('ul');  //选出所有隐藏的笔记ul
				if (!this.isOpen)
				{
					oTxtUl[this.index].style.display = "block";
					var iHeight = oTxtUl[this.index].offsetHeight;
					oTxtUl[this.index].style.height = 0;
					startMove(oTxtUl[this.index],{"height":iHeight},false);
					this.isOpen = true;
				}
				else
				{
					//oTxtUl[this.index].style.display = "block";
					//startMove(oTxtUl[this.index],{"height":0},false);
					oTxtUl[this.index].style.display = "none";
					this.isOpen = false;
				}
			}
		}
	}

	/*换肤*/
	oSkin.onmouseover = function()
	{
		oSkin.style.display = "block";
	}
	for ( var i = 0 ; i < oSkinLi.length ; i++ )
	{
		oSkinLi[i].onmouseover = function()
		{
			this.style.cursor = "pointer";
		}
		oSkinLi[i].onclick = function()
		{
			alert('wait to change skin');
		}
	}
	//移动鼠标，表头标题的颜色变化（选项卡）
	for (var i = 0 ; i < oLi.length ; i++ )
	{
		oLi[i].index = i;				
		oLi[i].onmouseover = function()
		{
			for (var i = 0 ; i < oLi.length ; i++)
			{
				oLi[i].className = "";
			}
			this.className = "active";
			
			for (var i = 0; i < oTxt.length; i++ )
			{
				oTxt[i].style.display = "none";
			}
			oTxt[this.index].style.display = "block";
		}
			
	}
	
}