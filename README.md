## el-plus-powerful-table-ts

此插件已 `el-plus-powerful-table` 作为基础，进行重构。部分功能将领先 `el-plus-powerful-table` 基础版本。
`el-plus-powerful-table` 的 `ts` 版本

主要功能：分页多选，批量操作

vue3.0 的 element-plus 二次开发表格组件

### [DEMO](https://peng-xiao-shuai.github.io/el-plus-powerful-table/)

### 使用方法

```js
npm i el-plus-powerful-table-ts
```

```js
//main.ts
import ElementPlus from "element-plus";
import powerfulTable from "el-plus-powerful-table-ts";

const app = createApp(App);
app.use(powerfulTable);
app.use(ElementPlus);
app.mount("#app");

//*.vue
<powerful-table :list="list" :total="total" :header="header"></powerful-table>
```
### 传送门
<a href='#filter'>**过滤**</a>&emsp;<a href='#text'>**文本**</a>&emsp;<a href='#image'>**图片**</a>&emsp;
<a href='#btn'>**按钮**</a>&emsp;<a href='#beforeFunction'>**开关**</a>&emsp;<a href='#input'>**输入框**</a>&emsp;
<a href='#video'>**视频**</a>&emsp;<a href='#iconfont'>**图标**</a>&emsp;<a href='#rate'>**评分**</a>&emsp;
<a href='#href'>**超链接**</a>&emsp;<a href='#slot'>**插槽**</a>&emsp;<a href='#tag'>**标签**</a>

## powerful-table Attributes 表格组件

