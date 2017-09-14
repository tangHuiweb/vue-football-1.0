<template>
     <div>
        <div class="title">足球圈—登录</div>
        <div class="content">
            <div class="phone">
                <input type="text" v-model="user.phone" placeholder="手机号" id="phone">
            </div>
            <div class="pwd">
                <input type="text" v-model="user.pwd" placeholder="密码" id="pwd">
                </div>
            <div class="register">还没有账号？点击此处立即<a href="javascript:;">注册</a></div>
            <div class="submit">
                <a href="javascript:;" @click="login()">提交</a>
            </div>
        </div>
    </div>
</template>


<script>
    var common = require("assets/common.js");
	module.exports = {
        data:function(){
        	return {
        		 user:{
        		 	phone:'',
        		 	pwd:''
        		 }
        	}
        },
        methods:{
        	login:function(){
        		 if (this.user.phone==""||!common.phone(this.user.phone)) {
			            return
			        };

			        if (this.user.pwd.length<6||this.user.pwd.length>20) {
			            
			            alert("密码错误")
			            return
			        };

			        //发请求了 这个key是后台告诉你的
                    this.$http.post('/login',{user:this.user}).then(function(data){
                         //console.log(data);
                         if (data.data.code==1) {
                         	alert(data.data.msg);
                         	return
                         };
                         //正常的跳转
                         this.$route.router.go('/index');
                    }, function(error){
                         console.log(error);
                    });


        	}
        }
	}
</script>


<style scoped>
	input{
        outline: none;
        border: none;
    }

/********title样式***********/
.title{
    width: 100%;
    text-align: center;
    font-size: 0.32rem;
    background-color: #0dc441;
    height: 0.88rem;
    line-height: 0.88rem;
    color:#fff;
    font-weight: 600;
}
/**********content样式**********/
.content{
    width: 5.8rem;
    font-size: 0.24rem;
    margin:0 auto;
}
/****手机号输入样式*****/
.phone{
    height: 0.66rem;
    line-height: 0.66rem;
    margin-top: 0.31rem;
    border-bottom: 0.01rem solid #7f7f7f;
}
input{
    color:#000;
}
/***密码输入样式******/
.pwd{
    margin-top: 0.55rem;
    height: 0.66rem;
    line-height: 0.66rem;
    border-bottom: 0.01rem solid #7f7f7f;
}
/****注册样式*****/
.register{
    padding-top: 0.55rem;
    color:#cacaca;
    padding-bottom:0.54rem;

}
.register a{
    text-decoration: underline;
    color:#a3e9b7;
}
/****提交样式****/
.submit{
    width: 100%;
}
.submit a{
    display: block;
    width: 100%;
    height: 0.88rem;
    line-height: 0.88rem;
    text-align: center;
    background-color: #0dc441;
    text-decoration: none;
    color:#fff;
    font-weight: 600;
    letter-spacing: 0.42rem;
    font-size: 0.32rem;
    border-radius: 0.04rem;
}
</style>