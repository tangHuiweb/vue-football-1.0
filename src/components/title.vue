<template>
	<header>{{title}}</header>
</template>

<script>
	export default{
		props:['title']
	}
</script>

<style scoped>
	header{
		height:0.88rem;
		background: #0dc441;
		font-size: 20px;
		line-height: 0.88rem;
		text-align: center;
		color:#fff;
	}
</style>