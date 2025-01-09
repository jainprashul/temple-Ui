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
        return data || [];
    },
    create: async (data : Expense) => {
        const { error } = await supabase
            .from('expenses')
            .insert(data);
        if (error) {
            throw new Error(error.message);
        }
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
        return data[0];
    }
};