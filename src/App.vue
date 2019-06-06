<template>
  <div id="app" class="layout">
    <Layout :style="{minHeight: '100vh'}">
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <!-- <div class="layout-logo"></div> -->
          <!-- <div class="layout-nav"> -->
          <!-- <MenuItem name="1">
            <Icon type="ios-navigate"></Icon>Item 1
          </MenuItem>-->
          <!-- </div> -->
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu
            ref="navMenu"
            :active-name="activeName"
            :open-names="[openName]"
            theme="light"
            width="auto"
          >
            <Submenu v-for="(item,index) in menus" :key="index" :name="item.menuId">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                {{item.name}}
              </template>
              <MenuItem
                v-for="(sub,index) in item.subMenus"
                :key="index"
                :to="sub.menuUrl"
                :name="sub.menuId"
                @click.native="selectedMenu(item.name,sub.name)"
              >{{sub.name}}</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>首页</BreadcrumbItem>
            <BreadcrumbItem>{{selectedFirstMenu}}</BreadcrumbItem>
            <BreadcrumbItem>{{selectedSecondMenu}}</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <!-- Content -->
            <router-view v-on:listenToParentEvent="childComponent"></router-view>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      menus: this.$store.state.menus,
      selectedFirstMenu: "",
      selectedSecondMenu: "",
      activeName: "",
      openName: ""
    };
  },
  methods: {
    selectedMenu: function(itemName, subName) {
      this.selectedFirstMenu = itemName;
      this.selectedSecondMenu = subName;
    },
    childComponent: function(childName, parentName, childId, parentId) {
      this.selectedFirstMenu = parentName;
      this.selectedSecondMenu = childName;
      this.activeName = childId;
      this.openName = childId.split("-")[0];
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.navMenu.updateOpened(); //手动更新展开的子目录
      this.$refs.navMenu.updateActiveName(); //手动更新当前选择项
    });
  }
};
</script>

<style>
html,
body {
  margin: 0;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
/* .layout-logo {
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
} */
</style>
