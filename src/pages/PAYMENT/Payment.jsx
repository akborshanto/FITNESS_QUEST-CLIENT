import { Select } from "@chakra-ui/react";
import React from "react";
import UseButton from "../../component/button/Button";
import toast from "react-hot-toast";
import useAuth from "../../auth/Auth";

const Payment = () => {
  const {user}=useAuth()
  const handleConfirm = (e) => {
    e.preventDefault();

    toast.success("succefully payment");
  };

  return (
    <div>
      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md text-black">
        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Account settings
        </h2>

        <form onSubmit={handleConfirm}>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-gray-700 text-black" for="username">
                Trainer Name
              </label>
              <input
                id="username"
                type="text"
                name="name"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md text-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-gray-700 text-black" for="emailAddress">
                Selected slot
              </label>

              <Select placeholder="Select option" name="slot">
                <option value="yoga">Yoga</option>
                <option value="pilates">pilates</option>
                <option value="spinning">spinning</option>
                <option value="zumba">zumba</option>
              </Select>
            </div>

            <div>
              <label class="text-gray-700 text-black" for="password">
                Classes
              </label>

              <Select placeholder="Select classess" name="class">
                <option value="basic">Basic</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
              </Select>
            </div>

            <div>
              <label
                class="text-gray-700 text-black"
                for="passwordConfirmation"
              >
                packages:
              </label>

              <Select placeholder="Select packages" name="package">
                <option value="basic">Basic</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
              </Select>
            </div>
            {/* user info */}
            <div>
              <label class="text-gray-700 text-black" for="username">
                Your Name
              </label>
              <input
                id="username" disabled
                type="text"
                placeholder={user?.email || "your name"}
                name="yourname"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md text-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-gray-700 text-black" for="username">
                Your  Email
              </label>
              <input
                id="username" disabled
                type="email" 
                placeholder={user?.email || ' your email'}
                name="email"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md text-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div class="flex justify-end mt-6">
            <UseButton btnHeading="Confirm"></UseButton>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Payment;
