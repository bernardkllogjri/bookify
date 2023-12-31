import { Dialog, Transition } from "@headlessui/react";
import { FC, Fragment } from "react";

import Cart from "../cart/Cart";
import Link from "next/link";
import { ProductInCart } from "@/app/product/types";
import { XMarkIcon } from "@heroicons/react/24/outline";

type CartDrawerProps = {
  cartDrawerOpen: boolean;
  products: ProductInCart[];
  removeProductFromCart: (id: string) => void;
  closeCartDrawer: () => void;
  cartTotalPrice: string;
};

const CartDrawer: FC<CartDrawerProps> = ({
  cartDrawerOpen,
  products,
  removeProductFromCart,
  closeCartDrawer,
  cartTotalPrice,
}) => {
  return (
    <Transition.Root show={cartDrawerOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeCartDrawer}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300 sm:duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300 sm:duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={closeCartDrawer}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <Cart
                          productsList={products}
                          removeProductFromCart={removeProductFromCart}
                        />
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{cartTotalPrice}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      {!!products.length && (
                        <>
                          <div className="mt-6">
                            <Link
                              href="/checkout"
                              onClick={closeCartDrawer}
                              className="flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                            >
                              Checkout
                            </Link>
                          </div>
                          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                              or&nbsp;
                              <button
                                type="button"
                                className="font-medium text-blue-600 hover:text-blue-500"
                                onClick={closeCartDrawer}
                              >
                                Continue Shopping
                                <span aria-hidden="true"> &rarr;</span>
                              </button>
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CartDrawer;
