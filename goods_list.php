<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>乐淘 - 后台管理</title>
   <?php include './common/style.html'; ?>
</head>
<body>
    <!-- 侧边栏 -->
   <?php include './common/aside.html'; ?>
    <!-- 主体 -->
    <div class="main">
        <div class="container-fluid">
            <!-- 头部 -->
           <?php include './common/header.html'; ?>
            <!-- 客户列表 -->
            <div class="body goods-list">
                <!-- 面包屑 -->
                <ol class="breadcrumb">
                    <li><a href="javascript:;">商品管理</a></li>
                    <li class="active">商品列表</li>
                </ol>
                <div class="page-title">
                    <a href="./goods_add.php" class="btn btn-success btn-sm pull-right">添加商品</a>
                </div>
                <div class="goods">
                   
                </div>


                <!-- 分页 -->
                <ul class="pagination pull-right">
                    
                </ul>
            </div>
        </div>
    </div>

   
    <!-- <script src="./assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="./assets/nprogress/nprogress.js"></script> -->
   <!--  //<script src="./js/common.js"></script> -->
   <?php include './common/js.html'; ?>
   <script type="text/template" id="tpl">
        {{ each rows }}
                    <div class="item">
                        <div class="pic">
                            <img src="{{$value.picAddr}}" alt="">
                        </div>
                        <div class="info">
                            <a href="javascript:;">{{$value.proName}}</a>
                            <ul class="list-unstyled">
                                <li>
                                    <span>商品原价：{{$value.oldPrice}}</span>
                                </li>
                                <li>
                                    <span>优惠价：{{$value.price}}</span>
                                </li>
                                <li>
                                    <span>商品库存：{{$value.num}}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {{/each}}
                   
   </script>
   <script type="text/template" id="much">
                  <%if(page > 1){%>
                 <li><a href="?page=<%=page-1%>">上一页</a></li>
                 <%}%>
                     <% for(var i=1;i<=pages;i++){%>
                    <li><a href="?page=<%= i%>"><%= i%></a></li>
                    <%}%>
                    <%if(page < pages){%>
                 <li><a href="?page=<%=page-0+1%>">下一页</a></li>
                    <%}%>     
    </script>
   <script>
       require(['src/good_list'])
   </script>
</body>
</html>