
import headerNav from '../components/header/nav';

import navigate from '../components/footer/navigate.vue'
import productcard from '../components/common/productcard.vue'
import statuBar from "../components/statuBar/index.vue"
import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction, GoodsActionIcon, GoodsActionButton,
  Sidebar, SidebarItem,
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
  Field,
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
const components = [
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  SwipeItem,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  VanImage,


  ActionSheet,
  Sku,
  Card,
  Button,
  SwipeCell,
  Sidebar, SidebarItem,
  Dialog,
  headerNav,
  Tab, Tabs, Toast, Row, Checkbox, CheckboxGroup, SubmitBar, NavBar, Tabbar,
  TabbarItem, navigate, Panel, List, Step, Steps, Field,
  Popup, productcard, Stepper, RadioGroup, Radio, Picker, Uploader, Info, Notify, Loading,
  statuBar
]




export default (Vue) => {
  Vue.use(Notify);
  Vue.use(ActionSheet);
  components.forEach(Component => {
    Vue.component(Component.name, Component)
  });
}
