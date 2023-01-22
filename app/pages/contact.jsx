import React from "react";
import Header from "../components/Header";
import Image from 'next/image';

function contact() {
  return (
    <>
      <Header></Header>
      <div class="bg-white text-gray-800 px-8 py-2 mt-8">
      <div class="text-center w-full">
        <h1 className="text-5xl font-semibold">Contact Us</h1>
      </div>
      <div
        class="max-w-screen-xl mt-12 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-800 text-gray-100 rounded-lg shadow-lg">
        <div class="flex flex-col justify-between">
          <div>
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
            <div class="text-gray-300 mt-8">
              Hate forms? Send us an <span class="underline">email</span> instead.
            </div>
          </div>
          <div class="mt-8 text-center">
            <img></img>
          </div>
        </div>
        <div class="">
          <div>
            <span class="uppercase text-sm text-gray-100 font-bold">Full Name</span>
            <input class="w-full bg-gray-200 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder=""></input>
          </div>
          <div class="mt-8">
            <span class="uppercase text-sm text-gray-100 font-bold">Email</span>
            <input class="w-full bg-gray-200 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"></input>
          </div>
          <div class="mt-8">
            <span class="uppercase text-sm text-gray-100 font-bold">Message</span>
            <textarea
              class="w-full h-32 bg-gray-200 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div class="mt-8">
            <button
              class="hover:text-gray-800 hover:rounded-full uppercase text-sm font-bold tracking-wide bg-gradient-to-r from-cyan-400 to-teal-400 shadow-md text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default contact;
