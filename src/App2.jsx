import FormLogin from "./components/Fragments/FormLogin";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

function App2() {
  return (
    <>
      <div className="flex justify-center bg-white min-h-screen items-center">
        {/* <LoginPage/> */}
        <RegisterPage />
      </div>
    </>
  );
}

export default App2;
