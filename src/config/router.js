import Vue from 'vue';
import Router from 'vue-router';
import navigate from '../components/footer/navigate.vue'
import CORDOVACONFIG from "../forCordova/index"
Vue.use(Router);

const routes = [

  {
    name: 'home',
    path: '/',
    components: {
      default: () => import('../page/index'),
      tabBar: navigate,
    },
    meta: {
      title: '首页',
        keep: true
    }
  },
  {
    path: '/login',
    component: () => import('../page/account/login'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/login/password',
    component: () => import('../page/account/password'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/login/phone',
    component: () => import('../page/account/phonelogin'),
    meta: {
      title: '手机号登录'
    }
  },
  {
    path: '/login/register',
    component: () => import('../page/account/register'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/user/index',
    components: {
      default: () => import('../page/user/index'),
      tabBar: navigate,
    },
    name: 'user',
    meta: {
      title: '会员中心',
      keep: true,
      statusBar:{
        statusBarColor:"#f1f5fa"
      }
    }
  },
  {
    path: '/user/info',
    component: () => import('../page/user/info/detail'),
    name: 'user',
    meta: {
      title: '账号管理',
      keep: true
      
    }
  },
  {
    path: '/user/address',
    component: () => import('../page/user/address/list'),
    meta: {
      title: '我的地址',
        keep: true
    }
  },
  {
    path: '/user/address/edit',
    component: () => import('../page/user/address/edit'),
    meta: {
      title: '修改地址'
    }
  },
  {
    path: '/user/favorite',
    component: () => import('../page/user/favorite/list'),
    meta: {
      title: '我的收藏',
      meta: {
        keep: true
      }
    }
  },
  {
    path: '/user/coupon',
    component: () => import('../page/user/coupon/list'),
    meta: {
      title: '我的优惠券'
    }
  },
  {
    path: '/user/order',
    component: () => import('../page/user/order/list'),
    meta: {
      title: '我的订单'
    }
  },
  {
    path: '/user/order/:id',
    component: () => import('../page/user/order/list'),
    meta: {
      title: '我的订单'
    }
  },
  {
    path: '/user/order/info/:id',
    component: () => import('../page/user/order/info'),
    meta: {
      title: '我的订单'
    }
  },
  {
    path: '/user/order/logistics/:id',
    component: () => import('../page/user/order/logistics'),
    meta: {
      title: '订单追踪'
    }
  },
  {
    path: '/user/aftersale',
    component: () => import('../page/user/aftersale/list'),
    meta: {
      title: '售后'
    }
  },
  {
    path: '/user/aftersale/apply',
    component: () => import('../page/user/aftersale/apply'),
    meta: {
      title: '申请售后'
    }
  },
  {
    path: '/user/aftersale/detail',
    component: () => import('../page/user/aftersale/detail'),
    meta: {
      title: '服务单详情'
    }
  },
  {
    path: '/user/aftersale/track/:id',
    component: () => import('../page/user/aftersale/track'),
    meta: {
      title: '进度详情'
    }
  },
  {
    path: '/product/:id',
    component: () => import('../page/product/detail'),
    meta: {
      title: '商品详情'
    }
  },
  {
    path: '/search',
    component: () => import('../page/product/list'),
    meta: {
      title: '商品列表',
      keep: true
    }
  },
  {
    name: 'cart',
    component: () => import('../page/cart/index'),
    meta: {
      title: '购物车',
      keep: true
    }
  },
  {
    path: '/order',
    component: () => import('../page/shipping/order'),
    meta: {
      title: '确认订单'
    }
  },
  {
    name: 'category',
    components: {
      default: () => import('../page/category/index'),
      tabBar: navigate,
    },
    meta: {
      title: '分类',
      keep: true
    }
  },
  // {
  //   path: '*',
  //   redirect: '/home',
  //   meta: {
  //     keep: true
  //   }
  // },
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({
  routes: routes, scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  try{
    let statusBar=to.meta.statusBar?to.meta.statusBar:{};
    const {statusBarColor}=statusBar;
    //设置背景颜色
    StatusBar.overlaysWebView(true); // 是否覆盖webview,如果覆盖需要做相应的样式处理
    CORDOVACONFIG.backgroundColorByHexString&&CORDOVACONFIG.backgroundColorByHexString(statusBarColor)//设置背景
    // CORDOVACONFIG.setStatusStyle&&CORDOVACONFIG.setStatusStyle();//设置字体
    StatusBar.styleDefault();
  }catch(e){}
   
  
  next();
});

export {
  router
};
