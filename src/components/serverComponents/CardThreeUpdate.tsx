'use client'
import React, { useRef, useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import PrimaryButton from "@/components/button/PrimaryButton";

import Image from "next/image";
import dynamic from 'next/dynamic';
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });
const CardThreeUpdate:React.FC = () => {


  interface ModalProps {
    isVisible: boolean;
    onClose: (isVisible: boolean) => void;
    children: React.ReactNode;
    hideCloseIcon?: boolean;
  }
  
  const [card, setCard] = useState<string>("cardOne");
  const [card2, setCard2] = useState<boolean>(false);
  const [card3, setCard3] = useState<boolean>(false);
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  // for File selection code
  // const FileInputRef4 = useRef(null);
  const [selectInputFiles, setSlectInputFile] = useState<File | null>( );
  const [confirmationPopUp, setConfirmationPopUp] = useState(false);
  const [uploadSucces, setUploadSuccess] = useState(false);
  
  const FileInputRef4 = useRef<HTMLInputElement>(null);
  const [selectedInputFile, setSelectedInputFile] = useState<File | Blob | MediaSource | null>(null);
  // const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedInputFile(file);
    }
  };
  

  const handleUploadLogo = () => {
    // Handle your upload logic here
    setSelectedInputFile(null);
    setUploadSuccess(true);

    setTimeout(() => {
      setUploadSuccess(false);
    }, 3000);
  };
  const handleConfirmationPopUp = () => {
    setConfirmationPopUp(true);
  };

  const handleCancel = () => {
    setConfirmationPopUp(false);
  };

  const handleEditClick = () => {
    FileInputRef4.current?.click();
  };

  const handleDeleteFile = (e: any) => {
    setSlectInputFile(null); //this is for now temporary use when data store in db this ilne
    setConfirmationPopUp(false);
  };

  

  // for File selection code

  const Modal: React.FC<ModalProps> = ({ isVisible, onClose, children, hideCloseIcon = true }) => {
  if (!isVisible) return null;
  console.log(isVisible);
  };

  function handlePopup() {
    setIsOpen(!isOpen);
  }

  const inputStyle = "p-2 border w-full rounded-md border-blue-400";

  const config = {
    height: 600,
  };
  
  const buttonStyle =
    "bg-indigo-600 p-2 w-40 text-lg font-semibold text-white mt-4  rounded-md border border-indigo-500 flex items-center justify-center gap-2 hover:bg-indigo-100";

  return (
    <>
      <div className="px-20 py-10">
        {/* button  and update button  */}
        <div className="flex justify-around mb-10 gap-4">
          <div className="flex gap-2 justify-center items-center mx-auto">
            <span onClick={() => setCard("cardOne")}>
              <PrimaryButton text={"Card One"} />
            </span>
            <span onClick={() => setCard("cardTwo")}>
              {" "}
              <PrimaryButton text={"Card Two"} />
            </span>
            <span onClick={() => setCard("cardThree")}>
              {" "}
              <PrimaryButton text={"Card Three"} />
            </span>

            {/* <span onClick={() => setCard(true)}><PrimaryButton text={"Card One"} /></span>
                    <span onClick={() => setCard2(true)}> <PrimaryButton text={"Card Two"} /></span>
                    <span onClick={() => setCard3(true)}> <PrimaryButton text={"Card Three"} /></span> */}
          </div>

          <div>{/* <PrimaryButton text={"Update Card"} /> */}</div>
        </div>
        <span className="pl-14">
          <h2 className="text-2xl font-bold text-black m-4 mb-2 text-center">
          { card === "cardTwo" ||  card === "cardOne" || card === "cardThree" ? card : 'no card selected' }
          </h2>
          <div className=" ml-96 mt-3">
            {/* <h2 className="text-2xl mb-5">Logo Update</h2> */}

            <input
            type="file"
             className="hidden"
             onChange={handleFileChange}
             ref={FileInputRef4}
            />

            <div className="flex items-center space-x-4 gap-2">
              <button
                className="bg-gradient-to-r to-pink-500 from-yellow-400 hover:bg-pink-700 text-white px-6 py-2 ml-6 rounded"
                onClick={() => FileInputRef4.current?.click()}
              >
                Select File{" "}
              </button>
              {selectInputFiles && (
                <div className="flex items-center space-x-3 w-[250px] mt-4 m-2">
                  <Image
                    src={selectedInputFile ? URL.createObjectURL(selectedInputFile) : ''}
                    alt="Banner"
                    className="w-20 h-20 mr-20 rounded"
                    width={20}
                    height={20}
                />

                  {/* <div className="text-medium px-2 py-2 mr-3 w-40 ">
                {selectInputFiles.name}
              </div> */}
                  <button
                    className="bg-green-500 text-white px-2 py-2 rounded"
                    onClick={handleEditClick}
                  >
                    <BiEdit />
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-2 rounded"
                    onClick={handleConfirmationPopUp}
                  >
                    <BiTrash />
                  </button>
                </div>
              )}
              <div className="flex justify-end">
              <button
              className={buttonStyle}
              type="submit"
              onClick={handleUploadLogo}
            >
              Upload
            </button>
              </div>
             
            </div>
          </div>
        </span>
        <div>
          {/* carOne  */}
          {/* {card === "cardOne" && (
            <CardThreeUpdate />
          )} */}

          {/* card Two  */}
          {card === "cardTwo" && (
            <form>
              {/* {card2  && <form > */}
              <div className="p-5 space-y-4">
               
                <div className="max-w-lg mx-auto mb-5 space-y-4">
                  {/* <span>
                    <label className="text-sm" htmlFor="">
                      Upload card icon
                    </label>{" "}
                    <br />
                    <input
                      type="file"
                      className={inputStyle}
                      name="cardTwoIcon"
                    />
                  </span> */}
                  <span>
                    <label className="text-sm" htmlFor="">
                      Card title
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      className={inputStyle}
                      name="cardTwoTitle"
                    />
                  </span>
                  <span>
                    <label className="text-sm" htmlFor="">
                      Card tag
                    </label>{" "}
                    <br />
                    <textarea
                      rows={3}
                      className={inputStyle}
                      name="cardTwoTag"
                    ></textarea>
                  </span>
                </div>

                <span className="mt-5">
                  <label className="text-md py-5">Description</label>
                  <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                    
                    onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    onChange={(newContent) => {}}
                  />
                </span>
              </div>
            </form>
          )}
          {/* card Three oter option   */}
       {card === "cardThree2" && (
            <form>
              {/* {card3 && <form > */}
              <div className="p-5 space-y-4 relative w-[800px] h-[700px]">
                
                <div className="max-w-lg mx-auto mb-5 space-y-4">
                  {/* <span>
                    <label className="text-sm" htmlFor="">
                      Upload card icon
                    </label>{" "}
                    <br />
                    <input
                      type="file"
                      className={inputStyle}
                      name="cardThreeIcon"
                    />
                  </span> */}
                  <span>
                    <label className="text-sm" htmlFor="">
                      Card title
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      className={inputStyle}
                      name="cardThreeTitle"
                    />
                  </span>
                  <span>
                    <label className="text-sm" htmlFor="">
                      Card tag
                    </label>{" "}
                    <br />
                    <textarea
                      rows={3}
                      className={inputStyle}
                      name="cardThreeTag"
                    ></textarea>
                  </span>

                  <div>
                    <button onClick={handlePopup}>open</button>
                    <div className="absolute flex items-center justify-center inset-0 backdrop-blur-sm bg-opacity-25 p-12 bg-gray-100 min-h-screen  z-10 top-0 mt-3">
                      <div className="  flex flex-col   ">
                        {/* {
          hideCloseIcon && (
            <button
              className="relative text-sm text-white place-self-end -top-2 right-4  bg-gray-700 hover:bg-gray-900 h-10 w-10 rounded-full p-2"
              onClick={isVisible}
            >
              <span className="text-lg text-center ">X</span>
            </button>
          )
        } */}
                        <button
                            className="relative text-sm text-white place-self-end -top-2  right-4  bg-gray-700 hover:bg-gray-900 h-10 w-10 rounded-full p-2"
                            onClick={() => onclose && onclose(false)}
                        >
                            <span className="text-lg text-center ">X</span>
                        </button>

                        <div className=" relative bg-gray-600  rounded p-4 w-[1400px] h-[1000px] overflow-auto"></div>
                      </div>
                    </div>
                    ); isOpen && (<button onClick={handlePopup}>close</button>)
                  </div>
                </div>

                <span className="mt-5">
                  <label className="text-md py-5">Description</label>
                  <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                   
                    onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    onChange={(newContent) => {}}
                  />
                </span>
              </div>
            </form>
          )}

     {card ==="cardThree" && (
         <form>
         <div className="p-5 space-y-4">
          
           <div className="max-w-lg mx-auto mb-5 space-y-4">
             
             <span>
               <label className="text-sm" htmlFor="">
                 Card title
               </label>{" "}
               <br />
               <input
                 type="text"
                 className={inputStyle}
                 name="cardThreeTitle"
               />
             </span>
             <span>
               <label className="text-sm" htmlFor="">
                 Card tag
               </label>{" "}
               <br />
               <textarea
                 rows={3}
                 className={inputStyle}
                 name="cardThreeTag"
               ></textarea>
             </span>
           </div>

           <span className="mt-5">
             <label className="text-md py-5">Description</label>
             <JoditEditor
               ref={editor}
               value={content}
               // config={config}
               onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
               onChange={(newContent) => {}}
             />
           </span>
         </div>
       </form>
     )}

        </div>
        {/*  LOgo Confarmatin MOdal */}
        {confirmationPopUp && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-75">
            <div className="bg-white p-4 rounded-md">
              <p>Arue you sure to Delte this Record?</p>
              <div className="mt-4 flex justify-end">
                <button
                  className="px-4 py-2 mr-2 bg-red-500 text-white rounded-md"
                  onClick={handleDeleteFile}
                >
                  Confirm
                </button>
                <button
                  className="px-4 py-2 mr-2 bg-gray-400 text-white rounded-md"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Data upload pop up */}

        {uploadSucces && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-75">
            <div className="bg-white p-4 rounded-md">
              <p className="text-green-500">Uploaded Successfully</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CardThreeUpdate;