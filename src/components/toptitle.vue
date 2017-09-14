<template>
	<div>
        <a v-link="{path:'/index'}" :class="{'custom':bool}">热点</a>
        <a v-link="{path:'/index/watch'}" :class="{'custom':!bool}">关注</a>
    </div>
</template>
<script>
	export default {
		props:['bool']
	}
</script>
<style scoped>
	div a.custom{
		background: #64d985;
	}
	div{
		display: flex;
		justify-content: center;
		align-items: center;
		height:0.88rem;
		background: #0dc441;
	}
	div a{
		font-size: 18px;
		font-size: 20px;
	    width: 1.2rem;
	    height: 0.5rem;
	    line-height: 0.5rem;
	    text-align: center;
	    color:#fff;
	    background: #3dd067;  
    	
	}
	div a:first-child{
		border-bottom-left-radius: 0.46rem;
    	border-top-left-radius: 0.46rem;
	}
	div a:last-child{
		border-bottom-right-radius: 0.46rem;
    	border-top-right-radius: 0.46rem;
	}
</style>