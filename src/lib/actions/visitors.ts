"use server";

import { supabase } from "@/lib/supabase";

export async function getCount(): Promise<number> {
  const { data, error } = await supabase
    .from("visitors")
    .select("count")
    .single();

  if (error) throw new Error(error.message);
  return data.count;
}

export async function incrementCount(): Promise<number> {
  const { data, error } = await supabase.rpc("increment_visitors");

  if (error) throw new Error(error.message);
  return data;
}
