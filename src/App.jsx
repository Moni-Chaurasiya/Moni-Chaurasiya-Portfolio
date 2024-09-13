import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet, useNavigation } from "react-router-dom";
import "./index.css";
import background from "./assets/bg.jpg";
import LoadingBar from "react-top-loading-bar";
import { Spinner } from "./components/Loader/Spinner"; // Import Spinner component

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0); // useState for progress
  const dispatch = useDispatch();
  const navigation = useNavigation(); // For handling navigation events

  // Track page loading state based on navigation
  useEffect(() => {
    if (navigation.state === "loading") {
      setProgress(0); // Start progress when page loading starts
    } else if (navigation.state === "idle") {
      setProgress(100); // Complete progress when page loading ends
    }
  }, [navigation.state]);

  // Fetch the current user and update the authentication state
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
    return (
      <div>
        <LoadingBar height={5} color="#f11946" progress={progress} />
        {/* Center the spinner below the navbar */}
        <div
          className="flex justify-center items-center my-8"
          style={{ height: "20vh" }}
        >
          <Spinner /> {/* Spinner component */}
        </div>
      </div>
    ); // Show the Spinner while checking auth
  }

  return (
    <div className="w-full flex flex-wrap content-between bg-white">
      <LoadingBar height={5} color="#f11946" progress={progress} />
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
