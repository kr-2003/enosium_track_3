import React, { useContext } from "react";
import { authApi } from "../pages/_app";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "15%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "auto",
  borderRadius: 1,
  boxShadow: 24,
  py: 1,
  px: 4,
};

function FormII() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    page,
    setPage,
    setNoOfLoans,
    setAge,
    setSavingsAmount,
    setInstPercent,
    setOtherPlans,
    setAbroad,
    setCurrentAmount,
    noOfLoans,
    age,
    savingsAmount,
    instPercent,
    otherPlans,
    abroad,
    currentAmount,
  } = useContext(authApi);
  const nextHandler = (e) => {
    e.preventDefault();
    if (
      noOfLoans == undefined ||
      age == undefined ||
      savingsAmount == undefined ||
      instPercent == undefined ||
      otherPlans == undefined ||
      abroad == undefined ||
      currentAmount == undefined
    ) {
      setOpen(true);
    } else setPage(page + 1);
  };
  const config = {
    type: "spring",
    damping: 20,
    stiffness: 100,
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="text-center md:w-[450px] w-[300px] bg-[#fff] grid grid-cols-1 gap-4 border-2 border-[#F55050]"
        >
          <div className="text-bold text-[#F55050] text-2xl">
            Please fill all the fields!!
          </div>
          <div onClick={() => setOpen(false)} className="w-100 text-center">
            {" "}
            <button className="text-white py-1 border-2 border-[#F55050] w-[100px] bg-[#F48484] rounded-md">
              OK
            </button>
          </div>
        </Box>
      </Modal>
      <motion.form
        className="mt-8 grid grid-cols-6 gap-6"
        transition={config}
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ x: 0, opacity: 0 }}
      >
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            Number of Loans
          </label>

          <select
            value={noOfLoans}
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setNoOfLoans(e.target.value)}
          >
            <option selected>Choose</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700">Age</label>

          <input
            value={age}
            type="number"
            id="points"
            name="loan amount taken"
            min="18"
            max="100"
            className="p-2 h-10 mt-1 w-full rounded-md border-[1px] border-[#0d9488] bg-white text-sm text-gray-700 shadow-sm"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            Savings Amount
          </label>

          <select
            value={savingsAmount}
            onChange={(e) => setSavingsAmount(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose</option>
            <option value="less than 100">less than 100</option>
            <option value="no savings account">no savings account</option>
            <option value="between 500 and 1000">between 500 and 1000</option>
            <option value="between 100 and 500">between 100 and 500</option>
            <option value="greater than 1000">greater than 1000</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            Other loans plans
          </label>

          <select
            value={otherPlans}
            onChange={(e) => setOtherPlans(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose</option>
            <option value="none">none</option>
            <option value="bank">bank</option>
            <option value="stores">stores</option>
          </select>
        </div>

        <div className="col-span-6 sm:col-span-6">
          <label className="block text-sm font-medium text-gray-700">
            Installment percent of income
          </label>

          <input
            value={instPercent}
            onChange={(e) => setInstPercent(e.target.value)}
            type="number"
            id="points"
            name="loan amount taken"
            min="1"
            max="4"
            className="p-2 h-10 mt-1 w-full rounded-md border-[1px] border-[#0d9488] bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            Current Amount
          </label>

          <select
            value={currentAmount}
            onChange={(e) => setCurrentAmount(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose</option>
            <option value="no current account">no current account</option>
            <option value="less than 0">less than 0</option>
            <option value="between 0 and 200">between 0 and 200</option>
            <option value="greater than 200">greater than 200</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            Working Abroad
          </label>

          <select
            value={abroad}
            onChange={(e) => setAbroad(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="col-span-3 sm:flex sm:items-center sm:gap-4 flex justify-center items-center">
          <button
            onClick={() => setPage(page - 1)}
            className="inline-block shrink-0 rounded-md border border-[#0d9488] bg-[#0d9488] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#0d9488] focus:outline-none focus:ring active:text-blue-500"
          >
            Previous
          </button>
        </div>
        <div className="col-span-3 sm:flex sm:items-center sm:gap-4 flex justify-center items-center">
          <button
            onClick={nextHandler}
            className="inline-block shrink-0 rounded-md border border-[#0d9488] bg-[#0d9488] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#0d9488] focus:outline-none focus:ring active:text-blue-500"
          >
            Next
          </button>
        </div>
      </motion.form>
    </>
  );
}

export default FormII;
