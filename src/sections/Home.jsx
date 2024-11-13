import Navbar from "../components/Navbar";

const Home = ({title}) => {
  return (
    <>

      <h1>{title ? title : "Welcome To Section"}</h1>
    </>
  );
};

export default Home;
