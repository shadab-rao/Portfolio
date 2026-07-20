import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import NoDataFound from "../common/NoDataFound";
import { Link } from "react-router-dom";
import moment from "moment";
import Search from "../common/Search";
import Swal from "sweetalert2";
import { Paginate } from "../common/Pagination";
import { allProjects, deleteProject, projectStatusUpdate, skillStatus } from "../ApiServices/ApiCallService";

const Projects = () => {
  const [detail, setDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(location.state?.page || 1);
  const [fullData, setFullData] = useState();

  useEffect(() => {
    handleProjects();
  }, [searchTerm, currentPage]);

  const handleProjects = async () => {
    try {
      const res  = await allProjects(searchTerm, currentPage, 10);
      if (res && !res?.error) {
        setDetails(res?.data?.data?.project || []);
        setFullData(res?.data?.data?.pagination);
      }
    } catch (error) {
      console.error("Error fetching banners:", error);
    }
  };

  const handleDeleteClick = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be revert!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      await deleteProject(id);
      handleProjects();
    }
  };




  const handlePageChange = (page) => {
    setCurrentPage(page);
    handleProjects();
  };

  const handleStatus = async (id, isActive) => {
    try {
      const res = await projectStatusUpdate(id, {isActive});
      if (res?.data?.success) {
        handleProjects();
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  

  return (
    <>
      <Header />
      <div className="admin_main">
        <Sidebar />
        <div className="admin_contentpart">
          <div className="row comman_design mx-0">
            <div className="col-12">
              <div className="row align-items-center justify-content-between py-md-4 py-3 px-md-3 px-2">
                <div className="col-md-auto mb-md-0 mb-3 d-flex align-items-center">
                  <div className="headleft">
                    <h2>Project Management</h2>
                  </div>
                  <div className="addpart_btn ms-2">
                    <Link to={"/projects/add"}>
                      <i className="fas fa-plus" /> Add Project
                    </Link>
                  </div>
                </div>
                <div className="col-md-4 d-flex align-items-center justify-content-end">
                  <Search
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                  />
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
                          <th>Image</th>
                          <th>Title</th>
                          <th>Description</th>
                          <th>Technologies</th>
                          <th>Order</th>
                          <th>Created At</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {detail?.length > 0 ? (
                          detail?.map((banner, index) => (
                            <tr key={banner._id}>
                              <td>{index + 1}</td>
                              <td>
                                <div className="logo_table">
                                  <img
                                     src={`https://portfolio-backend-30wi.onrender.com/uploads/${banner.image}`}
                                    alt={banner?.title}
                                    style={{
                                      width: "80px",
                                      height: "50px",
                                      objectFit: "cover",
                                    }}
                                  />
                                </div>
                              </td>
                              <td className="text-capitalize">
                                {banner?.title || "N/A"}
                              </td>
                              <td className="text-capitalize">
                                {banner?.technologies?.map((item) => item).join(", ") || "N/A" }
                              </td>
                              <td className="text-capitalize">
                                {banner?.description || "N/A"}
                              </td>
                              <td className="text-capitalize">
                                {banner?.order || 0}
                              </td>

                              <td>
                                {moment(banner?.createdAt).format(
                                  "DD-MMM-YYYY",
                                )}
                              </td>
                              <td>
                                <div className="check_toggle">
                                  <input
                                    type="checkbox"
                                    name={`status-${banner?._id}`}
                                    id={`status-${banner?._id}`}
                                    className="d-none"
                                    onChange={() => handleStatus(banner?._id,!banner?.isActive)}
                                    checked={banner?.isActive}
                                  />
                                  <label htmlFor={`status-${banner?._id}`} />
                                </div>
                              </td>
                              <td>
                                <div className="d-flex">
                                  <Link
                                    to={`/projects/edit/${banner?._id}`}
                                    className="Table_btn me-2"
                                  >
                                    <i className="fa fa-pencil" />
                                  </Link>
                                  <a
                                    href="javascript:;"
                                    className="Table_btn"
                                    onClick={() =>
                                      handleDeleteClick(banner?._id)
                                    }
                                  >
                                    <i className="fa fa-trash" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <NoDataFound />
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-3 mb-3">
                <Paginate
                  currentPage={currentPage}
                  totalPages={fullData?.totalPages}
                  handlePageChange={handlePageChange}
                  count={fullData?.totalRecords}
                  pageSize={fullData?.limit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
