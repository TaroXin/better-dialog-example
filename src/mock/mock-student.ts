import mock from 'mockjs'
import type { Student } from '@/types/student'

const students: Student[] = []

for (let i = 0; i < 10; i++) {
  students.push({
    name: mock.Random.cname(),
    age: mock.Random.integer(18, 25),
    gender: mock.Random.pick(['F', 'M']),
    id: i,
  })
}

export default students
