import { useState } from "react";

export default function InputForm({ addContact }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    country: "India",
    pincode: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.match(/^[a-zA-Z\s]+$/))
      errs.name = "Name must contain only letters";
    if (!/^\d{10}$/.test(form.phone)) {
      errs.phone = "Phone must be exactly 10 digits and numeric only";
    }
    if (!form.email.match(/^\S+@\S+\.\S+$/)) errs.email = "Invalid email";
    ["street", "city", "state", "country", "pincode"].forEach((f) => {
      if (!form[f]) errs[f] = `${f} is required`;
    });
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) return setErrors(errs);
    addContact(form);

    setForm({
      name: "",
      phone: "",
      street: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      email: "",
    });
    setErrors({});
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 p-6 bg-white rounded-xl shadow-lg max-w-2xl mx-auto"
    >
      {/* Name & Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-2 border border-gray-300 rounded-md text-black 
            focus:outline-none focus:ring-2 focus:ring-[#4F959D] focus:border-transparent 
            transition-all duration-300 ease-in-out"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-2 border border-gray-300 rounded-md text-black 
            focus:outline-none focus:ring-2 focus:ring-[#4F959D] focus:border-transparent 
            transition-all duration-300 ease-in-out"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded-md text-black 
            focus:outline-none focus:ring-2 focus:ring-[#4F959D] focus:border-transparent 
            transition-all duration-300 ease-in-out"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* Street & City */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            name="street"
            value={form.street}
            onChange={handleChange}
            placeholder="Street"
            className="w-full p-2 border border-gray-300 rounded-md text-black 
            focus:outline-none focus:ring-2 focus:ring-[#4F959D] focus:border-transparent 
            transition-all duration-300 ease-in-out"
          />
          {errors.street && (
            <p className="text-red-500 text-sm mt-1">{errors.street}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="City"
            className="w-full p-2 border border-gray-300 rounded-md text-black 
            focus:outline-none focus:ring-2 focus:ring-[#4F959D] focus:border-transparent 
            transition-all duration-300 ease-in-out"
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city}</p>
          )}
        </div>
      </div>

      {/* State & Pincode */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            name="state"
            value={form.state}
            onChange={handleChange}
            placeholder="State"
            className="w-full p-2 border border-gray-300 rounded-md text-black 
            focus:outline-none focus:ring-2 focus:ring-[#4F959D] focus:border-transparent 
            transition-all duration-300 ease-in-out"
          />
          {errors.state && (
            <p className="text-red-500 text-sm mt-1">{errors.state}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            name="pincode"
            value={form.pincode}
            onChange={handleChange}
            placeholder="Pincode"
            className="w-full p-2 border border-gray-300 rounded-md text-black 
            focus:outline-none focus:ring-2 focus:ring-[#4F959D] focus:border-transparent 
            transition-all duration-300 ease-in-out"
          />
          {errors.pincode && (
            <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>
          )}
        </div>
      </div>

      {/* Country (default India) */}
      <div>
        <input
          type="text"
          name="country"
          value={form.country}
          onChange={handleChange}
          placeholder="Country"
          className="w-full p-2 border border-gray-300 rounded-md text-black 
            focus:outline-none focus:ring-2 focus:ring-[#4F959D] focus:border-transparent 
            transition-all duration-300 ease-in-out"
        />
        {errors.country && (
          <p className="text-red-500 text-sm mt-1">{errors.country}</p>
        )}
      </div>

      {/* Button */}
      <button
        type="submit"
        className="bg-gradient-to-r from-[#205781] to-[#4F959D] text-white py-3 px-6 rounded-lg shadow-md hover:scale-105 transition-transform font-semibold"
      >
        ➕ Add Contact
      </button>
    </form>
  );
}
