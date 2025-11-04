import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MacbookPro, MacbookProMobile } from "./screens/MacbookPro";
import { useDeviceDetection } from "./hooks/useDeviceDetection";

const App = () => {
  const { isMobile } = useDeviceDetection();
  
  return isMobile ? <MacbookProMobile /> : <MacbookPro />;
};

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
