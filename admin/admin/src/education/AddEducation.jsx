import React, { useState } from "react";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createEducation } from "../ApiServices/ApiCallService";

const AddEducation = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (info) => {
    setLoading(true);

    try {
      const { data } = await createEducation(info);

      if (data.success) {
        reset();
        navigate(-1);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <div className="admin_main">
        <Sidebar />

        <div className="admin_contentpart">
          <div className="row mb-3">
            <div className="col-auto">
              <button className="back_btn" onClick={() => navigate(-1)}>
                <i className="fas fa-arrow-left"></i>
              </button>
            </div>
          </div>

          <div className="row comman_design mx-0">
            <div className="col-12 py-4">
              <h2>Add Education</h2>
            </div>

            <div className="col-12">
              <form
                className="row form-design"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="form-group col-md-6 mb-3">
                  <label>Degree</label>
                  <input
                    className="form-control"
                    {...register("degree", { required: true })}
                  />
                </div>

                <div className="form-group col-md-6 mb-3">
                  <label>Institution</label>
                  <input
                    className="form-control"
                    {...register("institution", { required: true })}
                  />
                </div>

                <div className="form-group col-md-6 mb-3">
                  <label>Start Date</label>
                  <input
                    type="date"
                    className="form-control"
                    {...register("startDate", { required: true })}
                  />
                </div>

                <div className="form-group col-md-6 mb-3">
                  <label>End Date</label>
                  <input
                    type="date"
                    className="form-control"
                    {...register("endDate", { required: true })}
                  />
                </div>

                <div className="form-group col-md-12 text-center mt-4">
                  <button
                    className="comman_btn px-5"
                    disabled={loading}
                  >
                    {loading ? "Saving..." : "Save"}
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default AddEducation;