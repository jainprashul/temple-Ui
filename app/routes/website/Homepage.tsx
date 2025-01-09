import { NavLink } from 'react-router'
import { MapPinIcon } from 'lucide-react'

const Homepage = () => {
  return (
    <div id='homepage'>

      <section id="hero" className="hero" >
        <div className="flex flex-1 shrink gap-12  w-full basis-0 max-w-[1200px]  max-md:max-w-full ">
          <div className="flex text-center flex-col flex-1  justify-center  my-auto basis-0 max-w-[720px] min-h-[628px] min-w-[280px] max-md:max-w-full max-sm:min-h-[554px]">
            <div className="flex flex-col justify-center w-full max-md:max-w-full px-2">
              <h1 className="text-4xl font-black tracking-tight leading-10 text-zinc-900 max-md:max-w-full">
                श्री 1008 श्रीमज्जिनेन्द्र आदिनाथ जिनबिंब पंचकल्याणक प्रतिष्ठा महामहोत्सव
              </h1>
              <p className="mt-4 text-2xl leading-8 text-zinc-500 max-md:max-w-full">
                "संत शिरोमणि आचार्य श्री 108 विद्यासागर जी महाराज एवं निर्यापक श्रमण सुधा सागर जी के आशीर्वाद एवं प्रेरणा से निर्मित लाल पाषाण से सुशोभित आदिनाथ धाम मंदिर"
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-8">
              <NavLink to='/panchkalyank' className="btn !bg-yellow-400">Explore Panchkalyanak</NavLink>
            </div>

          </div>
          <div className="flex overflow-hidden flex-1 shrink gap-2 justify-center items-center self-stretch my-auto bg-white basis-0 h-[704px] min-w-[280px] rounded-[32px] max-md:max-w-full max-sm:h-[509px]">
            
         
            <img
              loading="lazy"
              src={"/images/car1.png"}
              alt={"Adinath Temple Illustration"}
              className="object-contain self-stretch my-auto aspect-[0.93] min-w-[240px] w-[656px]"
            />
          </div>
        </div>
      </section>

      <section id='panchkalyanak' className="bg-[#fffce4]">
        <img src="/images/adinath-wide.png" alt="Panchkalyank" className="mx-auto w-[90%] py-4" />
        <div className="flex flex-col items-center justify-center w-full max-w-[1200px] min-w-[240px] mx-auto py-16 px-2">

          <h2 className="text-4xl font-black tracking-tight leading-10 text-zinc-900 max-md:max-w-full">पंचकल्याणक प्रतिष्ठा महामहोत्सव 2025</h2>
          <h5 className="text-2xl font-black tracking-tight leading-8 text-zinc-900 max-md:max-w-full">आदिनाथ धाम मंदिर, छिंदवाड़ा</h5>
          <br />
          <h6 className='text-2xl font-black tracking-tight leading-8 text-zinc-900 max-md:max-w-full'>15 जनवरी से 20 जनवरी 2025</h6>

          <p className="mt-4 text-2xl leading-8 text-zinc-500 max-md:max-w-full">
            श्री 1008 श्रीमज्जिनेन्द्र आदिनाथ जिनबिंब पंचकल्याणक प्रतिष्ठा महामहोत्सव 2025 के अवसर पर आप सभी का हार्दिक स्वागत है। इस अवसर पर आप सभी को आदिनाथ धाम मंदिर में आमंत्रित किया जाता है।
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <NavLink to='/panchkalyank' className="btn !bg-yellow-400">Explore Panchkalyanak</NavLink>
          </div>
        </div>
      </section>

      <section id='location' className="max-w-[900px] mx-auto py-16">
        <div className='grid grid-cols-1 md:grid-cols-2 mx-auto'>
          <div className="overflow-hidden resize-none max-w-full aspect-square">
            <div id="canvas-for-googlemap" className="h-full w-full max-w-full">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3697.859293899782!2d78.9358342!3d22.0549773!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd5661d304af699%3A0x390c5ff03bd34e09!2sJain%20Mandir!5e0!3m2!1sen!2sin!4v1736398114486!5m2!1sen!2sin" className="h-full w-full border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <style>
              {`
              #canvas-for-googlemap img {
                max-width: none !important;
                background: none !important;
                font-size: inherit;
                font-weight: inherit;
              }
            `}
            </style>
          </div>
          <div className="flex flex-col justify-center items-center p-4 bg-yellow-400">
            <MapPinIcon size={64} className="" />
            <h2 className="text-4xl font-black tracking-tight leading-10 text-zinc-900 max-md:max-w-full">मंदिर जी </h2>
            <p className="mt-4 text-2xl leading-8  max-md:max-w-full">
              श्री आदिनाथ धाम मंदिर जी का स्थान गोलगंज, छिंदवाड़ा, शहर के मध्य में स्थित है। यहाँ आने के लिए आप नागपूर , जबलपुर और इंदौर से बस सेवा उपलब्ध है।
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a target='_blank' href='https://maps.app.goo.gl/3r3yvY5JdeRAb1zV6' className="btn !bg-yellow-400" rel="noreferrer">Explore Location</a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center p-4 bg-yellow-400">
            <MapPinIcon size={64} className="mb-2" />
            <h2 className="text-4xl font-black text-center tracking-tight leading-10 text-zinc-900 max-md:max-w-full">
              अयोध्या नगरी, जैल बागीचा
              छिंदवाड़ा
            </h2>
            <p className="mt-4 text-2xl leading-8 text-center max-md:max-w-full">
              श्री 1008 श्रीमज्जिनेन्द्र आदिनाथ जिनबिंब
              <br />पंचकल्याणक प्रतिष्ठा महामहोत्सव नगरी
              <br /> छिंदवाड़ा
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a target='_blank' href='https://maps.app.goo.gl/MBCpMsLA4fz3wtmXA' className="btn !bg-yellow-400" rel="noreferrer">Explore Location</a>
            </div>
          </div>
          <div className="overflow-hidden resize-none max-w-full aspect-square">
            <div id="canvas-for-googlemap" className="h-full w-full max-w-full">
              <iframe loading='lazy'
                className="h-full w-full border-0"
                src="https://www.google.com/maps/embed/v1/place?q=jail+bagicha&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              ></iframe>
            </div>
            <style>
              {`
              #canvas-for-googlemap img {
                max-width: none !important;
                background: none !important;
                font-size: inherit;
                font-weight: inherit;
              }
            `}
            </style>
          </div>

        </div>
      </section>

      <section id='testimonials' className="bg-[#fffce4]">
        <div className="flex flex-col items-center justify-center w-full max-w-[1200px] min-w-[240px] mx-auto py-16 px-2">
          <h2 className="text-4xl font-black tracking-tight leading-10 text-zinc-900 max-md:max-w-full">आदिनाथ धाम मंदिर के लिए गुरुओ के विचार </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-8">
            <PortraitVideoCards data={{ title: 'गुरुओ के विचार' }} />
            <PortraitVideoCards data={{ title: 'गुरुओ के विचार' }} />
            <PortraitVideoCards data={{ title: 'गुरुओ के विचार' }} />
          </div>
        </div>
      </section>

      <img src="/images/panchyakalvynak.jpg" alt="Panchkalyank" className="mx-auto w-full" />

    </div>
  )
}

export default Homepage


function PortraitVideoCards({ data }: { data: any }) {
  return (
    <div className="bg-yellow-200 p-4 rounded-lg">
      <iframe loading='lazy' width="100%" height="512px" src={`https://www.youtube.com/embed/lGEz_IcDYU4`} title={data.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  )
}