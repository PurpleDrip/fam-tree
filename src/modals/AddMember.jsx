import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";

const AddMember = ({ clickHandler }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 bg-[#1D232A] absolute border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 rounded-xl border-accent">
      <h1 className="text-[1.3rem] sm:text-3xl text-secondary-content">
        Add Member
      </h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="First Name"
          className="input input-bordered input-primary w-full"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="input input-bordered input-primary w-full"
        />
        <select className="select select-primary w-full max-w-xs">
          <option disabled selected>
            Gender
          </option>
          <option>Male</option>
          <option>Female</option>
          <option>Others</option>
        </select>
        <input type="date" name="" id="" className="input input-primary" />
        <label className="cursor-pointer label mx-auto">
          <span className="label-text">Choose a color for this member</span>
          <input
            type="color"
            className="ml-8 border-2 border-[#6c7bf3] bg-transparent "
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Add Images of the Member</span>
            <span className="label-text-alt">.png only</span>
          </div>
          <input
            type="file"
            className="file-input file-input-bordered file-input-primary w-full max-w-xs"
          />
          <div className="label">
            <span className="label-text-alt">Minimum 1</span>
            <span className="label-text-alt"></span>
          </div>
        </label>
        <label className="cursor-pointer label mx-auto">
          <input type="checkbox" className="checkbox mr-8 checkbox-primary" />
          <span className="label-text">Make this member admin?</span>
        </label>
        <button
          type="submit"
          className="btn btn-accent btn-outline btn-wide mx-auto"
        >
          Submit
        </button>
      </form>
      <div
        className="closebtn absolute top-5 right-5 cursor-pointer"
        onClick={clickHandler}
      >
        <RiCloseCircleLine size={30} color="red" />
      </div>
    </div>
  );
};

export default AddMember;
