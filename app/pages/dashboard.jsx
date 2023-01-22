import React, { useContext, useEffect, useState } from "react";
import { authApi } from "./_app";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Button from "../components/Button";
import Image from "next/image";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import FormI from "../components/FormI";
import FormII from "../components/FormII";
import FormIII from "../components/FormIII";
import axios from "axios";
import Footer from '../components/Footer';
import Section from '../components/Section';


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "auto",
  bgcolor: "background.paper",
  borderRadius: 5,
  boxShadow: 24,
  width: "400px",
  pt: 1,
  pb: 4,
  px: 4,
};
const myStyle = {
  backgroundImage:
    "url('/images/dashboard-img.webp')",
  height: '500px'
}
const myStyle2 = {
  backgroundColor: '#256D85'
}
function Dashboard() {
  const { auth } = useContext(authApi);
  const [user, setUser] = useState();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    page,
    setPage,
    noOfMaintainers,
    history,
    loanAmount,
    GorB,
    marital,
    noOfLoans,
    age,
    currentAmount,
    savingsAmount,
    instPercent,
    otherPlans,
    abroad,
    phoneAvail,
    duration,
    collateral,
    job,
    housing,
    yearsOfStay,
    purpose,
  } = useContext(authApi);
 
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);
  return (
    <>
      <Header></Header>
      {/* <div className="text-center">
        <Image width={100} height={100} src="/images/loan.jpg"></Image>
        <button
          onClick={() => {
            setOpen(true);
          }}
        >
          <Button></Button>
        </button>
      </div> */}

      <div>
        <div style={myStyle} class="py-10 bg-cover flex justify-center items-center bg-no-repeat bg-fixed">
          <div class="container m-auto text-center px-6 opacity-100">
          <div class="p-4">
              <div class="flex rounded-lg pb-6 pt-10 p-8 flex-col bg-white bg-opacity-40 backdrop-blur-sm drop-shadow-md">
            <h1 class="text-5xl font-bold mb-2 text-black opacity-100">Welcome to Goliath National Bank!!</h1>
            <h3 class="text-3xl mb-8 text-slate-700 opacity-100">It’s gonna be legend-... wait for it… DAIRY!</h3>
            </div>
            </div>
          </div>
        </div>
      </div>

      <section style={myStyle2}>
        <div class="container align-middle mx-auto px-6 text-center py-16">
          <h2 class="mb-4 text-4xl font-semibold  text-center text-white">Barney Stinson</h2>
          <h3 class="my-4 mb-8 text-2xl font-light text-white">Think of me like Yoda, but instead of being little and
green I wear suits and I’m awesome. I’m your bro—I’m Broda!</h3>
          <button onClick={() => {
              setOpen(true);
            }}><Button></Button></button>
        </div>
      </section>

      {/* <div>
        <div class="py-10 bg-cover bg-no-repeat bg-fixed">
          <div class="container m-auto text-center px-6 opacity-100">
            <button onClick={() => {
              setOpen(true);
            }} ><Button></Button></button>
          </div>
        </div>
      </div> */}
      <Section />
      <Footer />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="md:w-[450px] w-[90%] grid grid-cols-1 gap-4">
          {page == 0 && <FormI></FormI>}
          {page == 1 && <FormII></FormII>}
          {page == 2 && <FormIII></FormIII>}
          {/* <FormII></FormII>
          <FormIII></FormIII> */}
          {/* <div className="col-span-6 sm:flex sm:items-center sm:gap-4 w-100 flex justify-center items-center">
            <button
              onClick={submitFormHandler}
              className="inline-block shrink-0 rounded-md border border-[#0d9488] bg-[#0d9488] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#0d9488] focus:outline-none focus:ring active:text-blue-500"
            >
              Submit
            </button>
          </div> */}
        </Box>
      </Modal>
    </>
  );
}

export default Dashboard;



// class="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider hover:border-red hover:text-white hover:bg-red-600"