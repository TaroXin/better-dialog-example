<script setup lang="ts">
import { ref } from 'vue'
import type { Student } from '@/types/student'

defineProps({
  showDialog: {
    type: Boolean,
    default: false,
  },
})

const student = ref<Student>({})
</script>

<template>
  <el-dialog append-to-body width="500px" title="学生信息" v-bind="$attrs">
    测试
  </el-dialog>
</template>
