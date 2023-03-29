<script setup lang="ts">
import type { PropType } from 'vue'
import { ref, watch } from 'vue'
import type { Student } from '@/types/student'

const props = defineProps({
  editStudent: {
    type: Object as PropType<Student>,
  },
  isForDetail: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['save'])

const showDialog = ref(false)
const student = ref<Student>({})

watch(() => props.editStudent, (newVal) => {
  if (newVal)
    student.value = { ...props.editStudent } as Student
  else
    student.value = {}
})

function saveStudent() {
  emit('save', student.value)
  emit('update:modelValue', false)
}

defineExpose({
  open: (v: boolean) => {
    showDialog.value = v
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
