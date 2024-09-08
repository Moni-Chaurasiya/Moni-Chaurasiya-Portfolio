import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "./index.css";
import background from "./assets/bg.jpg";
// function App() {
//   const [loading, setLoading] = useState(true);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     authService
//       .getCurrentUser()
//       .then((userData) => {
//         if (userData) {
//           dispatch(login({ userData }));
//         } else {
//           dispatch(logout());
//         }
//       })
//       .finally(() => setLoading(false));
//   }, [dispatch]);
//   return !loading ? (
//     <div className="w-full flex flex-wrap content-between bg-white">
//       <div className="w-full block">
//         <Header />
//         <main className="mt-24 bg-custom-light-gray">
//           <Outlet />
//         </main>
//         <Footer />
//       </div>
//     </div>
//   ) : null;
// }
// export default App;
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  // Handle loading state gracefully
  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while checking auth
  }

  return (
    <div className="w-full flex flex-wrap content-between bg-white">
      <div className="w-full block">
        <Header />
        <main
          className="mt-16 bg-blue-900"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            width: "100%",
          }}
        >
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
