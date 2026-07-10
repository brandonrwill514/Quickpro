import { supabase } from "@/lib/supabase";

export async function GET() {

  const { data, error } = await supabase
    .from("trade_pricing")
    .select("*");


  if (error) {

    return Response.json({
      success:false,
      error:error.message
    });

  }


  return Response.json({

    success:true,

    data

  });
}
