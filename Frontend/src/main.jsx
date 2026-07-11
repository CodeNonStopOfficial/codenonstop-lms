import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { appStore } from "./app/store";
import { Toaster } from "./components/ui/sonner";
import { useLoadUserQuery } from "./features/api/authApi";
import LoadingPage from "./components/services/LoadingPage";

const CustomLoading = ({children})=>{
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

   const {isLoading} = useLoadUserQuery();
   
   if(loading || isLoading ) {
       return  (
         <>
          <LoadingPage/>
         </>
       )
   }
   return children;
  
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <CustomLoading>
        <App />
        <Toaster/>
      </CustomLoading>
    </Provider>
  </StrictMode>,
);
