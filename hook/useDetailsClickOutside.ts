
import { useEffect } from "react";

export function useDetailsClickOutside(id:string) {
    // Listen click event
    useEffect(() => {
      function handleClickOutside(event: any) {
        const details = document.getElementById(id);
        const targetElement = event.target;
  
        if (details && !details.contains(targetElement)) {
          details.removeAttribute("open");
        }
      }
  
      document.addEventListener("click", handleClickOutside);
  
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, []);
  
}