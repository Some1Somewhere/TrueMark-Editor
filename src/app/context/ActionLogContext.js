'use client'

import React, { createContext, useContext, useState } from 'react'

const ActionLogContext = createContext()

export function ActionLogProvider({ children }) {
  const [actionLog, setActionLog] = useState([])

  return (
    <ActionLogContext.Provider value={{ actionLog, setActionLog }}>
      {children}
    </ActionLogContext.Provider>
  )
}

export function useActionLog() {
  const context = useContext(ActionLogContext)
  if (context === undefined) {
    throw new Error('useActionLog must be used within an ActionLogProvider')
  }
  return context
}