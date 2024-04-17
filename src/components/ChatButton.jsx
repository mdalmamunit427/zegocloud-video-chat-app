import { MdCall } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ChatButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the Call page when the button is clicked
    navigate("/call");
  };
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
      >
        <MdCall className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ChatButton;
