import React, { useState } from "react";

const AddEmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    employeeId: "",
    email: "",
    phone: "",
    department: "",
    dateOfJoining: "",
    role: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const departments = ["HR", "Engineering", "Marketing", "Finance"];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.employeeId.trim())
      newErrors.employeeId = "Employee ID is required.";
    else if (formData.employeeId.length > 10)
      newErrors.employeeId = "Employee ID must be 10 characters or less.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid.";
    if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone number must be 10 digits.";
    if (!formData.department) newErrors.department = "Department is required.";
    if (!formData.dateOfJoining)
      newErrors.dateOfJoining = "Date of Joining is required.";
    else if (new Date(formData.dateOfJoining) > new Date())
      newErrors.dateOfJoining = "Date cannot be in the future.";
    if (!formData.role.trim()) newErrors.role = "Role is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
      setSuccessMessage("Employee added successfully!");
      setErrors({});
      setFormData({
        name: "",
        employeeId: "",
        email: "",
        phone: "",
        department: "",
        dateOfJoining: "",
        role: "",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Add Employee
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 text-sm border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
              placeholder="Enter full name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Employee ID
            </label>
            <input
              type="text"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 text-sm border ${
                errors.employeeId ? "border-red-500" : "border-gray-300"
              } rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
              placeholder="E.g., EMP12345"
            />
            {errors.employeeId && (
              <p className="text-red-500 text-sm mt-1">{errors.employeeId}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 text-sm border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
              placeholder="example@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 text-sm border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
              placeholder="10-digit phone number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Department
            </label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 text-sm border ${
                errors.department ? "border-red-500" : "border-gray-300"
              } rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
            >
              <option value="">Select a department</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
            {errors.department && (
              <p className="text-red-500 text-sm mt-1">{errors.department}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date of Joining
            </label>
            <input
              type="date"
              name="dateOfJoining"
              value={formData.dateOfJoining}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 text-sm border ${
                errors.dateOfJoining ? "border-red-500" : "border-gray-300"
              } rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.dateOfJoining && (
              <p className="text-red-500 text-sm mt-1">
                {errors.dateOfJoining}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 text-sm border ${
                errors.role ? "border-red-500" : "border-gray-300"
              } rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
              placeholder="E.g., Manager, Developer"
            />
            {errors.role && (
              <p className="text-red-500 text-sm mt-1">{errors.role}</p>
            )}
          </div>
          <div className="flex justify-between items-center mt-4">
            <button
              type="reset"
              onClick={() =>
                setFormData({
                  name: "",
                  employeeId: "",
                  email: "",
                  phone: "",
                  department: "",
                  dateOfJoining: "",
                  role: "",
                })
              }
              className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Submit
            </button>
          </div>
          {successMessage && (
            <p className="text-green-600 text-center mt-4">{successMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddEmployeeForm;
