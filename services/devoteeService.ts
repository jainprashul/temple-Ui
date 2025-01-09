import type { Devotee } from "types/Devotee";
import type { Ledger } from "types/Ledger";
import supabase from "utils/supabase";

export const devoteeService = {
    list: async () => {
        const { data, error } = await supabase
            .from('devotees')
            .select('*');
        if (error) {
            throw new Error(error.message);
        }
        return data as Devotee[] || [];
    },
    create: async (data : Devotee) => {
        const { error } = await supabase
            .from('devotees')
            .insert(data);
        if (error) {
            throw new Error(error.message);
        }
    },
    update: async (id : number | string, data : Partial<Devotee>) => {
        const { error } = await supabase
            .from('devotees')
            .update(data)
            .match({ id });
        if (error) {
            throw new Error(error.message);
        }
    },
    delete: async (id : string | number) => {
        const { error } = await supabase
            .from('devotees')
            .delete()
            .match({ id });
        if (error) {
            throw new Error(error.message);
        }
    },
    get: async (id : string) => {
        const { data, error } = await supabase
            .from('devotees')
            .select('*')
            .match({ id });
        if (error) {
            throw new Error(error.message);
        }
        return data[0] as Devotee;
    },

    deposit: async (data : Ledger) => {
        const { data : _data, error } = await supabase
            .from('ledger')
            .insert(data)
            .select('id');
        if (error) {
            throw new Error(error.message);
        }
        return _data[0].id as string;
    }
};