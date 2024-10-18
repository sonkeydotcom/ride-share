const data = {
  socials: [
    {
      icon: "fab fa-facebook",
      url: "https://www.facebook.com/rideshareapp",
      text: "Facebook",
    },
    {
      icon: "fab fa-telegram",
      url: "https://telegram.org",
      text: "Telegram",
    },
    {
      icon: "fab fa-twitter",
      url: "https://twitter.com",
      text: "Twitter",
    },
    {
      icon: "fab fa-instagram",
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
      <div className="flex flex-1, flex-row justify-between mb-20 gap-4">
        <div className="w-1/2">
          <h3>Ride share</h3>
          {data.socials.map((social) => (
            <p>
              <a href={social.url} target="_blank" rel="noreferrer">
                <i className={`text-2xl ${social.icon}`}></i>
              </a>
              {social.text}
            </p>
          ))}
        </div>

        <div>
          {data.links.map((link) => (
            <p>
              <a href={link.url}>{link.text}</a>
            </p>
          ))}
        </div>
        <div>
          {data.legal.map((legal) => (
            <p>
              <a href={legal.url}>{legal.text}</a>
            </p>
          ))}
        </div>
      </div>
      <div>
        <p>&copy; 2022 RideShare. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
