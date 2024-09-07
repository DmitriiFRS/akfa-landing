export function handlePopupOpen(setIsOpen: (isOpen: boolean) => void) {
   const scrollWidth = window.innerWidth - document.body.clientWidth;
   setIsOpen(true);
   document.body.style.overflow = "hidden";
   document.body.style.paddingRight = `${scrollWidth}px`;
}
