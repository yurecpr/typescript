import "./styles.css";
import Input from "components/Input/Input";
import Button from "components/Button/Button";


function LoginForm() {
  return (
    <div className="loginform-wrapper">
      <p className="loginform-name">Login form</p>
      <div className="inputs-container">
        <Input
          name="login-email"
          type="email"
          placeholder="Enter your email"
          label="Email" onInputChange={function (): void {
            throw new Error("Function not implemented.");
          } }        />
        <Input
          name="login-password"
          type="password"
          placeholder="Enter your password"
          label="Password" onInputChange={function (): void {
            throw new Error("Function not implemented.");
          } }        />
      </div>
      <Button type="submit" name="Login" onButtonClick={function (): void {
        throw new Error("Function not implemented.");
      } } />
    </div>
  );
}

export default LoginForm;
