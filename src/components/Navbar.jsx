import { useNavigate } from "react-router-dom";
import logoDigzen from "../assets/images/logo_3.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex h-[4rem] justify-between bg-white items-center shadow-lg z-50 sticky top-0">
        <div className="">
          <div className="md:hidden">
            <h2 className="w-[58px] md:hidden"></h2>
          </div>
          {/*  */}
          <div className="hidden md:flex pl-9">
            <img src={logoDigzen} alt="" className="h-9" />
            <p className="text-lg font-bold p-1 text-indigo">Digital Citizen</p>
          </div>
        </div>
        <div className="flex md:hidden">
          <img src={logoDigzen} alt="" className="h-9" />
          <p className="text-lg font-bold p-1 text-indigo">Digital Citizen</p>
        </div>
        <div className="hidden md:block">
          <ul className="menu menu-horizontal">
            <li>
              <a onClick={() => navigate("/")}>Beranda</a>
            </li>
            <li>
              <details>
                <summary>Pengajuan Surat</summary>
                <ul>
                  <li>
                    <details>
                      <summary>Input Pengajuan</summary>
                      <ul>
                        <li>
                          <a onClick={() => navigate("/formktp")}>KTP</a>
                        </li>
                        <li>
                          <a onClick={() => navigate("/formdomisili")}>
                            Surat Domisili
                          </a>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <a onClick={() => navigate("/statuspengajuan")}>
                      Status Pengajuan
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        {/*  */}
        <div className="dropdown dropdown-end hidden md:block pr-9">
          <i className="px-3">Username</i>
          <label tabIndex={0} className="">
            <div className="avatar placeholder btn btn-circle m-1">
              <div className=" bg-neutral text-neutral-content rounded-full w-12">
                <span>MX</span>
              </div>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a
                className="justify-between"
                onClick={() => navigate("/profile")}
              >
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={() => navigate("/login")}>Logout</a>
            </li>
          </ul>
        </div>{" "}
        <div className=" md:hidden">
          <div className=" drawer drawer-end md:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className=" drawer-content ">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="btn btn-ghost drawer-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className=" inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="z-50 drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className=" menu menu-vertical gap-4 p-6 w-58 min-h-full bg-base-200">
                {/* Sidebar content here */}
                <li>
                  <details className="w-auto ">
                    <summary className="p-2">
                      <div className="avatar placeholder">
                        <div className=" bg-neutral text-neutral-content rounded-full w-12">
                          <span>MX</span>
                        </div>
                      </div>
                      <i>Username</i>
                    </summary>
                    <ul>
                      <li>
                        <a className="p-2 hover:border border-indigo">
                          Profile
                        </a>
                      </li>
                      <li>
                        <a className="p-2 hover:border border-indigo">Logout</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <ul className="menu bg-base-200 w-56 rounded-box">
                  <li>
                    <a onClick={() => navigate("/")}>Beranda</a>
                  </li>
                  <li>
                    <details>
                      <summary>Input Pengajuan</summary>
                      <ul>
                        <li>
                          <a onClick={() => navigate("/formktp")}>KTP</a>
                        </li>
                        <li>
                          <a onClick={() => navigate("/formdomisili")}>
                            Surat Domisili
                          </a>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <a onClick={() => navigate("/statuspengajuan")}>
                      Status Pengajuan
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* oldnav */}
    </>
  );
};

export default Navbar;
