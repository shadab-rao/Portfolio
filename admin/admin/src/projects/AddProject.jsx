import React, { useState } from "react";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createProject } from "../ApiServices/ApiCallService";

const AddProject = () => {
  const { register, handleSubmit, watch } = useForm();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const selectedFile = watch("image");

  const onSubmit = async (info) => {
    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("title", info.title);
      formData.append("description", info.description);
      formData.append("technologies", info.technologies);
      formData.append("githubLink", info.githubLink);
      formData.append("liveLink", info.liveLink);
      formData.append("link", info.link);

      if (info.image?.[0]) {
        formData.append("image", info.image[0]);
      }

      const { data } = await createProject(formData);

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
              <h2>Add Project</h2>
            </div>

            <div className="col-12">
              <form
                className="row form-design px-md-3 px-2"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* Image */}
                <div className="form-group col-md-12 mb-4">
                  <label htmlFor="image">Project Image</label>

                  <div className="upload_file">
                    <input
                      type="file"
                      id="image"
                      accept="image/*"
                      className="d-none"
                      {...register("image")}
                    />

                    <label htmlFor="image" className="file_upload">
                      {selectedFile?.[0] ? (
                        <img
                          src={URL.createObjectURL(selectedFile[0])}
                          alt=""
                          style={{
                            width: 180,
                            height: 150,
                            objectFit: "cover",
                            borderRadius: 8,
                          }}
                        />
                      ) : (
                        <div>
                          <img src="/assets/img/upload.png" alt="" />
                          <span>Click to upload image</span>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                {/* Title */}
                <div className="form-group col-md-6 mb-3">
                  <label>Project Title</label>

                  <input
                    className="form-control"
                    {...register("title", { required: true })}
                  />
                </div>

                {/* Technologies */}
                <div className="form-group col-md-6 mb-3">
                  <label>Technologies</label>

                  <input
                    className="form-control"
                    placeholder="React, Node.js, MongoDB"
                    {...register("technologies", { required: true })}
                  />
                </div>

                {/* Github */}
                <div className="form-group col-md-6 mb-3">
                  <label>Github Link</label>

                  <input
                    className="form-control"
                    {...register("githubLink", { required: true })}
                  />
                </div>

                {/* Live */}
                <div className="form-group col-md-6 mb-3">
                  <label>Live Link</label>

                  <input
                    className="form-control"
                    {...register("liveLink", { required: true })}
                  />
                </div>

                {/* Extra Link */}
                <div className="form-group col-md-12 mb-3">
                  <label>Project Link</label>

                  <input
                    className="form-control"
                    {...register("link")}
                  />
                </div>

                {/* Description */}
                <div className="form-group col-md-12 mb-3">
                  <label>Description</label>

                  <textarea
                    rows="5"
                    className="form-control"
                    {...register("description", { required: true })}
                  />
                </div>

                <div className="form-group col-md-12 text-center mt-3">
                  <button
                    type="submit"
                    className="comman_btn px-5"
                    disabled={loading}
                  >
                    {loading ? "Saving..." : "Save Project"}
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

export default AddProject;