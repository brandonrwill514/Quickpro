"use client";

import { useState } from "react";

export default function CompanyProfile() {
  const [company, setCompany] = useState("");

  const [name, setName] = useState("");

  return (
    <div className="
bg-white
rounded-2xl
border
p-8
">
      <h2 className="
text-2xl
font-bold
mb-6
">
        Company Information
      </h2>

      <input
        placeholder="Company Name"
        value={company}
        onChange={(e) =>
          setCompany(e.target.value)
        }
        className="
border
rounded-xl
p-3
w-full
mb-4
"
      />

      <input
        placeholder="Your Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
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
