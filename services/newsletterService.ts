import type { Newsletter } from "types/Newsletter"
import supabase from "utils/supabase"

export const newsletterService = {
  list: async () => {
    const { data, error } = await supabase
      .from("newsletter")
      .select("*")
      .order("date", { ascending: false })
    if (error) {
      throw new Error(error.message)
    }
    return data as Newsletter[] || []
  },
  post: async (newsletter: Newsletter) => {
    const { error } = await supabase
      .from("newsletter")
      .insert([newsletter])
    if (error) {
      throw new Error(error.message)
    }
   
  },
}

export default newsletterService