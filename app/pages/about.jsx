import React from "react";
import Header from "../components/Header";
import TeamCard from "../components/TeamCard";

function about() {
  return (
    <>
      <Header>
      
      </Header>
      <div>
      <div class="container align-middle mx-auto mt-4 px-6 text-center py-8">
          <h2 class="mb-4 text-4xl font-semibold  text-center text-black">Meet the <span class="text-teal-400">Team</span></h2>
          <h3 class="my-4 text-2xl font-light text-black">Think of me like Yoda, but instead of being little and
green I wear suits and I’m awesome. I’m your bro—I’m Broda!</h3>
        </div>
        <div >
          <div class="container max-w-7xl mx-auto py-2 mb-10 px-4" >
            <div class="flex flex-wrap">
              <TeamCard name="Rohit Dhanotia" division="Web Developement" />
              <TeamCard name="Yatharth Gupta" division="AI/ML" />
              <TeamCard name="Abhinav Kumar" division="Web Developement" />
              <TeamCard name="Pilla Sekhar" division="AI/ML" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default about;
