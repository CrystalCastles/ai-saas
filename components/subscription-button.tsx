"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { Zap } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

interface SubscriptionButtonProps {
  isPro: boolean;
}

export function SubscriptionButton({
  isPro = false
}:  SubscriptionButtonProps) {
  const [loading, setLoading] = useState(false);
  async function onClick() {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      toast.error("Something went wrong. Please wait and try again.");
      console.log("BILLING_ERROR", error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <Button disabled={loading} variant={isPro ? "default" : "premium"} onClick={onClick}>
      {isPro ? "Manage Subscription" : "Upgrade"}
      {!isPro &&  <Zap className="w-4 h-4 ml-2 fill-white" />}
    </Button>
  )
}