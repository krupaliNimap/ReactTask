import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-responsive-modal";

const UserForm = ({
  modalOpen,
  handleModalClose,
  setAllUser,
  addUser,
  updateUser,
  selectedData,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: selectedData?.name ? selectedData?.name : "",
      email: selectedData?.email ? selectedData?.email : "",
    },
  });
  const onSubmit = (data) => {
    selectedData?.id
      ? updateUser(selectedData?.id, selectedData?.email, data)
      : addUser(data);
  };
  return (
    <>
      <Modal open={modalOpen} onClose={handleModalClose} center>
        <div className="form-modal-body">
          <form className="form-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-field">
              <label className="form-label">Name</label>
              <input
                className="form-input"
                {...register("name", { required: true })}
              />
            </div>
            {errors.name && (
              <span className="form-required">Name is required</span>
            )}
            <div className="form-field">
              <label className="form-label">Email</label>
              <input
                className="form-input"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                })}
              />
            </div>
            {errors?.email?.type === "required" && (
              <span className="form-required">Email is required</span>
            )}
            {errors?.email?.type === "pattern" && (
              <span className="form-required">Enter valid email</span>
            )}
            <div className="form-field">
              <label className="form-label">Gender</label>
              <label>
                <input
                  type="radio"
                  value="Male"
                  {...register("gender", { required: true })}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  value="Female"
                  {...register("gender", { required: true })}
                />
                Female
              </label>
            </div>
            {errors.gender && (
              <span className="form-required">Gender is required</span>
            )}
            <div className="form-field">
              <label className="form-label">Status</label>
              <label>
                <input
                  type="radio"
                  value="Active"
                  {...register("status", { required: true })}
                />
                Active
              </label>
              <label>
                <input
                  type="radio"
                  value="Inactive"
                  {...register("status", { required: true })}
                />
                Inactive
              </label>
            </div>
            {errors.status && (
              <span className="form-required">Status is required</span>
            )}
            <div className="div-delete-update-button">
              <input className="submit-button" type="submit" />
              <button className="submit-button" onClick={handleModalClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default UserForm;
