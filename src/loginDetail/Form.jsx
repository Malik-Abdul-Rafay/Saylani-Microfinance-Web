import React, { useState } from "react";
import emailjs from "emailjs-com";
import { initializeApp } from "firebase/app"; 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; 

// Initialize Firebase (replace with your Firebase config)
const firebaseConfig = {
  apiKey: "AIzaSyD5q97k3mQHu3n1iod5ngTO3-zA5nRqT6Y",
  authDomain: "hakathone-7393e.firebaseapp.com",
  projectId: "hakathone-7393e",
  storageBucket: "hakathone-7393e.firebasestorage.app",
  messagingSenderId: "1070658491828",
  appId: "1:1070658491828:web:d282a6c22fbab8d3660ee1",
  measurementId: "G-SJWQNLCJN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Get the authentication instance

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    nic: "",
  });

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to generate random password
  const generateRandomPassword = (length = 12) => {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let randomPassword = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      randomPassword += charset[randomIndex];
    }

    setPassword(randomPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Firebase Authentication: Sign up with email and password
    createUserWithEmailAndPassword(auth, formData.email, password) // Sign up using email and the generated password
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed up successfully:", user);

        // Send email using EmailJS
        emailjs
          .send(
            "service_a9ux9eg", // Replace with your service ID
            "template_60elaj9", // Replace with your template ID
            { ...formData, password }, // Send form data along with the generated password
            "Qisr1QFqKu6kGqHui" // Replace with your EmailJS user ID
          )
          .then(
            (result) => {
              console.log("Email sent successfully:", result.text);
              alert("Form Submitted and Email Sent Successfully!");

              // Reset form and password
              setFormData({ name: "", email: "", nic: "" });
              setPassword("");
            },
            (error) => {
              console.error("Error sending email:", error.text);
              alert("Failed to send email, please try again.");
            }
          )
          .finally(() => {
            setLoading(false); // Hide loader
          });

        // Save form data to localStorage
        localStorage.setItem("formData", JSON.stringify(formData));
      })
      .catch((error) => {
        console.error("Error during Firebase sign-up:", error.message);
        alert("Sign-up failed, please check your credentials and try again.");
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Form Details
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* NIC Number Input */}
          <div className="mb-4">
            <label htmlFor="nic" className="block text-gray-700 font-medium">
              NIC Number
            </label>
            <input
              type="text"
              id="nic"
              name="nic"
              value={formData.nic}
              onChange={handleChange}
              placeholder="Enter your NIC number"
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Password Display */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Password
            </label>
            <input
              type="text"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password will be generated"
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
              disabled
            />
            <button
              type="button"
              onClick={() => generateRandomPassword(16)} // Button to generate a password
              className="mt-2 w-full bg-green-600 text-white font-medium py-2 rounded-lg hover:bg-green-700 transition duration-200"
            >
              Generate Random Password
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            {loading ? (
              <div className="w-full flex justify-center">
                <div className="loader">Loading...</div> {/* Loader */}
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
