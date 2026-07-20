import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getProfile } from "../ApiServices/ApiCallService";

const Header = () => {
  const [adminProfile, setAdminProfile] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    profile();
  }, []);

  const profile = async () => {
    const response = await getProfile();
    setAdminProfile(response?.data?.data);
  };

  const handleLogout = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("bianca-admin");
        localStorage.removeItem("token-bianca");

        Swal.fire({
          toast: true,
          icon: "success",
          position: "top-end",
          title: "Logged Successfully!",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
          customClass: {
            title: "swal-title-color",
          },
        });

        navigate("/");
      }
    });
  };

  return (
    <div className="admin_header">
      <div className="row justify-content-between align-items-center">
        <div className="col-auto text-center">
          <Link className="logo" to="/dashboard">
            <img src="/assets/img/logo.png" alt="Logo" />
          </Link>
        </div>
        <div className="col-auto">
          <div className="row">
            <div className="col-auto pe-0">
              <Link className="notificationhead" to="/notifications">
                <i className="fas fa-bell" />
              </Link>
            </div>
            <div className="col-auto d-flex align-items-center">
              <div className="dropdown Profile_dropdown">
                <button
                  className="btn btn-secondary"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="dropdownuserpic">
                    <img
                      src={
                        adminProfile?.profileImage || "/assets/img/blank-user.png"
                      }
                      alt="Profile"
                    />
                  </div>
                  <span>{adminProfile?.name || "User Name"}</span>
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/settings">
                      Setting
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={() => handleLogout()}
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <div
                className="toggle_btns"
                onClick={() => dispatch(toggleSidebar())}
              >
                <i className="fas fa-bars" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
