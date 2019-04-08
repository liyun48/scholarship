<template>
  <div class="changePassword">
    <!-- 修改密码 -->
    <el-form :label-position="labelPosition" label-width="80px" :model="form" style="width:50%;">
      <el-form-item label="用户名">
        <el-input v-model="form.username" disabled></el-input>
      </el-form-item>
      <el-form-item label="旧密码">
        <el-input v-model="form.oldPassword"></el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input v-model="form.newPassword"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit" style="width:100%">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data(){
    return {
      form: {
        username:'12233541',
        oldPassword:'',
        newPassword:''
      },
      labelPosition: 'right'
    }
  },
  methods:{
    // 修改密码
    submit(){

    }
  }
}
</script>

<style scoped>
.changePassword {
  /* text-align: center; */
  margin-left: 25%;
  margin-top: 50px;
}
</style>
