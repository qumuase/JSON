<template>
  <div id="home-page">
      <header>
        <h1>
          <router-link to="/" class="json-is-logo">JSON</router-link>
        </h1>
        <h2>常用JSON格式的开源文档。</h2>
        <p>
          <a href="https://github.com/qumuase/JSON">Star on GitHub</a>
        </p>
      </header>
      <ul class="docs banner">
        <li class="bg">
          <router-link to="bower_json">
            <div>
              <button class="title">bower.json &gt;</button>
              <pre>
                <code>
      {
        "name": "json-formats",
        "main": "app.js",
        "description": "常用JSON格式的开源文档",
        "authors": [
          "wangzm063 &lt;wangzm063@gmail.com&gt;"
        ],
        "private": true,
        "ignore": [
          "**/.*",
          "node_modules",
        ],
        "devDependencies": {
          "vue": "^2.5.2",
          "vue-router": "^3.0.1"
        },
        "resolutions": {
          "vue": "^2.5.2"
        }
      }
                </code>
              </pre>
            </div>
          </router-link>
        </li>
        <li class="bg">
          <router-link to="install_json">
            <div>
              <button class="title">install.json &gt;</button>
              <pre>
                <code>
      {
        "resources": {
          "head": [
            {
              "type": "style",
              "src": "./assets/.index.css"
            }
          ],
          "body": [
            {
              "type": "script",
              "src": "plugin.js"
            }
          ]
        },
        "options": {
          "properties": {
            "headerText": {
              "order": 1,
              "title": "Header Text",
              "description": "Appears above Plugin.",
              "type": "string"
            },
            "location": {
              "order": 2,
              "title": "Location",
              "description": "Choose a location for Plugin.",
              "type": "string",
              "format": "selector"
            },
              "enumNames": {
                "default": "Default",
            },
              "default": "default"
            },
            "color": {
              "order": 4,
              "description": "Choose a color.",
              "type": "string",
              "default": "#da085d"
            }
          }
        }
      }
                </code>
              </pre>
            </div>
          </router-link>
        </li>
        <li class="bg">
          <router-link to="package_json">
            <div>
              <button class="title">package.json &gt;</button>
              <pre>
                <code>
      {
        "name": "json-formats",
        "version": "1.0.0",
        "description": "常用JSON格式的开源文档",
        "author": "wangzm063@gmail.com",
        "private": true,
        "scripts": {
          "dev": "node build/dev-server.js",
          "start": "npm run dev",
          "build": "node build/build.js"
        },
        "devDependencies": {
          "vue": "^2.5.2",
          "vue-router": "^3.0.1"
        },
        "engines": {
          "node": ">= 4.0.0",
          "npm": ">= 3.0.0"
        },
      }
                </code>
              </pre>
            </div>
          </router-link>
        </li>
      </ul>
      <footer>
        <p class="created">Created by
          <a href="https://eager.io" target="_blank">Eager</a>
          <span>&</span>
          <a href="https://github.com/EagerIO/JSON.is" target="_blank">JSON.is</a>
        </p>
      </footer>
  </div>
</template>

<script>
require('../assets/index.scss')
export default {
  name: 'home',
  mounted () {
    let home = document.getElementById("app"),
        bg = document.getElementsByClassName('bg')
    home.onmouseover = function(e) {
      let centerX = home.clientWidth / 2,
          centerY = home.clientHeight / 2,
          deltaX = e.pageX - home.offsetLeft - centerX,
          deltaY = e.pageY - home.offsetTop - centerY,
          percentX = deltaX / centerX,
          percentY = deltaY / centerY
      for (let i = 0; i < bg.length; i++) {
        bg[i].style.transform = 'rotateX(' + 10 *- percentY + 'deg) rotateY(' + 10 * percentX + 'deg)'
      }
    }
    home.onmouseout = function() {
      for (let index = 0; index < bg.length; index++) {
        bg[index].style.transform = "rotateY(0deg) rotateX(0deg)"
      }
    }
  }
}
</script>

<style scoped lang="scss">
  #home-page{
    background: #000;
    color: rgba(255,255,255,0.65);
    min-height: 100vh;
    min-width: 100vw;
  }
  header {
    a {
      color: #fff;
    }
    h1{
      a{
        font-size: 2em;
      }
    }
    p{
      a{
        font-size: 1em;
        border: 1px solid #ddd;
        padding: 2px;
      }
    }
  }
  ul.docs {
    padding-left: 3em;
    padding-right: 3em;
    max-width: 80em;
    margin-left: auto;
    margin-right: auto;
    display: block;
    list-style: none;
    padding: 0;
    perspective: 500px;
    li {
      position: relative;
      margin: 0 auto;
      padding: 20px 0;
      overflow: hidden;
      transform-style: preserve-3d;
      transform-origin: 50% 50%;
      transform: rotateY(0deg) rotateX(0deg);
      padding: 1.5em;
      transition: transform 0.3s;
      display: inline-block;
      width: 25em;
      max-width: 100%;
      .title{
        position: relative;
        background: none;
        border: 0;
        padding: 0;
        font-size: 2em;
        color: inherit;
        letter-spacing: -0.025em;
        cursor: pointer;
      }
      a {
        display: block;
        height: 20em;
        color: #fff;
        user-select: none;
        transition: color 0.13s ease, background-color 0.13s ease, transform 0.3s;
        perspective: 100em;
        overflow: hidden;
        padding-top: 2em;
        pre {
          padding: 1em 0;
          text-align: left;
          margin: 0;
          white-space: pre;
          word-wrap: normal;
          overflow: hidden;
          font-size: 0.8em;
          color: #da085d;
        }
      }
    }
    li:hover {
      transform: translate3d(0, 0, -1.2em);
    }
  }
</style>