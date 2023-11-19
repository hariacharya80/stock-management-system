import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <section>
      Welcome to Dashboard <button onClick={() => navigate("/")}>Logout</button>
    </section>
  );
}

export default Dashboard;
