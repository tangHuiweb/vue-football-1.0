<template>
    <div>
    	<!-- 头部热点关注导航 -->
        <top-title :bool='path'></top-title>
        <router-view transition="fade" transition-mode="out-in"></router-view>
    </div>

</template>
<script>
	import toptitle from 'components/toptitle';
	module.exports = {
		/*route:{
			activate:function(){
				this.$route.router.go('/index/hot/live');
				
			}
		},*/
		computed:{
			path(){
				if(this.$route.path=='/index'||this.$route.path=='/index/life'||this.$route.path=='/index/pretty'){
					return true;
				}else{
					return false;
				}
			}
		},
		components:{
			'top-title':toptitle
		}
		
	}
</script>
<style type="text/css">
	
	

	
</style>