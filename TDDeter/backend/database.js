import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "react-native-url-polyfill/auto";
import { EXPO_PUBLIC_DB_URL, EXPO_PUBLIC_DB_API_KEY } from "@env";

const database = createClient(EXPO_PUBLIC_DB_URL, EXPO_PUBLIC_DB_API_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
  db: {
    schema: "testing",
  },
});

module.exports = database;
