'use client'
import React from 'react'

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("cart"); // LocalStorage se cart empty karein
    router.refresh(); // Page refresh karein taake cart update ho jaye
  }, []);


  return (
    <div className='flex justify-center bg-emerald-100 items-center h-screen text-3xl font-bold'>
      Congratulation!
      Payment Sucessfully
    </div>
  )
}
