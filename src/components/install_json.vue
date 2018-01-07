<template>
  <div class="install">
      <header>
        <h1>install.json</h1>
        <h4>
          <router-link to="/" class="json-is-logo">返回</router-link>
        </h4>
      </header>
      <div class="content">
        <pre>
<div
  v-for="(item, index) in data"
  @click="clickLine(item)"
  :key="index">
  <code
    :class="[{active: item.active},'lavel' + item.lavel]">
      {{item.key}}<span v-if="item.value">: {{item.value}}</span>
  </code>
  <p v-if="item.active">{{item.info}}</p>
</div>
        </pre>
      </div>
      <footer>
        <p>👻 👻 👻</p>
      </footer>
  </div>
</template>

<script>
require('../assets/index.scss')
export default {
  name: 'install',
  data () {
    return {
      active: false,
      data: [
        {
          active: true,
          key: '{',
          value: '',
          lavel: 0,
          info: 'install.json 描述了如何在网站中包含和配置基于 JavaScript，CSS 和 HTML 的项目。',
        },
        {
          active: false,
          key: '"resources"',
          value: '{',
          lavel: 1,
          info: '您想要包含在页面中的 JavaScript 和 CSS 文件。每个资源可以通过放置在各个键的数组中放置在页面<head>或<body>页面中。'
        },
        {
          active: false,
          key: '"head"',
          value: '[',
          lavel: 2,
          info: "您希望包含在<head>页面中的 JavaScript 和 CSS 文件。",
        },
        {
          active: false,
          key: '{',
          value: '',
          lavel: 3,
          info: "您希望包含在<head>页面中的 JavaScript 和 CSS 文件。",
        },
        {
          active: false,
          key: '"type"',
          value: '"style",',
          lavel: 4,
          info: "您希望包含在<head>页面中的 JavaScript 和 CSS 文件。",
        },
        {
          active: false,
          key: '"src"',
          value: '"./themes/{{ options.theme }}.css"',
          lavel: 4,
          info: "您希望包含在<head>页面中的 JavaScript 和 CSS 文件。",
        },
        {
          active: false,
          key: '}',
          value: '',
          lavel: 3,
          info: "您希望包含在<head>页面中的 JavaScript 和 CSS 文件。",
        },
        {
          active: false,
          key: ']',
          value: '',
          lavel: 2,
          info: "您希望包含在<head>页面中的 JavaScript 和 CSS 文件。",
        },
        {
          active: false,
          key: '"body"',
          value: '[',
          lavel: 2,
          info: "您希望包含在<body>页面中的 JavaScript 和 CSS 文件。",
        },
        {
          active: false,
          key: '{',
          value: '',
          lavel: 3,
          info: "您希望包含在<body>页面中的 JavaScript 和 CSS 文件。",
        },
        {
          active: false,
          key: '"type"',
          value: '"script",',
          lavel: 4,
          info: "您希望包含在<body>页面中的 JavaScript 和 CSS 文件。",
        },
        {
          active: false,
          key: '"src"',
          value: '"plugin.js"',
          lavel: 4,
          info: "您希望包含在<body>页面中的 JavaScript 和 CSS 文件。",
        },
        {
          active: false,
          key: '}',
          value: '',
          lavel: 3,
          info: "您希望包含在<body>页面中的 JavaScript 和 CSS 文件。",
        },
        {
          active: false,
          key: ']',
          value: '',
          lavel: 2,
          info: "您希望包含在<body>页面中的 JavaScript 和 CSS 文件。",
        },
        {
          active: false,
          key: '},',
          value: '',
          lavel: 1,
          info: "您想要包含在页面中的 JavaScript 和 CSS 文件。每个资源可以通过放置在各个键的数组中放置在页面<head>或<body>页面中。",
        },
        {
          active: false,
          key: '"options"',
          value: '{',
          lavel: 1,
          info: "允许最终用户定制一组资源的安装。",
        },
        {
          active: false,
          key: '"properties"',
          value: '{',
          lavel: 2,
          info: "为最终用户定制定义一个单独的属性。",
        },
        {
          active: false,
          key: '"headerText"',
          value: '{',
          lavel: 3,
          info: "为最终用户定制定义一个单独的属性。",
        },
        {
          active: false,
          key: '"order"',
          value: '1',
          lavel: 4,
          info: "为最终用户定制定义一个单独的属性。",
        },
        {
          active: false,
          key: '}',
          value: '',
          lavel: 3,
          info: "为最终用户定制定义一个单独的属性。",
        },
        {
          active: false,
          key: '}',
          value: '',
          lavel: 2,
          info: "为最终用户定制定义一个单独的属性。",
        },
        {
          active: false,
          key: '}',
          value: '',
          lavel: 1,
          info: '为最终用户定制定义一个单独的属性。',          
        },
        {
          active: false,
          key: '}',
          value: '',
          lavel: 0,
          info: 'install.json 描述了如何在网站中包含和配置基于 JavaScript，CSS 和 HTML 的项目。',          
        },
      ],
    }
  },
  computed: {
    
  },
  methods: {
    clickLine(item){
      for (let i = 0; i < this.data.length; i++) {
        this.data[i].active = false
      }
      item.active = true
    }
  },
  mounted() {

  }
}
</script>

<style scoped lang="scss">
  .install{
    background: #eee;
    margin: 0 auto;    
    width: 100%;
    header{
      h1{
        color: #333;
      }
      h4{
        font-weight: normal;
        a{
          color: #999;
        }
      }
    }
    .content{
      padding-left: 3em;
      padding-right: 3em;
      max-width: 80em;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      pre{
        width: 100%;
        padding: 1em 0;
        margin: 0;
        overflow: hidden;
        font-size: 0.8em;
        color: #da085d;
        > div{
          display: flex;
          position: relative;
        }
        > div:last-child{
          padding-bottom: 10em;
        }
        code{
          width: 60em;
          margin-left: 5em;
          height: 2em;
          display: block;
          line-height: 0.8em;
          cursor: pointer;
          border-bottom: 1px dashed #ddd;
        }
        .lavel1{
          padding-left: 2em;
        }
        .lavel2{
          padding-left: 4em;
        }
        .lavel3{
          padding-left: 6em;
        }
        .lavel4{
          padding-left: 8em;
        }
        .lavel5{
          padding-left: 10em;
        }
        code.active{
          background: #fff;
        }
        p{
          font-size: 14px;
          width: 25em;
          margin: 0;
          background: #fff;
          padding: 1em;
          text-align: left;
          position: absolute;
          right: 2px;
          top: 0;
          color: #000;
          z-index: 2;
        }
      }
    }
    footer{
      margin-bottom: -40px;
      position: fixed;
      bottom: 0;
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
</style>
