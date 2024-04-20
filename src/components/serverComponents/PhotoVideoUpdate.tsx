import Image from "next/image";
import { useRef, useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import PrimaryButton from "@/components/button/PrimaryButton";



const PhotoVideoUpdate = () => {
  // for input taking file code
  const FileInputRef = useRef<HTMLInputElement>(null);
  const FileInputRef2 = useRef<HTMLInputElement>(null);
  const [selectInputFiles, setSlectInputFile] = useState<File[] | null>([]);
  const [selectInputFilesBaner, setSlectInputFileBaner] = useState<File[]>([]);
  const [confirmationPopUp, setConfirmationPopUp] = useState<boolean>(false);
  const [confirmationPopUpBaner, setConfirmationPopUpBaner] = useState<boolean>(false);
  const [uploadSucces, setUploadSuccess] = useState<boolean>(false);
  const [uploadedFile, setUploadedFiles] = useState<File[]>([]);
  const [uploadFilesLogo, setUploadFileLogo] = useState<File[]>([]);
  

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target?.result;
        // Use imageUrl as needed (e.g., display it in an <img> tag)
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleFileChangeBaner = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files;
    if (file && file.length > 0) {
      setSlectInputFileBaner(Array.from(file));
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
  const handleCancelBaner = () => {
    setConfirmationPopUpBaner(false);
  };

  const handleEditClick = () => {
    FileInputRef.current?.click();
  };
  const handleEditClickBaner = () => {
    FileInputRef2.current?.click();
  };

  const handleDeleteFile = (e: any) => {
    setSlectInputFile(null); //this is for now temporary use when data store in db this ilne
    setConfirmationPopUp(false);
  };



  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  const [deleteIndexIcon, setDeleteIndexIcon] = useState<number | null>(null);
  const [confirmationPopUpIUplod, setConfirmationPopUpate] = useState<boolean>(false);
  const [confirmationPopUpIcon, setConfirmationPopIcon] = useState<boolean>(false);


  const handleDeleteFileClck = (index:number) => {
    setDeleteIndex(index); //this is for now temporary use when data store in db this ilne
    setConfirmationPopUpate(true);
  };

  const handleDeleteFileBaner =()=>{
    
    setDeleteIndex(null) 
  }
const [updatedFileIcons, setUpdatedFileIcon]=useState([])
const [ConfirmationPopIconPop,setConfirmationPopIconPop] = useState(false)
const handleDeleteIcon = () => {
  const updatedFiles = [...updatedFileIcons];
  if (deleteIndexIcon !== null) {
    updatedFiles.splice(deleteIndexIcon, 1);
    setUpdatedFileIcon(updatedFiles);
  }
  setConfirmationPopIcon(false);
  setDeleteIndexIcon(null);
};

  const handleDeleteUplod =()=>{
    const updatedFiles = [...uploadedFile];
    if (deleteIndex !== null) {
    updatedFiles.splice(deleteIndex , 1);
    setUploadedFiles(updatedFiles);}
    setConfirmationPopUpate(false);
    setDeleteIndex(null) 
  }

  const handleUplodCancel = ()=>{
    setConfirmationPopUpate(false);
  }

  const handleUploadLogo = () => {
    setSlectInputFile(null);
    setUploadSuccess(true);

    setTimeout(() => {
      setUploadSuccess(false);
    }, 3000);
  };
  const handleUploadClick = () => {
    setUploadedFiles([...uploadedFile, ...selectInputFilesBaner]);
    setSlectInputFileBaner([]);
    setUploadSuccess(true);
    setTimeout(() => {
      setUploadSuccess(false);
    }, 2000);
  };

  const handleUploadClickIcon = () => {
    if (selectInputFiles) {
      setUploadFileLogo((prevFiles) => [...prevFiles, ...selectInputFiles]);
      setSlectInputFileBaner([]);
      setUploadSuccess(true);
  
      setTimeout(() => {
        setUploadSuccess(false);
      }, 2000);
    }
  };
  

  // for input taking file code

 

  const inputStyle = "p-2 border w-full rounded-md border-blue-400";

  const buttonStyle =
    "bg-indigo-600 p-2 w-40 text-lg font-semibold text-white mt-4  rounded-md border border-indigo-500 flex items-center justify-center gap-2 hover:bg-indigo-100";

  return (
    <div className="container mx-auto border border-red-500">
      <div className="p-10">
        <h2 className="text-center text-2xl font-bold">Map Photo/Video Upload</h2>
        <div className="py-10 mb-5 md:flex  gap-4">
          <div className="w-1/2">
            <input
              type="file"
              name="logo"
              className="  hidden"
              onChange={handleFileChange}
              ref={FileInputRef}
            />

            <div className="flex items-center space-x-4 gap-2">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => FileInputRef.current?.click()}
              >
                Select Image{" "}
              </button>
              {selectInputFiles && (
                <div className="flex items-center space-x-3 w-[250px] mt-4 m-2">
                  {/* <Image
                    src={imageUrl}
                    alt="Baner"
                    className="w-20 h-20 rounded"
                    width={20}
                    height={20}
                  /> */}
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
            <br />
            <button
              className={buttonStyle}
              type="submit"
              onClick={handleUploadClickIcon}
            >
              Upload
            </button>
            {/* </form> */}
          </div>
          <div className="w-full mx-auto flex items-center justify-center flex-col gap-2">
            <div className="text-blue-600 font-bold text-2xl text-center py-1 dark:text-white">Uploded Icons</div>
            { selectInputFiles && selectInputFiles.length > 0 && (
                <div className="flex items-center space-x-3 w-[250px] mt-4 m-2">

                 <div className="flex items-center space-x-2">
                    <div>
                        {selectInputFiles.map((file, index)=>(
                            <div key={index}  className="flex space-x-1">

                                
                  {/* <Image
                    src={URL.createObjectURL(file)}
                    alt="Baner"
                    className="w-20 h-20 rounded mr-3"
                    width={20}
                    height={20}
                  /> */}
                              <button
                    className="bg-green-500 h-fit text-white px-2 py-2 rounded"
                    onClick={handleEditClick}
                  >
                    <BiEdit size={30}/>
                  </button>
                  <button
                    className="bg-red-500 h-fit text-white px-2 py-2 rounded"
                    onClick={handleConfirmationPopUp}
                  >
                    <BiTrash size={30} />
                  </button>
                            </div>
                        ))}
                    </div>
                  </div>
                  {/* <div className="text-medium px-2 py-2 mr-3 w-40 ">
                {selectInputFiles.name}
              </div> */}
                  
                </div>
              )}
                    </div>
        </div>
      </div>
      <div className="px-10">
        <h2 className="text-center text-2xl font-bold">support compnay logo</h2>
        <div className="py-10 mb-5 ">
          <div className="w-1/2">
            <input
              type="file"
              name="banner"
              className="  hidden"
              onChange={handleFileChangeBaner}
              ref={FileInputRef2}
            />
            <div className="flex items-center space-x-4 gap-2">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => FileInputRef2.current?.click()}
              >
                Select File{" "}
              </button>
              {selectInputFilesBaner.length > 0 && (
                <div className="flex items-center space-x-3 w-[250px] mt-4 m-2">
                  <div className="flex items-center space-x-2">
                    <div>
                        {selectInputFilesBaner.map((file, index)=>(
                            <div key={index}  className="flex space-x-1">
                                
                  <Image
                    src={URL.createObjectURL(file)}
                    alt="Baner"
                    className="w-20 h-20 rounded mr-3"
                    width={20}
                    height={20}
                  />
                              <button
                    className="bg-green-500 h-fit text-white px-2 py-2 rounded"
                    onClick={handleEditClickBaner}
                  >
                    <BiEdit size={30}/>
                  </button>
                  <button
                    className="bg-red-500 h-fit text-white px-2 py-2 rounded"
                    onClick={handleConfirmationPopUpBaner}
                  >
                    <BiTrash size={30} />
                  </button>
                            </div>
                        ))}
                    </div>
                  </div>
                  {/* <div className="text-medium px-2 py-2 mr-3 w-40 ">
                {selectInputFiles.name}
              </div> */}
                  
                </div>
              )}
            </div>
            <button
              className={buttonStyle}
              onClick={handleUploadClick}
            >
              Update Icon 
            </button>
          </div>
          <div className="w-full mx-auto flex items-center justify-center flex-col gap-2">
            <div className="text-blue-600 font-bold text-2xl text-center py-1 dark:text-white">support compnay logo list</div>
                        {uploadedFile.length > 0 && (
                            <div className="m-2 flex space-x-3 "> 
                                {
                                    uploadedFile.map((file, index)=>(
                                        <div key={index} className="felx flex-col-reverse space-y-2">
                                        <Image
                                        src={URL.createObjectURL(file)}
                                        alt="Baner"
                                        className="w-24 h-24 rounded"
                                        width={20}
                                        height={20}
                                      />
                                      <button
                                      className="bg-green-500 text-white px-2 py-2 rounded"
                                      onClick={handleEditClickBaner}
                                    >
                                      <BiEdit />
                                    </button>
                                    <button
                                      className="bg-red-500 text-white px-2 py-2 rounded"
                                      onClick={()=>handleDeleteFileClck(index)}
                                    >
                                      <BiTrash />
                                    </button>
                                    </div>
                                    ))
                                }
                                
                                
                                  
                          </div> 
                        ) 
                        }
                            {/* </div> */}
                    </div>
          <div className="mt-10 grid  grid-cols-2 gap-2 justify-center md:grid-cols-6">
            {/* <div>
              <button
                onClick={handleUploadDelete}
                className="text-2xl px-4 py-2 bg-red-900 text-white absolute rounded-3xl bg-opacity-20"
              >
                X
              </button>
              <img className="w-48 rounded-xl" src={imgUpload} alt="" />
            </div> */}
            {/* <div>
              <button
                onClick={handleUploadDelete}
                className="text-2xl px-4 py-2 bg-red-900 text-white absolute rounded-3xl bg-opacity-20"
              >
                X
              </button>
              <img className="w-48 rounded-xl" src={imgUpload} alt="" />
            </div> */}
            {/* <div>
              <button
                onClick={handleUploadDelete}
                className="text-2xl px-4 py-2 bg-red-900 text-white absolute rounded-3xl bg-opacity-20"
              >
                X
              </button>
              <img className="w-48 rounded-xl" src={imgUpload} alt="" />
            </div> */}
          </div>
        </div>
      </div>

{/* for icon uplod  delete po up */}
{/* Bannar  Confarmatin MOdal of delete uplod icon */}
{confirmationPopUpIcon && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-75">
          <div className="bg-white p-4 rounded-md">
            <p>Arue you sure to Delte this Record?</p>
            <div className="mt-4 flex justify-end">
              <button
                className="px-4 py-2 mr-2 bg-red-500 text-white rounded-md"
                onClick={handleDeleteIcon}
              >
                Confirm
              </button>
              <button
                className="px-4 py-2 mr-2 bg-gray-400 text-white rounded-md"
                onClick={handleUplodCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
 {/* Bannar  Confarmatin MOdal of delete uplod icon */}
 {confirmationPopUpIUplod && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-75">
          <div className="bg-white p-4 rounded-md">
            <p>Arue you sure to Delte this Record?</p>
            <div className="mt-4 flex justify-end">
              <button
                className="px-4 py-2 mr-2 bg-red-500 text-white rounded-md"
                onClick={handleDeleteUplod}
              >
                Confirm
              </button>
              <button
                className="px-4 py-2 mr-2 bg-gray-400 text-white rounded-md"
                onClick={handleUplodCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Bannar  Confarmatin MOdal */}
      {confirmationPopUpBaner && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-75">
          <div className="bg-white p-4 rounded-md">
            <p>Arue you sure to Delte this Record?</p>
            <div className="mt-4 flex justify-end">
              <button
                className="px-4 py-2 mr-2 bg-red-500 text-white rounded-md"
                onClick={handleDeleteFileBaner}
              >
                Confirm
              </button>
              <button
                className="px-4 py-2 mr-2 bg-gray-400 text-white rounded-md"
                onClick={handleCancelBaner}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
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

export default PhotoVideoUpdate;
