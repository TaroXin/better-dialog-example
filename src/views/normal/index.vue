<script setup lang="ts">
import { ref } from 'vue'
import StudentDetail from './components/student-detail.vue'
import mockStudent from '@/mock/mock-student'
import type { Student } from '@/types/student'

const studentList = ref<Student[]>(mockStudent)

const showDetail = ref(false)
const isForDetail = ref(false)
const editStudent = ref<Student>()

const toEdit = (stu?: Student, isDetail = false) => {
  showDetail.value = true
  editStudent.value = stu
  isForDetail.value = isDetail
}

const handleStudentSave = (stu: Student) => {
  // 如果 editStudent 中的 id 不为空，则为编辑，否则为新增
  if (stu.id != null) {
    const existIndex = studentList.value.findIndex(es => es.id === stu.id)
    if (existIndex >= 0) {
      studentList.value[existIndex] = {
        ...stu,
      }
    }
  }
  else {
    studentList.value.push({
      ...stu,
      id: studentList.value.length,
    })
  }
}
</script>

<template>
  <div class="student-list">
    <div class="header">
      学生列表/状态驱动

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

    <StudentDetail v-model="showDetail" :edit-student="editStudent" :is-for-detail="isForDetail" @save="handleStudentSave" />
  </div>
</template>

<style lang="stylus">
@import "@/styles/common.styl"
</style>
