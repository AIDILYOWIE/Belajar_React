import FormLogin from "../Fragments/FormLogin";

const AuthLayout = (props) => {
    const {children, title, subTitle} = props;
  return (
    <>
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-900">{title}</h1>
        <p className="font-medium text-slate-500">{subTitle}</p>
        {children}
      </div>
    </>
  );
};

export default AuthLayout
