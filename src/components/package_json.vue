<template>
  <div class="package">
    <div class="pc-wrap">
      <header>
        <h1>package.json</h1>
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
  name: 'package',
  data () {
    return {
      active: false,
      data: [
        {
          active: true,
          key: '{',
          value: '',
          lavel: 0,
          info: '所有的 npm 软件包都包含一个文件，通常位于项目的根目录下，名为 package.json - 这个文件包含与项目相关的各种元数据。这个文件用于给 npm 提供信息，以便识别项目以及处理项目的依赖关系。它还可以包含其他元数据，例如项目描述，特定发行版中的项目版本，许可证信息，甚至是配置数据 - 所有这些对 npm 和包的最终用户都是至关重要的。package.json 文件通常位于 Node.js 项目的根目录下。',
        },
        {
          active: false,
          key: '"name"',
          value: '"package.json",',
          lavel: 1,
          info: 'name 和 version 是 package.json 文件里最重要的两个字段。这是包的名字。它在 URL 中、作为命令行参数、作为 node_modules 里的目录名使用。'
        },
        {
          active: false,
          key: '"version"',
          value: '"1.0.0",',
          lavel: 1,
          info: "version 和 name 是 package.json 文件里最重要的两个字段。version 是指包的当前版本号。版本的变化应该随着软件包的变化而变化。",
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
          key: '"description"',
          value: '"常用JSON格式的开源文档。",',
          lavel: 1,
          info: "description 是帮助使用者了解包的功能的描述，包管理器也会把这段字符串作为搜索关键词。",
        },
        {
          active: false,
          key: '"keywords"',
          value: '["json-formats", "json", "json-document"],',
          lavel: 1,
          info: "关键字是一个字符串数组，便于使用者在包管理器里快速找到此包。",
        },
        {
          active: false,
          key: '"homepage"',
          value: '"http://tmac.wang/JSON/dist/",',
          lavel: 1,
          info: "homepage 是包的项目主页或者文档首页",
        },
        {
          active: false,
          key: '"bugs"',
          value: '"https://github.com/qumuase/JSON/issues",',
          lavel: 1,
          info: "问题反馈系统的 URL，或者是 email 地址之类的链接。使用者通过该途径向你反馈问题。",
        },
        {
          active: false,
          key: '"license"',
          value: '"MIT",',
          lavel: 1,
          info: "所有包都应该指定许可证，以便让用户了解他们是在什么授权下使用此包，以及此包还有哪些附加限制。",
        },
        {
          active: false,
          key: '"files"',
          value: '["src/*", "README.md"],',
          lavel: 1,
          info: "项目包含的文件，可以是单独的文件、整个文件夹，或者通配符匹配到的文件。",
        },
        {
          active: false,
          key: '"bin"',
          value: '"./cli.js",',
          lavel: 1,
          info: "随着项目一起被安装的可执行文件。",
        },
        {
          active: false,
          key: '"main"',
          value: '"app.js",',
          lavel: 1,
          info: "项目的入口文件。例如，如果您的包被调用，app 并且指定主属性为'main.js'，当用户运行时 require('app')，您的 main.js 文件将被加载。",
        },
        {
          active: false,
          key: '"config"',
          value: '{',
          lavel: 1,
          info: "配置你的脚本的选项或参数。",
        },
        {
          active: false,
          key: '"port"',
          value: '"8080"',
          lavel: 2,
          info: "配置你的脚本的选项或参数。",
        },
        {
          active: false,
          key: '},',
          value: '',
          lavel: 1,
          info: "配置你的脚本的选项或参数。",
        },
        {
          active: false,
          key: '"engines"',
          value: '{',
          lavel: 1,
          info: "engines 指定包使用的节点或 npm 的版本。",
        },
        {
          active: false,
          key: '"node"',
          value: '">= 4.0.0",',
          lavel: 2,
          info: "engines 指定包使用的节点或 npm 的版本。",
        },
        {
          active: false,
          key: '"npm"',
          value: '">= 3.0.0"',
          lavel: 2,
          info: "engines 指定包使用的节点或 npm 的版本。",
        },
        {
          active: false,
          key: '},',
          value: '',
          lavel: 1,
          info: "engines 指定包使用的节点或 npm 的版本。",
        },
        {
          active: false,
          key: '"browserify"',
          value: '{',
          lavel: 1,
          info: "browserify 部分允许您为Browserify捆绑软件提供特定的配置。",
        },
        {
          active: false,
          key: '"transform"',
          value: '[',
          lavel: 2,
          info: "browserify 部分允许您为Browserify捆绑软件提供特定的配置。",
        },
        {
          active: false,
          key: '"coffeeify"',
          value: '',
          lavel: 3,
          info: "browserify 部分允许您为Browserify捆绑软件提供特定的配置。",
        },
        {
          active: false,
          key: ']',
          value: '',
          lavel: 2,
          info: "browserify 部分允许您为Browserify捆绑软件提供特定的配置。",
        },
        {
          active: false,
          key: '},',
          value: '',
          lavel: 1,
          info: "browserify 部分允许您为Browserify捆绑软件提供特定的配置。",
        },
        {
          active: false,
          key: '"scripts"',
          value: '{',
          lavel: 1,
          info: "脚本是定义自动化开发相关任务的好方法，比如使用一些简单的构建过程或开发工具。 ",
        },
        {
          active: false,
          key: '"dev"',
          value: '"node build/dev-server.js",',
          lavel: 2,
          info: "脚本是定义自动化开发相关任务的好方法，比如使用一些简单的构建过程或开发工具。 ",
        },
        {
          active: false,
          key: '"start"',
          value: '"npm run dev",',
          lavel: 2,
          info: "脚本是定义自动化开发相关任务的好方法，比如使用一些简单的构建过程或开发工具。 ",
        },
        {
          active: false,
          key: '"build"',
          value: '"node build/build.js"',
          lavel: 2,
          info: "脚本是定义自动化开发相关任务的好方法，比如使用一些简单的构建过程或开发工具。 ",
        },
        {
          active: false,
          key: '},',
          value: '',
          lavel: 1,
          info: "脚本是定义自动化开发相关任务的好方法，比如使用一些简单的构建过程或开发工具。 ",
        },
        {
          active: false,
          key: '"devDependencies"',
          value: '{',
          lavel: 1,
          info: "这些是只在开发环境需要，生产环境不会被安装的包。",
        },
        {
          active: false,
          key: '"webpack"',
          value: '"^3.6.0",',
          lavel: 2,
          info: "这些是只在开发环境需要，生产环境不会被安装的包。",
        },
        {
          active: false,
          key: '"autoprefixer"',
          value: '"^7.1.2"',
          lavel: 2,
          info: "这些是只在开发环境需要，生产环境不会被安装的包。",
        },
        {
          active: false,
          key: '}',
          value: '',
          lavel: 1,
          info: "这些是只在开发环境需要，生产环境不会被安装的包。",
        },
        {
          active: false,
          key: '}',
          value: '',
          lavel: 0,
          info: '所有的 npm 软件包都包含一个文件，通常位于项目的根目录下，名为 package.json - 这个文件包含与项目相关的各种元数据。这个文件用于给 npm 提供信息，以便识别项目以及处理项目的依赖关系。它还可以包含其他元数据，例如项目描述，特定发行版中的项目版本，许可证信息，甚至是配置数据 - 所有这些对 npm 和包的最终用户都是至关重要的。package.json 文件通常位于 Node.js 项目的根目录下。',          
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
  .package{
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
