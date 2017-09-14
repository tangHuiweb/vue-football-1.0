<template>
	<section>
		<nav>
			<ul>
				<li v-link="{path:'/index'}" :class="{'active':bool1}">足球现场</li>
				<li v-link="{path:'/index/life'}" :class="{'active':bool2}">足球生活</li>
				<li v-link="{path:'/index/pretty'}" :class="{'active':bool3}">足球美女</li>
			</ul>
		</nav>
		<router-view transition="fade" transition-mode="out-in" keep-alive></router-view>
		
	</section>
</template>
<script>
	module.exports = {
		computed:{
			bool1:function(){
				return this.$route.path=='/index'?true:false;
			},
			bool2:function(){
				return this.$route.path=='/index/life'?true:false;
			},
			bool3:function(){
				return this.$route.path=='/index/pretty'?true:false;
			}
		}
	}
</script>
<style scoped>
	section{
		display:flex;
		width:100%;
		height:100%;
		font-size: 16px;
		flex:1;
		justify-content:space-between;
		flex-wrap:wrap;
		overflow: auto;
		background: #fff;
	}

	nav{
		width:100%;
		background:#fff;
		height:0.7rem;
		position: fixed;
	}
	nav ul{
		display: flex;
		height:0.7rem;
		align-items:center;
	}
	nav li{
		flex:1;
		text-align: center;
	}
	.active{
		color: #0dc441;
	}
</style>