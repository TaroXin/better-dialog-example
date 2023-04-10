import { defineComponent, h, ref } from 'vue'
import StudentDetail from '../components/student-detail.vue'
import type { Student } from '@/types/student'

export default function useStudentDetail() {
  const showDetail = ref(false)
  const isForDetail = ref(false)
  const editStudent = ref<Student>()
  let callback: (stu: Student) => void

  const toEdit = (stu?: Student, isDetail = false): Promise<Student> => {
    showDetail.value = true
    editStudent.value = stu
    isForDetail.value = isDetail

    return new Promise((resolve) => {
      callback = resolve
    })
  }

  const component = defineComponent(() => {
    return () => h(StudentDetail, {
      'modelValue': showDetail.value,
      'onUpdate:modelValue': (v: boolean) => (showDetail.value = v),
      'isForDetail': isForDetail.value,
      'editStudent': editStudent.value,
      'onSave': callback,
    })
  })

  component.toEdit = toEdit
  return component
}
