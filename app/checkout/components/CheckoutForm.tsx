"use client";

import Cart from "@/app/__shared/components/cart/Cart";
import { ContactCardIcon } from "@/app/__shared/icons/ContactCardIcon";
import { CreditCardIcon } from "@/app/__shared/icons/CreditCardIcon";
import { EmailIcon } from "@/app/__shared/icons/EmailIcon";
import { FC } from "react";
import Form from "@/app/__shared/components/form";
import Image from "next/image";
import Link from "next/link";
import { ProductInCart } from "@/app/product/types";

type CheckoutFormProps = {
  products: ProductInCart[];
  removeProductFromCart: (id: string) => void;
  cartTotalPrice: string;
};

const CheckoutForm: FC<CheckoutFormProps> = ({
  products,
  removeProductFromCart,
  cartTotalPrice,
}) => {
  return (
    <>
      <div className="flex flex-col items-center border-b pb-8 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <Link href="/checkout" className="text-2xl font-bold text-gray-800">
          Checkout
        </Link>
        <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div className="relative">
            <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </a>
                <span className="font-semibold text-gray-900">Shop</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                  href="#"
                >
                  2
                </a>
                <span className="font-semibold text-gray-900">Shipping</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                  href="#"
                >
                  3
                </a>
                <span className="font-semibold text-gray-500">Payment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          {!!products.length && (
            <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6 overflow-y-auto max-h-96">
              <Cart
                productsList={products}
                removeProductFromCart={removeProductFromCart}
              />
            </div>
          )}
          <p className="mt-8 text-lg font-medium">Shipping Methods</p>
          <form className="mt-5 grid gap-6">
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_1"
                type="radio"
                name="radio"
                checked
                readOnly
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                htmlFor="radio_1"
              >
                <img
                  className="w-14 object-contain"
                  src="https://componentland.com/images/naorrAeygcJzX0SyNI4Y0.png"
                  alt=""
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Fedex Delivery</span>
                  <p className="text-slate-500 text-sm leading-6">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_2"
                type="radio"
                name="radio"
                checked
                readOnly
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                htmlFor="radio_2"
              >
                <img
                  className="w-14 object-contain"
                  src="https://componentland.com/images/oG8xsl3xsOkwkMsrLGKM4.png"
                  alt=""
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Fedex Delivery</span>
                  <p className="text-slate-500 text-sm leading-6">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
          </form>
        </div>
        <div className="mt-10 bg-gray-50 p-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">
            Complete your order by providing your payment details.
          </p>
          <label
            htmlFor="Email"
            className="mt-4 mb-2 block text-sm font-medium"
          >
            Email
          </label>
          <Form name="checkout">
            <Form.Input
              name="email"
              placeholder="Email"
              className="pl-11"
              prepend={
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <EmailIcon />
                </div>
              }
            />
            <label
              htmlFor="card-holder"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Card Holder
            </label>
            <div className="relative">
              <Form.Input
                id="card-holder"
                name="cardholderName"
                className="h-11 bg-white w-full pl-11"
                isHostedField
                prepend={
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <ContactCardIcon />
                  </div>
                }
              />
            </div>
            <label className="mt-4 mb-2 block text-sm font-medium">
              Card Details
            </label>
            <div className="flex gap-1">
              <Form.Input
                name="number"
                id="card-number"
                isHostedField
                prepend={
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <CreditCardIcon />
                  </div>
                }
                containerClassName="w-7/12 flex-shrink-0"
                className="h-11 bg-white w-full pl-11"
              />

              <Form.Input name="expirationDate" id="expiration-date" isHostedField className="h-11 bg-white w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none" />
              <Form.Input name="cvv" id="cvv" isHostedField className="h-11 bg-white w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none" />
              {/* <div
                id="expiration-date"
                className="h-11 bg-white w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none"
              />
              <div
                id="cvv"
                className="h-11 bg-white w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none"
              /> */}
            </div>
            <label
              htmlFor="billing-address"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Billing Address
            </label>
            <div className="flex gap-1">
              {/* <div className="relative flex-shrink-0 w-2/3"> */}
              <Form.Input
                name="billingAddress"
                placeholder="Billing Address"
                className="pl-11"
                containerClassName="flex-shrink-0 w-2/3"
                prepend={
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <Image
                      height={16}
                      width={16}
                      className="object-contain"
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                    />
                  </div>
                }
              />
              <Form.Input name="billingZip" placeholder="ZIP" />
            </div>
            {!!products.length && (
              <>
                <div className="mt-6 border-t border-b py-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">
                      Subtotal
                    </p>
                    <p className="font-semibold text-gray-900">
                      {cartTotalPrice}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">
                      Shipping
                    </p>
                    <p className="font-semibold text-gray-900">$8.00</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Total</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {cartTotalPrice}
                  </p>
                </div>
                <Form.Button
                  // onClick={onFormSubmit}
                  className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
                >
                  Place Order
                </Form.Button>
              </>
            )}
          </Form>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
