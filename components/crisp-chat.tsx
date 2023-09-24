"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export default function CrispChat() {
  useEffect(() => {
    Crisp.configure("3b1f453d-0165-4f5c-9db4-951cdaa404c7");
  }, [])

  return (
    null
  )
}
