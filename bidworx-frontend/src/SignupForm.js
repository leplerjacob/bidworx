export default function SignupForm() {
  return `
    <div class="signup-form">
      <div class="signup-title">
        <h2>Sign Up Form</h2>
      </div>
      <div class="form">
        <form action="#" class="form-register">
          <label for="name">Name</label>
          <input type="text" name="name" class="name" />
          <label for="username">Username</label>
          <input type="text" name="username" class="username" />
          <button type="submit" >Submit</button>
        </form>
      </div>
  </div>`;
}
