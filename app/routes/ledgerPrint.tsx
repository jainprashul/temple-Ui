import React, { useRef } from 'react'
import type { Route } from './+types/ledgerPrint';
import { devoteeService } from 'services/devoteeService';
import { ledgerService } from 'services/ledgerService';
import DepositSlip from '~/components/DepositSlip';
import { createPDF, printComponent } from 'utils/print';
import { share } from 'utils/share';



export function meta(_: Route.MetaArgs) {
  return [
    { title: "Deposit Print" },
    { name: "description", content: "Deposit Print" },
  ];
}

export async function clientLoader({
  params,
}: Route.ClientLoaderArgs) {
  if(!params.id) return null;
  const product = await ledgerService.get(params.id) as any;
  product.devotee = await devoteeService.get(product.devoteeId);
  return product;
}

const LedgerPrint = ({ loaderData }: Route.ComponentProps) => {

  const ref = useRef<HTMLDivElement>(null);

  if (!loaderData) return null;


function handlePrint() {
  // window.print();
  printComponent(<DepositSlip ledger={loaderData} />);
}


  return (
    <div>
      <DepositSlip ledger={loaderData} ref={ref}  />
      <div className="flex justify-center gap-1 mt-4">
        <button onClick={handlePrint} className="btn print:hidden btn-primary">Print</button>
        <button onClick={async () => {
          const name = `Adinath Dham Jama Parchi ${loaderData.devotee.name} - ${loaderData.date} - ${loaderData.id}.pdf`;
          const blob = await createPDF(ref.current!, name);
          share(blob);
        }} className="btn print:hidden btn-primary">Share</button>
        <button onClick={() => {
          if(!ref.current) return;
          const name = `Adinath Dham Jama Parchi ${loaderData.devotee.name} - ${loaderData.date} - ${loaderData.id}.pdf`;
          createPDF(ref.current, name, true);
        }} className="btn print:hidden btn-primary">Download</button>

      </div>
    </div>
  )
}

export default LedgerPrint