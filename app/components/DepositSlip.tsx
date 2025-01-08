import moment from 'moment'
import React from 'react'
import type { Ledger } from 'types/Ledger'
import { convertAmountIntoWords } from "utils/numbers"

type Props = {
  ledger: Ledger & { devotee: { name: string, phone: string } }
  ref?: React.Ref<HTMLDivElement>
}

const DepositSlip = (props: Props) => {



  return (
    <>
    <div ref={props.ref} id='deposit-print' className='mx-auto w-full lg:w-[600px] p-4 bg-white'>
      <div className='text-center space-y-1'>
        <h1 className='text-2xl font-semibold'>श्री दिगंबर जैन परवार पंचायत, छिंदवाड़ा </h1>
        <p className='text-3xl font-bold'>आदिनाथ धाम</p>
        <p className='text-mdmd text-gray-800'>पंजीयन क्र. - 18/COLL-No.106/112/53-54</p>
        <p className='text-sm text-gray-800'>
          मूल मंदिर (पाषाण जिनालय), गोलगंज , छिंदवाड़ा (म.प्र.)
        </p>
        <p className='text-xl font-semibold'>दान रसीद</p>
      </div>
      <hr className='my-2' />
      <div className='flex justify-between'>
        <p className='text-sm'>Slip No: {props.ledger.id}</p>
        <p className='text-sm'>Date: {moment(props.ledger.date).format('DD-MM-YYYY')}</p>
      </div>
      <div className='mt-4'>
        <h3 className='text-lg font-semibold'>Devotee Information</h3>
        <div className='mt-2'>
          <p className=' '><b>{props.ledger.devotee.name}</b></p>
          <p className=''>{props.ledger.devotee.phone}</p>
        </div>
      </div>
      <hr className='my-2' />
      <div className='mt-4'>

        <div className='flex justify-between'>
          <p className='text-sm'>Mode: <b>{props.ledger.mode.toUpperCase()}</b></p>
          <p className='text-sm'>Amount: <b> ₹ {props.ledger.amount.toFixed(2)}</b> </p>
        </div>
        <p className='text-sm text-right'>
          Received {convertAmountIntoWords(props.ledger.amount)} Rupees only
        </p>
        <div className='mt-2'>
          <p className='text-sm'>Detail: {props.ledger.description}</p>
        </div>

        <hr className='my-2' />

        {/* saluations */}
        <div className='mt-4 text-center'>
          <p className='text-sm'>धन्यवाद</p>
        </div>

        <div className='h-20'></div>
        <div className='justify-between flex mt-4'>
          <p className='text-sm'>दानकर्ता के हस्ताक्षर</p>
          <p className='text-sm'>प्राप्तकर्ता के हस्ताक्षर</p>
        </div>

        
      </div>
    </div>
    
    </>
  )
}

export default DepositSlip
