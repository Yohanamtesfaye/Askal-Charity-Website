import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaHandshake } from "react-icons/fa";
import { UsersIcon } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import ContactUs from "../Pages/ContactUs";
import { Link } from "react-router-dom";

const JoinWithUs = () => {
  const { t } = useTranslation();
  const [isMemberModalOpen, setIsMemberModalOpen] = useState(false);
  const [isSpecialMemberModalOpen, setIsSpecialMemberModalOpen] =
    useState(false);
  const [isFranchiseModalOpen, setIsFranchiseModalOpen] = useState(false);

  // Form state for special member registration
  const [specialMemberFormData, setSpecialMemberFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    nationality: "",
    countryOfResidence: "",
    residentialAddress: "",
    donationAmount: "50 birr",
    donationFrequency: "Every week",
    donationDuration: "For six consecutive months",
    donationStartDate: "",
    paymentMethod: "By direct deposit into Askal's bank account (CBE)",
    remindDonationDate: "Yes",
    reminderMethod: "Call me",
    lateNotificationMethod: "Call me",
    lateNotificationTiming: "If I passed the donation deadline by 1 day",
  });

  // Form state for franchise registration
  const [franchiseFormData, setFranchiseFormData] = useState({
    fullName: '',
    age: '',
    phoneNumber: '',
    address: '',
    country: '',
    academicLevel: '10+2',
    maritalStatus: 'Single',
    reasonToJoin: '',
  });

  const openMemberModal = () => setIsMemberModalOpen(true);
  const closeMemberModal = () => setIsMemberModalOpen(false);

  const openSpecialMemberModal = () => setIsSpecialMemberModalOpen(true);
  const closeSpecialMemberModal = () => setIsSpecialMemberModalOpen(false);

  const openFranchiseModal = () => setIsFranchiseModalOpen(true);
  const closeFranchiseModal = () => setIsFranchiseModalOpen(false);

  const handleSpecialMemberInputChange = (e) => {
    const { name, value } = e.target;
    setSpecialMemberFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFranchiseInputChange = (e) => {
    const { name, value } = e.target;
    setFranchiseFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSpecialMemberSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:5000/api/special-members",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(specialMemberFormData),
        }
      );
      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        closeSpecialMemberModal();
      } else {
        const error = await response.json();
        alert("Error: " + error.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleFranchiseSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/franchises", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(franchiseFormData),
      });
      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        closeFranchiseModal();
      } else {
        const error = await response.json();
        alert("Error: " + error.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-green-600 mb-4">
          {t("join_community")}{" "}
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto text-balance leading-relaxed">
          {t("community_message")}
        </p>

        <hr className="my-6 mb-12 border border-t-8 border-red-500 w-64 mx-auto rounded-lg" />
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 justify-center items-stretch">
          {/* Volunteer Card */}
          <Link to="/volunteer" target="_blank" rel="noopener noreferrer">
            <button
              type="button"
              className="bg-white rounded-lg shadow-md w-full md:w-64 text-left focus:outline-none flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer hover:bg-transparent"
            >
              <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-t-lg p-6 flex justify-center">
                <FaHandshake className="text-4xl" color="white"></FaHandshake>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-lg mb-3">{t("volunteer1.3")}</h3>
                <ul className="list-disc list-inside list-green-600 text-gray-700 space-y-2 mb-4 flex-1">
                  <li>{t("volunteer1.0")}</li>
                  <li>{t("volunteer1.1")}</li>
                  <li>{t("volunteer1.2")}</li>
                </ul>
                <span className="text-green-600 font-semibold hover:underline cursor-pointer">
                  {t("learn")} &rarr;
                </span>
              </div>
            </button>
          </Link>

          {/* Become a Member Card */}
          <button
            type="button"
            className="bg-white rounded-lg shadow-md w-full md:w-64 text-left focus:outline-none flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer hover:bg-transparent"
            onClick={openMemberModal}
          >
            <div className="bg-yellow-400 rounded-t-lg p-6 flex justify-center ">
              <UsersIcon className="text-4xl" color="white" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-bold text-lg mb-3">
                {t("member_option1.3")}
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 flex-1">
                <li>{t("member_option1.0")}</li>
                <li>{t("member_option1.1")}</li>
                <li>{t("member_option1.2")}</li>
              </ul>
              <span className="text-green-600 font-semibold hover:underline cursor-pointer">
                {t("learn")} &rarr;
              </span>
            </div>
          </button>

          {/* Special Member Card */}
          <button
            type="button"
            className="bg-white rounded-lg shadow-md w-full md:w-64 text-left focus:outline-none flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer hover:bg-transparent"
            onClick={openSpecialMemberModal}
          >
            <div className="bg-red-400 rounded-t-lg p-6 flex justify-center">
              <FaStar className="text-4xl" color="white" />,
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-bold text-lg mb-3">
                {t("special_member1.3")}
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 flex-1">
                <li>{t("special_member1.0")}</li>
                <li>{t("special_member1.1")}</li>
                <li>{t("special_member1.2")}</li>
              </ul>
              <span className="text-green-600 font-semibold hover:underline cursor-pointer hover:bg-transparent">
                {t("learn")} &rarr;
              </span>
            </div>
          </button>

          {/* Franchise Card */}
          <button
            type="button"
            className="bg-white rounded-lg shadow-md w-full md:w-64 text-left focus:outline-none flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer hover:bg-transparent"
            onClick={openFranchiseModal}
          >
            <div className="bg-gradient-to-r from-green-500 to-green-700 rounded-t-lg p-6 flex justify-center">
              <FaBuilding className="text-4xl" color="white" />,
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-bold text-lg mb-3">{t("franchise1.3")}</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 flex-1">
                <li>{t("franchise1.0")}</li>
                <li>{t("franchise1.1")}</li>
                <li>{t("franchise1.2")}</li>
              </ul>
              <span className="text-green-600 font-semibold hover:underline cursor-pointer ">
                {t("learn")} &rarr;
              </span>
            </div>
          </button>
        </div>
      </div>
      <ContactUs />

      {/* Become a Member Modal */}
      {isMemberModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <button
              onClick={closeMemberModal}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors z-10"
              aria-label="Close modal"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex justify-center mb-4">
              <div className="bg-yellow-400 rounded-full p-3">
                <FaHandshake className="text-4xl" color="white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">
              {t("welcome_future_member")}
            </h3>
            <p className="text-gray-700 text-center mb-6">
              {t("thank_you_message")}
            </p>
            <button
              onClick={closeMemberModal}
              className="bg-yellow-400 text-white font-semibold py-3 rounded w-full hover:bg-yellow-500 focus:outline-none"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      {/* Special Member Registration Modal */}
      {isSpecialMemberModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            <button
              onClick={closeSpecialMemberModal}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors z-10"
              aria-label="Close modal"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex justify-center mb-4">
              <div className="bg-red-400 rounded-full p-3">
                <FaStar className="text-4xl" color="white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">
              {t("register_as_special_member")}
            </h3>
            <p className="text-center text-gray-600 mb-6">
              {t("join_global_community")}
            </p>
            <form
              onSubmit={handleSpecialMemberSubmit}
              className="space-y-4 max-h-[70vh] overflow-y-auto pr-2"
            >
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("full_name")}
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={specialMemberFormData.fullName}
                  onChange={handleSpecialMemberInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring-red-400 sm:text-sm p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={specialMemberFormData.email}
                  onChange={handleSpecialMemberInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring-red-400 sm:text-sm p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("phone")}
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={specialMemberFormData.phoneNumber}
                  onChange={handleSpecialMemberInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring-red-400 sm:text-sm p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("gender")}
                </label>
                <input
                  type="text"
                  id="gender"
                  name="gender"
                  value={specialMemberFormData.gender}
                  onChange={handleSpecialMemberInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring-red-400 sm:text-sm p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="nationality"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("nationality")}
                </label>
                <input
                  type="text"
                  id="nationality"
                  name="nationality"
                  value={specialMemberFormData.nationality}
                  onChange={handleSpecialMemberInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring-red-400 sm:text-sm p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="countryOfResidence"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("Countryresidence")}
                </label>
                <input
                  type="text"
                  id="countryOfResidence"
                  name="countryOfResidence"
                  value={specialMemberFormData.countryOfResidence}
                  onChange={handleSpecialMemberInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring-red-400 sm:text-sm p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="residentialAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("addressresidence")}
                </label>
                <input
                  type="text"
                  id="residentialAddress"
                  name="residentialAddress"
                  value={specialMemberFormData.residentialAddress}
                  onChange={handleSpecialMemberInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring-red-400 sm:text-sm p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="donationAmount"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("moneyamount")}
                </label>
                <select
                  id="donationAmount"
                  name="donationAmount"
                  value={specialMemberFormData.donationAmount}
                  onChange={handleSpecialMemberInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring-red-400 sm:text-sm p-2"
                >
                  <option value="op-1"> 50 {t("birr")}</option>
                  <option value="op-2">100 {t("birr")}</option>
                  <option value="op-3">500 {t("birr")}</option>
                  <option value="op-4">1000 {t("birr")}</option>
                  <option value="op-1">5,000 {t("birr")}</option>
                  <option value="op-2">10,000 {t("birr")}</option>
                  <option value="op-3">30,000 {t("birr")}</option>
                  <option value="op-4">50,000 {t("birr")}</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="donationFrequency"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("moneyamountschedule")}{" "}
                </label>
                <select
                  id="donationFrequency"
                  name="donationFrequency"
                  value={specialMemberFormData.donationFrequency}
                  onChange={handleSpecialMemberInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring-red-400 sm:text-sm p-2"
                >
                  <option value={t("donation_frequency.0")}>
                    {t("donation_frequency.0")}
                  </option>
                  <option value={t("donation_frequency.1")}>
                    {t("donation_frequency.1")}
                  </option>
                  <option value={t("donation_frequency.2")}>
                    {t("donation_frequency.2")}
                  </option>
                  <option value={t("donation_frequency.3")}>
                    {t("donation_frequency.3")}
                  </option>
                  <option value={t("donation_frequency.4")}>
                    {t("donation_frequency.4")}
                  </option>
                  <option value={t("donation_frequency.5")}>
                    {t("donation_frequency.5")}
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="donationDuration"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("donation_duration.0")}
                </label>
                <select
                  id="donationDuration"
                  name="donationDuration"
                  value={specialMemberFormData.donationDuration}
                  onChange={handleSpecialMemberInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring-red-400 sm:text-sm p-2"
                >
                  <option value={t("donation_duration.1")}>
                    {t("donation_duration.1")}
                  </option>
                  <option value={t("donation_duration.2")}>
                    {t("donation_duration.2")}
                  </option>
                  <option value={t("donation_duration.3")}>
                    {t("donation_duration.3")}
                  </option>
                  <option value={t("donation_duration.4")}>
                    {t("donation_duration.4")}
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="donationStartDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("start_donation")}{" "}
                </label>
                <input
                  type="date"
                  id="donationStartDate"
                  name="donationStartDate"
                  value={specialMemberFormData.donationStartDate}
                  onChange={handleSpecialMemberInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring-red-400 sm:text-sm p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="paymentMethod"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("donation_option.0")}{" "}
                </label>
                <select
                  id="paymentMethod"
                  name="paymentMethod"
                  value={specialMemberFormData.paymentMethod}
                  onChange={handleSpecialMemberInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring-red-400 sm:text-sm p-2"
                >
                  <option value={t("donation_option.1")}>
                    {t("donation_option.1")}
                  </option>
                  <option value={t("donation_option.2")}>
                    {t("donation_option.2")}
                  </option>
                  <option value={t("donation_option.3")}>
                    {t("donation_option.3")}
                  </option>
                  <option value={t("donation_option.4")}>
                    {t("donation_option.4")}
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="remindDonationDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("reminder_preference.0")}{" "}
                </label>
                <select
                  id="remindDonationDate"
                  name="remindDonationDate"
                  value={specialMemberFormData.remindDonationDate}
                  onChange={handleSpecialMemberInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring-red-400 sm:text-sm p-2"
                >
                  <option value={t("reminder_preference.1")}>
                    {t("reminder_preference.1")}
                  </option>
                  <option value={t("reminder_preference.2")}>
                    {t("reminder_preference.2")}
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="reminderMethod"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("reminder_method.0")}{" "}
                </label>
                <select
                  id="reminderMethod"
                  name="reminderMethod"
                  value={specialMemberFormData.reminderMethod}
                  onChange={handleSpecialMemberInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring-red-400 sm:text-sm p-2"
                >
                  <option value={t("reminder_method.1")}>
                    {t("reminder_method.1")}
                  </option>
                  <option value={t("reminder_method.2")}>
                    {t("reminder_method.2")}
                  </option>
                  <option value={t("reminder_method.3")}>
                    {t("reminder_method.3")}
                  </option>
                  <option value={t("reminder_method.4")}>
                    {t("reminder_method.4")}
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="lateNotificationMethod"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("late_notification")}
                </label>
                <select
                  id="lateNotificationMethod"
                  name="lateNotificationMethod"
                  value={specialMemberFormData.lateNotificationMethod}
                  onChange={handleSpecialMemberInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring-red-400 sm:text-sm p-2"
                >
                  <option value={t("reminder_method.1")}>
                    {t("reminder_method.1")}
                  </option>
                  <option value={t("reminder_method.2")}>
                    {t("reminder_method.2")}
                  </option>
                  <option value={t("reminder_method.3")}>
                    {t("reminder_method.3")}
                  </option>
                  <option value={t("reminder_method.4")}>
                    {t("reminder_method.4")}
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="lateNotificationTiming"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("missed_deadline_notification.0")}
                </label>
                <select
                  id="lateNotificationTiming"
                  name="lateNotificationTiming"
                  value={specialMemberFormData.lateNotificationTiming}
                  onChange={handleSpecialMemberInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring-red-400 sm:text-sm p-2"
                >
                  <option value={t("missed_deadline_notification.1")}>
                    {t("missed_deadline_notification.1")}
                  </option>
                  <option value={t("missed_deadline_notification.2")}>
                    {t("missed_deadline_notification.2")}
                  </option>
                  <option value={t("missed_deadline_notification.3")}>
                    {t("missed_deadline_notification.3")}
                  </option>
                </select>
              </div>
              <button
                type="submit"
                className="mt-6 w-full bg-red-400 text-white font-semibold py-3 rounded hover:bg-red-500 focus:outline-none"
              >
                {t("submit_register")}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Franchise Registration Modal */}
      {isFranchiseModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            <button
              onClick={closeFranchiseModal}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors z-10"
              aria-label="Close modal"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-green-500 to-green-700 rounded-full p-3">
                <FaBuilding className="text-4xl" color="white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">
              {t("register_as_franchise")}
            </h3>
            <p className="text-center text-gray-600 mb-6">
              {t("represent_askal")}
            </p>
            <form
              onSubmit={handleFranchiseSubmit}
              className="space-y-4 max-h-[70vh] overflow-y-auto pr-2"
            >
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("full_name")}
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={franchiseFormData.fullName}
                  onChange={handleFranchiseInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-400 focus:ring-green-400 sm:text-sm p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="age"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("age")}
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={franchiseFormData.age}
                  onChange={handleFranchiseInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-400 focus:ring-green-400 sm:text-sm p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("phone_number")}
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={franchiseFormData.phoneNumber}
                  onChange={handleFranchiseInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-400 focus:ring-green-400 sm:text-sm p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("addr")}
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={franchiseFormData.address}
                  onChange={handleFranchiseInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-400 focus:ring-green-400 sm:text-sm p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("Countryresidence")}
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={franchiseFormData.country}
                  onChange={handleFranchiseInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-400 focus:ring-green-400 sm:text-sm p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="academicLevel"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("academicLevel.0")}
                </label>
                <select
                  id="academicLevel"
                  name="academicLevel"
                  value={franchiseFormData.academicLevel}
                  onChange={handleFranchiseInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-400 focus:ring-green-400 sm:text-sm p-2"
                >
              <option value= {t("academicLevel.1")}> {t("academicLevel.1")}</option>
              <option value={t("academicLevel.2")}>{t("academicLevel.2")}</option>
              <option value={t("academicLevel.3")}>{t("academicLevel.3")}</option>
              <option value={t("academicLevel.4")}>{t("academicLevel.4")}</option>
              <option value={t("academicLevel.5")}>{t("academicLevel.5")}</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="maritalStatus"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("maritalStatus.0")}
                </label>
                <select
                  id="maritalStatus"
                  name="maritalStatus"
                  value={franchiseFormData.maritalStatus}
                  onChange={handleFranchiseInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-400 focus:ring-green-400 sm:text-sm p-2"
                >
                  <option value={t("maritalStatus.1")}>{t("maritalStatus.1")}</option>
              <option value={t("maritalStatus.2")}>{t("maritalStatus.2")}</option>
              <option value={t("maritalStatus.3")}>{t("maritalStatus.3")}</option>
              <option value={t("maritalStatus.4")}>{t("maritalStatus.4")}</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="reasonToJoin"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t("join_reason")}
                </label>
                <textarea
                  id="reasonToJoin"
                  name="reasonToJoin"
                  value={franchiseFormData.reasonToJoin}
                  onChange={handleFranchiseInputChange}
                  required
                  rows="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-400 focus:ring-green-400 sm:text-sm p-2"
                />
              </div>
              <button
                type="submit"
                className="mt-6 w-full bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold py-3 rounded hover:from-green-600 hover:to-green-800 focus:outline-none"
              >
                {t("submit_register")}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default JoinWithUs;
