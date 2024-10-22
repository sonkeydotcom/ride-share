import Modal from "./modal";

// Example Form component using the Modal
const Form = ({ isModalOpen, setIsModalOpen, setIsQuizCompleted }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    setIsModalOpen(false);
    setIsQuizCompleted(true);
  };

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Form Title"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md px-1 border-2 py-2 focus:border-blue-500 focus:ring-blue-500"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md px-1 border-2 py-2 focus:border-blue-500 focus:ring-blue-500"
              placeholder="john.doe@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              className="mt-1 block w-full rounded-md px-1 border-2 py-2 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Abuja"
            />
          </div>
          <div className="m-5" />

          <div className="flex justify-between space-x-2">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 w-1/2 text-sm border rounded-md hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
            <button
              type="submit"
              className="px-4 py-2 w-1/2 text-sm bg-[#FFC727] text-black rounded-md hover:bg-gray-600 transition-colors"
            >
              View Results
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Form;
