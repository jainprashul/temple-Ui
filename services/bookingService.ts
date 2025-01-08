import type { Booking } from "types/Booking";
import type { Particulars } from "types/Particulars";
import supabase from "utils/supabase";

const select = `*,...particulars!inner(particular: particular),...devotees!inner(name: name)`

export const bookingService = {
    list: async () => {
        const { data, error } = await supabase
            .from('bookings')
            .select(select);
        if (error) {
            throw new Error(error.message);
        }
        return data as Booking[] || [];
    },

    listByRange: async (from: string, to: string) => {
        const { data, error } = await supabase
            .from('bookings')
            .select(select)
            .gte('date', from)
            .lte('date', to);
        if (error) {
            throw new Error(error.message);
        }
        return data as Booking[] || [];
    },

    listByDevotee: async (devoteeId: string) => {
        const { data, error } = await supabase
            .from('bookings')
            .select(select)
            .match({ devoteeId });
        if (error) {
            throw new Error(error.message);
        }
        return data as Booking[] || [];
    },

    create: async (data : Booking) => {
        const { error } = await supabase
            .from('bookings')
            .insert(data);
        if (error) {
            throw new Error(error.message);
        }
    },
    update: async (id : number | string, data : Partial<Booking>) => {
        const { error } = await supabase
            .from('bookings')
            .update(data)
            .match({ id });
        if (error) {
            throw new Error(error.message);
        }
    },
    delete: async (id : string | number) => {
        const { error } = await supabase
            .from('bookings')
            .delete()
            .match({ id });
        if (error) {
            throw new Error(error.message);
        }
    },
    get: async (id : string) => {
        const { data, error } = await supabase
            .from('bookings')
            .select(select)
            .match({ id });
        if (error) {
            throw new Error(error.message);
        }
        return data[0] as Booking;
    },

    getParticulars : async () => {
        const { data, error } = await supabase
            .from('particulars')
            .select('*');
        if (error) {
            throw new Error(error.message);
        }
        return data as Particulars[] || [];
    }

};