<template>
    <div
      class="relative bg-white border border-slate-100 rounded-3xl p-8 transition hover:-translate-y-2 hover:shadow-xl"
    >
      <div class="m-0 p-0 box-border text-xs text-red-950 ont-sans ease-in mt-32">
        <div
          class="box-border text-xs text-amber-900 ont-sans ease-in max-w-7xl m-auto w-full py-0 px-20"
        >
          <h1 class="m-0 p-0 box-border ont-sans ease-in pb-12 text-6xl font-semibold text-black">
            Наші категорії
          </h1>
          <div
            class="m-0 p-0 box-border text-xs ont-sans text-amber-900 ease-in grid grid-cols-3 gap-5"
          >
            <router-link to="/chips">
              <div
                class="m-0 p-0 box-border text-xs text-slate-950 ont-sans ease-in no-underline border-2 border-solid-black relative rounded-3xl"
              >
                <img
                  class="m-0 p-0 box-border text-xs text-amber-900 ont-sans ease-in block w-full rounded-3xl max-h-80 min-h-80 object-cover"
                  src="/public/Fripsu.jpg"
                  alt="Фріпси"
                />
                <span
                  class="m-0 box-border text-xs ont-sans text-amber-900 absolute bottom-0 w-full p-9"
                >
                  <span
                    class="m-0 box-border ont-sans ease-in bg-gray-500-0.5 backdrop-blur-md rounded-xl w-full items-center h-14 flex justify-center text-white py-0 px-20 font-medium tracking-widest text-sm"
                    >Фріпси<i class="bi bi-arrow-up-right"></i>
                  </span>
                </span>
              </div>
            </router-link>
            <router-link to="/pastula">
              <div
                class="m-0 p-0 box-border text-xs text-slate-950 ont-sans ease-in no-underline border-2 border-solid-black relative rounded-3xl"
              >
                <img
                  class="m-0 p-0 box-border text-xs text-amber-900 ont-sans ease-in block w-full rounded-3xl max-h-80 min-h-80 object-cover"
                  src="/public/Pastula.jpg"
                  alt="Пастила"
                />
                <span
                  class="m-0 box-border text-xs ont-sans text-amber-900 absolute bottom-0 w-full p-9"
                >
                  <span
                    class="m-0 box-border ont-sans ease-in bg-gray-500-0.5 backdrop-blur-md rounded-xl w-full items-center h-14 flex justify-center text-white py-0 px-20 font-medium tracking-widest text-sm"
                    >Пастила<i class="bi bi-arrow-up-right"></i>
                  </span>
                </span>
              </div>
            </router-link>
            <router-link to="/jerki">
              <div
                href="page_jerki.html"
                class="m-0 p-0 box-border text-xs text-slate-950 ont-sans ease-in no-underline border-2 border-solid-black relative rounded-3xl"
              >
                <img
                  class="m-0 p-0 box-border text-xs text-amber-900 ont-sans ease-in block w-full rounded-3xl max-h-80 min-h-80 object-cover"
                  src="/public/Jerki.jpg"
                  alt="Джерки та ковбаски"
                />
                <span
                  class="m-0 box-border text-xs ont-sans text-amber-900 absolute bottom-0 w-full p-9"
                >
                  <span
                    class="m-0 box-border ont-sans ease-in bg-gray-500-0.5 backdrop-blur-md rounded-xl w-full items-center h-14 flex justify-center text-white py-0 px-20 font-medium tracking-widest text-sm"
                    >Джерки та ковбаски<i class="bi bi-arrow-up-right"></i>
                  </span>
                </span>
              </div>
            </router-link>
  
            <router-link to="/box">
              <div
                href="#"
                class="m-0 p-0 box-border text-xs text-slate-950 ont-sans ease-in no-underline border-2 border-solid-black relative rounded-3xl"
              >
                <img
                  class="m-0 p-0 box-border text-xs text-amber-900 ont-sans ease-in block w-full rounded-3xl max-h-80 min-h-80 object-cover"
                  src="/public/Box.jpg"
                  alt="Бокси"
                />
                <span
                  class="m-0 box-border text-xs ont-sans text-amber-900 absolute bottom-0 w-full p-9"
                >
                  <span
                    class="m-0 box-border ont-sans ease-in bg-gray-500-0.5 backdrop-blur-md rounded-xl w-full items-center h-14 flex justify-center text-white py-0 px-20 font-medium tracking-widest text-sm"
                    >Бокси<i class="bi bi-arrow-up-right"></i>
                  </span>
                </span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  