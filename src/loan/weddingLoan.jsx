import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
    const Navigate = useNavigate()
    const [formData, setFormData] = useState({
        purpose: "",
        amount: "",
        time: "",
        initialPayment: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "amount" && value > 500000) {
          alert("Maximum loan amount is 5 Lakh (500,000).");
          return;
        }
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Save form data to localStorage
        localStorage.setItem("formData", JSON.stringify(formData));
    
        console.log("Form Submitted: ", formData);
        alert("Form Submitted Successfully!");
      };

  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Loan Application Form
        </h2>

        {/* Dropdown for Loan Purpose */}
        <div className="mb-4">
          <label htmlFor="purpose" className="block text-gray-700 font-medium">
            Why do you want a loan?
          </label>
          <select
            id="purpose"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
            required
          >
            <option value="">Select Purpose</option>
            <option value="valima">Valima</option>
            <option value="furniture">Furniture</option>
            <option value="valima_food">Valima Food</option>
            <option value="jahez">Jahez</option>
          </select>
        </div>

        {/* Input for Loan Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-700 font-medium">
            How much do you need?
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
            placeholder="Enter amount (Max: 5 Lakh)"
            required
          />
        </div>

        {/* Input for Initial Payment */}
        <div className="mb-4">
          <label
            htmlFor="initialPayment"
            className="block text-gray-700 font-medium"
          >
            How will you pay the initial value?
          </label>
          <input
            type="text"
            id="initialPayment"
            name="initialPayment"
            value={formData.initialPayment}
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
            placeholder="Specify your payment method"
            required
          />
        </div>

        {/* Dropdown for Repayment Time */}
        <div className="mb-4">
  <label htmlFor="time" className="block text-gray-700 font-medium">
    How much time to pay? (in months)
  </label>
  <input
    type="number"
    id="time"
    name="time"
    value={formData.time}
    onChange={handleChange}
    className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
    placeholder="Enter time in days"
    required
  />
</div>


        {/* Submit Button */}
        <button
        onClick={()=> Navigate("/form")}
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>

      {/* Details Table */}
      {formData.amount && formData.initialPayment && formData.time && (
       <div className="bg-white p-6 mt-6 rounded-lg shadow-md w-full max-w-md">
       <h3 className="text-xl font-bold text-gray-800 mb-4">Loan Details</h3>
       <div className="overflow-x-auto">
         <table className="w-full table-auto">
           <thead>
             <tr>
               <th className="px-4 py-2 text-left text-sm text-gray-600">Loan You Want</th>
               <th className="px-4 py-2 text-left text-sm text-gray-600">Initial Payment</th>
               <th className="px-4 py-2 text-left text-sm text-gray-600">Months Paid</th>
               <th className="px-4 py-2 text-left text-sm text-gray-600">Amount You Paid</th>
               <th className="px-4 py-2 text-left text-sm text-gray-600">Monthly Payment</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td className="px-4 py-2 text-sm text-gray-700">{formData.amount}</td>
               <td className="px-4 py-2 text-sm text-gray-700">{formData.initialPayment}</td>
               <td className="px-4 py-2 text-sm text-gray-700">{formData.time}</td>
               <td className="px-4 py-2 text-sm text-gray-700">
                 {formData.amount - formData.initialPayment}
               </td>
               <td className="px-4 py-2 text-sm text-gray-700">
                 {(formData.amount - formData.initialPayment) / formData.time}
               </td>
             </tr>
           </tbody>
         </table>
       </div>
     </div>
     
      )}
    </div>
  );
};

export default App;
