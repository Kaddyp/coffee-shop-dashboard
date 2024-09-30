import React from "react";
import OrderList from "../component/Order/OrderList";
import { ORDERS } from "../data/orders";
const Orders = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-1 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-1 xl:gap-x-8">
          <div className="group relative rounded-md border px-4 py-3 bg-white">
              <h1 className="text-center my-4 text-sm text-gray-500 font-bold">
                  Latest Orders
              </h1>
              <>
                {ORDERS.map((order, index) => (
                  <OrderList order={order} key={index}/>
                ))}
              </>
          </div>
        </div>
    </div>
  );
};

export default Orders;