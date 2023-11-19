import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <section>
      <h1>Login To Dashboard</h1>
      <p>Please provide your information to login.</p>
      <fieldset>
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@mail.com"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="password">Password :</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="********"
        />
      </fieldset>
      <button onClick={() => navigate("/dashboard")}>Log in</button>
      <p>
        Forgot password? <a href="/reset">reset</a>.
      </p>
    </section>
  );
}

export default Login;
