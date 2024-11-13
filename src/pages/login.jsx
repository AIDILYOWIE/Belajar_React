import AuthLayout from "../components/Layouts/AuthLayouts"
import FormLogin from "../components/Fragments/FormLogin"

const LoginPage = () => {
    return (
        <>
            <AuthLayout title="Login" subTitle="Please enter your email & password">
                <FormLogin></FormLogin>
            </AuthLayout>
        </>
    )
}

export default LoginPage