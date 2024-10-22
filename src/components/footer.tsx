import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const data = {
  socials: [
    {
      icon: <FaFacebook size={22} />,
      url: "https://www.facebook.com/rideshareapp",
      text: "Facebook",
    },
    {
      icon: <FaTelegram size={22} />,
      url: "https://telegram.org",
      text: "Telegram",
    },
    {
      icon: <RiTwitterXFill size={22} />,
      url: "https://twitter.com",
      text: "Twitter",
    },
    {
      icon: <FaInstagram size={22} />,
      url: "https://instagram.com",
      text: "Instagram",
    },
  ],
  links: [
    {
      url: "/home",
      text: "Home",
    },
    {
      url: "/about-us",
      text: "About us",
    },
    {
      url: "/contact",
      text: "Contact",
    },
    {
      url: "/support",
      text: "Support",
    },
    {
      url: "/get-the-app",
      text: "Get the app",
    },
    {
      url: "/become-a-driver",
      text: "Become a driver",
    },
    {
      url: "/blog",
      text: "Blog",
    },
  ],
  legal: [
    {
      url: "/terms-and-conditions",
      text: "Terms & Conditions",
    },
    {
      url: "/privacy-policy",
      text: "Privacy Policy",
    },
  ],
};

const Footer = () => {
  return (
    <>
      <div className="flex flex-1, flex-row justify-between mt-10 mb-15 gap-4">
        <div className="w-1/2">
          <img
            src="/logo.png"
            alt="RideShare logo"
            className="w-24 h-auto object-contain mb-5"
          />
          <div className="flex flex-row gap-2">
            {data.socials.map((social) => (
              <a href={social.url} target="_blank" rel="noreferrer">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          {data.links.map((link) => (
            <p className="text-sm text-[#6C6A6A] m-1">
              <a href={link.url}>{link.text}</a>
            </p>
          ))}
        </div>
        <div>
          {data.legal.map((legal) => (
            <p className="text-sm text-[#6C6A6A]">
              <a href={legal.url}>{legal.text}</a>
            </p>
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm text-black">
          &copy; 2022 RideShare. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
