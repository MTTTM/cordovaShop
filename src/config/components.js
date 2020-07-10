
import headerNav from '../components/header/nav';

import navigate from '../components/footer/navigate.vue'
import productcard from '../components/common/productcard.vue'
// import {
//   Tag,
//   Col,
//   Icon,
//   Cell,
//   CellGroup,
//   Swipe,
//   Toast,
//   SwipeItem,
//   GoodsAction,
//   GoodsActionBigBtn,
//   GoodsActionMiniBtn,
//   ActionSheet,
//   Sku,
//   Notify,
//   Card,Button,SwipeCell,Dialog,Tab, Tabs,Row,Checkbox, CheckboxGroup, SubmitBar,NavBar,Tabbar, TabbarItem,Panel,List,Step, Steps,Field ,
//   Badge, BadgeGroup,Popup,Stepper,RadioGroup, Radio,Picker,Uploader,Info
// } from 'vant';


const components=[navigate,productcard,headerNav];

// const components=[
//     Tag,
//     Col,
//     Icon,
//     Cell,
//     CellGroup,
//     Swipe,
//     SwipeItem,
//     GoodsAction,
//     GoodsActionBigBtn,
//     GoodsActionMiniBtn,
//     ActionSheet,
//     Sku,
//     Card,
//     Button,
//     SwipeCell ,
//     Notify,
//     Dialog ,
//     headerNav, 
//     Tab, Tabs,Toast,Row,Checkbox, CheckboxGroup, SubmitBar,NavBar ,Tabbar, TabbarItem,navigate,Panel,List ,Step, Steps,Field ,
//     Badge, BadgeGroup,Popup,productcard,Stepper,RadioGroup, Radio,Picker,Uploader,Info
// ]

import Vant from 'vant';
import 'vant/lib/vant-css/index.css';

export default (Vue)=>{
    components.forEach(Component => {
        Vue.component(Component.name, Component)
    });
    Vue.use(Vant);
}
