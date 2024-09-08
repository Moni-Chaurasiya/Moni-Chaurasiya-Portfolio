// import { useDispatch } from "react-redux";
// import authService from "../../appwrite/auth";
// import { logout } from "../../store/authSlice";
// import { useNavigate } from "react-router-dom";

// function Logout() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const logoutHandler = () => {
//     authService
//       .logout()
//       .then(() => {
//         dispatch(logout());
//         // After logout, navigate to the login page or home
//         navigate("/home"); // Or navigate to home, e.g., navigate("/")
//       })
//       .catch((error) => {
//         console.error("Logout Failed", error);
//       });
//   };

//   return (
//     <button
//       onClick={logoutHandler}
//       className="w-full sm:w-auto px-4 py-2 bg-darkblue text-white font-semibold rounded-md border-2 border-darkblue bg-sky-500 hover:text-black hover:border-blue-700 transition-all duration-300"
//     >
//       Logout
//     </button>
//   );
// }

// export default Logout;

import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await authService.logout(); // Ensure logout happens properly
      dispatch(logout());
      navigate("/login"); // Redirect to login page after successful logout
    } catch (error) {
      console.error("Logout failed:", error.message || error);
    }
  };

  return (
    <button
      onClick={logoutHandler}
      className="w-full sm:w-auto px-4 py-2 bg-darkblue text-white font-semibold rounded-md border-2 border-darkblue bg-red-600 hover:font-yellow-500 hover:border-red-700  hover:bg-red-900 transition-all duration-300"
    >
      Logout
    </button>
  );
}

export default Logout;
