"use client";
import React, { useState } from "react";
import classes from "./s.module.scss";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const contacts = {
   inst: "#",
   telegram: "#",
   phone: "+998 99 999 99",
};

export default function CallButton() {
   const [open, setOpen] = useState("none");

   const handleChange = () => {
      if (open === "opened") {
         setOpen("closed");
      } else {
         setOpen("opened");
      }
   };
   return (
      <div className={classes.button_wrapper}>
         <div className={`${classes.buttons} ${classes[open]}`}>
            <a href={contacts.inst}>
               <FaInstagram className={classes.button} />
            </a>
            <a href={contacts.telegram}>
               <FaTelegramPlane className={classes.button} />
            </a>
            <a href={"tel:" + contacts.phone}>
               <IoCallSharp className={classes.button} />
            </a>
         </div>
         {open === "opened" ? (
            <IoMdClose className={classes.button} onClick={handleChange} />
         ) : (
            <IoCallSharp className={classes.button} onClick={handleChange} />
         )}
      </div>
   );
}
