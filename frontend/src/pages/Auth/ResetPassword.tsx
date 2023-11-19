function ResetPassword() {
  return (
    <section>
      <h1>Reset Password</h1>
      <p>Please provide your information below to reset.</p>
      <fieldset>
        <label htmlFor="email">Email Address: </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@mail.com"
        />
      </fieldset>
      <button>Send reset email</button>
      <p>
        Remember password? <a href="/">back to login</a>.
      </p>
    </section>
  );
}

export default ResetPassword;
