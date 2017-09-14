<template>
	<div>
		<img-com :text='text' :url='url'></img-com>
		<img-com :text='text' :url='url'></img-com>
	</div>
</template>
<script>
	import imgbox from 'components/imgbox';
	module.exports = {
		data(){
			return{
				'text':'小丸子啊',
				'url':'../../static/img/03index_0_02.jpg'

			}
		},
		components:{
			'img-com':imgbox
		}
	}
</script>

<style scoped>
	div{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		flex:1;
		overflow: auto;
	}
	img-com{
		flex:1;
	}
</style>