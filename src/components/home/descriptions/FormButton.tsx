"use client";

import { useFormContext } from "@/components/common/FormContextProvider";
import { handlePopupOpen } from "@/functions/functions";
import { useState } from "react";

function FormButton({ className, children }: { className: string; children: React.ReactNode }) {
   const formContext = useFormContext();
   return (
      <button onClick={() => handlePopupOpen(formContext.setIsOpen)} className={className}>
         {children}
      </button>
   );
}
export default FormButton;
