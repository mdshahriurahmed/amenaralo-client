import React from 'react';

const Gmodal = (gimage) => {


    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label for="my-modal-3" className="btn btn-xs btn-circle bg-primary border border-primary text-white hover:bg-base-100 hover:border-primary hover:text-primary absolute right-2 top-2">✕</label>
                    <img src={gimage?.gimage?.img} alt="" className='w-full' />
                    <p className="pt-4 text-start text-primary">Published Date: {gimage?.gimage?.date} </p>
                    <p className=" text-justify">{gimage?.gimage?.des} </p>
                </div>
            </div>
        </div>
    );
};

export default Gmodal;