import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import api from "../../services/api";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
  try {
    await api.post('/auth/register', data);
    alert("Signup successful! Please log in.");
    navigate("/login"); // Redirect to login
  } catch (err) {
    alert(err.response?.data?.message || "Signup failed");
  }
};


  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white border border-black p-8 rounded-xl w-96 shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Sign Up
        </h2>

        <input
          className="w-full mb-2 p-2 border border-black rounded"
          type="text"
          placeholder="Username"
          {...register("fullname", {
            required: "Username is required",
            minLength: {
              value: 6,
              message: "Name must be at least 6 characters long",
            },
            pattern: {
              value: /^[A-Z][a-zA-Z]*(\s[A-Z][a-zA-Z]*)*$/,
              message:
                "Each name must start with a capital letter and contain only letters",
            },
          })}
        />

        {errors.fullname && (
          <p className="text-red-500 text-sm">{errors.fullname.message}</p>
        )}

        <input
          type="text"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
          className="w-full mb-2 p-2 border border-black rounded"
        />

        {errors.email && (
          <p className="text-red-600 text-sm mb-2">{errors.email.message}</p>
        )}

        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Min 6 characters",
            },
          })}
          className="w-full mb-2 p-2 border border-black rounded"
        />
        {errors.password && (
          <p className="text-red-600 text-sm mb-2">{errors.password.message}</p>
        )}

        <select
          {...register("role", { required: true })}
          className="w-full mb-20 p-2 border border-black rounded"
        >
          <option value="">Select role</option>

          <option value="user">User</option>
          <option value="seller">Seller</option>
                    

        </select>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Sign Up
        </button>

        <p className="text-sm mt-4">
          <Link to="/login">
            
            <span className="underline font-semibold">Login here</span>
          </Link>
          , if you have signed in before.
        </p>
      </form>
    </div>
  );
};

export default Signup;
