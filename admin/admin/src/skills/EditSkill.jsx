import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { skillById, updateSkill } from "../ApiServices/ApiCallService";

const IMAGE_URL = import.meta.env.VITE_APIENDPOINT + "/uploads/";

const EditSkill = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { register, handleSubmit, setValue } = useForm();

  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    getSkillDetails();
  }, []);

  const getSkillDetails = async () => {
    try {
      const { data } = await skillById(id);

      const skill = data.data;

      setValue("name", skill.name);
      setValue("category", skill.category);
      setValue("order", skill.order);
      setValue("proficiency", skill.proficiency);

      if (skill.icon) {
        setPreview(`${IMAGE_URL}${skill.icon}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (info) => {
    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("name", info.name);
      formData.append("category", info.category);
      formData.append("order", info.order);
      formData.append("proficiency", info.proficiency);

      if (selectedFile) {
        formData.append("icon", selectedFile);
      }

      const { data } = await updateSkill(formData, id);

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
              <h2>Edit Skill</h2>
            </div>

            <div className="col-12">
              <form
                className="row form-design"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="form-group col-md-12 mb-4">
                  <div
                    className="userdetails_img"
                  >
                    <img
                      src={preview || "https://via.placeholder.com/150"}
                      alt="Skill"
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

                <div className="form-group col-md-6">
                  <label>Skill Name</label>

                  <input className="form-control" {...register("name")} />
                </div>

                <div className="form-group col-md-6">
                  <label>Category</label>

                  <select className="form-control" {...register("category")}>
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                    <option value="database">Database</option>
                    <option value="tools">Tools</option>
                    <option value="others">Other</option>
                  </select>
                </div>

                <div className="form-group col-md-6 mt-3">
                  <label>Order</label>

                  <input
                    type="number"
                    className="form-control"
                    {...register("order")}
                  />
                </div>

                <div className="form-group col-md-6 mt-3">
                  <label>Proficiency</label>

                  <input
                    type="number"
                    className="form-control"
                    {...register("proficiency")}
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

export default EditSkill;
