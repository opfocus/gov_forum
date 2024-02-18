'use client'

import { createContext, useState} from "react"
import type { OpenEditorContextType } from "@/lib/type"

export const OpenEditorContext = createContext<OpenEditorContextType | undefined>(undefined)

export default function OpenEditorProvider({ children }: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)
  const contextValue = {
    isOpen: isOpen,
    setIsOpen:setIsOpen
  }

  return <OpenEditorContext.Provider value = {contextValue}>{children}</OpenEditorContext.Provider>
}