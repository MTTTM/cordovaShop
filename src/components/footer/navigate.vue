<template>
    <div >
        <van-tabbar  route style="z-index:200;">
            <van-tabbar-item   icon="wap-home" replace  to="/">首页</van-tabbar-item>
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
    }
}
</script>

