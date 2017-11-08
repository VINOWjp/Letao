require.config({
	baseUrl:'/public',
	paths:{jquery:'assets/jquery/jquery.min',
           // bootstrap:'assets/bootstrap/js/bootstrap.min',
           // nprogress:'assets/nprogress/nprogress',
           // common:'js/common'
           template:'assets/artTemplate/template-web',
           uploadify:'assets/uploadify/jquery.uploadify.min'
},
   shim:{

   	    uploadify:{
   	    	//expots: 不支持模块化的第三方需要在这声明，这个相当于return

   	    	deps:['jquery']//依赖
   	    }

   }
})