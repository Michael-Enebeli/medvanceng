import { useEffect } from "react";

const HideNav = () => {
  useEffect(() => {
    const nav = document.getElementById("homenav");
    const aside = document.getElementById("sidebar");

    if (nav) nav.style.display = "none";
    if (aside) aside.style.display = "none";

    return () => {
      if (nav) nav.style.display = "";
      if (aside) aside.style.display = "";
    };
  }, []);

  return null; // Doesn't render anything
};

export default HideNav;
