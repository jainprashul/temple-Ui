import supabase from "utils/supabase";

export const reportingService = {
  dayWiseDeposit: async (
    month: number, year: number
  ) => {
    const { data, error } = await supabase
      .rpc('get_daily_ledger_report_for_month', { month, year });
    if (error) {
      throw error;
    }
    return data;
  },

  dayWiseReport : async (
    month: number, year: number
  ) => {
    const { data, error } = await supabase
      .rpc('get_daily_report_for_month', { month, year });
    if (error) {
      throw error;
    }
    return data as DayWiseReport[];
  },

  getDailyReport: async () => {
    const { data, error } = await supabase
      .rpc('get_daily_report');
    if (error) {
      throw error;
    }
    return data as DayWiseReport[];
  },

  monthWiseReport: async (
    year: number
  ) => {
    const { data, error } = await supabase
      .rpc('get_monthly_report_for_year', { year });
    if (error) {
      throw error;
    }
    return data as MonthWiseReport[];
  },
};


export type DayWiseReport = {
  report_date : string,
  ledger_total_amount : number,
  ledger_entry_count : number,
  
  bookings_total_amount : number,
  bookings_entry_count : number,

  expenses_total_amount : number,
  expenses_entry_count : number,

}

export type MonthWiseReport = {
  month : number,
  ledger_total_amount : number,
  ledger_entry_count : number,
  
  bookings_total_amount : number,
  bookings_entry_count : number,

  expenses_total_amount : number,
  expenses_entry_count : number,
}

