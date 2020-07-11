
import headerNav from '../components/header/nav';

import navigate from '../components/footer/navigate.vue'
import productcard from '../components/common/productcard.vue'
import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
//   GoodsAction,
//   GoodsActionBigBtn,
//   GoodsActionMiniBtn,
Sidebar, SidebarItem,
GoodsAction, 
GoodsActionIcon,
 GoodsActionButton,
  ActionSheet,
  Sku,
  Card,
  Button,
  SwipeCell,
  Dialog,
  Tab, 
  Tabs,
  Row,
  Checkbox, 
  CheckboxGroup, 
  SubmitBar,
  NavBar,
  Tabbar, 
  TabbarItem,
  Panel,
  List,
  Step, 
  Steps,
  Field ,
  Popup,
  Stepper,
  RadioGroup,
   Radio,
   Picker,
   Uploader,
   Info,
   Image as VanImage,
   Notify,
   Loading
} from 'vant';


// const components=[navigate,productcard,headerNav];

const components=[
    Tag,
    Col,
    Icon,
    Cell,
    CellGroup,
    Swipe,
    SwipeItem,
    // GoodsAction,
    // GoodsActionBigBtn,
    // GoodsActionMiniBtn,
    VanImage,
    
    GoodsAction, 
GoodsActionIcon,
 GoodsActionButton,
    ActionSheet,
    Sku,
    Card,
    Button,
    SwipeCell ,
    Sidebar, SidebarItem,
    Dialog ,
    headerNav, 
    Tab, Tabs,Toast,Row,Checkbox, CheckboxGroup, SubmitBar,NavBar ,Tabbar,
     TabbarItem,navigate,Panel,List ,Step, Steps,Field ,
    Popup,productcard,Stepper,RadioGroup, Radio,Picker,Uploader,Info,Notify,Loading
]




export default (Vue)=>{
    components.forEach(Component => {
        Vue.component(Component.name, Component)
    });
}
