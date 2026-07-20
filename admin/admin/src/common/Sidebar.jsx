import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Sidebar = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const [showAccounts, setShowAccounts] = useState(false);


  const { pathname } = location;


  const isActive = (path) =>
    pathname.startsWith(path) ? "active" : "";


  useEffect(() => {

    if (pathname.startsWith("/my-profile")) {
      setShowAccounts(true);
    }

  }, [pathname]);


  const handleLogout = () => {

    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Logout",
    }).then((result) => {

      if (result.isConfirmed) {

        localStorage.removeItem("portfolio-admin");
        localStorage.removeItem("token-adminPortfolio");

        navigate("/");

      }

    });

  };


  return (

    <div className={`admin_siderbarr`}>

      <ul className="list-style-none">


        {/* Dashboard */}
        <li>
          <Link
            className={isActive("/dashboard")}
            to="/dashboard"
          >
            <span className="fas fa-tachometer-alt" />
            Dashboard
          </Link>
        </li>





        {/* Skills */}
        <li>
          <Link
            className={isActive("/skills")}
            to="/skills"
          >
            <span className="fas fa-code" />
            Skills
          </Link>
        </li>



        {/* Projects */}
        <li>
          <Link
            className={isActive("/projects")}
            to="/projects"
          >
            <span className="fas fa-project-diagram" />
            Projects
          </Link>
        </li>



        {/* Experience */}
        <li>
          <Link
            className={isActive("/experience")}
            to="/experience"
          >
            <span className="fas fa-briefcase" />
            Experience
          </Link>
        </li>



        {/* Education */}
        <li>
          <Link
            className={isActive("/education")}
            to="/education"
          >
            <span className="fas fa-graduation-cap" />
            Education
          </Link>
        </li>



        {/* Contact */}
        <li>
          <Link
            className={isActive("/contact-us")}
            to="/contact-us"
          >
            <span className="fas fa-envelope" />
            Contact Messages
          </Link>
        </li>



        {/* My Account */}
        <li className={showAccounts ? "open" : ""}>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setShowAccounts(!showAccounts);
            }}
          >

            <span className="fas fa-user-circle" />
            My Account

            <span className="fas fa-caret-down float-end" />

          </a>


          <ul className={showAccounts ? "show" : ""}>

            <li>
              <Link
                className={isActive("/my-profile")}
                to="/my-profile"
              >
                <span className="fas fa-user" />
                My Profile
              </Link>
            </li>

          </ul>

        </li>



        {/* Logout */}
        <li>

          <button
            onClick={handleLogout}
            className="ms-4 mt-2"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "white",
              padding: 0,
            }}
          >

            <span className="fas fa-sign-out-alt" />
            Logout

          </button>

        </li>


      </ul>

    </div>

  );

};


export default Sidebar;