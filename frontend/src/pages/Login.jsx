import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Intern Portal Login</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => navigate("/dashboard")}
      >
        Login (Dummy)
      </button>
    </div>
  );
}
