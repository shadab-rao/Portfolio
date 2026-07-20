import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { projectById, updateProject } from "../ApiServices/ApiCallService";

const IMAGE_URL = import.meta.env.VITE_APIENDPOINT + "/uploads/";

const EditProjects = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { register, handleSubmit, setValue } = useForm();

  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    getProjectDetails();
  }, []);

  const getProjectDetails = async () => {
    try {
      const { data } = await projectById(id);

      const project = data.data;

      setValue("title", project.title);
      setValue("description", project.description);
      setValue("technologies", project.technologies?.join(", "));
      setValue("order", project.order);
      setValue("githubLink", project.githubLink);
      setValue("liveLink", project.liveLink);
      setValue("link", project.link);

      if (project.image) {
        setPreview(`${IMAGE_URL}${project.image}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (info) => {
    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("title", info.title);
      formData.append("description", info.description);
      formData.append("technologies", info.technologies);
      formData.append("order", info.order);
      formData.append("githubLink", info.githubLink);
      formData.append("liveLink", info.liveLink);
      formData.append("link", info.link);

      if (selectedFile) {
        formData.append("image", selectedFile);
      }

      const { data } = await updateProject(id, formData);

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
              <h2>Edit Project</h2>
            </div>

            <div className="col-12">
              <form
                className="row form-design"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* Image */}

                <div className="form-group col-md-12 mb-4">
                  <div className="userdetails_img">
                    <img
                      src={preview || "https://via.placeholder.com/150"}
                      alt="project"
                      style={{
                        width: 150,
                        height: 150,
                        objectFit: "cover",
                        border: "1px solid #ccc",
                      }}
                    />

                    <input
                      type="file"
                      // className="d-none"
                      id="icon"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files[0];

                        if (!file) return;

                        setSelectedFile(file);
                        setPreview(URL.createObjectURL(file));
                      }}
                    />

                    <label htmlFor="icon" className="editicon">
                      <i className="fas fa-edit"></i>
                    </label>
                  </div>
                </div>

                {/* Title */}

                <div className="form-group col-md-6 mb-3">
                  <label>Project Title</label>

                  <input className="form-control" {...register("title")} />
                </div>

                {/* Technologies */}

                <div className="form-group col-md-6 mb-3">
                  <label>Technologies</label>

                  <input
                    className="form-control"
                    placeholder="React, Node, MongoDB"
                    {...register("technologies")}
                  />
                </div>

                {/* Github */}

                <div className="form-group col-md-6 mb-3">
                  <label>Order</label>

                  <input className="form-control" {...register("order")} />
                </div>
                <div className="form-group col-md-6 mb-3">
                  <label>Github Link</label>

                  <input className="form-control" {...register("githubLink")} />
                </div>

                {/* Live */}

                <div className="form-group col-md-6 mb-3">
                  <label>Live Link</label>

                  <input className="form-control" {...register("liveLink")} />
                </div>

                {/* Link */}

                <div className="form-group col-md-6 mb-3">
                  <label>Project Link</label>

                  <input className="form-control" {...register("link")} />
                </div>

                {/* Description */}

                <div className="form-group col-md-12 mb-3">
                  <label>Description</label>

                  <textarea
                    rows="5"
                    className="form-control"
                    {...register("description")}
                  />
                </div>

                <div className="form-group col-md-12 text-center mt-4">
                  <button className="comman_btn px-5" disabled={loading}>
                    {loading ? "Saving..." : "Save Changes"}
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

export default EditProjects;
