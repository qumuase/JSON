<template>
  <div class="bower">
    <div class="pc-wrap">
      <header>
        <h1>bower.json</h1>
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
    </div>
    <p class="mobile-message">移动端稍后更新，请先在 PC 端查看。</p>
    <footer>
      <p>👻 👻 👻</p>
    </footer>
  </div>
</template>

<script>
require('../assets/index.scss')
export default {
  name: 'bower',
  data () {
    return {
      active: false,
      data: [
        {
          active: true,
          key: '{',
          value: '',
          lavel: 0,
          info: '所有的 npm 软件包都包含一个文件，通常位于项目的根目录下，名为 bower.json - 这个文件包含与项目相关的各种元数据。这个文件用于给 npm 提供信息，以便识别项目以及处理项目的依赖关系。它还可以包含其他元数据，例如项目描述，特定发行版中的项目版本，许可证信息，甚至是配置数据 - 所有这些对 npm 和包的最终用户都是至关重要的。bower.json 文件通常位于 Node.js 项目的根目录下。',
        },
        {
          active: false,
          key: '"name"',
          value: '"bower.json",',
          lavel: 1,
          info: '存储在注册表中的包的名称。'
        },
        {
          active: false,
          key: '"main"',
          value: '"app.js",',
          lavel: 1,
          info: "包所必需的入口点文件。每个文件类型只有一个文件。",
        },
        {
          active: false,
          key: '"description"',
          value: '"常用JSON格式的开源文档。",',
          lavel: 1,
          info: "帮助用户通过简短的描述识别和搜索您的软件包。",
        },
        {
          active: false,
          key: '"homepage"',
          value: '"http://tmac.wang/JSON/dist/",',
          lavel: 1,
          info: "了解更多关于包裹的URL。如果没有指定，则回到GitHub项目，它是一个GitHub端点。",
        },
        {
          active: false,
          key: '"authors"',
          value: '[',
          lavel: 1,
          info: "一个编写软件包内容的人员列表。",
        },
        {
          active: false,
          key: '"wangzm063 <wangzm063@gmail.com>"',
          value: '',
          lavel: 2,
          info: "一个编写软件包内容的人员列表。",
        },
        {
          active: false,
          key: ']',
          value: '',
          lavel: 1,
          info: "一个编写软件包内容的人员列表。",
        },
        {
          active: false,
          key: '"private"',
          value: 'true,',
          lavel: 1,
          info: "如果你不想你的包发布到包管理器，设置为 true。",
        },
        {
          active: false,
          key: '"ignore"',
          value: '[',
          lavel: 1,
          info: "Bower 在安装包时忽略的文件和文件夹路径数组。",
        },
        {
          active: false,
          key: '"node_modules"',
          value: '',
          lavel: 2,
          info: "Bower 在安装包时忽略的文件和文件夹路径数组。",
        },
        {
          active: false,
          key: ']',
          value: '',
          lavel: 1,
          info: "Bower 在安装包时忽略的文件和文件夹路径数组。",
        },
        {
          active: false,
          key: '"dependencies"',
          value: '{',
          lavel: 1,
          info: "安装包所依赖的",
        },
        {
          active: false,
          key: '"jquery"',
          value: '"2.1.1"',
          lavel: 2,
          info: "安装包所依赖的",
        },
        {
          active: false,
          key: '}',
          value: '',
          lavel: 1,
          info: "安装包所依赖的",
        },
        {
          active: false,
          key: '"devDependencies"',
          value: '{',
          lavel: 1,
          info: "仅用于开发包的相关性，例如测试框架或构建文档。",
        },
        {
          active: false,
          key: '"webpack"',
          value: '"^3.6.0"',
          lavel: 2,
          info: "仅用于开发包的相关性，例如测试框架或构建文档。",
        },
        {
          active: false,
          key: '}',
          value: '',
          lavel: 1,
          info: "仅用于开发包的相关性，例如测试框架或构建文档。",
        },
        {
          active: false,
          key: '"resolutions"',
          value: '{',
          lavel: 1,
          info: "如果包之间发生冲突，则使用相关版本。通常在由用户手动解析版本时由增强工具添加。",
        },
        {
          active: false,
          key: '"angular"',
          value: '"1.2.25"',
          lavel: 2,
          info: "如果包之间发生冲突，则使用相关版本。通常在由用户手动解析版本时由增强工具添加。",
        },
        {
          active: false,
          key: '}',
          value: '',
          lavel: 1,
          info: "如果包之间发生冲突，则使用相关版本。通常在由用户手动解析版本时由增强工具添加。",
        },
        {
          active: false,
          key: '}',
          value: '',
          lavel: 0,
          info: '网站由很多东西组成 - 框架，图书馆，资产，公用事业和彩虹。Bower 为你管理所有这些事情。Bower 通过从各处获取和安装软件包来工作，负责打猎，查找，下载和保存您正在查找的内容。Bower 在清单文件 bower.json 中跟踪这些包。你如何使用软件包取决于你。Bower 提供钩子以便于在工具和工作流程中使用软件包。Bower 针对前端进行了优化。Bower 使用平面依赖树，每个包只需要一个版本，从而将页面负载降至最低。',          
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
  .bower{
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
