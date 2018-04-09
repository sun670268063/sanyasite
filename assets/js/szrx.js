var list = '',
    list1 = '';

$(function(){
	var num;
    var isIndex = $('#isIndex').val();

    $.getJSON('/api/szrxtotal.json', function(data){
        num = data.obj;

        $('.jrld').text(num.dayPhone);
        $('.jrlj').text(num.dayFinish);
        $('.dyljld').text(num.monthPhone);
        $('.dyljbj').text(num.monthFinish);
        $('.dnlj').text(num.yearFinish);
    });

    if(isIndex == 'hudong'){
        var timestamp = (new Date()).valueOf();
        var tpl = document.getElementById('wsxf_list').innerHTML,
            tpl1 = document.getElementById('szrx_list').innerHTML;
        
        $.ajax({
            type: 'GET',
            url: '/api/NEWWSXF.json?time='+timestamp,
            dataType : "json",
            success: function(data){
                list = data.resultData;
                $("#wsxf").html(template(tpl, list));
                $("#wsxf").find("a").each(  function(i, n){
                    $(this).attr("href",$(this).attr("data-url"));
                });
            }
        });

        $.ajax({
            type: 'GET',
            url: '/api/SZRX.json?time='+timestamp,
            dataType : "json",
            success: function(data){
                list1 = data.obj;
                $("#szrx").html(template(tpl1, list1));
                $("#szrx").find("a").each(function(i, n){
                    var url = 'http://36.101.204.30:25300/sanyawork/WpInfo/getwpInfo?wpid='+ list1[i].wpid;
                    $(this).attr("href",url);
                });
            }
        });
    }
    else if(!isIndex){
        $.getJSON('/api/zwzx_stat.json?'+'time='+timestamp, function(data){
            $('.jrsl').text(data.JRSL_CNT);
            $('.jrbj').text(data.JRBJ_CNT);
        });

       $.ajax({
            url:'/u/cms/stat/sanyasite?JsonpCallBack=cmsstatcallback&'+'time='+timestamp,
            dataType:"jsonp",
            jsonp:"cmsstatcallback",
            timeout: 5000,
            success:function(data, status){},
            error:function(XHR, textStatus, errorThrown){}
        });
   }
});

function cmsstatcallback(data){
    $('.xxfb').text(data.todayPublished);
}