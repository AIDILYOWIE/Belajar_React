import AuthLayout from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";

const RegisterPage = () => {
    return(
        <>
            <AuthLayout title='Register' subTitle="Create your account">
                <FormRegister/>
            </AuthLayout>
        </>
    )
}

export default RegisterPage