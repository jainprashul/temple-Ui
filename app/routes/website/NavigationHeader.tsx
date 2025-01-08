import { NavLink } from "react-router";

const navigationLinks = [
  { text: "Panchkalyank 2025", 'link': '/panchkalyank' },
  { text: "NewsLetter", 'link': '/newsletter' },
  { text: "Videos", 'link': '/videos' },
  { text: "Gallery", 'link': '/gallery' },
];

export const NavigationHeader: React.FC = () => {
  return (
    <header className="flex w-full flex-wrap justify-between items-center p-2 bg-white text-zinc-900">
      <div id='logo' className='flex items-center gap-2'>
        <img
          src="/temple.svg"
          alt="Shri Adinath Dham Logo"
          className="object- shrink-0 self-stretch my-auto aspect-square w-[50px]"
        />
        <NavLink to='/' className="gap-2 cursor-pointer self-stretch px-2 my-auto text-4xl font-extrabold min-w-[240px]">
          श्री आदिनाथ धाम, छिन्दवाड़ा
        </NavLink>
      </div>
      <nav className="flex flex-wrap gap-3 my-auto text-xs ">
        {navigationLinks.map((link, index) => (
          <NavLink key={index} to={link.link} className="btn btn-ghost">
            {link.text}
          </NavLink>
        ))}
        <button className="btn !bg-yellow-400">Join Our Community</button>
      </nav>
    </header>
  );
};

export default NavigationHeader;