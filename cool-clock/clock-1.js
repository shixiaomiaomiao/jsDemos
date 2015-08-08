// JavaScript Document
var weekArray = new Array("one","two","three","four","five","six","seven");
window.onload = function()
{
	/*先从年月日下手啦*/
	var oDate = document.getElementById("date");
	var oTime = document.getElementById("time");
	var oAll = document.getElementById("container");
	var oImg = oAll.getElementsByTagName('img');
	setTime();
	setInterval(setTime,1000);
	function setTime()
	{
		var oDate = new Date();
		
		/*设置年月日、时分秒*/
		var oYear = ''+oDate.getFullYear();
		var oMonth = toDouble(oDate.getMonth() + 1);	/*月份是从0开始的,所以要加1*/
		var oDay = toDouble(oDate.getDate());
		var oHour = toDouble(oDate.getHours());
		var oMinute = toDouble(oDate.getMinutes());
		var oSecond =toDouble(oDate.getSeconds());
		var oWeek = oDate.getDay();
		
		var timeStr = oYear + oMonth + oDay + oHour + oMinute + oSecond; 
		var j = 0;
		for (var i = 1; i < oImg.length-2 ; i++)
		{			
			if (i%3 == 2 && i != 2)
			{
				i += 1;				
			}
			var newSrc = "images/" + timeStr.charAt(j) + '.png';
			var oldSrc = oImg[i].src;
			if (oldSrc !=  newSrc)
			{
				oImg[i].src = newSrc;
			}
			j += 1;
		}		
		oImg[oImg.length-1].src = "images/" + weekArray[oWeek-1] + '.png';
				
		function toDouble(n)
		{
			if (n<10)
			{
				return "0"+n;
			}
			else
			{
				return ''+n;
			}
		}

	}
	
	
	
}