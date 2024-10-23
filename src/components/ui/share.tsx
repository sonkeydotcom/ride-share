import { WhatsappShareButton } from "react-share";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ShareModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl">
        <div className="bg-white rounded-lg shadow-lg">
          {/* <div className="flex items-center justify-between p-4">
            <div></div>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div> */}
          <div className="p-4">{children}</div>
        </div>
      </div>
    </>
  );
};

interface SocialButtonsProps {
  icon: React.ReactNode;
  name: string;
  color: string;
  onClick: () => void;
}

const SocialButton: React.FC<SocialButtonsProps> = ({
  icon,
  name,
  color,
  onClick,
}) => (
  <button
    className="flex flex-row items-center gap-2 p-2 border rounded-lg hover:bg-gray-50 transition-colors w-full"
    onClick={onClick}
  >
    <div
      className="w-8 h-8 flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      {icon}
    </div>
    <span className="text-sm font-medium text-gray-700">{name}</span>
  </button>
);

interface ShareProps {
  setShowShareModal: (boolean: boolean) => void;
  showShareModal: boolean;
}

const ShareModal: React.FC<ShareProps> = ({
  setShowShareModal,
  showShareModal,
}) => {
  const handleShare = (platform: string) => {
    console.log(`Sharing to ${platform}`);
    // Implement sharing logic here
  };

  const shareFile = async () => {
    if (navigator.share) {
      try {
        const file = new File(["Hello, world!"], "sample.txt", {
          type: "text/plain",
        });

        await navigator.share({
          title: "My File",
          text: "Check out this file!",
          files: [file],
        });
        console.log("File shared successfully");
      } catch (error) {
        console.error("Error sharing file:", error);
      }
    } else {
      alert("Web Share API is not supported in this browser.");
    }
  };

  return (
    <Modal isOpen={showShareModal} onClose={() => setShowShareModal(false)}>
      <div className="flex flex-1 gap-8">
        {/* Left section - Preview */}
        <div className="w-1/2 rounded-lg flex items-center justify-center">
          <img src="/personality.png" />
        </div>

        {/* Right section - Share options */}
        <div className="w-1/2 p-4">
          <h1 className="text-2xl font-bold mb-2">Share on Socials</h1>
          <p className="text-gray-600 text-sm mb-6">
            Excite your followers, fans and friends by sharing your RideShare
            ride personality style
          </p>

          {/* 2x2 Grid for social buttons */}
          <div className="grid grid-cols-2 gap-4">
            <WhatsappShareButton
              title=" whatsapp"
              url={"https://www.example.com"}
            >
              {" "}
              k
            </WhatsappShareButton>
            <SocialButton
              icon={
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              }
              name="Facebook"
              color="#1877F2"
              onClick={shareFile}
            />
            <SocialButton
              icon={
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              }
              name="Twitter"
              color="#1DA1F2"
              onClick={() => handleShare("twitter")}
            />
            <SocialButton
              icon={
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              }
              name="LinkedIn"
              color="#0A66C2"
              onClick={() => handleShare("linkedin")}
            />
            <SocialButton
              icon={
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              }
              name="WhatsApp"
              color="#25D366"
              onClick={() => handleShare("whatsapp")}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ShareModal;
