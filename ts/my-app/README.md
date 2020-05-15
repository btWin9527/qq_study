# my-app

## 1. 项目介绍

> vue + ts的项目测试, 

## 2. 特性介绍

### 2.1 vue-property-decorator 和 vuex-class  装饰器

```text
这个组件完全依赖于vue-class-component.它具备以下几个属性:

# vue-property-decorator的装饰器：

@Component (完全继承于vue-class-component)
@Emit
@Inject
@Provice
@Prop
@Watch
@Model
Mixins (在vue-class-component中定义);

# vuex-class的装饰器：
@State
@Getter
@Action
@Mutation

```

**js写法**
```js
import {componentA,componentB} from '@/components';

export default {
  components: {componentA,componentB},
  props:{
    propA:{type:Number},
    propB:{default: 'default value'},
    propC:{type:[String,Boolean]},  
  },
  // 组件数据
  data(){
    return {
      message: 'Hello'
    } 
  },
  // 计算属性
  computed:{
    reversedMessage() {
      return this.message.split('').reverse().join('')
    },
    // vuex数据
    step(){
      return this.$store.state.count
    }   
  },
  methods:{
    changeMessage(){
      this.message = "Good bye";
    },
    getName(){
      let name = this.$store.getter['person/name'];
    }
  },
  // 生命周期
  created(){},
  mounted () { },
  updated () { },
  destroyed () { }
}

```

**ts写法**
```ts
    import {Component,Vue,Prop} from 'vue-property-decorator'; // 引入vue修饰器
    import {State,GEtter} from 'vuex-class'; // 引入vuex修饰器
    import {count,name} from '@/person'; 
    import {componentA,componentB} from '@/components'; // 引入外部组件
    // 组件挂载
    @Component({
        components:{componentA,componentB}
    })
    // 组件导出
    export default class HelloWorld extends Vue {
        @Prop(Number) readonly propA!:number | undefined;
        @Prop({default:'default value'}) readonly propB!:string;
        @Prop([String,Boolean]) readonly propC!: string | boolean | undefined;
        // 原data
        message = 'Hello';
        // 计算属性
        private get reversedMessage():string{
            return this.message.split('').reverse().join('');
        }
        // vuex数据       
        @State((state:IRootState)=> state . booking. currentStep) step!: number;
        @Getter('person/name') name!:name;
        // method
        public changeMessage():void{
            this.message = "Good bye";
        }
        public getName(): string {
            let storeName = name;
            return storeName;
        }
        // 生命周期
        private created():void{};
        private mounted():void{};
        private update():void{};
        private destroyed():void{};
    }   
```
