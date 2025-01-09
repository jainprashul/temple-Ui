import type { Expense } from "types/Expense";
import supabase from "utils/supabase";

export const expenseService = {
    list: async () => {
        const { data, error } = await supabase
            .from('expenses')
            .select('*');
        if (error) {
            throw new Error(error.message);
        }
        return data || [] as Expense[];
    },

    listByRange: async (from : string, to : string) => {
        const { data, error } = await supabase
            .from('expenses')
            .select('*')
            .gte('date', from)
            .lte('date', to);
        if (error) {
            throw new Error(error.message);
        }
        return data || [] as Expense[];
    },

    create: async (data : Expense) => {
        const {data : _data, error } = await supabase
            .from('expenses')
            .insert(data)
            .select('id')
        if (error) {
            throw new Error(error.message);
        }
        return _data![0].id;
    },
    update: async (id : string, data : Partial<Expense>) => {
        const { error } = await supabase
            .from('expenses')
            .update(data)
            .match({ id });
        if (error) {
            throw new Error(error.message);
        }
    },
    delete: async (id : string | number) => {
        const { error } = await supabase
            .from('expenses')
            .delete()
            .match({ id });
        if (error) {
            throw new Error(error.message);
        }
    },
    get: async (id : string) => {
        const { data, error } = await supabase
            .from('expenses')
            .select('*')
            .match({ id });
        if (error) {
            throw new Error(error.message);
        }
        return data[0] as Expense;
    }
};