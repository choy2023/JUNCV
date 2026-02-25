import { FaPrint } from "react-icons/fa";

const PrintButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button 
      onClick={handlePrint} 
      className="print-btn no-print"
      aria-label="Print CV"
      title="Print CV"
    >
      <FaPrint size={24} color="#fff" />
    </button>
  );
};

export default PrintButton;