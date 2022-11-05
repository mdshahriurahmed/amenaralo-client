import React from 'react';

const MarkModal = (result) => {
    console.log(result);
    return (
        <div >
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="see-marks" className="modal-toggle " />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="see-marks" className="btn btn-xs btn-circle bg-primary border border-primary text-white hover:bg-base-100 hover:border-primary hover:text-primary absolute right-2 top-2">✕</label>
                    <img src={result?.result?.markshet} alt="" />

                </div>
            </div>
        </div>
    );
};

export default MarkModal;