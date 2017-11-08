define(['jquery','template','uploadify','./utils'],function($,template){
	$('form').on('submit',function(){
		var that = $(this);
	$.ajax({
		url:'/api/product/addProduct',
		type:'post',
		data:that.serialize(),
		success:function(info){
	      if(info.success){
	      	location.href = '/goods_list.php';
	      }

		}
	})



	return false;
	})
	$('#upfile').uploadify({
		buttonText:'',
		fileObjName:'pic1',
		height:120,
		width:120,
		itemTemplate:'<span></span>',
		swf:'/public/assets/uploadify/uploadify.swf',
		uploader:'/api/product/addProductPic',//上传地址，
		onUploadSuccess:function(file,data){
			// console.log()
			  // console.log(file);
			  // console.log(data);
			  var res = JSON.parse(data);
			  $('.preview img').attr('src','http://localhost:3000' + res.picAddr);
			  $('input[name="pic"]').val(res.picAddr);
		}
	})
	$.ajax({
		url:'/api/category/querySecondCategoryPaging',
		type:'get',
		data:{page:1,
		       pageSize:1000},
		success:function(info){
			var html = template('brand',info);
			$('select[name="brandId"]').append(html);
		}
	})
	
})