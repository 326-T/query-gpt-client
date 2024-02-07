"use client";

import axios, { AxiosInstance } from "axios";
import { createContext, useEffect, useState } from "react";

export const EnvContext = createContext<{
  baseUrl: string;
}>({
  baseUrl: "",
});

export function EnvProvider({ children }: { children: React.ReactNode }) {
  const [isEnvReady, setIsEnvReady] = useState(false);
  const [baseUrl, setBaseUrl] = useState<string>("");

  useEffect(() => {
    if (isEnvReady) return;
    const frontClient: AxiosInstance = axios.create();
    frontClient
      .get("/api/env")
      .then((res) => {
        setBaseUrl(res.data.baseUrl);
      })
      .finally(() => {
        setIsEnvReady(true);
      });
  }, []);

  return (
    <EnvContext.Provider value={{ baseUrl }}>
      {isEnvReady && children}
    </EnvContext.Provider>
  );
}
