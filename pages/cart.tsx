import React from "react";
import Image from "next/image";

const Cart = () => {
  return (
    <>
      <div className="flex justify-between items-start max-w-[1100px] m-auto">
        <div className="w-full pr-5">
          <div className="shadow-md mb-4 border border-[#f0f0f0]">
            <h1 className="p-3 font-bold text-2xl text-black">CARTUL MEU</h1>
          </div>
          <div className="flex justify-between shadow-md mb-2 border border-[#f0f0f0] h-[180px] ">
            <div className=" items-start   flex">
              <div>
                <Image
                  src="/images/agenda2.png"
                  alt=""
                  width={230}
                  height={100}
                />
              </div>
              <div className="ml-3 mt-2">
                <h1 className="text-[#6F6F6F] text-xl ">Denumirea la produs</h1>
                <p className="font-semibold text-3xl mt-1 text-black">
                  $ 249.99
                </p>
                <div className="flex justify-between mt-5">
                  <p className="text-[#2D3046] text-xl">Cantitate</p>
                  <div className="relative inline-flex">
                    <select className="appearance-none bg-white border border-gray-300 text-gray-600 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
                      <svg
                        className="fill-current h-7 w-7"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 25"
                      >
                        <path d="M9.293 12.293a1 1 0 011.414 0L12 13.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414 1 1 0 011.414 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="float-right mt-3 mr-4 ">
                <Image
                  src="/images/bin.png"
                  alt=""
                  width={25}
                  height={0}
                  className=""
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between shadow-md mb-2 border border-[#f0f0f0] h-[180px] ">
            <div className=" items-start flex">
              <div>
                <Image
                  src="/images/agenda2.png"
                  alt=""
                  width={230}
                  height={100}
                />
              </div>
              <div className="ml-3 mt-2">
                <h1 className="text-[#6F6F6F] text-xl ">Denumirea la produs</h1>
                <p className="font-semibold text-3xl mt-1 text-black">
                  $ 249.99
                </p>
                <div className="flex justify-between mt-5">
                  <p className="text-[#2D3046] text-xl">Cantitate</p>
                  <div className="relative inline-flex">
                    <select className="appearance-none bg-white border border-gray-300 text-gray-600 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
                      <svg
                        className="fill-current h-7 w-7"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 25"
                      >
                        <path d="M9.293 12.293a1 1 0 011.414 0L12 13.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414 1 1 0 011.414 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="float-right mt-3 mr-4 ">
                <Image
                  src="/images/bin.png"
                  alt=""
                  width={25}
                  height={0}
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="shadow-md border mt-4 border-[#f0f0f0] p-2 text-right">
            <p className="text-[#6F6F6F]">
              SUB-TOTAL{" "}
              <span className="font-bold text-2xl text-black ml-2">
                $ 309,99
              </span>
            </p>
          </div>
        </div>
        <div className="shadow-md h-[230px] w-[270px] border border-[#f0f0f0]">
          <h1 className="text-2xl px-3 mt-2 font-bold">TOTAL</h1>
          <hr className="w-[89%] m-auto bg-[#6F6F6F] " />
          <p className="text-[#6F6F6F] text-[14px] flex items-center justify-between px-3 mt-2">
            Sub-Total
            <span className="font-semibold text-[24px] text-black">
              $ 309,99
            </span>
          </p>
          <p className="text-[#6F6F6F] text-[14px] px-3 mt-2">Livrarea</p>
          <button className="bg-[#453CF7] text-white font-medium p-3 rounded-lg mx-auto flex justify-center mt-10 hover:bg-[#3730b9]">
            COMANDĂ
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
