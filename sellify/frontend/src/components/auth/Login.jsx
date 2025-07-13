import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/auth/login", data);

      // Destructure everything we need
      const {
        role,
        token,
        isApproved,        // may be true / false / null
        rejectionReason,   // may be "" / null / string
        message,
      } = response.data;

      console.log("Login Response:", response.data); // 🔍 see exactly what we get
      console.log(message);

      localStorage.setItem("token", token);

      /* ----------- Routing decisions ----------- */
      if (role === "admin") {
        navigate("/admin/dashboard");
      } 
      // else if (role === "seller") {
      //   if (isApproved === true) {
      //     // ✅ Approved seller
      //     navigate("/dashboard/seller");
      //   } else if (
      //     rejectionReason && 
      //     rejectionReason !== "Pending approval"
      //   ) {
      //     // ❌ Rejected seller with a specific reason
      //     navigate("/seller/rejected", { state: { reason: rejectionReason } });
      //   } else {
      //     // ⏳ Waiting for approval
      //     navigate("/seller/pending");
      //   }
      // } 

      else if (role === "seller"){
       
          navigate ("/seller/dashboard")
       

      }
      
     
      
      else {
        // Normal user
        navigate("/");
      }

    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white border border-black p-8 rounded-xl w-96 shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Login</h2>

        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
          className="w-full mb-2 p-2 border border-black rounded"
        />
        {errors.email && (
          <p className="text-red-600 text-sm mb-2">
            {errors.email.message}
          </p>
        )}

        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Minimum 6 characters",
            },
          })}
          className="w-full mb-2 p-2 border border-black rounded"
        />
        {errors.password && (
          <p className="text-red-600 text-sm mb-2">
            {errors.password.message}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-black text-white py-2 mt-4 rounded hover:bg-gray-800"
        >
          Login
        </button>

        <p className="text-sm mt-4">
          New here?{" "}
          <Link to="/signup">
            <span className="underline font-semibold">Sign Up</span>
          </Link>{" "}
          before login.
        </p>
      </form>
    </div>
  );
};

export default Login;