| 参数          | 说明                                                            | 类型    | 可选值                                                                        | 默认值                          |
| ------------- | --------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------- | ------------------------------- |
| locale          | 组件语言                          | object&lt;Language>  | - | zhCn |
| size          | 组件大小                           | string   | medium / small / mini  |  small    |
| list          | 当前数据                                                        | array   | -                                                                             | -                               |
| header        | 表格头部数据                                                    | array   | -                                                                             | -                               |
| total         | 分页总条数                                                      | number  | -                                                                             | 0                               |
| layout        | 组件布局，子组件名用逗号分隔                                    | string  | 详情参考[element 分页](https://element.eleme.cn/#/zh-CN/component/pagination) | total, sizes, prev, pager, next |
| pageSizes     | 每页显示个数选择器的选项设置                                    | array   | -                                                                             | [10, 20, 30]                    |
| selectData    | 选中的数据                                                      | array   | -                                                                             | -                               |
| selectCompare | 选中数据和列表数据相比较的参数`[0]选中数据参数,[1]列表数据参数` | array   | -                                                                             | ['id','id']                     |
| isSelect      | 是否显示多选                                                    | boolean | false/true                                                                    | false                           |
| isPagination  | 是否显示分页器                                                  | boolean | false/true                                                                    | false                           |
| operateData   | 批量操作                                                        | object  | -                                                                             | {}                              |

---

### <font color='#1A72A6'>operateData 批量操作</font>

> 如果表格有 `header.props.type` 为 `input` 的则需要先填写该行数据，在选中该行，否则会出现获取不到 `input` 的值

| 参数     | 说明               | 类型          | 可选值                                             | 默认值  |
| -------- | ------------------ | ------------- | -------------------------------------------------- | ------- |
| value    | 下拉选中值         | string        | -                                                  | null    |
| type     | 按钮的类型         | string        | default / primary / success / warning / danger / info / text | primary |
| disabled | 禁用               | boolean       | true / false                                       | false   |
| icon     | 按钮上图标         | string        | -                                                  | -       |
| style    | 按钮样式           | object        | -                                                  | -       |
| operates | 批量操作下拉框数据 | array[object] | -                                                  | -       |

#### <font color='#50BEFF'>operates 批量操作下拉框数据</font>

| 参数  | 说明                   | 类型   | 可选值 | 默认值 |
| ----- | ---------------------- | ------ | ------ | ------ |
| label | 批量操作下拉框显示文字 | string | -      | -      |
| value | 批量操作下拉框值       | string | -      | -      |

---

```js
// 参数示例
const operateData = {
  value: 0,
  operates:[{
    label: '删除',
    value: 0
  }]
}
```

<a href='https://github.com/Peng-Xiao-Shuai-0902/el-plus-powerful-table/blob/master/src/indexData.js'>查看JSON参数</a>
### <font color='#1A72A6'>header 表格头部数据</font>

| 参数            | 说明                   | 类型             | 可选值                  | 默认值 |
| --------------- | ---------------------- | ---------------- | ----------------------- | ------ |
| overflowTooltip | 当内容过长被隐藏时显示 | boolean          | true / false            | false  |
| label           | 显示的标题             | string           | -                       | -      |
| minWidth        | 对应列的最小宽度       | string           | -                       | 100    |
| width           | 对应列的宽度           | string           | -                       | -      |
| sortable        | 排序                   | boolean / string | 'custom' / true / false | false  |
| fixed | 固定列 | string / boolean          | true / left / right            | false  |
| headerAlign     | 表头对齐方式           | string           | left / center / right   | center |
| headerSlotName  | 列头插槽           | string           | -   | - |
| props           | 单元格数据             | array[object]    | -                       | -      |

#### <font color='#50BEFF'>props 单元格数据</font>

| 参数   | 说明                                                                          | 类型          | 可选值                                      | 默认值 |
| ------ | ----------------------------------------------------------------------------- | ------------- | ------------------------------------------- | ------ |
| prop   | 数据 key 值                                                                   | string        | -                                           | -      |
| child  | 当 prop 值是对象是用到 仅支持 `type 为 text`  <font color='red'>已删除</font>                                | string        | -                                           | -      |
| type   | 数据类型                                                                      | string        | <a href='#image'>image</a> / <a href='#text'>text</a> / <a href='#switch'>switch</a> / <a href='#btn'>btn</a> / <a href='#video'>video</a> / <a href='#input'>input</a> / <a href='#iconfont'>iconfont</a> / <a href='#tag'>tag</a> / <a href='#rate'>rate</a> / <a href='#href'>href</a> / <a href='#slot'>slot</a> | text   |
| data   | 每个类型不一样 data 里值也不一样，<br> type 为 btn 时数据类型为 array[object] | object        | -                                           | -      |
| filter | 过滤，只支持 `type 为 text、tag`                                                  | array[object] / function(row,index) => string | number | -                                           | -      |
| text   | 数据左侧显示的文字。（例：文字：数据）                                        | string        | -                                           | -      |
| reserve  | 当 prop 值 渲染数据为空时可用 reserve 代替空数据 可传 `HTML` 标签        | string | HTMLElement        | -                                           | -      |
| render  | [渲染函数](https://v3.cn.vuejs.org/guide/render-function.html#h-%E5%8F%82%E6%95%B0)       | function(h,row,index)        | -                                           | -      |
| style  | 包裹组件外面那一层 div 样式                                                   | object        | -                                           | -      |
| slotName | 插槽名称 | string | -      | 'default' |

```js

// 假设有一个这样的数据
const data = [{
  my:{
    name: 'red'
  },
  myBrother: 'yellow'
}]

// 参数示例
[
  {
  label: '我',
  props:[{
    type: 'text',
    text: '我的名字',
    prop: 'my',
    child: 'name',
    reserve: '<b>我只有在数据空时显示</b>',
    customFilterFun: (row, index) => {
      return row.my.name
    }
    filter:[{
      key: 'red',
      value: 'black'
    }]
  }]
},
{
  label: '我的兄弟',
  props:[{
    prop: 'myBrother',
  }]
}
]
```

#### <font color='#50BEFF' id='filter'>filter 过滤</font>

| 参数  | 说明           | 类型   | 可选值 | 默认值 |
| ----- | -------------- | ------ | ------ | ------ |
| key   | 单元格里的数据 | string | -      | -      |
| value | 需要替换的值   | string | -      | -      |

```js
// 参数示例 内置替换是以 == 进行判断 所有 当key值为 '1' 而数据中的值为 1 仍然可以匹配上
{
  label: '筛选',
  props:[{
    prop: 'name',
    filter:[{
      key: '1',
      value: '替换1'
    }]
  }]
}
```

#### <font color='#50BEFF'>data 类型数据</font>

```js
//示例
{
  type: 'image',
  prop:'image',
  data:{}
}
```

#### <font color='#7CCEFF' id='text'>type == text （默认text）</font>
| 参数     | 说明             | 类型    | 可选值                                               | 默认值  |
| -------- | ---------------- | ------- | ---------------------------------------------------- | ------- |
| line      | 超出多少的行数使用...代替         | number  | -                                                    | 3       |
| develop      | 是否显示 “展开/收起 操作按钮”         | boolean  | false/true                                                    | false       |
| customFilterFun      | 自定义当前单元格数据文本 (row)。 | function(row,index)  | - | - |
```js
{
    label: "类型", //显示的标题
    props: [
      {
        prop: "gender",
        customFilterFun(row){
          return '风和自由'
        }
      }
    ],
  },
```


#### <font color='#7CCEFF' id='image'>type == image（图片）</font>

| 参数    | 说明                                                                                                | 类型    | 可选值                                     | 默认值 |
| ------- | --------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------ | ------ |
| preview | 预览                                                                                                | boolean | true/false                                 | true   |
| lazy    | 懒加载                                                                                              | boolean | true/false                                 | true   |
| zIndex  | 图片预览层级                                                                                        | number  | -                                          | 6000   |
| style   | 图片自定义样式                                                                                      | object  | -                                          | -      |
| fit     | 图片如何适应容器框，同原生[object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) | string  | fill / contain / cover / none / scale-down | -      |

```js
//示例
{
  label: "图片", //显示的标题
  props: [
    {
      type: "image",
      prop: "imageUrl",
      data: {
        style: {
          width: "120px",
          height: "120px",
          borderRadius: "10px",
        },
        lazy: true,
        preview: true,
      },
    },
  ],
}
```

#### <font color='#7CCEFF' id='btn' >type == btn（操作按钮）</font>

| 参数     | 说明             | 类型    | 可选值                                               | 默认值  |
| -------- | ---------------- | ------- | ---------------------------------------------------- | ------- |
| tip      | 提示文字         | string  | -                                                    | -       |
| text      | 按钮文字，不传默认提示文字         | string  | -                                                    | tip       |
| style    | 按钮样式         | object  | -                                                    | -       |
| icon     | 按钮上图标       | string  | -                                                    | -       |
| disabled | 按钮是否禁用     | boolean | true/false                                           | false   |
| type     | 按钮类型         | string  | primary / success / warning / danger / info / text   | primary |
| showBtn    | 控制按钮显示隐藏 返回当前行数据 (row)，返回 boolean | function(row,index)  | -                                                    | -       |
| emit     | 自定义方法名     | string  | 'query', 'success', 'add', 'update', 'remove', 'occupyOne', 'occupyTwo' | -       |

```js
// 参数示例
{
    label: "操作", //显示的标题
    props: [
      {
        type: "btn",
        data: [
          {
            tip: "编辑",
            type: "info",
            icon: "el-icon-edit-outline",
            text: "U",
            emit: "update",
            showBtn: (row)=>{
              return false
            }
          },
          {
            tip: "删除",
            type: "danger",
            text: "", //将不会显示按钮文字
            icon: "el-icon-delete",
             showBtn: (row)=>{
              return true
            }
            emit: "remove",
          },
        ],
      },
    ],
  }
```
#### <font color='#7CCEFF' id='beforeFunction'>type == switch（开关）</font>

| 参数          | 说明             | 类型    | 可选值     | 默认值 |
| ------------- | ---------------- | ------- | ---------- | ------ |
| activeColor   | 打开时的背景色   | string  | -          | -      |
| inactiveColor | 关闭时的背景色   | string  | -          | -      |
| inactiveText  | 关闭时的文字描述 | string  | -          | -      |
| activeText    | 关闭时的文字描述 | string  | -          | -      |
| activeValue   | 打开时的值       | number  | -          | 1      |
| inactiveValue | 关闭时的值       | number  | -          | 0      |
| disabled      | 是否禁用         | boolean | true/false | false  |
| style         | 开关自定义样式   | object  | -          | -      |
| beforeFunction   | 修改前事件,返回 true时正常执行 false 点击无变化，可以在此函数中自行处理 为false时提示   | function(row,value,oldValue)  | -          | -      |



```js
//示例
{
    label: "开关", //显示的标题
    overflowTooltip: false,
    props: [
      {
        prop: "switchVal",
        type: "switch",
        data: {
          inactiveText: "关闭",
          activeText: "开启",
          activeValue: 1,
          inactiveValue: 0
        },
      },
    ],
  }
```

#### <font color='#7CCEFF' id='input'>type == input/textarea（输入框）</font>

| 参数        | 说明              | 类型    | 可选值                | 默认值 |
| ----------- | ----------------- | ------- | --------------------- | ------ |
| style       | 输入框样式        | object  | -                     | -      |
| placeholder | 输入框文字描述    | string  | -                     | -      |
| disabled    | 输入框是否禁用,使用函数需要返回boolean    | boolean / function(row) | true/false            | false  |
| slot        | 输入框前置或后置  | string  | 'prepend' / 'append'      | -      |
| rows        | 显示的高度 `textarea` 专有  | string / number  | -      | 3      |
| symbol      | slot 文字或者符合 | string  | -                     | -      |

```js
//示例
{
  label: "价格", //显示的标题
  props: [
    {
      prop: "price",
      type: "input",
      data: {
        slot: "prepend",
        symbol: "￥",
        style: { width: "100%" },
      },
    },
  ],
}
```

#### <font color='#7CCEFF' id='video'>type == video（视频）</font>

| 参数   | 说明           | 类型    | 可选值     | 默认值 |
| ------ | -------------- | ------- | ---------- | ------ |
| style  | 视频样式       | object  | -          | -      |
| poster | 封面 url 路径  | string  | -          | -      |
| loop   | 循环播放       | boolean | true/false | false  |

```js
//示例
{
  label: "视频", //显示的标题
  props: [
    {
      prop: "videoUrl",
      type: "video",
      data: {
        cover: "",
        style: {
          width: "120px",
          height: "120px",
          borderRadius: "10px",
          border: "1px solid #ccc",
        },
      },
    },
  ],
}
```

#### <font color='#7CCEFF' id='iconfont'>type == iconfont（图标）</font>

| 参数  | 说明           | 类型   | 可选值 | 默认值 |
| ----- | -------------- | ------ | ------ | ------ |
| class | 样式类         | array  | -      | -      |
| style | 图标自定义样式 | object | -      | -      |

```js
//示例
{
  type: 'iconfont',
  prop:'icon',
  data:{
    class: ['viteicon','vitestar'],
    style: {
      background: 'yellow'
    }
  }
}
```

#### <font color='#7CCEFF' id='rate'>type == rate（评分）</font>

| 参数      | 说明                                                                    | 类型    | 可选值     | 默认值                                                    |
| --------- | ----------------------------------------------------------------------- | ------- | ---------- | --------------------------------------------------------- |
| max       | 最大数值                                                                | number  | -          | 5                                                         |
| style     | 自定义样式                                                          | object  | -          | -                                                         |
| colors    | 颜色数组                                                                | array   | -          | ['#F7BA2A', '#F7BA2A', '#F7BA2A']                         |
| iconClass | 图标数组                                                                | array   | -          | ['el-icon-star-on', 'el-icon-star-on', 'el-icon-star-on'] |
| allowHalf | 是否允许半选                                                            | boolean | true/false | false                                                     |
| showText  | 是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容 | boolean | -          | false                                                     |
| showScore | 是否显示当前分数，show-score 和 show-text 不能同时为真                  | boolean | true/false | false                                                     |
| texts     | 辅助文字数组                                                            | array   | -          | ['极差', '失望', '一般', '满意', '惊喜']                  |


```js
//示例
{
  label: "评分", //显示的标题
  props: [
    {
      type: "rate",
      prop: "rate",
      data: {
        allowHalf: true,
        showText: true,
        colors: ['red', 'yellow', 'green']
      },
    },
  ],
}
```

#### <font color='#7CCEFF' id='href'>type == href（超链接）</font>

| 参数      | 说明                                            | 类型    | 可选值     | 默认值    |
| --------- | ----------------------------------------------- | ------- | ---------- | --------- |
| style     | 自定义样式                                       | object  | -          | - |
| target    | 跳转类型                                        | string  | -          | '\_blank' |
| type      | 主题类型                                        | string  | -          | 'primary' |
| underline | 是否显示下划线                                  | boolean | true/false | false     |
| text      | 所显示的文本                                 | string / function(row) | - | -     |
| prop      | 超链接文字该显示哪个 prop 的值 否则为 text 的值 <font color='red'>已删除</font> | string  | -          | 空        |

```js
//示例
{
  label: "超链接", //显示的标题
  props: [
    {
      type: "href",
      prop: "href",
      data: {
        prop: 'name',
      },
    },
  ],
}
```

#### <font color='#7CCEFF' id='slot'>type == slot（插槽）</font>

```js
//示例
{
  label: "slot（插槽）", //显示的标题
  props: [
    {
      type: "slot",
      slotName: "A",
    },
  ],
}

//vue
<powerful-table>
  <template #A="{ row,index }">
    <div>
      <el-image
        style="width: 100px; border-radius: 10px"
        :src="row.imageUrl"
      ></el-image>
    </div>
  </template>
</powerful-table>
```

#### <font color='#7CCEFF' id='tag'>type == tag</font>

| 参数     | 说明     | 类型   | 可选值 | 默认值    |
| -------- | -------- | ------ | ------ | --------- |
| type | 类型 | string | 'primary / success / warning / danger / info'      | 'primary' |
| effect | 主题 | string | 'dark / light / plain'      | 'light' |
| color | 背景颜色 返回颜色值 | function(row,tag) | -      | - |
| hit | 是否描边 | boolean | -      | false |
| number | 需要显示前多少个 | number | -    | 3 |
| filter | <a href='#filter'>查看详情</a> | array / function(row,index) | -      | - |

---

```js
//示例
{
  label: "标签", //显示的标题
  props: [
    {
      prop: "tag",
      type: "tag",
      data: {
        effect: 'dark',
        // type: 'success'
      }
    },
  ],
}
```

## Event

| 方法名       | 说明                                                                                            | 参数                                                  |
| ------------ | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| sizeChange   | 分页器切换                                                                                      | { pageNum , pageSize }，selectArr(所有页中选中的数据) |
| sortCustom   | 远程排序                                                                                        | column                                                |
| batchOperate | 批量操作                                                                                        | {ids , selection , rows}                              |
| 自定义方法名 | 操作按钮 暂时只有 <font color='red'>'query', 'success', 'add', 'update', 'remove', 'occupyOne', 'occupyTwo'</font> | {row , index }                                        |
| switchChange | 开关组件操作                                                                                    | row                                                   |
| row-click | 行点击事件                                                                                    | {row, column, event}                                                   |
