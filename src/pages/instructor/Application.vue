<template>
  <div class="application">
    <!-- 申请书审核 -->
    <!-- 模糊查询 -->
    <div class="form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini">
        <el-form-item label="">
          <el-select v-model="formInline.category" placeholder="请选择申请类别">
            <el-option label="" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="formInline.userNo" placeholder="请输入学号"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <!-- 渲染数据 -->
    <div class="data">
      <el-table
        :data="applicationData"
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
          label="申请人"
          align="center"
          width="180">
        </el-table-column>
        <el-table-column
          align="center"
          prop="password"
          label="学号">
        </el-table-column>
        <el-table-column
          align="center"
          prop="state"
          label="状态">
        </el-table-column>
        <el-table-column
          align="center"
          label="申请书详情">
          <template slot-scope="">
            <el-button type="text" size="small" @click="viewApply">查看申请书</el-button>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="state"
          label="学生家庭信息">
          <template slot-scope="">
            <el-button type="text" size="small" @click="viewStudentInfo">查看学生家庭信息</el-button>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          align="center"
          width="100">
          <template slot-scope="{row}">
            <i class="fa fa-gavel" title="申请" @click="apply(row)"></i> &nbsp;
            <i class="el-icon-delete" title="删除" @click="deleteApply(row.id)"></i>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="pagination">
      <el-pagination
        layout="prev, pager, next"
        :page-size="10"
        :total="10">
      </el-pagination>
    </div>
    <!-- 模态框 -->
    <!-- 是否同意模态框 -->
    <el-dialog
      title="审核"
      :visible.sync="isApply.visible"
      width="50%"
      :before-close="handleClose">
        <el-button type="primary" @click="yes">同意申请</el-button>
        <el-button type="danger" @click="no">拒绝申请</el-button>
    </el-dialog>
    <!-- 申请书模态框 -->
    <el-dialog
      title="申请书"
      :visible.sync="applyDialog.visible"
      width="50%"
      :before-close="handleClose">
        <ul class="applyInfo">
          <li>
            <el-row>
              <el-col :span="5"><div style="margin-left:2em;">姓名</div></el-col>
              <el-col :span="19"><div>1</div></el-col>
            </el-row>
          </li>
          <li>
            <el-row>
              <el-col :span="5"><div style="margin-left:2em;">专业</div></el-col>
              <el-col :span="19"><div>1</div></el-col>
            </el-row>
          </li>
          <li>
            <el-row>
              <el-col :span="5"><div style="margin-left:2em;">学号</div></el-col>
              <el-col :span="19"><div>1</div></el-col>
            </el-row>
          </li>
          <li>
            <el-row>
              <el-col :span="5"><div style="margin-left:2em;">奖学金类别</div></el-col>
              <el-col :span="19"><div>1</div></el-col>
            </el-row>
          </li>
          <li>
            <el-row>
              <el-col :span="5"><div style="margin-left:2em;">申请原因</div></el-col>
              <el-col :span="19"><div>1</div></el-col>
            </el-row>
          </li>
        </ul>      
    </el-dialog>
    <!-- 学生信息模态框 -->
    <el-dialog
      title="学生信息"
      :visible.sync="studentInfoDialog.visible"
      width="50%"
      :before-close="handleClose">
        <el-table :data="studentInfoDialog.data" border size="mini">
          <el-table-column property="name" label="家庭成员名称" width="150" align="center"></el-table-column>
          <el-table-column property="name" label="家庭成员关系" width="150" align="center"></el-table-column>
          <el-table-column property="address" label="职业" width="150" align="center"></el-table-column>
          <el-table-column property="address" label="工作单位" align="center"></el-table-column>
          <el-table-column property="address" label="收入（年）" width="150" align="center"></el-table-column>
        </el-table>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data(){
    return {
      // 模糊查询信息
      formInline:{
        userNo:'',
        category:''
      },
      // 渲染数据
      applicationData:[
        {id:1}
      ],
      // 申请书模态框
      applyDialog:{
        visible: false,
        applyInfo:{}
      },
      // 学生信息模态框
      studentInfoDialog:{
        visible: false,
        data:[]

      },
      // 是否同意申请模态框
      isApply:{
        visible: false,
        date:''
      }
    }
  },
  created(){

  },
  methods:{
    deleteApply(id){
      
    },
    // 拒绝申请
    no(){

    },
    // 同意申请
    yes(){

    },
    // 是否同意申请
    apply(){
      this.isApply.visible = true;
    },
    // 查看申请书
    viewApply(){
      this.applyDialog.visible = true
    },
    // 查看学生信息
    viewStudentInfo(){
      this.studentInfoDialog.visible = true
    },
    // 关闭模态框
    handleClose(done){
      done();
    }
  }
}
</script>
<style scoped>
/* 数据 */
.data i.fa-gavel {
  color: #409EFF;
  /* margin-right:10px; */
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
/* 模态框 */
.applyInfo {
  line-height: 2.5em;
}
.applyInfo li {
  border-bottom: 1px solid #ededed;
}
</style>

