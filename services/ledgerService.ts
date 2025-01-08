import type { Ledger } from "types/Ledger";
import supabase from "utils/supabase";

const select = `*,...devotees!inner(name: name)`

export const ledgerService = {
    list: async () => {
        const { data, error } = await supabase
            .from('ledger')
            .select(select);
        if (error) {
            throw new Error(error.message);
        }
        return data as Ledger[] || [];
    },

    listByDevotee: async (devoteeId: string) => {
        const { data, error } = await supabase
            .from('ledger')
            .select(select)
            .match({ devoteeId });
        if (error) {
            throw new Error(error.message);
        }
        return data as Ledger[] || [];
    },

    listByRange: async (from: string, to: string) => {
        const { data, error } = await supabase
            .from('ledger')
            .select(select)
            .gte('date', from)
            .lte('date', to);
        if (error) {
            throw new Error(error.message);
        }
        return data as any as Ledger[] || [];
    },

    get: async (id: string) => {
        const { data, error } = await supabase
            .from('ledger')
            .select(select)
            .match({ id });
        if (error) {
            throw new Error(error.message);
        }
        return data[0] as Ledger;
    },

    delete: async (id: string) => {
        const { error } = await supabase
            .from('ledger')
            .delete()
            .match({ id });
        if (error) {
            throw new Error(error.message);
        }
    },
};