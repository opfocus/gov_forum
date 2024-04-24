"use client";

import { createContext, useContext, useState } from "react";
import type { OpenEditorContextType } from "@/lib/type";

const OpenEditorContext = createContext<OpenEditorContextType | undefined>(
  undefined,
);

export function OpenEditorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <OpenEditorContext.Provider value={[isOpen, setIsOpen]}>
      {children}
    </OpenEditorContext.Provider>
  );
}

export function useEditorOpen() {
  const context = useContext(OpenEditorContext);

  if (context === undefined)
    throw new Error("useEditor must be used within a OpenEdiorProvide");
  return context;
}
