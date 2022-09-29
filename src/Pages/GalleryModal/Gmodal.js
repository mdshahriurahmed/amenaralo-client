import React from 'react';

const Gmodal = (gimage) => {
    console.log(gimage);

    return (
        <div>
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle bg-primary border border-primary text-white hover:bg-base-100 hover:border-primary hover:text-primary absolute right-2 top-2">✕</label>
                    <img src={gimage.gimage.img} alt="" className='w-full' />
                    <p class="pt-4 text-start text-primary">Published Date: {gimage.gimage.date} </p>
                    <p class=" text-justify">{gimage.gimage.des} </p>
                </div>
            </div>
        </div>
    );
};

export default Gmodal;