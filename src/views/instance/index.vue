<script setup lang="ts">
import { getCurrentInstance, ref } from 'vue'
import StudentDetail from './components/student-detail-instance'
import mockStudent from '@/mock/mock-student'
import type { Student } from '@/types/student'
const instance = getCurrentInstance()

const studentList = ref<Student[]>(mockStudent)
function toEdit(stu?: Student, isDetail = false) {
  console.log('toEdit', stu, isDetail)
  StudentDetail.toEdit(stu, isDetail, instance!.appContext)
}
</script>

<template>
  <div class="student-list">
    <div class="header">
      学生列表/instance

      <el-button type="primary" @click="toEdit()">
        新增学生
      </el-button>
    </div>

    <div class="list-wrap">
      <div v-for="stu in studentList" :key="stu.id" class="list-item">
        <div>{{ stu.name }}</div>
        <div>{{ stu.age }}</div>
        <div>{{ stu.gender === 'F' ? '女' : '男' }}</div>
        <div>
          <el-button type="primary" size="small" @click="toEdit(stu)">
            编辑
          </el-button>
          <el-button type="info" size="small" @click="toEdit(stu, true)">
            详情
          </el-button>
          <el-button type="danger" size="small">
            删除
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
@import "@/styles/common.styl"
</style>
