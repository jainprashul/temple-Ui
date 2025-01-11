import React from 'react'

type Props = {}

const JoinCommunity = (_props: Props) => {
  return (
    <div>
      <section className="container mx-auto p-4 min-h-[70vh]">
        <div className='space-y-4'>
          <h1 className='text-4xl text-center font-bold'>Join our community</h1>

          <p className="mt-4 text-2xl leading-8 text-center text-zinc-500 max-md:max-w-full">
            Join our community to get latest updates and news.
          </p>


          <div className="flex flex-wrap justify-center gap-4 mt-8   mb-4">

            <div className="card bg-base-100 w-96 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  इन्द्र - इंद्राणी
                </h2>
                <p>
                  इन्द्र - इंद्राणी के बुकिंग के लिए यहाँ क्लिक करें
                </p>
                <div className="card-actions justify-end">
                  <a href='https://forms.gle/i773T1ZvUG27cTFFA' target='_blank' className="btn btn-primary" rel="noreferrer">
                    बुकिंग करें
                  </a>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 w-96 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  जन्माभिषेक कलश
                </h2>
                <p>
                  17 जनवरी 2025 को होने जा रहे जन्माभिषेक कलश के बुकिंग के लिए यहाँ क्लिक करें
                </p>
                <div className="card-actions justify-end">
                  <a href='https://forms.gle/D5MieFk5hw2AJYUS7' target='_blank' className="btn btn-primary" rel="noreferrer">
                    बुकिंग करें
                  </a>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  उपनयन संस्कार
                </h2>
                <p>
                  उपनयन संस्कार के लिए बुकिंग के लिए यहाँ क्लिक करें
                </p>
                <div className="card-actions justify-end">
                  <a href='https://forms.gle/XdYZ1djhW4PDxoQZ8' target='_blank' className="btn btn-primary" rel="noreferrer">
                    बुकिंग करें
                  </a>
                </div>
              </div>
            </div>
          </div>



          <h1 className='text-3xl text-center font-bold'>Follow us on social media</h1>
          <div className="flex flex-wrap justify-center gap-4 mt-8   mb-4">
            {/*QR for social media */}
       
          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                Instagram
              </h2>
              <p>
                Follow us on Facebook``
              </p>
              <img src="/images/fbqr.svg" alt="Instagram" className="mx-auto w-1/2" />
              <div className="card-actions ">
                <a href="https://www.facebook.com/profile.php?id=61571388677673&mibextid=ZbWKwL" target='_blank' className="btn btn-primary w-full" rel="noreferrer">
                  Follow
                </a>
              </div>
            </div>
            </div>
          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                Instagram
              </h2>
              <p>
                Follow us on Instagram
              </p>
              <img src="/images/instaqr.svg" alt="Instagram" className="mx-auto w-1/2" />
              <div className="card-actions ">
                <a href="https://www.instagram.com/chhindwara_ke_bade_baba125" target='_blank' className="btn btn-primary w-full" rel="noreferrer">
                  Follow
                </a>
              </div>
            </div>
            </div>
            

            <div className="card bg-base-100 w-96 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  YouTube
                </h2>
                <p>
                  Follow us on YouTube
                </p>
                <img src="/images/youtubeqr.svg" alt="YouTube" className="mx-auto w-1/2" />
              <div className="card-actions">
                <a href="http://www.youtube.com/@AadinathdhamChhindwara" target='_blank' className="btn btn-primary w-full" rel="noreferrer">
                  Follow
                </a>
              </div>
              </div>
            </div>
          </div>




        </div>
      </section>
      <img src="/images/panchyakalvynak.jpg" alt="Join Community" className="mx-auto w-full" />
    </div>
  )
}

export default JoinCommunity