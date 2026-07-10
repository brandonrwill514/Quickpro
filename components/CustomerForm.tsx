"use client";

import { useState } from "react";

export default function CustomerForm() {
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
  });

  return (
    <div className="
bg-white
border
rounded-2xl
p-8
">
      <h2 className="text-xl font-bold mb-6">
        Customer Details
      </h2>

      <input
        placeholder="Customer Name"
        className="
border
rounded-xl
p-3
w-full
mb-4
"
      />

      <input
        placeholder="Customer Email"
        className="
border
rounded-xl
p-3
w-full
"
      />
    </div>
  );
}
