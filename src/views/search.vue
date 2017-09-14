<template>
	<div>
		<top-title title='发现'></top-title>
		<form>
			<input type="search" placeholder="请输入昵称" required v-model='val'/>
			<button @click='search'>搜索</button>
		</form>
	</div>
</template>
<script>
	import title from 'components/title';
	module.exports = {
		data(){
			return{
				val:''
			}
		},
		methods:{
			search(){
				this.$http.get('/search',{'nickName':this.val}).then(function(data){
					console.log(data);
				})
			}
		},
		components:{
			'top-title':title
		}
	}
</script>
<style scoped>
	form {
	    height: 0.66rem;
	    line-height: 0.66rem;
	    background: #fff;
	    padding-left: 0.12rem;
	    background: #fff;
	    margin-bottom: 0.1rem;
	    font-size: 12px;
	}
	form input {
	    width: 5rem;
	    padding-left: 0.12rem;
	    height: 0.46rem;
	    border:1px solid #999;
	}
	form button {
	    width: 0.92rem;
	    background: #0dc441;
	    color: #fff;
	    height: 0.46rem;
	    border: none;
	    border-radius: 10%;
	    /* font-size: 24px; */
	}
</style>