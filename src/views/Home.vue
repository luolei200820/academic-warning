<template>
  <el-container>
    <el-aside width="200px">
      <el-menu router :default-active="$route.path" style="min-height: 100vh">
        <el-submenu index="1" v-if="center_menu.length">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>统计中心</span>
          </template>
          <el-menu-item
            v-for="item in center_menu"
            :key="item.title"
            :index="item.index"
          >
            {{ item.title }}
          </el-menu-item>
        </el-submenu>
        <el-submenu index="2" v-if="system_menu.length">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>系统设置</span>
          </template>
          <el-menu-item
            v-for="item in system_menu"
            :key="item.title"
            :index="item.index"
          >
            {{ item.title }}
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main><router-view></router-view></el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      center_menu: [
        {
          index: "/",
          title: "预警概览",
        },
        {
          index: "/detail",
          title: "预警详情",
        },
        {
          index: "/123",
          title: "学分绩统计",
        },
      ],
      system_menu: [
        {
          index: "/123",
          title: "用户管理",
        },
        {
          index: "/123",
          title: "个人信息",
        },
        {
          index: "/role-auth",
          title: "角色权限",
        },
      ],
    };
  },
  methods: {},
  created() {
    this.center_menu = this.center_menu.filter((item) => {
      if (this.$store.state.user.role_auth.includes(item.title)) {
        return true;
      }
    });
    this.system_menu = this.system_menu.filter((item) => {
      if (this.$store.state.user.role_auth.includes(item.title)) {
        return true;
      }
    });
  },
};
</script>

<style>
</style>