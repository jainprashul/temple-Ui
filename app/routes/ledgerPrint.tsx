import React, { useRef } from 'react'
import type { Route } from './+types/ledgerPrint';
import { devoteeService } from 'services/devoteeService';
import { ledgerService } from 'services/ledgerService';
import DepositSlip from '~/components/DepositSlip';
import { printComponent } from 'utils/print';



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

  const ref = useRef(null);

  if (!loaderData) return null;


function handlePrint() {
  // window.print();
  printComponent(<DepositSlip ledger={loaderData} />);

  
}

  console.log(loaderData);
  return (
    <div>
      <DepositSlip ledger={loaderData} ref={ref}  />
      <div className="flex justify-center mt-4">
        <button onClick={handlePrint} className="btn print:hidden btn-primary">Print</button>
      </div>
    </div>
  )
}

export default LedgerPrint