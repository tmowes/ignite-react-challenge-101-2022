import { Dispatch, ReactNode, SetStateAction } from 'react'

export type TaskContextData = {
  tasks: TaskData[]
  // setTasks: Dispatch<SetStateAction<TaskData[]>>
  createTask: (description: string) => void
  updateTask: (id: string) => void
  deleteTask: (id: string) => void
  totalPending: number
  totalTasks: number
}

export type TasksProviderProps = {
  children: ReactNode
}

export type TaskData = {
  id: string
  description: string
  isDone: boolean
  createdAt: Date
  updatedAt: Date
}
