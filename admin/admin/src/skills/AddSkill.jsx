import React, { useState } from "react";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addSkill } from "../ApiServices/ApiCallService";

const AddSkill = () => {
  const {
    register,
    handleSubmit,
    watch,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [imageError] = useState("");

  const navigate = useNavigate();

  const selectedFile = watch("image");

  const onSubmit = async (info) => {
    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("name", info.name);
      formData.append("category", info.category);
      formData.append("order", info.order);
      formData.append("proficiency", info.proficiency);

      if (info.image?.[0]) {
        formData.append("icon", info.image[0]);
      }

      const response = await addSkill(formData);

      if (response?.data?.success) {
        navigate(-1);
      }
    } catch (error) {
      console.error("Error adding skill:", error);
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
          <div className="row mb-md-3 mb-2">
            <div className="col-auto">
              <button
                className="back_btn"
                onClick={() => navigate(-1)}
              >
                <i className="fas fa-arrow-left" />
              </button>
            </div>
          </div>

          <div className="row comman_design mx-0 mb-4">
            <div className="col-12">
              <div className="row align-items-center justify-content-between py-md-4 py-3 px-md-3 px-2">
                <div className="col-md-auto">
                  <div className="headleft">
                    <h2>Add Skill</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <form
                className="row form-design px-md-3 px-2"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="col-12 form-group mb-4">
                  <div className="row border rounded-12 mx-0 px-2 py-3">

                    {/* Image Upload */}
                    <div className="form-group col-md-12 mb-4">
                      <label htmlFor="file_upload">
                        Skill Icon
                      </label>

                      <div className="upload_file">
                        <input
                          type="file"
                          id="file_upload"
                          accept="image/*"
                          className="d-none"
                          {...register("image")}
                        />

                        <label
                          className="file_upload"
                          htmlFor="file_upload"
                        >
                          {selectedFile?.[0] ? (
                            <div className="preview-wrapper">
                              <img
                                src={URL.createObjectURL(selectedFile[0])}
                                alt="preview"
                                className="img-fluid rounded shadow-sm"
                                style={{
                                  maxWidth: "150px",
                                  maxHeight: "150px",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                          ) : (
                            <div>
                              <img
                                src="/assets/img/upload.png"
                                alt="upload"
                              />

                              <span>
                                Click to upload skill icon
                              </span>
                            </div>
                          )}
                        </label>
                      </div>

                      {imageError && (
                        <small className="text-danger">
                          {imageError}
                        </small>
                      )}
                    </div>

                    {/* Skill Name */}
                    <div className="form-group col-md-6 mb-3">
                      <label>Skill Name</label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="React JS"
                        {...register("name", {
                          required: true,
                        })}
                      />
                    </div>

                    {/* Category */}
                    <div className="form-group col-md-6 mb-3">
                      <label>Category</label>

                      <select
                        className="form-control"
                        {...register("category", {
                          required: true,
                        })}
                      >
                        <option value="">
                          Select Category
                        </option>

                        <option value="frontend">
                          Frontend
                        </option>

                        <option value="backend">
                          Backend
                        </option>

                        <option value="database">
                          Database
                        </option>

                        <option value="tools">
                          Tools
                        </option>

                        <option value="others">
                          Others
                        </option>

                      </select>
                    </div>

                    {/* Order */}
                    <div className="form-group col-md-6 mb-3">
                      <label>Order</label>

                      <input
                        type="number"
                        className="form-control"
                        placeholder="1"
                        {...register("order")}
                      />
                    </div>

                    {/* Proficiency */}
                    <div className="form-group col-md-6 mb-3">
                      <label>Proficiency (%)</label>

                      <input
                        type="number"
                        min="0"
                        max="100"
                        className="form-control"
                        placeholder="90"
                        {...register("proficiency")}
                      />
                    </div>

                    <div className="form-group col-md-12 text-center mt-3">
                      <button
                        type="submit"
                        className="comman_btn d-inline-flex w-auto mx-auto px-5"
                        disabled={loading}
                      >
                        {loading ? "Saving..." : "Save"}
                      </button>
                    </div>

                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSkill;