<template>
  <div class="announce">
    <!-- 公告栏管理 -->
    <el-form :label-position="labelPosition" label-width="80px" :model="form">
      <el-form-item label="标题">
        <el-input v-model="form.username" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="发布内容">
        <el-input type='textarea' v-model="form.newPassword" :rows="6" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit" style="width:100%">发布</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data(){
    return {
      form: {
        username:'',
        oldPassword:'',
        newPassword:''
      },
      labelPosition: 'right'
    }
  },
  methods:{
    submit(){
      
    }
  }
}
</script>

