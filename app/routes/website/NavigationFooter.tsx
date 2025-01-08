
export interface SocialMediaLink {
  name: string;
  url: string;
}



export interface SocialLinksColumnProps {
  links: SocialMediaLink[];
}

const socialLinksColumn1: SocialMediaLink[] = [
  { name: "Facebook", url: "#" },
  { name: "Instagram", url: "https://www.instagram.com/chhindwara_ke_bade_baba125" },
  { name: "YouTube", url: "http://www.youtube.com/@AadinathdhamChhindwara" },
];

const socialLinksColumn2: SocialMediaLink[] = [
];

export const NavigationFooter: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col px-16 py-20 w-full bg-[#fffce4] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
        <div className="flex overflow-hidden flex-col min-w-[240px] w-[864px] max-md:max-w-full">
          <div className="text-lg text-zinc-900 max-md:max-w-full">
            श्री आदिनाथ धाम, छिन्दवाड़ा
          </div>
          <div className="flex flex-col mt-8 w-full max-md:max-w-full">
            <div className="flex flex-col w-full text-sm leading-relaxed text-zinc-900 max-md:max-w-full">
              <div className="max-md:max-w-full">Location:</div>
              <div className="mt-1 max-md:max-w-full">
                मूल मंदिर (पाषाण जिनालय), गोलगंज, छिंदवाड़ा 480001 (म.प्र.)
              </div>
            </div>
            <div className="flex flex-col mt-6 w-full text-sm text-zinc-900 max-md:max-w-full">
              <div className="leading-relaxed max-md:max-w-full">Reach Us:</div>
              <div className="mt-1 leading-6 max-md:max-w-full">
              <a href="phone:+917869796373">+91 78697 96373</a> <br />
              <a href="phone:+917725899337">+91 77258 99337</a> <br />
              <a href="phone:+917999486594">+91 79994 86594</a> <br /> 

              <a href="mailto:aadinathdhamchhindwara@gmail.com">
              aadinathdhamchhindwara@gmail.com
              </a>

                <br />

              </div>
            </div>
     
          </div>
        </div>
        <div className="flex overflow-hidden flex-1 shrink gap-6 items-start text-sm leading-relaxed whitespace-nowrap basis-0 text-zinc-900">
          <SocialLinksColumn links={socialLinksColumn2} />
          <SocialLinksColumn links={socialLinksColumn1} />
        </div>
      </div>
      <div className="flex flex-col mt-20 w-full text-sm leading-relaxed text-zinc-900 max-md:mt-10 max-md:max-w-full">
        <div className="flex w-full bg-zinc-900 min-h-[1px] max-md:max-w-full" />
        <div className="flex flex-wrap gap-10 justify-between items-start mt-8 w-full max-md:max-w-full">
          <div>© {new Date().getFullYear()}, श्री आदिनाथ धाम, छिन्दवाड़ा. All rights reserved.</div>
          <p>
          Made with ❤️ by <a target='_blank' rel="noreferrer" href="https://jainprashul.now.sh">Prashul Jain</a>
        </p>
          <div className="flex gap-6 items-start">
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export const SocialLinksColumn: React.FC<SocialLinksColumnProps> = ({ links }) => (
  <div className="flex flex-col flex-1 shrink basis-0">
    {links.map((link, index) => (
      <div key={link.name} className={index > 0 ? "mt-3" : ""}>
        <a target="" href={link.url} className="text-zinc-900 hover:underline">
          {link.name}
        </a>
      </div>
    ))}
  </div>
);
