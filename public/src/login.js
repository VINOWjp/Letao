//盛放登录页面的js
define(['jquery'],function($){
	$('form').on('submit',function(){
    		var that = $(this);
    		$.ajax({
    			url:'/api/employee/employeeLogin',
    			type:'post',
    			data:that.serialize(),
    			success:function(infor){
    				if(infor.error){
    					return alert(infor.message);
    				}
    				location.href= '/';
    			}
    		})
    		return false;
    	})

})