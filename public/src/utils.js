//定义一个用于管理检测登陆，退出登录等业务逻辑的模块
define(['jquery'],function($){
    $.ajax({
            url:'/api/employee/checkRootLogin',
            type:'get',
            success:function(info){
                if(!info.success){
                    location.href = './login.html'; 
                }
            }
        })



        $('.logout').on('click',function(){
        	$.ajax({
        		url:'/api/employee/employeeLogout',
        		type:'get',
        		success:function(info){
        			   if(info.success){
        			   	console.log(1);
        				location.href = '/login.html';
        			}
        			
        		}
        	})
        })

})