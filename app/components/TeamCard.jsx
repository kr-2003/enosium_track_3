function TeamCard({name, division}) {
    return (
        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div class="wrapper antialiased text-gray-900">
                  <div>

                    <img src="https://source.unsplash.com/random/350x350" alt=" random imgee" class="w-full object-cover object-center rounded-lg shadow-md"></img>

                    <div class="relative px-4 -mt-16  ">
                      <div class="bg-white p-4 rounded-lg shadow-lg">
                        {/* <div class="flex items-baseline">
                          <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                            New
                          </span>
                          <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                            2 baths  &bull; 3 rooms
                          </div>
                        </div> */}

                        <h4 class="text-xl px-3 font-semibold uppercase leading-tight truncate bg-teal-200 text-teal-800 inline-block py-1 rounded-full tracking-wide">{name}</h4>

                        <div class="mt-1">
                          {division}
                        </div>
                        <div class="mt-3">
                          <span class="text-teal-600 text-md font-semibold">Socials </span>
                          <span class="text-sm text-gray-600">Links</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
    )
};

export default TeamCard;