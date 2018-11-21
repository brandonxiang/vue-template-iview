<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem :name="head.headName" v-for="(head, index) in headerLink" :key="index">
                            <Icon :type="head.headIcon"></Icon>
                            {{head.headTitle}}
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="1-1" theme="light" width="auto" :open-names="['1']" @on-select="toSubSystem">
                        <Submenu :name="menu.systemName" v-for="(menu, xIndex) in subSystem" :key="xIndex">
                            <template slot="title">
                                <Icon type="menu.systemIcon"></Icon>
                                {{menu.systemTitle}}
                            </template>
                            <MenuItem :name="page.pageName" v-for="(page, yIndex) in menu.systemPages"
                             :key="yIndex">{{page.pageTitle}}</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px'}">
                  <iframe ref="subsystem"></iframe>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
import {
  Layout,
  Header,
  Menu,
  MenuItem,
  Sider,
  Submenu,
  Icon,
  Breadcrumb,
  BreadcrumbItem,
  Content
} from "iview";
import config from "./config";
import Mefa from './mefa.js'

export default {

  components: {
    Layout,
    Header,
    Menu,
    MenuItem,
    Sider,
    Submenu,
    Icon,
    Breadcrumb,
    BreadcrumbItem,
    Content
  },

  data() {
    return {
      headerLink: config.headerLink,
      subSystem: config.subSystem,
      system: '',
      page: '',
      mefa: undefined,
    };
  },

  mounted() {
    this.mefa = new Mefa(this.$refs.subsystem)
    this.mefa.registerApplication({app: '1', route: '/', link: 'http://localhost:8002/'})
    this.mefa.registerApplication({app: '1', route: '/1', link: 'http://localhost:8002/'})
    this.mefa.registerApplication({app: '2', route: '/', link: 'http://localhost:8003/'})
    this.mefa.registerApplication({app: '2', route: '/1', link: 'http://localhost:8003/'})
    this.mefa.registerApplication({app: '2', route: '/2', link: 'http://localhost:8003/'})
    this.mefa.registerApplication({app: '3', route: '/', link: 'http://localhost:8004/'})
    this.mefa.registerApplication({app: '3', route: '/1', link: 'http://localhost:8004/'})
  },

  methods: {
    toSubSystem(name) {
      const re = /(.*)\/(.*)/
      const result = name.match(re)
      if(result.length && result.length > 2) {
        const system = result[1];
        const page = result[2];
        this.mefa.navigateTo({app: system, route: `/${page}`})
      }
    },
  }
};
</script>

<style>
@import "./assets/normalize.css";
body,
html {
  height: 100%;
  padding: 0;
}
iframe {
  border: 0;
  height: 100%;
}
.ivu-layout {
  height: 100%;
}
.layout {
  height: 100%;
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>