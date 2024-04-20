import { useRef, useState } from "react";
import PrimaryButton from "@/components/button/PrimaryButton";

import dynamic from 'next/dynamic';
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });
// import { useRef, useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import Image from "next/image";
import { Jodit } from "jodit-react";
const CardTwoUpdate = () => {
  const [card, setCard] = useState("cardOne");
  const [card2, setCard2] = useState(false);
  const [card3, setCard3] = useState(false);
  const editor = useRef<Jodit | null>(null);
  const [content, setContent] = useState("");
  // for File selection code
  const FileInputRef = useRef<HTMLInputElement | null>(null);
  const FileInputRef2 = useRef<HTMLInputElement | null>(null);
  const [selectInputFiles, setSlectInputFile] = useState<File | null>(null);
  const [selectInputFilesBaner, setSlectInputFileBaner] = useState<File | null>(null);
  const [confirmationPopUp, setConfirmationPopUp] = useState<boolean>(false);
  const [confirmationPopUpBaner, setConfirmationPopUpBaner] = useState<boolean>(false);
  const [uploadSucces, setUploadSuccess] = useState<boolean>(false);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSlectInputFile(file);
    }
  };
  const handleFileChangeBaner = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSlectInputFileBaner(file);
    }
  };
  const handleConfirmationPopUp = () => {
    setConfirmationPopUp(true);
  };
  const handleConfirmationPopUpBaner = () => {
    setConfirmationPopUpBaner(true);
  };

  const handleCancel = () => {
    setConfirmationPopUp(false);
  };

  const handleEditClick = () => {
    FileInputRef.current?.click();
  };

  const handleDeleteFile = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setSlectInputFile(null); //this is for now temporary use when data store in db this ilne
    setConfirmationPopUp(false);
};

  const handleUploadLogo = () => {
    setSlectInputFile(null);
    setUploadSuccess(true);

    setTimeout(() => {
      setUploadSuccess(false);
    }, 3000);
  };

  // for File selection code

  const inputStyle = "p-2 border w-full rounded-md border-blue-400";

  const config = {
    height: 600,
  };
  return (
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
          {/* <span onClick={() => setCard('cardThree')}> <PrimaryButton text={"Card Three"} /></span> */}

          {/* <span onClick={() => setCard(true)}><PrimaryButton text={"Card One"} /></span>
                    <span onClick={() => setCard2(true)}> <PrimaryButton text={"Card Two"} /></span>
                    <span onClick={() => setCard3(true)}> <PrimaryButton text={"Card Three"} /></span> */}
        </div>

        <div>{/* <PrimaryButton text={"Update Card"} /> */}</div>
      </div>

      <div>
        {/* carOne  */}
        <span className="pl-14">
          <h2 className="text-2xl font-bold text-black m-4 mb-2 text-center">
            Card Two
          </h2>
          <div className=" ml-96 mt-3">
            {/* <h2 className="text-2xl mb-5">Logo Update</h2> */}

            <input
              type="file"
              name="logo"
              className="  hidden"
              onChange={handleFileChange}
              ref={FileInputRef}
            />

            <div className="flex items-center space-x-4 gap-2">
              <button
                className="bg-gradient-to-r to-pink-500 from-yellow-400 hover:bg-pink-700 text-white px-6 py-2 ml-6 rounded"
                onClick={() => FileInputRef.current?.click()}
              >
                Select File{" "}
              </button>
              {selectInputFiles && (
                <div className="flex items-center space-x-3 w-[250px] mt-4 m-2">
                  <Image
                    src={URL.createObjectURL(selectInputFiles)}
                    alt="Baner"
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
            </div>
          </div>
        </span>
        {card === "cardOne" && (
          <form>
            {/* {card && <form > */}
            <div className="p-5 space-y-4">
              <div className="flex justify-end">
                <button type="submit">
                  <PrimaryButton text={"Update Card"} />
                </button>
              </div>
              <div className="max-w-lg mx-auto mb-5 space-y-4">
                <span>
                  <label className="text-sm" htmlFor="">
                    Card title
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    className={inputStyle}
                    name="cardOneTitle"
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
                    name="cardOneTag"
                  ></textarea>
                </span>
              </div>

              <span className="mt-5 h-[600px]">
                <label className="text-md py-5">Description</label>
                <JoditEditor
                  
                  ref={editor}
                  value={content}
                  config={config}
                  
                  onBlur={(newContent: string) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                  onChange={(newContent: string) => {}} // assuming newContent is a string
                />

              </span>
            </div>
          </form>
        )}

        {/* card Two  */}
        {card === "cardTwo" && (
          <form>
            {/* {card2  && <form > */}
            <div className="p-5 space-y-4">
              <div className="flex justify-end">
                {/* <h2 className="text-2xl text-black">Card Two</h2> */}
                <button type="submit">
                  <PrimaryButton text={"Update Card"} />
                </button>
              </div>
              <div className="max-w-lg mx-auto mb-5 space-y-4">
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
        {/* card Three  */}
        {card === "cardThree" && (
          <form>
            {/* {card3 && <form > */}
            <div className="p-5 space-y-4">
              <div className="flex justify-end">
                <h2 className="text-2xl text-black">Card Three</h2>
                <button type="submit">
                  <PrimaryButton text={"Update Card"} />
                </button>
              </div>
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
  );
};

export default CardTwoUpdate;
