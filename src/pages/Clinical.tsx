import { useEffect } from "react";
export const Clinical = () => {
  useEffect(() => {
    const href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1,
    );
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
  <div className="text-midnight bg-dust">
    <h1>Clinical Neuropsychology</h1>
    <p>This page is currently under construction!</p>
  </div>
  )
};
