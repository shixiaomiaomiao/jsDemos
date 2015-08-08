window.onload = function()
{
	var oDiv = document.getElementById("container");
	var oUl = oDiv.getElementsByTagName("ul")[0];
	var oLi = oUl.getElementsByTagName("li");
	
	
	var oContent = oDiv.getElementsByTagName("div")[0];
	var oTxt = oContent.getElementsByTagName("div");
	var oTxtLi = oContent.getElementsByTagName("li");
	
	var oContentUl = oContent.getElementsByTagName('ul');
	
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
	for (var i = 0; i < oTxtLi.length ; i++)
	{
		
		oTxtLi[i].index = i;
		oTxtLi[i].isOpen = true;
		oTxtLi[i].onmouseover = function()
		{
			this.style.cursor = "pointer" ;
			
		}
		oTxtLi[i].onclick = function()
		{
			if (this.isOpen)
			{
				this.isOpen = false;
				oContentUl[this.index].style.display = "block";
			}
			else
			{
				this.isOpen = true;
				oContentUl[this.index].style.display = "none";
			}
			
		}
	}
	function startMove(obj,name,iTarget)
	{
		time = setInterval(function()
		{
			
		},1000)
	}
}