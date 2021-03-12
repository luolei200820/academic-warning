<template>
  <div>
    <ul>
      <li>统计中心</li>
      <ul>
        <li v-for="item in center_menu" :key="item">
          <input :id="item" type="checkbox" :value="item" v-model="auths" />
          <label :for="item">{{ item }}</label>
        </li>
      </ul>
      <li>系统设置</li>
      <ul>
        <li v-for="item in system_menu" :key="item">
          <input :id="item" type="checkbox" :value="item" v-model="auths" />
          <label :for="item">{{ item }}</label>
        </li>
      </ul>
    </ul>
    <el-button @click="submit">提交</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center_menu: ["预警概览", "预警详情", "学分绩统计"],
      system_menu: ["用户管理", "个人信息", "角色权限"],
      auths: [],
    };
  },
  methods: {
    submit() {
      this.$store.commit("edit_auth", this.auths);
    },
  },
  created() {
    //只是测试
    this.$store.state.user.role_auth.forEach((auth) => {
      this.auths.push(auth);
    });
  },
};
</script>

<style>
</style>