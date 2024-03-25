const productUI = document.querySelector(".product__continr");
import { detaport } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  const product = new GetDeta();
  const productDeta = product.getproduct();
  const productUi = new MakerUi();
  productUi.displayProduct(productDeta);
});

class GetDeta {
  getproduct() {
    return detaport;
  }
}
class MakerUi {
  displayProduct(product) {
    let result = "";
    product.forEach((item) => {
      result += `<div class="shadow-md bg-white p-2 rounded-xl flex flex-col gap-4">
        <div x-data="{ interest: false }" class="overflow-hidden rounded-xl bg-slate-200 relative">
          <div>
            <img
              class="object-cover"
              src="${item.img}"
              alt=""
            />
          </div>
          <div
            @click="interest=!interest" class=" cursor-pointer absolute w-7 h-7  rounded-full top-1 right-2 bg-gray-300 flex items-center justify-center  hover:scale-125"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              class="md:w-6 md:h-6 hover:scale-125 "
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.14091 4.48968C9.28571 3.41685 11.1417 3.41685 12.2865 4.48968C13.4314 5.56257 13.4314 7.30211 12.2865 8.375L8.11391 12.2853C7.99332 12.3983 7.79787 12.3983 7.67729 12.2853L3.50465 8.375C2.35978 7.30211 2.35978 5.56257 3.50465 4.48968C4.64945 3.41685 6.50548 3.41685 7.65028 4.48968L7.8956 4.71957L8.14091 4.48968Z"
                :fill="interest=== true?'#FF755C':'#FFffff'"
                fill="#FFffff"
              />
            </svg>
          </div>
        </div>

        <div class="flex flex-col gap-3">
          <div class="flex items-center justify-between">
            <!-- product desc -->
            <span class="text-xs text-gray-300 md:text-base">${item.brand}</span>
            <div x-data="{ color: '${item.default_color}' }" class="flex">
              <div
                @click="color='slate'"
                :class="color==='slate'? 'ring-2  ring-slate-800':''"
                class="bg-slate-800 w-5 h-5 rounded-full border hover:ml-1 hover:scale-125 border-stone-50 cursor-pointer text-white flex justify-center items-center"
              >
                <svg
                  x-show="color==='slate'"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-3 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div
                @click="color='orange'"
                :class="color==='orange'? ' ring-2  ring-orange-400':''"
                class="bg-orange-400 w-5 h-5 rounded-full border hover:ml-1 hover:scale-125 border-stone-50 cursor-pointer -mr-0.5 text-white flex justify-center items-center"
              >
                <svg
                  x-show="color==='orange'"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-3 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div
                @click="color='yellow'"
                :class="color==='yellow'? 'ring-2  ring-yellow-400':''"
                class="bg-yellow-400 w-5 h-5 rounded-full border hover:ml-1 hover:scale-125 border-stone-50 cursor-pointer -mr-0.5 text-white flex justify-center items-center"
              >
                <svg
                  x-show="color==='yellow'"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-3 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div
                hover:mr-2
                hover:scale-110
                @click="color='indigo'"
                :class="color==='indigo'? 'ring-2  ring-indigo-800' :''"
                class="bg-indigo-800 w-5 h-5 rounded-full border hover:ml-1 hover:scale-125 border-stone-50 cursor-pointer -mr-0.5 text-white flex justify-center items-center "
              >
                <svg
                  x-show="color==='indigo'"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-3 h-3  "
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <!-- product taitel -->
          <h4 class="text-sm font-medium md:text-base">
            ${item.taitel}
          </h4>
          <span class="text-end w-full text-orange-600">${item.price}</span>
          <button
            class="text-orange-400 w-full font-bold border-t pt-2 flex items-center justify-center hover:text-orange-600 md:text-lg"
          >
            مشاهده و سفارش
          </button>
        </div>
      </div>
      `;
      productUI.innerHTML = result;
    });
  }
}
