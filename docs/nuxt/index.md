### Nuxt3.js 入门教程

### 第一步：安装Nuxt3.js

在开始使用Nuxt3.js之前，我们首先需要安装Node.js。请访问Node.js官方网站下载并安装最新版本。安装完成后，可以通过命令行输入以下命令来验证安装是否成功：

```
node -v
```

接下来，我们将使用npm（Node包管理器）来安装Nuxt3.js。在命令行中输入以下命令：

```
npx nuxi init nuxt3-app
```

然后，进入你的新项目文件夹：

```
cd nuxt3-app
```

最后，启动你的Nuxt3应用：

```
npx nuxi dev
```

现在，你可以在浏览器中打开 http://localhost:3000 来查看你的Nuxt3应用。

### 第二步：理解Nuxt3.js的目录结构

在Nuxt3项目中，你会看到以下的主要目录结构：

- `app.vue`：这是主应用布局文件，所有的页面都会被加载到这个文件中。

- `pages`：这个目录用于组织应用的视图以及定义路由。Nuxt.js框架根据这个目录下的所有`.vue`文件自动生成应用的路由配置。

- `components`：这个目录用于存放你的Vue.js组件。Nuxt3.js允许你在这个目录中的组件中使用自动导入。

- `public`：这个目录用于静态文件，这些文件会被直接映射到服务器根路径。例如：`/public/robots.txt` 将映射为 `/robots.txt`。

- `assets`：这个目录用于组织未编译的静态资源如LESS、SASS或JavaScript。

- `plugins`：这个目录用于组织那些需要在根vue.js应用实例化之前运行的Javascript插件。

- `store`：这个目录用于Vuex Store 文件。Nuxt.js框架会查找并自动导入这个目录中的Vuex模块。

- `nuxt.config.js`：这是Nuxt.js的配置文件，用于组织Nuxt.js应用的个性化配置，以便覆盖默认配置。

- `package.json`：这个文件包含应用的所有依赖信息以及运行脚本。它是npm包管理器的标准文件。

以上就是Nuxt3项目的主要目录结构。在实际开发中，你可能还会根据需要创建其他目录，例如用于API请求的`api`目录，用于测试的`test`目录等。

### 第三步：创建你的第一个页面

在`pages`目录下创建一个新的`index.vue`文件，并添加以下代码：

```vue
<template>
  <div>
    <h1>欢迎来到Nuxt3!</h1>
  </div>
</template>
```

保存并回到浏览器，你将看到更新的首页。

### 第四步：学习更多

#### NuxtLayout 

在Nuxt3中，布局是用来定义应用的查看和结构的，它可以让你在不同的页面之间共享相同的结构，而不需要在每个页面中都重复相同的模板代码。

以下是Nuxt3中布局的使用方式：

1. 创建布局文件

在`layouts`目录下创建一个新的布局文件，例如`default.vue`。这个文件应该包含一个Vue组件，并且必须包含一个 `<NuxtPage />` 组件，这个 `<NuxtPage />` 组件将被替换为当前页面的内容。

```vue
<template>
  <div>
    <header>
      <nav>
        <!-- navigation links -->
      </nav>
    </header>

    <main>
      <NuxtPage />
    </main>

    <footer>
      <!-- footer -->
    </footer>
  </div>
</template>
```

2. 使用布局

在你的页面组件中，你可以通过导出一个名为`layout`的变量来设置页面的布局。

```vue
<script setup>
const layout = 'default'
export { layout }
</script>
```

在这个例子中，我们设置了页面的布局为`default`，这意味着Nuxt将使用`layouts/default.vue`作为页面的布局。

如果你不设置页面的布局，Nuxt将默认使用`layouts/default.vue`作为页面的布局。如果`layouts/default.vue`不存在，那么Nuxt将只渲染页面的内容。

3. 动态布局

有时，你可能希望根据一些条件动态地改变页面的布局。你可以通过返回一个函数来动态设置页面的布局。

