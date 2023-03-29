import type { AppContext } from 'vue'
import { h, render } from 'vue'
import StudentDetail from './student-detail.vue'
import type { Student } from '@/types/student'

function toEdit(stu?: Student, isDetail?: boolean, appContext?: AppContext) {
  console.log(stu, isDetail)
  const vnode = h(StudentDetail, {
    isForDetail: isDetail,
    editStudent: { ...stu },
  })

  vnode.appContext = appContext
  // 进行渲染
  render(vnode, document.body)
  console.log(vnode.component)
  vnode.component?.exposed?.open(true)
}

export default {
  toEdit,
}
