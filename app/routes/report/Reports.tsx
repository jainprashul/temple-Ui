import moment from 'moment';
import React from 'react'
import { reportingService, type DayWiseReport, type MonthWiseReport } from 'services/reportingService';
import { formatCurrency } from 'utils/numbers';

type Props = {}

const Reports = (_: Props) => {

  const [activeTab, setActiveTab] = React.useState<string>('daywise');

  const [report, setReport] = React.useState<DayWiseReport[] | MonthWiseReport[] | null>(null);

  const [month, setMonth] = React.useState<number>(moment().month() + 1);
  const [year, setYear] = React.useState<number>(moment().year());


  React.useEffect(() => {
    if (activeTab === 'daywise') {
      reportingService.dayWiseReport(month, year).then((data) => {
        setReport(data);
      });
    } else {
      reportingService.monthWiseReport(year).then((data) => {
        setReport(data);
      });
    }
  }, [activeTab, month, year]);

  return (
    <div className='container mx-auto'>
      <h1 className='text-2xl font-bold'>Reports</h1>

      <div className="flex mt-4">

        <div role="tablist" className="tabs tabs-bordered">
          <a role="tab" className={`tab ${activeTab === 'daywise' ? "tab-active" : ''} `} onClick={() => { setActiveTab('daywise'); }}
          >Day Wise</a>
          <a role="tab" className={`tab ${activeTab === 'monthwise' ? "tab-active" : ''} `} onClick={() => { setActiveTab('monthwise'); }}
          >Month Wise</a>
        </div>
      </div>


      {activeTab === 'daywise' && <div>
        <div className="mt-4 flex ">
          <input className="input input-bordered w-full max-w-xs" type='month' value={`${year}-${month.toString().padStart(2, '0')}`} onChange={(e) => { const [y, m] = e.target.value.split('-'); setYear(parseInt(y)); setMonth(parseInt(m)); }} />
        </div>

        <div className="overflow-x-auto">

          <table className="table w-full mt-4">
            <thead>
              <tr>
                <th>Date</th>
                <th>Deposit Amount</th>
                <th>Deposit Count</th>
                <th>Booking Amount</th>
                <th>Booking Count</th>
                <th>Expense Amount</th>
                <th>Expense Count</th>
              </tr>
            </thead>
            <tbody>
              {report && report.map((item, index) => (
                <tr key={index}>
                  {'report_date' in item && <td>{item.report_date}</td>}
                  <td>{formatCurrency(item.ledger_total_amount)}</td>
                  <td>{item.ledger_entry_count}</td>
                  <td>{formatCurrency(item.bookings_total_amount)}</td>
                  <td>{item.bookings_entry_count}</td>
                  <td>{formatCurrency(item.expenses_total_amount)}</td>
                  <td>{item.expenses_entry_count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>}


      {activeTab === 'monthwise' && <div>
        <div className="mt-4 flex ">

          <select className="select select-bordered w-full max-w-xs" value={year} onChange={(e) => { setYear(parseInt(e.target.value)); }}>
            {Array.from({ length: 10 }, (_, i) => <option key={i} value={moment().year() - i}>{moment().year() - i}</option>)}
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full mt-4">
            <thead>
              <tr>
                <th>Month</th>
                <th>Deposit Amount</th>
                <th>Deposit Count</th>
                <th>Booking Amount</th>
                <th>Booking Count</th>
                <th>Expense Amount</th>
                <th>Expense Count</th>
              </tr>
            </thead>
            <tbody>
              {report && report.map((item, index) => (
                <tr key={index}>
                  {'month' in item && <td>{moment().month(item.month - 1).format('MMM, YYYY')}</td>}
                  <td>{formatCurrency(item.ledger_total_amount)}</td>
                  <td>{item.ledger_entry_count}</td>
                  <td>{formatCurrency(item.bookings_total_amount)}</td>
                  <td>{item.bookings_entry_count}</td>
                  <td>{formatCurrency(item.expenses_total_amount)}</td>
                  <td>{item.expenses_entry_count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>}










    </div>
  )
}

export default Reports