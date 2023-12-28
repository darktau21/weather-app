import Search from "../search/Search";

export default function Header({ setData }) {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-white">Header</a>
        <Search setData={setData} />
      </div>
    </nav>
  );
}
