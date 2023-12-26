import React, { useState } from "react";

const PaymentInfo = () => {
  const [tab, setTab] = useState("bank");
  return (
    <div>
      {/*==============================Payment Info start===========================*/}
      <div className="mt-6 sm:mt-6 md:mt-10 lg:mt-10">
        <div className="bg-gray-200 p-1 sm:p-1 md:p-3 lg:p-3 rounded-lg">
          <div className="flex justify-between items-center gap-6">
            <h1 className="text-sm sm:text-sm md:text-xl lg:text-xl">
              Payment Info
            </h1>
            <p className="text-xs sm:text-xs md:text-tMd lg:text-tMd bg-gray-300 p-2 rounded-full">
              03
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center gap-10 py-8">
          <button
            className={`pay-btn ${tab === "cash" ? "active" : ""}`}
            onClick={() => {
              setTab("cash");
            }}
          >
            Cash
          </button>
          <button
            className={`pay-btn ${tab === "bank" ? "active" : ""}`}
            onClick={() => {
              setTab("bank");
            }}
          >
            Bank
          </button>
          <button
            className={`pay-btn ${tab === "mobile" ? "active" : ""}`}
            onClick={() => {
              setTab("mobile");
            }}
          >
            Mobile
          </button>
        </div>
        {/*========================= Cash Payment ===============================*/}
        {tab === "cash" && (
          <div className="">
            <p>Cash</p>
          </div>
        )}
        {/*========================= bank Payment ===============================*/}
        {tab === "bank" && (
          <div>
            {/*=====================================================================*/}
            <div className="flex justify-between gap-6">
              <input
                type="text"
                id="bank_name"
                name="bank_name"
                placeholder="Bank Name"
                className="w-1/2 h-8 sm:h-8 md:h-9 lg:h-9 text-sm sm:text-sm md:text-tMd lg:text-tMd
                 rounded-lg px-4 border-2"
                required
              />
              <input
                type="text"
                id="branch-name"
                name="branch-name"
                placeholder="Branch Name"
                className="w-1/2 h-8 sm:h-8 md:h-9 lg:h-9 text-sm sm:text-sm md:text-tMd lg:text-tMd
                 rounded-lg px-4  border-2"
                required
              />
            </div>
            {/*=====================================================================*/}
            <div className="flex justify-between gap-6 pt-5">
              <input
                type="text"
                id="holder-name"
                name="holder-name"
                placeholder="Holder Name"
                className="w-1/2 h-8 sm:h-8 md:h-9 lg:h-9 text-sm sm:text-sm md:text-tMd lg:text-tMd
                 rounded-lg px-4  border-2"
                required
              />
              <input
                type="number"
                id="account_no"
                name="account_no"
                placeholder="Account No"
                className="w-1/2 h-8 sm:h-8 md:h-9 lg:h-9 text-sm sm:text-sm md:text-tMd lg:text-tMd
                 rounded-lg px-4  border-2"
                required
              />
            </div>
            {/*=====================================================================*/}
            <div className="flex justify-between gap-6 pt-5">
              <input
                type="number"
                id="amount"
                name="amount"
                placeholder="Amount"
                className="w-1/2 h-8 sm:h-8 md:h-9 lg:h-9 text-sm sm:text-sm md:text-tMd lg:text-tMd
                 rounded-lg px-4  border-2"
                required
              />
              <input
                type="text"
                id="note"
                name="note"
                placeholder="Note"
                className="w-1/2 h-8 sm:h-8 md:h-9 lg:h-9 text-sm sm:text-sm md:text-tMd lg:text-tMd
                 rounded-lg px-4  border-2"
                required
              />
            </div>
            {/*=====================================================================*/}
          </div>
        )}
        {/*========================= Mobile Payment ===============================*/}
        {tab === "mobile" && (
          <div>
            <p>Mobile</p>
          </div>
        )}
        {/*========================= Input Payment End ===========================*/}
        <div className="pt-6 sm:pt-6 md:pt-4 lg:pt-8 flex">
          <button className="pymentBtnTwo">Procced Payment</button>
          <button
            className="px-6 sm:px-6 md:px-10 lg:px-10 bg-white text-sm sm:text-sm md:text-sm lg:text-tMd
           border-2 border-green-500 rounded-lg mx-12"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
