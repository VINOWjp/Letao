define(['jquery','template','./utils'],function($,template){
	 var pageSize = 2;//每页显示4条;
	 var para = location.search || '';
	 var reg = /\?[a-z]+=(\d+)/;
	 
	 var page =reg.exec(para) &&reg.exec(para)[1];
	  page = page || 1;
	$.ajax({
		url:'/api/product/queryProductDetailList',
		type:'get',
		data: {page: page, pageSize: pageSize},
		success:function(info){
			// console.log(info);
			var html = template('tpl',info);
			$('.goods').html(html);
			var total = info.total;
			var pages = Math.ceil(total/pageSize);
			var  howmany = template('much',{pages:pages,
			                                 page:page});
			$('.pagination').html(howmany);
		}
	})
})