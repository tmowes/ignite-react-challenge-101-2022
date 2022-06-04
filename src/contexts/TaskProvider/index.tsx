import { createContext, useCallback, useContext, useMemo, useState } from 'react'

import { v4 as uuidV4 } from 'uuid'

import { TaskContextData, TaskData, TasksProviderProps } from './types'

const TaskContext = createContext({} as TaskContextData)

export function TaskProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<TaskData[]>([])

  const createTask = useCallback((description: string) => {
    const newTask: TaskData = {
      id: uuidV4(),
      description,
      isDone: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    setTasks((prev) => [...prev, newTask])
  }, [])

  const updateTask = useCallback(
    (id: string) => {
      setTasks(
        tasks.map((task) => {
          if (task.id === id) {
            task.isDone = !task.isDone
            task.updatedAt = new Date()
          }
          return task
        }),
      )
    },

    [tasks],
  )

  const deleteTask = useCallback(
    (id: string) => {
      setTasks(tasks.filter((task) => task.id !== id))
    },
    [tasks],
  )

  const providerValues = useMemo(
    () => ({
      tasks,
      createTask,
      updateTask,
      deleteTask,
      totalPending: tasks.filter((task) => task.isDone).length,
      totalTasks: tasks.length,
    }),
    [tasks, createTask, deleteTask, updateTask],
  )

  return <TaskContext.Provider value={providerValues}>{children}</TaskContext.Provider>
}

export function useTask(): TaskContextData {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useCalculation must be used within a CalculationProvider')
  }
  return context
}
