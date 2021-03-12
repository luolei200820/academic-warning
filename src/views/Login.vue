<template>
  <div class="login-background">
    <main class="login-main">
      <div class="form-title">用户登录</div>
      <el-form ref="form" :model="form" label-width="0px" style="width: 100%">
        <el-form-item>
          <el-input
            v-model="form.username"
            placeholder="用户名"
            type="username"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="form.username"
            placeholder="密码"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="save">记住账号</el-checkbox>
          <el-button type="text" style="float: right">忘记密码</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" round @click="onSubmit" style="width: 100%"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </main>

    <footer class="login-footer">Copyright © 2021 计算机与信息安全学院-</footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      save: false,
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    },
  },
};
</script>

<style>
.login-background {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: linear-gradient(270deg, #a5fecb, #20bdff, #5433ff);
  height: 100vh;
}
.login-main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 480px;
  height: 520px;
  padding: 8%;
  box-sizing: border-box;
  box-shadow: 2px 2px 48px #e6e6e6;
  border: 3px solid transparent;
  border-radius: 5px;
  background-color: white;
}
.login-footer {
  position: fixed;
  bottom: 0;
  padding: 6px;
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: #f3f3f3;
}
.form-title{
    font-size: 22px;
    padding-bottom: 50px;
    color: #2c3e50;
}
</style>