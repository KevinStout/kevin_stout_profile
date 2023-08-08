const NavBar = () => {
  return (
    <div className="sticky top-0 bg-indigo-500 text-indigo-50 z-50">
      <header>
        <ul className="list-none flex justify-center gap-4">
          <li className="p-2">About</li>
          <li className="p-2">Projects</li>
          <li className="p-2">Resume</li>
          <li className="p-2">Contact</li>
        </ul>
      </header>
    </div>
  );
};

export default NavBar;
