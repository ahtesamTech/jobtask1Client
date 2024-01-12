import { FaLayerGroup } from "react-icons/fa";
import { FaClipboardList, FaRegCalendarDays } from "react-icons/fa6";
import { PiChatsCircleBold } from "react-icons/pi";
import { ImAttachment } from "react-icons/im";
import "./Modal.css";
import { useState } from "react";



function Modal({ setOpenModal }) {

    const STATUS_IDLE = 0;
    const STATUS_UPLOADING = 1;
    const [files, setFiles] = useState([])
    const [status, setStatus] = useState(STATUS_IDLE)


    const packFiles = (files)=> {
        const data = new FormData();

        [...files].forEach((file, i) => {
            data.append(`file-${i}`, file, file.name)
        })
        return data
    }


    return (
      <div className="modalBackground z-50">
        <div className="modalContainer ">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title">
            <h1>Upload your file</h1>
          </div>
          <div className="body">
<h1 className="text-lg font-bold text-black">Select And Upload</h1>
            <div>
            <input
            type="file"
            accept="image/*" 
            multiple
            onChange={(e)=> setFiles(e.target.files)} />
        {/* {renderFileList()} */}
        <button onClick={'handleUploadClick'} disabled={status === STATUS_UPLOADING}>
            {/* {renderButtonStatus()} */}
        </button>
            </div>

                <div>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Uploaded files:</h2>
<ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
        {[...files].map((f, i) => (
                    
    <li key={i}>
        <span className="font-semibold text-gray-900 dark:text-white"> {f.name}</span>.<span className="font-semibold text-gray-900 dark:text-white">{f.type}</span>
    </li>

                ))}
    
</ol>
                </div>

         </div>
          <div className="footer">
            <button
            className="btn btn-error text-center"
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button className="btn btn-success">Upload</button>
          </div>
        </div>
      </div>
    );
  }
  






const Cards = () => {
    const [modalOpen, setModalOpen] = useState(false);


    return (
       
            <div className=" m-4 p-2 rounded-lg bg-base-100 shadow-lg">
            <div className="w-full flex flex-col gap-4">

            {/* top part */}

                <div className="flex justify-between">
                    <div>
                    <div className="avatar flex items-center gap-3">
            <div className="w-8 rounded-full">
                <img src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_640.png" />
            </div>
            <h1 className="font-bold text-sm ">Client Name</h1>
            </div>
                    </div>


                    <div>
                    <div className="avatar flex items-center gap-3">
            <div className="w-8 rounded-full">
                <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651_640.png" />
            </div>
            <h1 className="font-bold text-sm ">Sadik Istiak</h1>
            </div>
                    </div>
                </div>

 {/* top part end */}

                {/* central part */}


                <div>
                    <div className="flex items-center gap-1">
                    <FaLayerGroup className="w-16 "/>
                    <p className="line-clamp-1 p-0 flex-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio blanditiis quia explicabo doloribus veniam odio vitae nemo molestiae, temporibus laudantium quos ratione minus ut ducimus pariatur perferendis repellat id sunt?</p>

                    <span className="px-2 flex items-center text-sm py-1 ml-5 bg-gray-200 text-gray-600 font-bold rounded">
                        <FaClipboardList></FaClipboardList>
                        1/2</span>
                    </div>
                    
                </div>

                {/* central part end */}

                {/* bottom part */}

                <div>
                    <div className="flex w-full h-12 gap-5">

                    <div className="avatar-group space-x-3 rtl:space-x-reverse">
                        <div className="avatar">
                            <div className="w-10">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-10">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="avatar placeholder">
                            <div className="w-10 bg-gray-200 text-gray-700 font-semibold">
                            <span>12+</span>
                            </div>
                        </div>
                        </div>


           
                <span className="flex items-center  text-gray-600 font-bold">
                <PiChatsCircleBold className=""/> 15
                </span>
                <span onClick={() => {
          setModalOpen(true);
          console.log(modalOpen);
        }} className="flex items-center cursor-pointer text-gray-600 font-bold">
                <ImAttachment className=""/> 15
                </span>
                <span className="flex items-center text-gray-600 font-bold w-28">
                <FaRegCalendarDays className=""/> 15-12-2022
                </span>
           

                    </div>
                </div>
                {/* bottom part end */}

                
            </div>
                { modalOpen && <Modal setOpenModal={setModalOpen}></Modal>}
        </div>
    );
};

export default Cards;






