// create database
import { SupabaseClient, createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import type { Database } from "../types/database.types";
// Server Configuration
dotenv.config();

const supabaseURL: string | undefined = process.env.SUPABASE_URL;
const supabaseKey: string | undefined = process.env.SUPABASE_KEY;

let supabase_connection: SupabaseClient<Database> | undefined = undefined;

function getSupabaseConnection(): SupabaseClient<Database> {
  if (!supabaseURL || !supabaseKey) {
    throw new Error("Supabase URL and Key must be provided");
  }

  return (supabase_connection = createClient<Database>(supabaseURL, supabaseKey));
}

export default getSupabaseConnection;
