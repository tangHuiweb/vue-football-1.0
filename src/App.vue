<template>
    <div>
        <!-- 界面主体区域 -->
       <!--  <div class="head">头部</div> -->
        <router-view transition="fade" transition-mode="out-in" keep-alive class='main'>
        	
        </router-view>
        <!-- 底部导航 -->
        <tab-com :bool='bool'></tab-com>
    </div>
</template>

<script>
    // 引入导航组件
    import tab from 'components/tab';
    module.exports = {
        computed:{
            bool:function(){
                if(this.$route.path=='/login'){
                    return false;
                }else{
                    return true;
                }
            }
        },
        components:{
            // 注册组件
           'tab-com':tab
        }
    }
</script>

<style>
    html,body{
        height:100%;
    }
    #app{
        display: flex;
        flex-direction: column;
        height:100%;
    }
    .head{
        height:0.88rem;
        background: #0dc441;
        font-size: 20px;
        line-height: 0.88rem;
        text-align: center;
        color:#fff;
    }
    .main{
        flex:1;
        height:100%;
        overflow: auto;
        display: flex;
        flex-direction: column;
    }
    .fade-transition{
      -webkit-transition:all 0.3s;
      transition:all 0.3s;
    }
    .fade-enter,.fade-leave{
      -webkit-transform:translate3D(10px,0,0);
      transform:translate3D(10px,0,0);
    }
</style>