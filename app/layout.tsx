import "./globals.css";

export const metadata = {
  title: "QuickQuo",
  description: "AI Professional Quoting Platform",
};

export default function RootLayout({
children,
}:{
children:React.ReactNode
}){

return (

<html lang="en">

<body>

{children}

</body>

</html>

)

}
