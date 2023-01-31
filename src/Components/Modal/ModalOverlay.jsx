import React, { useState } from "react";
import { useGlobalContext } from "../../States/Context/Context";


const ModalOverLay = ({ Content,ClassName }) => {
  const {modalhandler,modal} = useGlobalContext()
  return (
    <div style={modal ? { display: "block" } : {}} className="modal-overlay">
      {modal && (
        <div className={`modal-overlay-Wrapper ${ClassName}`}>
          <div className="modalInner">
            <div className="modalContent text-black">
              {Content}
            </div>
            <div className="modalClose">
              <button className="btn  btn-primary" onClick={modalhandler}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalOverLay;
