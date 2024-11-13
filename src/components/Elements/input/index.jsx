import Label from "./label";
import Input from "./Input";

const InputForm = (props) => {
  const { label, name, type, placeholder } = props;
  return (
    <>
      <div className="mb-3">
        <Label htmlFor={name}>{label}</Label>
        <Input type={type} placeholder={placeholder} name={name}></Input>
      </div>
    </>
  );
};

export default InputForm;
