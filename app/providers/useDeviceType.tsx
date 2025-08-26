"use client";

import { useEffect, useState } from "react";

export function useDeviceType() {
  const [device, setDevice] = useState<"mobile" | "desktop">("desktop");

  useEffect(() => {
    const checkDevice = () => {
      if (window.innerWidth <= 768) {
        setDevice("mobile");
      } else {
        setDevice("desktop");
      }
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return device;
}
