import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import NoDataFound from "../common/NoDataFound";
import { useLocation } from "react-router-dom";
import moment from "moment";
import Swal from "sweetalert2";
import Search from "../common/Search";
import { Paginate } from "../common/Pagination";
import { contactUsList, deleteContact } from "../ApiServices/ApiCallService";


const Contact = () => {
  const location = useLocation();

  const [details, setDetails] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(location.state?.page || 1);

  const [pagination, setPagination] = useState({});

  useEffect(() => {
    getContacts();
  }, [searchTerm, currentPage]);

  const getContacts = async () => {
    try {
      const res = await contactUsList(searchTerm, currentPage, 10);

      if (res && !res.error) {
        setDetails(res?.data?.data?.contacts || []);

        setPagination(res?.data?.data?.pagination);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",

      text: "This action cannot be reverted!",

      icon: "warning",

      showCancelButton: true,

      confirmButtonColor: "#d33",

      confirmButtonText: "Yes, Delete",
    });

    if (result.isConfirmed) {
      await deleteContact(id);

      getContacts();
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
                <div className="col-md-auto">
                  <div className="headleft">
                    <h2>Contact Management</h2>
                  </div>
                </div>

                <div className="col-md-4">
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
                          <th>Name</th>
                          <th>Email</th>
                          <th>Subject</th>
                          <th>Message</th>
                          <th>Created At</th>
                          <th>Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        {details.length > 0 ? (
                          details.map((item, index) => (
                            <tr key={item._id}>
                              <td>{(currentPage - 1) * 10 + index + 1}</td>

                              <td>{item.name}</td>

                              <td>{item.email}</td>

                              <td>{item.subject}</td>

                              <td>{item.message}</td>

                              <td>
                                {moment(item.createdAt).format("DD MMM YYYY")}
                              </td>

                              <td>
                                <button
                                  className="Table_btn"
                                  onClick={() => handleDelete(item._id)}
                                >
                                  <i className="fa fa-trash"></i>
                                </button>
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

              <div className="mt-3 mb-3">
                <Paginate
                  currentPage={currentPage}
                  totalPages={pagination?.totalPages}
                  handlePageChange={handlePageChange}
                  count={pagination?.totalRecords}
                  pageSize={pagination?.limit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
