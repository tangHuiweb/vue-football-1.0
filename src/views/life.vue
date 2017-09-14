<template>
	<div>
		<img-com v-for='item in imgBox' :text='item.text' :url='item.src'></img-com>
	</div>
</template>
<script>
	import imgbox from 'components/imgbox';
	module.exports = {
		data(){
			return{
				imgBox:[]
			}
		},
		created(){
			this.fetchData();
		},
		route:{
			activate(){
				this.fetchData();
			}
		},
		methods:{
			fetchData(){
				this.$http.get('/hot').then(function(data){
					this.imgBox = data.body;
				})
			}
		},
		components:{
			'img-com':imgbox
		}
	}
</script>

<style  scoped>
	div{
	    width: 100%;
	    display: flex;
	    flex-wrap: wrap;
	    justify-content: space-between;
	    flex:1;
	    height:100%;
	    padding-top:0.7rem;
	}
	img-com{
		width:3.1rem;
		height:3.72rem;
		background:#fff;
		border:1px solid #eee;
		margin:0.12rem 0;
		flex:1;
	}
</style>