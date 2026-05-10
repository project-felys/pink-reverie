"use client";

import { createContext, useContext, ReactNode } from "react";
import { Config, ZH, EN } from "@/lib/config";

const ConfigContext = createContext<Config>(EN);

export function ConfigProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: string;
}) {
  const config = locale === ZH.root ? ZH : EN;
  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
}

export function useConfig() {
  return useContext(ConfigContext);
}
