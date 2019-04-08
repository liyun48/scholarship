<template>
  <div class="personalDetails">
    <!-- 个人信息 -->
    <div class="btn">
      <el-button type="primary" plain size="mini">保存修改</el-button>
    </div>
    <div class="table">
      <table>
        <tr>
          <th colspan="7">个人档案</th>
        </tr>
        <tr>
          <td width="120px">姓名</td>
          <td width="150px">
            <input type="text" v-model="info.userInfo">
          </td>
          <td width="120px">性别</td>
          <td width="150px">
            <input type="text" v-model="info.userInfo">
          </td>
          <td width="120px">学号</td>
          <td width="150px">
            <input type="text" v-model="info.userInfo">
          </td>
          <td rowspan="5" width="100px">
            <!-- 照片 -->
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <!-- <img src="@/assets/logo.png" alt=""> -->
          </td>
        </tr>
        <tr>
          <td>民族</td>
          <td>
            <input type="text" v-model="info.userInfo">
          </td>
          <td>生日</td>
          <td>
            <input type="text" v-model="info.userInfo">
          </td>
          <td>政治面貌</td>
          <td>
            <input type="text" v-model="info.userInfo">
          </td>
        </tr>
        <tr>
          <td>籍贯</td>
          <td>
            <input type="text" v-model="info.userInfo">
          </td>
          <td>电话</td>
          <td colspan="3">
            <input type="text" v-model="info.userInfo">
          </td>
        </tr>
        <tr>
          <td colspan="2">身份证号</td>
          <td colspan="4">
            <input type="text" v-model="info.userInfo">
          </td>
        </tr>
        <tr>
          <td colspan="2">家庭住址</td>
          <td colspan="4">
            <input type="text" v-model="info.userInfo">
          </td>
        </tr>
        <tr>
          <td colspan="7">家庭信息</td>
        </tr>
        <tr>
          <td>家庭成员名称</td>
          <td>家庭成员关系</td>
          <td>职业</td>
          <td colspan="3">工作单位</td>
          <td>收入（年）</td>
        </tr>
        <tr>
          <td>
            <input type="text" v-model="info.famailyInfo">
          </td>
          <td>
            <input type="text" v-model="info.famailyInfo">
          </td>
          <td>
            <input type="text" v-model="info.famailyInfo">
          </td>
          <td colspan="3">
            <input type="text" v-model="info.famailyInfo">
          </td>
          <td>
            <input type="text" v-model="info.famailyInfo">
          </td>
        </tr>
        <tr>
          <td>
            <input type="text" v-model="info.famailyInfo">
          </td>
          <td>
            <input type="text" v-model="info.famailyInfo">
          </td>
          <td>
            <input type="text" v-model="info.famailyInfo">
          </td>
          <td colspan="3">
            <input type="text" v-model="info.famailyInfo">
          </td>
          <td>
            <input type="text" v-model="info.famailyInfo">
          </td>
        </tr>
        <tr>
          <td>
            <input type="text" v-model="info.famailyInfo">
          </td>
          <td>
            <input type="text" v-model="info.famailyInfo">
          </td>
          <td>
            <input type="text" v-model="info.famailyInfo">
          </td>
          <td colspan="3">
            <input type="text" v-model="info.famailyInfo">
          </td>
          <td>
            <input type="text" v-model="info.famailyInfo">
          </td>
        </tr>
        <tr>
          <td>
            <input type="text" v-model="info.famailyInfo">
          </td>
          <td>
            <input type="text" v-model="info.famailyInfo">
          </td>
          <td>
            <input type="text" v-model="info.famailyInfo">
          </td>
          <td colspan="3">
            <input type="text" v-model="info.famailyInfo">
          </td>
          <td>
            <input type="text" v-model="info.famailyInfo">
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      info:{
        // 个人信息
        userInfo:{},
        // 家庭信息
        famailyInfo:{}
      },
      imageUrl: ''
    }
  },
  methods:{
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  }
}
</script>

<style scoped>
.btn {
  text-align: right;
  margin-top: 20px;
  margin-right: 50px;
}
/* .table {
  overflow-x: auto;
} */
table{
  margin: 5%;
  border-collapse:collapse;
  width: 90%;
}
table, th, td{
  border: 1px solid #ededed;
  line-height: 2.5em;
  font-size: 1.1em;
  text-align: center;
}
table > tr > th {
  color: black;
  font-size: 1.5em;
}
.avatar-uploader .el-upload {
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 130px;
  line-height: 130px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 130px;
  display: block;
}
img {
  /* width: 100%; */
  /* height: 12.5em; */
}
input {
  border: none;
  text-align: center;
  outline:0;
  /* height: 2em; */
  font-size: 1.1em;
  width: 90%;
}
</style>
