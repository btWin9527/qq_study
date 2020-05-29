<template>
  <header>
    <div>
      <van-icon
        v-if="pageInfoComputed && pageInfoComputed.icon.arrow === 'left'"
        :name="pageInfoComputed.icon.name"
        size="1.5rem"
        @click="leftHandle"
      />
    </div>
    <p>{{ pageInfoComputed.title }}</p>
    <div>
      <van-icon
        v-if="pageInfoComputed && pageInfoComputed.icon.arrow === 'right'"
        :name="pageInfoComputed.icon.name"
        size="1.5rem"
        @click="rightHandle"
      />
    </div>
  </header>
</template>

<script lang="ts">
  /*
  @Prop
  【js版本】
   props:{
      propA: string,
      propB: [String, Number],
      propC: {
        type: Array,
        default(){
          return ['a', 'b']
        },
        required: true,
        validator: (value)=> {
           return ['a','b'].indexOf(value) !== -1;
        }
      }
   }
   【ts版本】
   @Component
    export default class YourComponent extends Vue {
      @Prop(String)
      propA: string;
      @Props([String,Number])
      propB: string | number;
      @Prop({
        type: String, // type: [String, Number]
        default: 'default value', // 一般为string或number
        required: true,
        validator: (value)=>{
          return [
            'InProcess',
            'Settled'
          ].indexOf(value) !== -1
        }
      })
      propC: string;
 */
  /*
    @Watch
      【js版本】
          watch: {
            child: [
              {
                handler: 'onChildChanged',
               immediate : false, // 是否在时间绑定的时候执行
               deep: false, // 是否开启深度监听
              }
            ],
            person: [
              {
                handler: 'onPersonChanged1',
                immediate: true,
                deep: true
              },
              {
                handler: 'onPersonChanged2',
                immediate: false,
                deep: false
              }
            ]
          }
      },
     methods: {
      onChildChanged(val, oldVal) {},
      onPersonChanged1(val, oldVal) {},
      onPersonChanged2(val, oldVal) {}
    }
    【ts版】
     @Component
     export default class YourComponent extends Vue {
        @Watch('child')
        onChildChanged(val: string, oldVal: string) {}

        @Watch('person', {immediate: true, deep: true})
        onPersonChanged1(val: Person, oldVal: Person){}

        @Watch('person')
        onPersonChanged2(val: Person, oldVal: Person) {}
     }

   */
  /*
   @Emit
   【js版】
    import Vue from 'vue';
    export default {
          mounted(){
              this.$on('emit-todo', function(n) {
                  console.log(n)
              })
              this.emitTodo('world');
          },
          methods: {
              emitTodo(n){
                  console.log('hello');
                  this.$emit('emit-todo', n);
              }
          }
    }
    【ts版】
     import {Vue, Component, Emit} from 'vue-property-decorator';
     @Component({})
     export default class Some extends Vue {
        mounted(){
              this.$on('emit-todo', function(n) {
                  console.log(n)
              })
              this.emitTodo('world');
        }
        @Emit()
        emitTodo(n: string){
          console.log('hello');
        }
     }
   */
  /*
    @Model
    Vue.component('my-checkbox', {
    model: {
      prop: 'checked',
      event: 'change'
    },
    props: {
      // this allows using the `value` prop for a different purpose
      value: String,
      // use `checked` as the prop which take the place of `value`
      checked: {
        type: Number,
        default: 0
      }
    },
    // ...
  })
  // 在模板中使用
  <my-checkbox v-model="foo" value="some value"></my-checkbox>
  // 相当于
  <my-checkbox
    :checked="foo"
    @change="val => { foo = val }"
    value="some value">
  </my-checkbox>
  【ts版】
  import { Vue, Component, Model} from 'vue-property-decorator';
  @Component
  export class myCheck extends Vue{
     @Model ('change', {type: Boolean})  checked!: boolean;
  }
   */
  import {Component, Prop, Vue} from "vue-property-decorator";
  import {Icon} from "vant";

  @Component({
    components: {
      [Icon.name]: Icon
    }
  })
  export default class Header extends Vue {
    private leftHandle() {
      this.$router.back();
    }

    private rightHandle() {
      this.$router.push({path: "/create"});
    }

    private get pageInfoComputed() {
      const currentRouteName = this.$route.name;
      console.log(currentRouteName, 'currentRouteName')
      switch (currentRouteName) {
        case "home":
          return {
            icon: {
              name: "plus",
              arrow: "right"
            },
            title: "我的待办"
          };
        case "create":
          return {
            icon: {
              name: "arrow-left",
              arrow: "left"
            },
            title: "新建任务"
          };

        default:
          return "";
      }
    }
  }
</script>

<style lang="scss" scoped>
  header {
    display: grid;
    grid-template-columns: 3rem auto 3rem;
    align-items: center;
    grid-row-end: end;
    width: 100%;
    height: 3.5rem;
    min-height: 8%;
    background-color: #fff;
  }
</style>
