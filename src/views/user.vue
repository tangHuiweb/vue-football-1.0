<template>
	<div>
		<top-title title='个人中心'></top-title>
		<my-com></my-com>
	</div>
</template>
<script>
	import mycom from 'components/Hello';
	import title from 'components/title';
	module.exports = {
		components:{
			'my-com':mycom,
			'top-title':title
		}
	}
</script>
<style scoped>
	
</style>