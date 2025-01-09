import moment from 'moment'
import React from 'react'
import type { Expense } from 'types/Expense'
import { convertAmountIntoWords } from "utils/numbers"

type Props = {
  data: Expense
  ref?: React.Ref<HTMLDivElement>
}

const PaymentVoucher = (props: Props) => {
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
        <p className='text-xl font-semibold'> भुगतान वाउचर</p>
      </div>
      <hr className='my-2' />
      <div className='flex justify-between'>
        <p className='text-sm'>Slip No: {props.data.id}</p>
        <p className='text-sm'>Date: {moment(props.data.date).format('DD-MM-YYYY')}</p>
      </div>
      <div className='mt-4'>
          <p className=' '>To: <b>{props.data.to}</b></p>
          <p className=''>From :{props.data.from}</p>
      </div>
      <hr className='my-2' />
      <div className='mt-4'>

        <div className='flex justify-between'>
          <p className='text-sm'>Mode: <b>{props.data.mode.toUpperCase()}</b></p>
          <p className='text-sm'>Amount: <b> ₹ {props.data.amount.toFixed(2)}</b> </p>
        </div>
        <p className='text-sm text-right'>
          Received {convertAmountIntoWords(props.data.amount)} Rupees only
        </p>
        <div className='mt-2'>
          <p className='text-sm'>Detail: {props.data.description}</p>
        </div>

        <hr className='my-2' />

        {/* saluations */}
        <div className='mt-4 text-center'>
          <p className='text-sm'>धन्यवाद</p>
        </div>

        <div className='h-20'></div>
        <div className='justify-between flex mt-4'>
          <div></div>
          <p className='text-sm'>प्राप्तकर्ता के हस्ताक्षर</p>
        </div>

        
      </div>
    </div>
    
    </>
  )
}

export default PaymentVoucher
