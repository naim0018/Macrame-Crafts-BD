import React, { useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import ShowCartData from "../../../Component/Pages/Carts/ShowCartData";

const PendingModal = ({ subTotal,email,userCarts,openModal, setOpenModal }) => {
  const [name,setName]=useState()
  const [address,setAddress]=useState()
  const [city,setCity]=useState()
  const [country,setCountry]=useState()
  // const [email,setEmail]=useState()


  const handleShoppingDetails = (e) =>{
    e.preventDefault();
    
  }

  return (
    <div>
      <div className="w-72 mx-auto flex items-center justify-center absolute">
        <div
          className={`fixed flex justify-center items-center z-[100] ${
            openModal ? "visible opacity-1" : "invisible opacity-0"
          } duration-300 inset-0 w-full h-full`}
        >
          <div
            onClick={(e_) => e_.stopPropagation()}
            className={`absolute overflow-x-hidden overflow-y-scroll w-full h-full flex justify-center bg-white drop-shadow-2xl rounded-lg ${
              openModal
                ? "translate-y-0 opacity-1 duration-300"
                : "translate-y-32 opacity-0 duration-1000"
            }`}
          >
            <main className="px-4 sm:px-6 lg:px-8 py-8">
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
                className="mr-0 mx-auto flex bg-slate-950 text-white px-3 py-2 rounded-lg mb-6"
              >
                Close
              </button>
              <form onSubmit={handleShoppingDetails} className="grid gap-8 lg:grid-cols-2">
                <div className="space-y-8 lg:mb-6">
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="flex flex-col space-y-1.5 lg:p-6 p-2">
                      <h3 className="text-2xl font-semibold whitespace-nowrap">
                        Shipping Details
                      </h3>
                    </div>
                    <div className="lg:p-6 p-2">
                      {/* Shipping Details form */}
                      <form className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Name</label>
                          <input
                          onBlur={e=>setName(e.target.value)}
                            className="flex h-10 w-full rounded-md border px-3"
                            placeholder="Enter your name"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Contact No</label>
                          <input
                          onBlur={e=>setName(e.target.value)}
                            className="flex h-10 w-full rounded-md border px-3"
                            placeholder="Enter your Number"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium">Address</label>
                          <input
                          onBlur={e=>setAddress(e.target.value)}
                            className="flex h-10 w-full rounded-md border px-3"
                            placeholder="Enter your address"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">City</label>
                          <input
                          onBlur={e=>setCity(e.target.value)}
                            className="flex h-10 w-full rounded-md border px-3"
                            placeholder="Enter your city"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Country</label>
                          <input
                          onBlur={e=>setCountry(e.target.value)}
                            className="flex h-10 w-full rounded-md border px-3"
                            placeholder="Enter your country"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-card  shadow-sm ">
                    <div className="flex flex-col space-y-1.5 lg:p-6 p-2">
                      <h3 className="text-2xl font-semibold whitespace-nowrap">
                        Payment Information
                      </h3>
                    </div>
                    <div className="lg:p-6 p-2">
                      {/* Personal Information details form */}
                      <form className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium leading-none">
                            Card Number
                          </label>
                          <input
                            className="flex h-10 w-full rounded-md border px-3"
                            placeholder="Enter your card number"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium leading-none">
                              Expiry Date
                            </label>
                            <input
                              className="flex h-10 w-full rounded-md border px-3"
                              placeholder="MM/YY"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium leading-none">
                              CVV
                            </label>
                            <input
                              className="flex h-10 w-full rounded-md border px-3"
                              placeholder="Enter your CVV"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium leading-none">
                            Billing Address
                          </label>
                          <input
                            className="flex h-10 w-full rounded-md border px-3"
                            placeholder="Enter your billing address"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
{/* OrderSummery */}
                <div className="space-y-8 lg:mb-0 mb-6">
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="flex flex-col space-y-1.5 lg:p-6 p-2">
                      <h3 className="text-2xl font-semibold whitespace-nowrap">
                        Order Summary
                      </h3>
                    </div>
                    {/* Checkout form */}
                    <div className="lg:p-6 p-2">
                      <div className="space-y-4">
                        {
                          userCarts?.map(item=> <ShowCartData key={item._id} item={item} />)
                        }
                        <div className="border-t border-gray-200  mt-4 pt-4 flex justify-between font-semibold">
                          <span>Total</span>
                          <span className="flex items-center justify-center">{subTotal}<TbCurrencyTaka /></span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center lg:p-6 p-2">
                      <button
                        onClick={() => {
                          setOpenModal(false);
                        }}
                        className="inline-flex items-center bg-slate-950 text-white justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                      >
                        Complete Purchase
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingModal;


