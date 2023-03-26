import type { Ref } from 'vue'
import { ref } from 'vue'
import type { Student } from '@/types/student'

export default function useStudentDetail(studentList: Ref<Student[]>) {
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

  return {
    showDetail,
    isForDetail,
    editStudent,
    handleStudentSave,
    toEdit,
  }
}
