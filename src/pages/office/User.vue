<template>
  <div class="user">
    <!-- 用户管理 -->
    <div class="form">
      <el-select v-model="category" placeholder="请选择用户类别" size="mini">
        <el-option label="学生" value="student"></el-option>
        <el-option label="指导员" value="instructor"></el-option>
      </el-select>
    </div>
    <div class="btns">
      <el-button type="primary" plain size="mini" @click="add">添加用户</el-button>
    </div>
    <div class="data">
      <el-table
        :data="userData"
        stripe
        size='mini'
        style="width: 100%">
        <el-table-column
          type="index"
          align="center"
          width="55">
        </el-table-column>
        <el-table-column
          prop="username"
          label="用户名"
          align="center"
          width="180">
        </el-table-column>
        <el-table-column
          align="center"
          prop="password"
          label="用户密码">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          align="center"
          width="100">
          <template slot-scope="{row}">
            <i class="el-icon-edit" title="修改" @click="update(row)"></i>
            <i class="el-icon-delete" title="删除" @click="delete(row.id)"></i>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        layout="prev, pager, next"
        :page-size="10"
        :total="10">
      </el-pagination>
    </div>
    <div class="modal">
      <el-dialog :title="applyDialog.title" :visible.sync="applyDialog.visible" :before-close="closeModal">
        {{applyDialog.form}}
        <el-form :model="applyDialog.form" size="mini">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="applyDialog.form.title" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input v-model="applyDialog.form.title" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="专业" :label-width="formLabelWidth">
            <el-select v-model="applyDialog.form.major" placeholder="请选择专业">
              <el-option label="计算机科学与技术" value="shanghai"></el-option>
              <el-option label="英语" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="年级" :label-width="formLabelWidth">
            <el-select v-model="applyDialog.form.grade" placeholder="请选择年级">
              <el-option label="大一" value="shanghai"></el-option>
              <el-option label="大二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="closeModal" size="mini">取 消</el-button>
          <el-button type="primary" @click="save" size="mini">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      // 用户类别
      category:[],
      // 申请数据
      userData:[{
        id:1,
        username:'hello',
        password:'start'
      }],
      // 申请表模态框
      applyDialog:{
        title:'',
        visible:false,
        form:{
          username:'',
          password:'',
          major:'',
          grade:'',
        }
      },
      formLabelWidth:'120px'
    }
  },
  methods:{
    // 保存
    save(){

      this.closeModal()
    },
    // 新增
    add(){
      this.applyDialog.title = '新增申请表'
      this.applyDialog.form = {}
      this.openModal()
    },
    // 修改
    update(row){
      this.applyDialog.title = '修改申请表'
      this.applyDialog.form = row
      this.openModal()
    },
    // 删除
    delete(id){

    },
    // 打开模态框
    openModal(){
      this.applyDialog.visible = true
    },
    // 关闭模态框
    closeModal(){
      this.applyDialog.visible = false
    },
    // 获取所有的数据
    findAll(){
      
    }
  }
}
</script>

<style scoped>
.form {
  float: left;
}
/* 按钮 */
.btns {
  text-align: right;
  margin-bottom: 20px;
}
/* 数据 */
.data i.el-icon-edit {
  color: #409EFF;
  margin-right:10px;
  cursor: pointer;
}
.data i.el-icon-delete {
  color: #F56C6C;
  cursor: pointer;
}
/* 分页 */
.pagination {
  text-align: right;
  margin-right: 2em;
  margin-top: 3em;
}
</style>

