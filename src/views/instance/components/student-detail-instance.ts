import type { AppContext } from 'vue'
import { h, render } from 'vue'
import StudentDetail from './student-detail.vue'
import type { Student } from '@/types/student'

function toEdit(stu?: Student, isDetail?: boolean, appContext?: AppContext): Promise<Student> {
  return new Promise((resolve) => {
    const vnode = h(StudentDetail, {
      onSave(editStu: Student) {
        resolve(editStu)
      },
    })
    vnode.appContext = appContext!

    const container = document.createElement('div')
    // 进行渲染
    render(vnode, container)
    vnode.component?.exposed?.open(stu, isDetail)
  })
}

export default {
  toEdit,
}
