<template>
  <div
    class="relative bg-white border border-orange-800 rounded-3xl p-8 transition hover:shadow-xl"
  >
    <div>
      <div>
        <h1 class="text-3xl font-bold mb-8 text-orange-800">Зворотній зв’язок</h1>
      </div>
    </div>
    <div
      class="text-left font-sans font-normal text-xs leading-5 tracking-normal outline-none box-border flex flex-wrap mr-0 ml-0 max-sm:max-w-full"
    >
      <div
        class="basis-2/5 p-2.5 mb-5 text-left w-full max-w-2/4 text-xl max-sm:text-left max-sm:basis-full"
      >
        <h2 class="my-2.5 mx-0">Графік роботи</h2>
        <p class="leading-9"><i class="far fa-clock"></i>Понеділок - П'ятниця : 10.00-18.00</p>
        <p class="leading-9"><i class="far fa-clock"></i>Субота - Неділя : Вихідний</p>
      </div>
      <div
        class="basis-2/5 p-2.5 mb-5 max-lg:mr-16 text-right w-full max-w-2/4 text-xl max-sm:text-left"
      >
        <h2 class="my-2.5 mx-0">Контакти</h2>
        <div class="flex flex-col mb-8">
          <a href="mailto:info@example.com" class="inline-block"
            ><i class="fas fa-envelope-open"></i> info@example.com</a
          >
          <a href="tel:+380672199123" class="inline-block"
            ><i class="fas fa-phone-alt"></i> +380672199123</a
          >
        </div>
      </div>
    </div>
  </div>

  <div
    class="relative bg-white border border-orange-800 rounded-3xl p-8 transition hover:shadow-xl mt-8"
  >
    <div class="box-border text-xs text-amber-900 ont-sans ease-in m-auto w-full py-0 max-sm:px-0">
      <h1 class="text-3xl font-bold mb-8 text-orange-800">Зв’язатися з нами:</h1>
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
                class="m-0 box-border ont-sans ease-in bg-gray-500-0.5 backdrop-blur-md rounded-xl w-full items-center h-14 flex justify-center text-white py-0 font-medium tracking-widest text-sm"
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
                class="m-0 box-border ont-sans ease-in bg-gray-500-0.5 backdrop-blur-md rounded-xl w-full items-center h-14 flex justify-center text-white py-0 font-medium tracking-widest text-sm"
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
                class="m-0 box-border ont-sans ease-in bg-gray-500-0.5 backdrop-blur-md rounded-xl w-full items-center h-14 flex justify-center text-white py-0 font-medium tracking-widest text-sm"
                >Viber<i class="bi bi-arrow-up-right"></i>
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
