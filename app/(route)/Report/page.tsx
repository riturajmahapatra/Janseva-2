"use client";
import { Button } from "@/components/ui/button";

import { useState } from "react";
/* import React, { useState } from "react";
 */

const page = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          userEmail,
          number,
          textArea,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }
      const data = await response.json();
      // Handle response if necessary
    } catch (error) {
      // Handle error if necessary
      console.error(error);
    }
  };

  const [fullName, setFullName] = useState<string>("");

  const [number, setNumber] = useState<number>();

  const [userEmail, setUserEmail] = useState<string>("");

  const [textArea, setTextArea] = useState<string>("");
  console.log(textArea);

  return (
    <div className="container mx-auto py-[30vh]  p-8">
      <form onSubmit={handleSubmit} className=" flex justify-center">
        {" "}
        {/* add onsubmit using props */}
        <div className="bg-white rounded shadow-md p-6 grid grid-cols-1 gap-5 w-2/3">
          <h2 className="text-4xl font-semibold mb-4">Raise an Issue</h2>
          {/* Full Name Field */}
          <div className="mb-4">
            <label htmlFor="full_name" className="block font-medium">
              Full Name <span className="font-bold text-red-400">*</span>
            </label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              className="border rounded p-2 w-full"
              placeholder="Mukesh"
              // required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          {/* Phone Number Field */}
          <div className="mb-4">
            <label htmlFor="phone_no" className="block font-medium">
              Phone Number <span className="font-bold text-red-400">*</span>
            </label>
            <input
              type="number"
              id="phone_no"
              name="phone_no"
              className="border rounded p-2 w-full"
              placeholder="000-000-0000"
              // required
              value={number}
              pattern="[6-9]{1}[0-9]{9}"
              onChange={(e) => setNumber(e.target.valueAsNumber)}
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium">
              Email <span className="font-bold text-red-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border rounded p-2 w-full"
              placeholder="JohnDoe@gmail.com"
              // required
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>

          {/* TextArea */}
          <div className="mb-2">
            <label
              htmlFor="message"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Leave a Message
            </label>
            <textarea
              id="message"
              rows="9"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a comment..."
              value={textArea}
              onChange={(e) => setTextArea(e.target.value)}
            ></textarea>
            <div>
              <button
                type="submit"
                className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default page;
