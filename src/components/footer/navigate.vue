<template>
    <div style="height:50px;">
        <van-tabbar  active-color="#000" v-model='active'>
            <van-tabbar-item icon="wap-home" replace  to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="wap-nav"  replace  to="/category" >分类</van-tabbar-item>
            <van-tabbar-item icon="cart"   to="/cart" >购物车</van-tabbar-item>
            <van-tabbar-item icon="contact"  replace to="/user/index">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
    name:'navigate',
    components:{
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem,
    },
    data(){
        return {
            active:0
        }
    },
    created(){
        this.asyncActive();
    },
    watch:{
        "$route.name"(newV){
            this.asyncActive();
        }
    },
    methods:{
        asyncActive(){
          let path=['home','category','cart','user']
           let index= path.indexOf(this.$route.name);
           if(index>-1){
               this.active=index;
           }
        }
    }
}
</script>

