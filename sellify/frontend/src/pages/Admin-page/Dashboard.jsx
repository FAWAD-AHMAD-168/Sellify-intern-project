import AdminNavbar from "./AdminNav";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="bg-white min-h-screen text-black">
      <AdminNavbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-black bg-amber-200 rounded-xl p-6 shadow">
            <h2 className="text-xl font-semibold mb-2">Total Users</h2>
            <p className="text-3xl">152</p> 
          </div>

          <div className="border border-black bg-gray-400 rounded-xl p-6 shadow">
            <h2 className="text-xl font-semibold mb-2">Total Products</h2>
            <p className="text-3xl">89</p> 
          </div>


           <div className="border border-black bg-gray-300 rounded-xl p-6 shadow">
            <h2 className="text-xl font-semibold mb-2">Total Sellers</h2>
            <p className="text-3xl">89</p> 
          </div>


        </div>

        <div className="mt-8">
          <p className="text-lg">
            Manage seller requests <Link to="/admin/seller-requests" className="underline text-black hover:text-gray-700"><b>here</b></Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
