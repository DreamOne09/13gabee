"use client";

import { useEffect } from "react";

const STORAGE_KEY = "13gabee-demo-dismissed";

export function DemoGateClient() {
  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY) === "1";
    if (dismissed) {
      document.documentElement.dataset.demoDismissed = "true";
      document.body.dataset.demoDismissed = "true";
    }

    const button = document.getElementById("demo-dismiss-btn");
    if (!button) return;

    const handleDismiss = () => {
      localStorage.setItem(STORAGE_KEY, "1");
      document.documentElement.dataset.demoDismissed = "true";
      document.body.dataset.demoDismissed = "true";
    };

    button.addEventListener("click", handleDismiss);
    return () => button.removeEventListener("click", handleDismiss);
  }, []);

  return null;
}
