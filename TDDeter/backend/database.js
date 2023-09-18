import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";
require("dotenv").config();
import "react-native-url-polyfill/auto";

const database = createClient(
  process.env.EXPO_PUBLIC_DB_URL,
  process.env.EXPO_PUBLIC_DB_API_KEY,
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
    db: {
      schema: "testing",
    },
  },
);

module.exports = database;
