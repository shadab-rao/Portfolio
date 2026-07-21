import Swal from "sweetalert2";
import httpServise from "./http.service.js";

let baseApi = import.meta.env.VITE_APIENDPOINT;
console.log(baseApi);

export async function adminLogin(formData) {
  try {
    const response = await httpServise.post(
      `${baseApi}/api/admin/login`,
      formData,
    );

    if (response && !response?.data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });

      return response;
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    return { error };
  }
}
export async function dashboardCount() {
  try {
    const response = await httpServise.get(
      `${baseApi}/api/dashboard`,
    );

    if (response && !response?.data?.error) {
      return response;
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    return { error };
  }
}
export async function getProjects() {
  try {
    const response = await httpServise.get(
      `${baseApi}/api/project/all`,
    );

    if (response && !response?.data?.error) {
      return response;
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    return { error };
  }
}
export async function getProfile() {
  try {
    const response = await httpServise.get(
      `${baseApi}/api/admin/details`,
    );

    if (response && !response?.data?.error) {
      return response;
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    return { error };
  }
}
export async function allSkills(search, page, limit) {
  try {
    const response = await httpServise.get(
      `${baseApi}/api/skill/all?search=${search}&page=${page}&limit=${limit}`,
    );

    if (response && !response?.data?.error) {
      return response;
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    return { error };
  }
}

export async function deleteSkill(id) {
  try {
    const response = await httpServise.delete(
      `${baseApi}/api/skill/delete/${id}`,
    );

    if (response && !response?.data?.error) {
        Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
      return response;
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    return { error };
  }
}
export async function addSkill(formData) {
  try {
    const response = await httpServise.post(
      `${baseApi}/api/skill/create`,
      formData
    );

    if (response && !response?.data?.error) {
        Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
      return response;
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    return { error };
  }
}
export async function skillById(id) {
  try {
    const response = await httpServise.get(
      `${baseApi}/api/skill/view/${id}`
    );

    if (response && !response?.data?.error) {
      return response;
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    return { error };
  }
}
export async function updateSkill(formData,id) {
  try {
    const response = await httpServise.put(
      `${baseApi}/api/skill/update/${id}`,
      formData
    );

    if (response && !response?.data?.error) {
        Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
      return response;
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    return { error };
  }
}

export async function skillStatus(id,formData) {
  try {
    const response = await httpServise.put(
      `${baseApi}/api/skill/status/${id}`,
      formData
    );

    if (response && !response?.data?.error) {
        Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
      return response;
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    return { error };
  }
}
export async function allProjects(search, page, limit) {
  try {
    const response = await httpServise.get(
      `${baseApi}/api/project/all?search=${search}&page=${page}&limit=${limit}`
    );

    if (response && !response?.data?.error) {
      return response;
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    return { error };
  }
}
export async function createProject(formData) {
  try {
    const response = await httpServise.post(
      `${baseApi}/api/project/create`,
      formData
    );

    if (response && !response?.data?.error) {
       Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
      return response;
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    return { error };
  }
}
export async function updateProject(id,formData) {
  try {
    const response = await httpServise.put(
      `${baseApi}/api/project/update/${id}`,
      formData
    );

    if (response && !response?.data?.error) {
       Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
      return response;
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    return { error };
  }
}
export async function deleteProject(id) {
  try {
    const response = await httpServise.delete(
      `${baseApi}/api/project/delete/${id}`
    );

    if (response && !response?.data?.error) {
       Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
      return response;
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    return { error };
  }
}
export async function projectById(id) {
  try {
    const response = await httpServise.get(
      `${baseApi}/api/project/project/${id}`
    );

    if (response && !response?.data?.error) {
      return response;
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    return { error };
  }
}
export async function projectStatusUpdate(id,status) {
  try {
    const response = await httpServise.put(
      `${baseApi}/api/project/status/${id}`
    );

    if (response && !response?.data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
      return response;
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    return { error };
  }
}
export async function getAllEducation(search, page, limit) {
  try {
    const response = await httpServise.get(
      `${baseApi}/api/education/all?search=${search}&page=${page}&limit=${limit}`
    );

    if (response && !response?.data?.error) {
      return response;
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    return { error };
  }
}
export async function createEducation(formData) {
  try {
    const response = await httpServise.post(
      `${baseApi}/api/education/create`,
      formData
    );

    if (response && !response?.data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      })
      return response;
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    return { error };
  }
}
export async function updateEducation(id,formData) {
  try {
    const response = await httpServise.put(
      `${baseApi}/api/education/update/${id}`,
      formData
    );

    if (response && !response?.data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      })
      return response;
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    return { error };
  }
}
export async function getEducationById(id) {
  try {
    const response = await httpServise.get(
      `${baseApi}/api/education/details/${id}`
    );

    if (response && !response?.data?.error) {
      return response;
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    return { error };
  }
}
export async function deleteEducation(id) {
  try {
    const response = await httpServise.delete(
      `${baseApi}/api/education/delete/${id}`
    );

    if (response && !response?.data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      })
      return response;
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    return { error };
  }
}
export async function getAllExperience(search, page, limit) {
  try {
    const response = await httpServise.get(
      `${baseApi}/api/experience/all?search=${search}&page=${page}&limit=${limit}`
    );

    if (response && !response?.data?.error) {
      return response;
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    return { error };
  }
}

export async function createExperience(formData) {
  try {
    const response = await httpServise.post(
      `${baseApi}/api/experience/create`,
      formData
    );

    if (response && !response?.data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      })
      return response;
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    return { error };
  }
}

export async function deleteExperience(id) {
  try {
    const response = await httpServise.delete(
      `${baseApi}/api/experience/delete/${id}`
    );

    if (response && !response?.data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      })
      return response;
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    return { error };
  }
}

export async function experienceById(id) {
  try {
    const response = await httpServise.get(
      `${baseApi}/api/experience/experience/${id}`
    );

    if (response && !response?.data?.error) {
      return response;
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    return { error };
  }
}

export async function updateExperience(id, formData) {
  try {
    const response = await httpServise.put(
      `${baseApi}/api/experience/update/${id}`,
      formData
    );

    if (response && !response?.data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      })
      return response;
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    return { error };
  }
}

export async function contactUsList(search, page, limit) {
  try {
    const response = await httpServise.get(
      `${baseApi}/api/contact/all-messages?search=${search}&page=${page}&limit=${limit}`
    );

    if (response && !response?.data?.error) {
      return response;
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    return { error };
  }
}

export async function deleteContact(id) {
  try {
    const response = await httpServise.delete(
      `${baseApi}/api/contact/delete/${id}`
    );

    if (response && !response?.data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      })
      return response;
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    return { error };
  }
}
export async function createContact(formData) {
  try {
    const response = await httpServise.post(
      `${baseApi}/api/contact`,
      formData
    );

    if (response && !response?.data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      })
      return response;
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        customClass: {
          title: "swal-title-color",
        },
      });
    return { error };
  }
}
