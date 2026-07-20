import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import {
    experienceById,
  updateExperience,
} from "../ApiServices/ApiCallService";

const EditExperience = () => {
  const { register, handleSubmit, reset } = useForm();

  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    try {
      const { data } = await experienceById(id);

      if (data.success) {
        reset(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (info) => {
    setLoading(true);

    try {
      const { data } = await updateExperience(id, info);

      if (data.success) {
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
              <h2>Edit Experience</h2>
            </div>

            <div className="col-12">
              <form
                className="row form-design"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="form-group col-md-6 mb-3">
                  <label>Company</label>

                  <input className="form-control" {...register("company")} />
                </div>

                <div className="form-group col-md-6 mb-3">
                  <label>Role</label>

                  <input className="form-control" {...register("role")} />
                </div>

                <div className="form-group col-md-6 mb-3">
                  <label>Location</label>

                  <input className="form-control" {...register("location")} />
                </div>

                <div className="form-group col-md-6 mb-3">
                  <label>Start Date</label>

                  <input
                    type="date"
                    className="form-control"
                    {...register("startDate")}
                  />
                </div>

                <div className="form-group col-md-6 mb-3">
                  <label>End Date</label>

                  <input
                    type="date"
                    className="form-control"
                    {...register("endDate")}
                  />
                </div>

                <div className="form-group col-md-12 mb-3">
                  <label>Description</label>

                  <textarea
                    className="form-control"
                    rows="5"
                    {...register("description")}
                  />
                </div>

                <div className="form-group col-md-12 text-center mt-4">
                  <button className="comman_btn px-5" disabled={loading}>
                    {loading ? "Updating..." : "Update"}
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

export default EditExperience;
