import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// 教务处模块
import ApplicationReview from '@/pages/office/ApplicationReview'
import Announce from '@/pages/office/Announce'
import User from '@/pages/office/User'
// 辅导员模块
import Application from '@/pages/instructor/Application'
// 学生模块
import Announcement from '@/pages/student/Announcement'
import Apply from '@/pages/student/Apply'
// 学生信息管理
import ChangePassword from '@/pages/studentInfo/ChangePassword'
import PersonalDetails from '@/pages/studentInfo/PersonalDetails'
import ScoreInquiry from '@/pages/studentInfo/ScoreInquiry'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // 申请书复审
    {
      path:'/applicationReview',
      name: 'ApplicationReview',
      component:ApplicationReview
    },
    // 公告栏管理
    {
      path:'/announce',
      name: 'Announce',
      component:Announce
    },
    // 用户管理
    {
      path:'/user',
      name: 'User',
      component:User
    },
    // 申请书审核
    {
      path:'/application',
      name: 'Application',
      component:Application
    },
    // 公告栏
    {
      path:'/',
      name: 'Announcement',
      component:Announcement
    },
    // 申请书
    {
      path:'/apply',
      name: 'Apply',
      component:Apply
    },
    // 修改密码
    {
      path:'/changePassword',
      name: 'ChangePassword',
      component:ChangePassword
    },
    // 个人信息
    {
      path:'/personalDetails',
      name: 'PersonalDetails',
      component:PersonalDetails
    },
    // 成绩查询
    {
      path:'/scoreInquiry',
      name: 'ScoreInquiry',
      component:ScoreInquiry
    },
  ]
})
