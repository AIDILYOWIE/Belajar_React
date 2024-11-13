import InputForm from "../Elements/input";
import Button from "../Elements/Button/Button";

const FormLogin = () => {
  return (
    <>
      <form action="" className="mt-5">
        <InputForm htmlFor="email" type="email" placeholder="input your email" name="email" label="Email"/>
        <InputForm htmlFor="password" type="password" placeholder="input your password" name="password" label="Password"/>
        <Button variant="bg-blue-900 w-full ">Login</Button>
      </form>
    </>
  );
};

export default FormLogin;
