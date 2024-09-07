"use client";
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react";

const ProductContext = createContext<{
   isOpen: boolean;
   setIsOpen: Dispatch<SetStateAction<boolean>>;
}>({
   isOpen: false,
   setIsOpen: () => {},
});

export const FormContextProvider = ({ children }: PropsWithChildren<{}>) => {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <ProductContext.Provider value={{ isOpen, setIsOpen }}>
         <div>{children}</div>
      </ProductContext.Provider>
   );
};

export const useFormContext = () => {
   return useContext(ProductContext);
};