```vue
<script setup>
import { ref } from 'vue'

const isUserLoggedIn = ref(false)
const layout = () => isUserLoggedIn.value ? 'private' : 'public'

export { layout }
</script>
```

在这个例子中，我们根据用户是否登录来动态设置页面的布局。如果用户已登录，我们使用`private`布局，否则我们使用`public`布局。

#### axios
在Nuxt3中，我们可以使用相同的方法来配置和使用axios，但是由于Nuxt3的一些新特性，我们需要稍作调整。

- 安装依赖

首先，我们需要安装 `@nuxtjs/axios` 模块：

```bash
npm install @nuxtjs/axios
```

- 插件配置

然后，我们创建一个名为 `constants.js` 的文件，用于存放一些常量：

```javascript
// utils/constants.js
export const SET_TOKEN = 'SET_TOKEN'
export const SET_IDENTITY = 'SET_IDENTITY'
```

接着，我们创建一个名为 `axios.js` 的插件，用于配置axios：

```javascript
// plugins/axios.js
import { SET_TOKEN, SET_IDENTITY } from '../utils/constants'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(nuxtApp => {
  const { $axios, store } = nuxtApp

  $axios.onRequest(config => {
    const token = store.state.token
    if (token) {
      config.headers.common['Authorization'] = `Bearer ${token}`
    }
    return config
  })

  $axios.onResponse(response => {
    if (!response.data) return response
    return response.data.data ? response.data.data : response.data
  })

  $axios.onError(error => {
    if (error.response && error.response.data) {
      const code = error.response.data.code
      if (AUTH_ERRORS.has(code)) {
        store.commit(SET_TOKEN, '')
        store.commit(SET_IDENTITY, 3)
        return
      }

      if (ERRORS.has(code)) {
        throw new Error(ERRORS.get(code))
      }

      throw error
    }
  })
})
```

- 修改Nuxt配置

最后，我们需要在 `nuxt.config.js` 文件中配置axios模块：

```javascript
const BASE_API =
  process.env.BASE_API === 'prod' ? 'https://xingqiu.com' : 'https://xingqiu.cn'
export default {
  plugins: [
    { src: '@/plugins/axios', mode: 'client' }
  ],

  env: {
    baseUrl: process.env.BASE_URL || BASE_API
  },
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: BASE_API + '/api'
  }
}
```

- 使用axios发送请求

在你的应用中，你可以使用 `app.$axios` 或 `$axios` 来发送HTTP请求：

```javascript
<script setup>
import { ref, onMounted } from 'vue'

const data = ref(null)

onMounted(async () => {
  const nuxtApp = useNuxtApp()
  const { $axios } = nuxtApp
  data.value = await $axios.$get('https://api.example.com/data')
})

export { data }
</script>
```

注意，我们在 `plugins/axios.js` 中设置的 `Authorization` 头只会在客户端请求中携带。如果你在服务端发送请求，你需要单独设置 `Authorization`。


#### 服务端渲染部署

- 项目配置

- 执行

```
npm run build
```

#### nginx 配置

- 配置

```
# 通过 upstream nodejs 可以配置多台 nodejs 节点，做负载均衡
# keepalive 设置存活时间。如果不设置可能会产生大量的 timewait
# proxy_pass 反向代理转发 http://nodejs

upstream nodenuxt {
    server 127.0.0.1:3000; # nuxt 项目监听端口
    keepalive 64;
}
server {
  listen 80;
  server_name example.com www.example.com;

  location / {
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_set_header X-Nginx-Proxy true;
    proxy_cache_bypass $http_upgrade;
    proxy_pass http://nodenuxt; # 反向代理
  }
}
```

- 重启 nginx

```
sudo service nginx restart
```

#### pm2 进程守护

```
npm i -g pm2
// nuxt-demo：项目目录
pm2 start npm --name "nuxt-demo" -- run start
```





#### Nuxt3.js是一个强大的框架，它有许多功能等待你去探索，例如服务端渲染、静态站点生成、模块系统等等。
为了更好地理解和使用Nuxt3.js，你可以访问其官方文档，那里有详细的指南和教程。
