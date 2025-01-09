import { useEffect, useState } from "react";
import type { Route } from "./+types/dashboard";
import { useNavigate } from "react-router";
import { BOOKING_CREATE, BOOKING_LIST, DEPOSIT, DEVOTEE_CREATE, DEVOTEES, EXPENSE_LIST, LEDGER, PARTICULARS, PAYMENT, REPORT } from "~/constants";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Shri Aadinath Dham - Dashboard" },
    { name: "description", content: "श्री दिगंबर जैन परवार पंचायत, छिन्दवाड़ा " },
  ];
}

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {

    

  }, []);

  const quickLinks = [
    {
      title : "Reports" , description : "Reports" , action : () => {
        navigate(REPORT);
      }
    },
    {
      title: "दानदाता", description: "दानदाता सूची", action: () => {
        navigate(DEVOTEES);
      }
    },
    {
      title: "Quick Deposit", description: "दान करें", action: () => {
        navigate(DEPOSIT);
      }
    },
    {
      title: "Create Payment Voucher", description: "भुगतान वाउचर", action: () => {
        navigate(PAYMENT);
      }
    },
    {
      title: "दान घोषणा", description: "दान घोषणा करे", action: () => {
        navigate(BOOKING_CREATE);
      }
    },
    {
      title: "Ledger", description: "दान लेजर", action: () => {
        navigate(LEDGER);
      }
    },
    {
      title:"Expense List" , description:"Expense List" , action: () => {
        navigate(EXPENSE_LIST);
      }
    },
    {
      title: "दान घोषणा सूची", description: "दान प्रवृत्ति सूची", action: () => {
        navigate(BOOKING_LIST);
      }
    },
    {
      "title": "नया दानदाता" , "description": "नया दानदाता जोड़ें" , "action": () => {
        navigate(DEVOTEE_CREATE);
      }
    }, {
      title : "Particulars" , description : "Particulars" , action : () => {
        navigate(PARTICULARS);
      }
    }
  ];

  return <>

    <div className="card shadow-lg bg-base-200">
      <div className="card-body lg:flex-row justify-between">
        <div className="flex justify-items-center gap-2">
          <img src="/temple.svg" alt="logo" className="w-16 h-16" />
          <div className="my-auto">
          <h2 className="card-title">श्री आदिनाथ धाम</h2>
          <p>श्री दिगंबर जैन परवार पंचायत, छिन्दवाड़ा</p>
          </div>
        </div>
        <TimeCounter />
      </div>
    </div>

    <h3 className="text-2xl font-bold mt-4">Quick Links</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {quickLinks.map((item, index) => (
        <div key={index} onClick={item.action}>
          <QuickLinkCard title={item.title} description={item.description} />
        </div>
      ))}
    </div>
  </>
}


export default Dashboard;


function TimeCounter() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return <div>
    <p>{time.toLocaleDateString()}</p>
    <p>{time.toLocaleTimeString()}</p>
  </div>;
}


type QuickLinkCardProps = {
  title: string;
  description: string;
  action?: () => void;
};

function QuickLinkCard({ title, description }: QuickLinkCardProps) {
  return <div className="card shadow-lg bg-base-200 hover:shadow-xl cursor-pointer">
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{description}</p>
    </div>
  </div>;
}