<template>
	<figure>
		<div :style="{background:'url('+url+')',backgroundSize:'cover'}"></div>
		<figcaption>{{text}}</figcaption>
	</figure>
</template>

<script>
	export default{
		props:['text','url']
	}
</script>

<style scoped>
	figcaption{
		height:0.68rem;
		line-height: 0.68rem;
		padding:0 0.3rem;
		font-size: 16px;
	}
	div{
		width:3.1rem;
		height:3.12rem;
		
	}
	
	figure{
		border:1px solid #ccc;
	}
</style>