// 公共js

/*
实现对象默认排序功能，返回排序之后的对象
objectList：要排序的对象；
num:返回的记录数；
*/
function sortAndProp(objectList,num){
	objectList.sort(function(a,b){
	  var m = $("em",a).text(),
		  n = $("em",b).text();
	   if (m < n) return 1;
	   else if (m > n) return -1;
	   else return 0;
	});
	var i=0,
	html = "";
	$.each(objectList, function(index,item){
	  if (i<num) {
		html += $(item).prop("outerHTML");
	  }
	  i++;
	});
	return html;
}