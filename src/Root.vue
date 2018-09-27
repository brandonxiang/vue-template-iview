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
    };
  },

  methods: {
    toSubSystem(name) {
      const re = /(.*)\/(.*)/
      const result = name.match(re)
      if(result.length && result.length > 2) {
        const system = result[1];
        const page = result[2];
        if(this.isInSameSystem(system)) {
          if(!this.isInSamePage(system, page)){
            this.navigateInSystem(system, page);
          }
        } else {
          this.navigateOutSystem(system, name);
        }
        this.system = system;
        this.page = page;
      }
      console.log(name)
    },

    navigateInSystem() {
       window.frames[0].postMessage('data');
      // this.$refs.subsystem.postMessage('hello');
    },
    navigateOutSystem(system, name) {
      this.subSystem.some((menu)=> {
        if(menu.systemName === system){
          menu.systemPages.some((item)=>{
            if(item.pageName === name) {
              this.$refs.subsystem.src = item.link;
              return true;
            }
            return false
          })
          return true;
        }
        return false;
      })
    },
    isInSameSystem(system) {
      return this.system && this.system === system;
    },
    isInSamePage(system, page) {
      return this.isInSameSystem(system) && this.page && this.page === page
    },
    findPage() {

    }
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