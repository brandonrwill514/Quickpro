import "./globals.css";
import { headers } from "next/headers";
import Link from "next/link";

import {
Home,
LayoutDashboard,
Sparkles,
History,
Settings
} from "lucide-react";

export const metadata = {
  title: "QuickQuo",
  description: "AI Professional Quotes"
};

export default function RootLayout({
children,
}:{
children:React.ReactNode
}) {

return (

<html lang="en">

<body className="bg-zinc-950 text-white">

{children}

</body>

</html>

)

}
