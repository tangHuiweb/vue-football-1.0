<template>
	<footer v-show="bool">
        <a v-link="{path:'/index'}"><i class='iconfont shouye'></i><br>首页</a>
        <a v-link="{path:'/search'}"><i class='iconfont fangdajing'></i><br>发现</a>
        <a class='camera'><i class='iconfont zhaoxiangji'></i></a>
        <a v-link="{path:'/user'}"><i class='iconfont wode'></i><br>我的</a> 
        <a v-link="{path:'/login'}"><i class='iconfont tuichu'></i><br>退出</a>
    </footer> 
</template>
<script>
	export default {
		props:{
			bool:{
				type:Boolean
			}
		}
	}
</script>
<style scoped>
	footer{
        height:0.88rem;
        line-height: 0.44rem;
        display: flex;
        font-size: 18px;
        width:100%;
        background: #fff;
        overflow: hidden;
    }
    footer a{
        flex:1;
        text-align: center;
        color: #9e9e9e;
    }
    footer a.camera{
        line-height: 0.88rem;
        
    }
    .zhaoxiangji{
        font-size: 30px;
    }
    .v-link-active{
        color:#0dc441;
    }
</style>