<script setup lang="ts">
import { ref } from 'vue'
import type { Student } from '@/types/student'

const emit = defineEmits(['save'])
const showDialog = ref(false)
const student = ref<Student>({})
const isForDetail = ref(false)

function saveStudent() {
  emit('save', student.value)
  showDialog.value = false
}

defineExpose({
  open: (stu: Student, isDetail = false) => {
    showDialog.value = true
    student.value = { ...stu }
    isForDetail.value = isDetail
  },
})
</script>

<template>
  <el-dialog v-model="showDialog" append-to-body width="500px" title="学生信息">
    <el-form label-width="80px" label-position="left" :disabled="isForDetail">
      <el-form-item label="姓名">
        <el-input v-model="student.name" placeholder="请输入学生姓名" />
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model.number="student.age" placeholder="请输入学生年龄" />
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="student.gender">
          <el-radio label="M">
            男
          </el-radio>
          <el-radio label="F">
            女
          </el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>

    <template #footer>
      <el-button type="primary" @click="saveStudent">
        保存
      </el-button>
      <el-button type="primary" plain @click="showDialog = false">
        取消
      </el-button>
    </template>
  </el-dialog>
</template>
