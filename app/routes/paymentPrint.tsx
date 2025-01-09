import React, { useRef } from 'react'
import { createPDF, printComponent } from 'utils/print';
import { share } from 'utils/share';
import PaymentVoucher from '~/components/PaymentVoucher';
import { expenseService } from 'services/expenseService';
import type { Route } from './+types/paymentPrint';



export function meta(_: Route.MetaArgs) {
  return [
    { title: "Deposit Print" },
    { name: "description", content: "Deposit Print" },
  ];
}

export async function clientLoader({
  params,
}: Route.ClientLoaderArgs) {
  if (!params.id) return null;
  const product = await expenseService.get(params.id)
  return product;
}

const LedgerPrint = ({ loaderData }: Route.ComponentProps) => {

  const ref = useRef<HTMLDivElement>(null);

  if (!loaderData) return null;


  function handlePrint() {
    if (!loaderData) return;
    // window.print();
    printComponent(<PaymentVoucher data={loaderData} />);
  }


  return (
    <div>
      <PaymentVoucher data={loaderData} ref={ref} />
      <div className="flex justify-center gap-1 mt-4">
        {/* show btn in lg screen */}
        <button onClick={handlePrint} className="btn print:hidden btn-primary">Print</button>
        <button onClick={async () => {
          const name = `Adinath Dham Payment ${loaderData.to} - ${loaderData.date} - ${loaderData.id}.pdf`;
          const blob = await createPDF(ref.current!, name);

          share(blob!);
        }} className="btn print:hidden btn-primary">Share</button>
        <button onClick={() => {
          if (!ref.current) return;
          const name = `Adinath Dham Jama Parchi ${loaderData.to} - ${loaderData.date} - ${loaderData.id}.pdf`;
          createPDF(ref.current, name, true);
        }} className="btn print:hidden btn-primary">Download</button>

      </div>
    </div>
  )
}

export default LedgerPrint