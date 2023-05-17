import { useState } from "react";
import Model from "../components/Model";

function Contact() {
    const [showModal, setShowModal] = useState(false);
    // const openModal = () => {
    //   setShowModal(true);
    // };
  
    const closeModal = () => {
      setShowModal(false);
    };
  

  return (
    <div className="flex flex-col h-screen justify-center items-center">
        <button
            type="button"
            className="flex items-center justify-center rounded-md bg-indigo-700 w-40 py-4 text-md font-semibold text-white shadow-sm hover:text-black hover:bg-indigo-300"
          onClick={()=>setShowModal(true)}
          >
            
           Contact
          </button>

          {
            showModal && <Model closeModal={closeModal}  />
          }
    </div>
  )
}

export default Contact