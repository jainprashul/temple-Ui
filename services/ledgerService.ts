import type { Ledger } from "types/Ledger";
import supabase from "utils/supabase";

export const ledgerService = {
    list: async () => {
        const { data, error } = await supabase
            .from('ledger')
            .select('*');
        if (error) {
            throw new Error(error.message);
        }
        return data as Ledger[] || [];
    },

    get: async (id : string) => {
        const { data, error } = await supabase
            .from('ledger')
            .select('*')
            .match({ id });
        if (error) {
            throw new Error(error.message);
        }
        return data[0] as Ledger;
    }
};