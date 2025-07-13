import AdminNavbar from "./AdminNav";

const confirmed = [
  { id: 1, name: "Approved Seller A" },
  { id: 2, name: "Approved Seller B" },
];

const ConfirmedSellers = () => {
  return (
    <div className="bg-white min-h-screen text-black">
      <AdminNavbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Confirmed Sellers</h1>

        <ul className="space-y-2">
          {confirmed.map((seller) => (
            <li key={seller.id} className="border border-black p-3 rounded">
              {seller.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ConfirmedSellers;
