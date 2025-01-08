import NavigationHeader from './NavigationHeader'
import { NavLink } from 'react-router'
import { MapPinIcon } from 'lucide-react'
import { NavigationFooter } from './NavigationFooter'

const Homepage = () => {
  return (
    <div id='homepage'>
      <NavigationHeader />

      <section id="hero" className="hero">
        <div className="flex flex-wrap flex-1 shrink gap-12 justify-center items-center w-full basis-0 max-w-[1200px] min-w-[240px] max-md:max-w-full">
          <div className="flex text-center flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 max-w-[720px] min-h-[628px] min-w-[280px] max-md:max-w-full max-sm:min-h-[554px]">
            <div className="flex flex-col justify-center w-full max-md:max-w-full">
              <h1 className="text-4xl font-black tracking-tight leading-10 text-zinc-900 max-md:max-w-full">
                श्री 1008 श्रीमज्जिनेन्द्र आदिनाथ जिनबिंब पंचकल्याणक प्रतिष्ठा महामहोत्सव
              </h1>
              <p className="mt-4 text-2xl leading-8 text-zinc-500 max-md:max-w-full">
                "संत शिरोमणि आचार्य श्री 108 विद्यासागर जी महाराज एवं निर्यापक श्रमण सुधा सागर जी के आशीर्वाद एवं प्रेरणा से निर्मित लाल पाषाण से सुशोभित आदिनाथ धाम मंदिर"
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-8">
              <NavLink to='/panchkalyank'  className="btn !bg-yellow-400">Explore Panchkalyanak</NavLink>
            </div>

          </div>
          <div className="flex overflow-hidden flex-1 shrink gap-2 justify-center items-center self-stretch my-auto bg-white basis-0 h-[704px] min-w-[280px] rounded-[32px] max-md:max-w-full max-sm:h-[509px]">
            <img
              loading="lazy"
              src={"https://cdn.builder.io/api/v1/image/assets/9050494ce9cb463a811b5030957e2deb/22340c3212e8266dd4424359ce777340953fb884be363db5eb3e56fb15fa43c7?apiKey=9050494ce9cb463a811b5030957e2deb&"}
              alt={"Adinath Temple Illustration"}
              className="object-contain self-stretch my-auto aspect-[0.93] min-w-[240px] w-[656px]"
            />
          </div>
        </div>
      </section>

      <section id='panchkalyanak' className="bg-zinc-100">
        <div className="flex flex-col items-center justify-center w-full max-w-[1200px] min-w-[240px] mx-auto py-16">
          <h2 className="text-4xl font-black tracking-tight leading-10 text-zinc-900 max-md:max-w-full">Panchkalyanak</h2>
          <p className="mt-4 text-2xl leading-8 text-zinc-500 max-md:max-w-full">Panchkalyanak is a set of five auspicious events in the life of a Tirthankara.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <NavLink to='/panchkalyank' className="btn !bg-yellow-400">Explore Panchkalyanak</NavLink>
          </div>
        </div>  
      </section>

      <section id='location' className="max-w-[1200px] mx-auto py-16">
        <div className='grid grid-cols-1 md:grid-cols-2 mx-auto'>
        <div className="overflow-hidden resize-none max-w-full aspect-square">
          <div id="canvas-for-googlemap" className="h-full w-full max-w-full">
            <iframe
              className="h-full w-full border-0"
              src="https://www.google.com/maps/embed/v1/place?q=jain+mandir&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
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
        <div className="flex flex-col justify-center items-center p-4 bg-yellow-400">
          <MapPinIcon size={64} className="" />
          <h2 className="text-4xl font-black tracking-tight leading-10 text-zinc-900 max-md:max-w-full">मंदिर जी </h2>
          <p className="mt-4 text-2xl leading-8  max-md:max-w-full">
            श्री पाषाण जिनालय मंदिर जी का स्थान गोलगंज, छिंदवाड़ा, शहर के मध्य में स्थित है। यहाँ आने के लिए आप नागपूर , जबलपुर और इंदौर से बस सेवा उपलब्ध है। 
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a target='_blank' href='https://maps.app.goo.gl/3r3yvY5JdeRAb1zV6' className="btn !bg-yellow-400" rel="noreferrer">Explore Location</a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-4 bg-yellow-400">
          <MapPinIcon size={64} className="mb-2" />
          <h2 className="text-4xl font-black tracking-tight leading-10 text-zinc-900 max-md:max-w-full">
            अयोध्या नगरी , 
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
            <iframe
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

      <NavigationFooter />

    </div>
  )
}

export default Homepage