import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import NoDataFound from "../common/NoDataFound";
import moment from "moment";
import {
  dashboardCount,
  getProfile,
  getProjects,
} from "../ApiServices/ApiCallService";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";

const Dashboard = () => {
  const [countData, setCountData] = useState("");
  const [projects, setProjects] = useState([]);
  const [orderData, setOrderData] = useState([]);
  const [adminProfile, setAdminProfile] = useState();

  useEffect(() => {
    handleDashAnalytic();
    handleProjects();
    profile();
  }, []);

  const handleDashAnalytic = async () => {
    const response = await dashboardCount();
    setCountData(response?.data?.data);
  };

  const handleProjects = async () => {
    const response = await getProjects();

    setProjects(response?.data?.data?.project || []);
  };

  const profile = async () => {
    const response = await getProfile();
    setAdminProfile(response?.data?.data);
  };

  return (
    <>
      <Header />
      <div className="admin_main">
        <Sidebar />
        <div className="admin_contentpart">
          <div className="row">
            <div className="col-md-6">
              <div className="dashboarddesign position-relative">
                <h2 className="text-capitalize">
                  {adminProfile?.name || "N/A"}
                </h2>
                <p>Here whats happing in your account today</p>
                <Link className="viewprofilee" to={"/profile"}>
                  View Profile
                </Link>
                <img src="assets/img/cartoon.svg" alt />
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <Link to={"/user-management"} className="staticss_box shadow">
                    <span>Active Projects</span>
                    <div className="static_data">
                      <strong>{countData?.projects || 0}</strong>
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 mb-4">
                  <Link
                    to={"/product-management"}
                    className="staticss_box shadow"
                  >
                    <span>Total Education</span>
                    <div className="static_data">
                      <strong>{countData?.education || 0}</strong>
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 mb-4">
                  <Link to={"/order"} className="staticss_box shadow">
                    <span>Total Experience</span>
                    <div className="static_data">
                      <strong>{countData?.experience || 0}</strong>
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 mb-4">
                  <Link to={"/order"} className="staticss_box shadow">
                    <span>Total Skills</span>
                    <div className="static_data">
                      <strong>{countData?.skills || 0}</strong>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row comman_design mx-0">
            <div className="col-12">
              <div className="row align-items-center justify-content-between py-md-4 py-3 px-md-3 px-2">
                <div className="col-md-auto mb-md-0 mb-3">
                  <div className="headleft">
                    <h2>Recent Projects</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row comman_table pt-md-3 pb-md-4 pb-3 px-md-3 px-2">
                <div className="col-12">
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>S.No.</th>
                          <th>Title</th>
                          <th>Technologies</th>
                          <th>Order</th>
                          <th>Status</th>
                          <th>Created At</th>
                        </tr>
                      </thead>
                      <tbody>
                        {projects?.length > 0 ? (
                          projects?.map((project, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{project?.title || "N/A"}</td>
                              <td>
                                {project?.technologies
                                  ?.map((tech) => tech)
                                  .join(", ") || "N/A"}
                              </td>
                              <td>{project?.order || 0}</td>
                              <td>
                                {project?.isActive ? "Active" : "Inactive"}
                              </td>
                              <td>{moment(project?.createdAt).format("ll")}</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="12" className="text-center">
                              No Orders Found
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
