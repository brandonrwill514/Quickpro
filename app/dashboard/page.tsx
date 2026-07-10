"use client";

import Link from "next/link";
import {
  Sparkles,
  FileText,
  TrendingUp,
  Clock,
  Mic
} from "lucide-react";


export default function DashboardPage() {


  return (

    <main className="
      min-h-screen
      bg-zinc-950
      text-white
      p-8
    ">


      <div className="
        max-w-7xl
        mx-auto
      ">


        {/* HEADER */}

        <div className="mb-10">

          <h1 className="
            text-4xl
            font-bold
          ">
            Welcome back
          </h1>


          <p className="
            text-zinc-400
            mt-3
            text-lg
          ">
            Create professional quotes faster with AI.
          </p>

        </div>





        {/* MAIN AI QUOTE CARD */}

        <section className="
          bg-gradient-to-br
          from-violet-600
          to-teal-500
          rounded-3xl
          p-8
          mb-8
        ">


          <div className="
            flex
            items-center
            gap-3
            mb-4
          ">

            <Sparkles size={28}/>


            <h2 className="
              text-2xl
              font-bold
            ">
              AI Professional Quotes
            </h2>


          </div>




          <p className="
            text-white/80
            text-lg
            mb-6
          ">
            Describe your project or use voice AI.
            QuickQuo creates a professional estimate.
          </p>




          <Link

            href="/workspace"

            className="
              inline-flex
              items-center
              gap-3
              bg-white
              text-black
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:scale-105
              transition
            "

          >

            <Mic size={20}/>

            Create New Quote


          </Link>



        </section>






        {/* STATS */}


        <div className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-6
          mb-8
        ">




          <div className="
            bg-zinc-900
            border
            border-zinc-800
            rounded-2xl
            p-6
          ">

            <div className="
              flex
              items-center
              gap-3
              text-zinc-400
            ">

              <FileText size={20}/>

              Quotes Created

            </div>



            <p className="
              text-4xl
              font-bold
              mt-4
            ">
              0
            </p>


          </div>






          <div className="
            bg-zinc-900
            border
            border-zinc-800
            rounded-2xl
            p-6
          ">


            <div className="
              flex
              items-center
              gap-3
              text-zinc-400
            ">

              <TrendingUp size={20}/>

              Revenue

            </div>




            <p className="
              text-4xl
              font-bold
              mt-4
            ">
              $0
            </p>


          </div>






          <div className="
            bg-zinc-900
            border
            border-zinc-800
            rounded-2xl
            p-6
          ">


            <div className="
              flex
              items-center
              gap-3
              text-zinc-400
            ">

              <Clock size={20}/>

              Time Saved

            </div>




            <p className="
              text-4xl
              font-bold
              mt-4
            ">
              0 hrs
            </p>


          </div>



        </div>






        {/* RECENT QUOTES */}


        <section className="
          bg-zinc-900
          border
          border-zinc-800
          rounded-3xl
          p-8
        ">


          <h2 className="
            text-xl
            font-semibold
            mb-6
          ">
            Recent Quotes
          </h2>




          <div className="
            text-center
            py-12
            text-zinc-500
          ">

            No quotes created yet.

            <br/>

            Your AI generated quotes will appear here.

          </div>



        </section>





      </div>


    </main>

  );

}
