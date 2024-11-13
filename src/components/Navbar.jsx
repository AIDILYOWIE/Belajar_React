import "../App.css";

function Navbar() {
  return (
    <>
      <nav className=" flex justify-evenly p-5">
        <div className="logo">
          <h1 className=" font-semibold text-5xl">Store</h1>
        </div>
        <ul className="flex items-center">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="../sections/About">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
