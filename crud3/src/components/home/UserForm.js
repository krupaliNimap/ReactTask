import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-responsive-modal";

const UserForm = ({ modalOpen, handleModalClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    handleModalClose();
  };
  return (
    <>
      <Modal open={modalOpen} onClose={handleModalClose} center>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Name</label>
            <input {...register("name", { required: true })} />
            <br />
            {errors.name && (
              <span className="form-required">Name is required</span>
            )}
          </div>
          <div>
            <label>Email</label>
            <input
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              })}
            />
            <br />
            {errors.email && (
              <span className="form-required">Email is required</span>
            )}
          </div>
          <div>
            <label>Gender</label>
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
            <br />
            {errors.gender && (
              <span className="form-required">Gender is required</span>
            )}
          </div>
          <div>
            <label>Status</label>
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
            <br />
            {errors.status && (
              <span className="form-required">Status is required</span>
            )}
          </div>
          <input type="submit" />
        </form>
      </Modal>
    </>
  );
};

export default UserForm;
