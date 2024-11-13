import InputForm from "../Elements/input";
import Button from "../Elements/Button/Button";

const FormRegister = () => {
  return (
    <>
      <form action="" className="mt-5">
        <InputForm htmlFor="email" type="email" placeholder="input your email" name="email" label="Email" />
        <InputForm htmlFor="username" type="text" placeholder="input your username" name="username" label="Username" />
        <InputForm htmlFor="phone" type="phone" placeholder="input your phone" name="phone" label="Phone" />
        <InputForm htmlFor="password" type="password" placeholder="input your password" name="password" label="Password" />
        <Button variant="bg-blue-900 w-full ">Create</Button>
      </form>
    </>
  );
};

export default FormRegister;
