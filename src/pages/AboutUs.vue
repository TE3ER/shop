<template>
  <div class="relative bg-white rounded-3xl p-8 max-sm:px-0">
    <div class="m-0 p-0 box-border text-xs text-red-950 ont-sans ease-in mt-32 max-sm:mt-1.5">
      <div
        class="box-border text-xs text-amber-900 ont-sans ease-in max-w-7xl m-auto w-full py-0 px-20 max-sm:px-0"
      >
        <h1
          class="m-0 p-0 box-border ont-sans ease-in pb-12 text-6xl font-semibold text-black max-sm:text-2xl"
        >
          Замовити можна також:
        </h1>
        <div
          class="m-0 p-0 box-border text-xs ont-sans text-amber-900 ease-in grid grid-cols-3 gap-5 max-sm:grid max-md:grid max-lg:grid max-xl:grid max-sm:grid-cols-1 max-md:grid-cols-1 max-lg:grid-cols-1 max-xl:grid-cols-2 max-sm:w-full"
          v-auto-animate
        >
          <div
            class="relative m-0 p-0 box-border text-xs text-slate-950 ont-sans ease-in no-underline border-2 border-solid-black relative rounded-3xl hover:shadow-[0_35px_60px_-15px_rgba(0,136,204,1)] transition hover:-translate-y-2"
          >
            <a href="https://t.me/TE33ER">
              <img
                class="m-0 p-0 box-border text-xs text-amber-900 ont-sans ease-in block w-full rounded-3xl max-h-80 min-h-80 object-cover max-sm:max-h-40 max-sm:min-h-40 max-sm:max-h-150 max-sm:min-h-150 max-sm:w-full"
                src="/public/Telegram_logo.svg.webp"
                alt="Фріпси"
              />

              <span
                class="m-0 box-border text-xs ont-sans text-amber-900 absolute bottom-0 w-full p-9"
              >
                <span
                  class="m-0 box-border ont-sans ease-in bg-gray-500-0.5 backdrop-blur-md rounded-xl w-full items-center h-14 flex justify-center text-white py-0 px-20 font-medium tracking-widest text-sm"
                  >Telegram<i class="bi bi-arrow-up-right"></i>
                </span>
              </span>
            </a>
          </div>

          <div
            class="relative m-0 p-0 box-border text-xs text-slate-950 ont-sans ease-in no-underline border-2 border-solid-black relative rounded-3xl hover:shadow-[0_35px_60px_-15px_rgba(255,105,180,1)] transition hover:-translate-y-2"
          >
            <a href="https://www.instagram.com/chips_shop.ua?igsh=cTAyNnUzaDViZTlh">
              <img
                class="m-0 p-0 box-border text-xs text-amber-900 ont-sans ease-in block w-full rounded-3xl max-h-80 min-h-80 object-cover max-sm:max-h-40 max-sm:min-h-40 max-sm:max-h-150 max-sm:min-h-150 max-sm:w-full"
                src="/public/Instagram_icon.png.webp"
                alt="Фріпси"
              />

              <span
                class="m-0 box-border text-xs ont-sans text-amber-900 absolute bottom-0 w-full p-9"
              >
                <span
                  class="m-0 box-border ont-sans ease-in bg-gray-500-0.5 backdrop-blur-md rounded-xl w-full items-center h-14 flex justify-center text-white py-0 px-20 font-medium tracking-widest text-sm"
                  >Instagram<i class="bi bi-arrow-up-right"></i>
                </span>
              </span>
            </a>
          </div>
          <div
            class="relative m-0 p-0 box-border text-xs text-slate-950 ont-sans ease-in no-underline border-2 border-solid-black relative rounded-3xl hover:shadow-[0_35px_60px_-15px_rgba(128,0,128,1)] transition hover:-translate-y-2"
          >
            <a href="viber://chat?number=0672199123">
              <img
                class="m-0 p-0 box-border text-xs text-amber-900 ont-sans ease-in block w-full rounded-3xl max-h-80 min-h-80 object-cover max-sm:max-h-40 max-sm:min-h-40 max-sm:max-h-150 max-sm:min-h-150 max-sm:w-full"
                src="/public/vibersvg.svg"
                alt="Фріпси"
              />

              <span
                class="m-0 box-border text-xs ont-sans text-amber-900 absolute bottom-0 w-full p-9"
              >
                <span
                  class="m-0 box-border ont-sans ease-in bg-gray-500-0.5 backdrop-blur-md rounded-xl w-full items-center h-14 flex justify-center text-white py-0 px-20 font-medium tracking-widest text-sm"
                  >Viber<i class="bi bi-arrow-up-right"></i>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
