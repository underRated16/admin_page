import React, { useState } from "react";
// import Modal from "../modal/Modal";
// import GlobalLocations from "../temp/GlobalLocations";
import { adminFooterItems } from "../../mokeData";
import {CiCircleMinus} from "react-icons/ci"
import Modal from "../modal/Modal";
import GlobalLocations from "../temp/GlobalLocations";
export interface GlobState{
  file?:any;
  homeAddress?:string;
    sl:number;
    id:number;
    country:string;
    image:string;
    officeAddress:string;
    gmail:string;
    contactNo:string;
}
const CreateGlobalLocations:React.FC = () => {
    const [globalLocations, setGlobalLocations] = useState<GlobState[]>([
        {
          sl: 1,
          id: 1,
          country: "India",
          image:
            "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
          officeAddress: "Kolkata",
          gmail: "USA",
          contactNo: "1234567890",
        },
      ])
    
      const [isVisible, setIsVisible] = useState(false);
      const [isEditing, setIsEditing] = useState(false);
      const [editIndex, setEditIndex] = useState<number| null>(null);
      interface globData{
        file?: any;
        country: string;
        officeAddress: string;
        gmail: string;
        contactNo: string;
        homeAddress:string;
      }
      const [createGlobalLocationData, setCreateGlobalLocationData] = useState<any>({
        file: null,
        country: "",
        officeAddress: "",
        gmail: "",
        contactNo: "",
        homeAddress: "",
      });
    
    
      const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCreateGlobalLocationData({
          ...createGlobalLocationData,
          [name]: value,
        });
      };
    
      const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        const selectedFiles = files as FileList;
        setCreateGlobalLocationData({
          ...createGlobalLocationData,
          file: selectedFiles?.[0],
        });
      }
    
      const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isEditing) {
          // Update existing data
          setGlobalLocations((prevGlobalLocations:any) =>
            prevGlobalLocations.map((item:any, index:number) =>
              index === editIndex ? createGlobalLocationData : item
            )
          );
        } else {
          // Add new data
          setGlobalLocations((prevGlobalLocations:any) => [
            ...prevGlobalLocations,
            createGlobalLocationData,
          ]);
        }
    
        setIsVisible(false);
        setCreateGlobalLocationData({
          file: null,
          country: "",
          officeAddress: "",
          gmail: "",
          contactNo: "",
          homeAddress: "",
        });
        setIsEditing(false);
        setEditIndex(null);
      };
    
      const handleEditClick = (index:number) => {
        setIsEditing(true);
        setEditIndex(index);
        setCreateGlobalLocationData(globalLocations[index]);
        setIsVisible(true);
      };
    return (
        <div>
      <div className="flex items-end place-items-end justify-end m-10">
      </div>
      <div>
        <div>
          <GlobalLocations data={globalLocations} setGlobalLocations={setGlobalLocations} onEditClick={handleEditClick}
          />
        </div>
      </div>
      <Modal isVisible={isVisible} onClose={setIsVisible}>
        <div className="w-[500px] relative ">
         <div className="flex justify-between">
         <h1 className="text-xl font-bold text-center text-white p-4">
          Edit Global Locations
          </h1>
          <button className="text-white mr-4" onClick={()=>setIsVisible(false)}><CiCircleMinus size={24}/></button>
         </div>
          
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-2">
            <div className="mb-2">
              <label
                className="block text-gray-800 text-sm font-bold mb-2"
                htmlFor="file"
              >
                Flag
              </label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-gray-800 text-sm font-bold mb-2"
                htmlFor="file"
              >/
                Country{" "}
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={createGlobalLocationData.country}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <div className="mb-2">
                <label
                  className="block text-gray-800 text-sm font-bold mb-2"
                  htmlFor="file"
                >
                  Office Address
                </label>
                <input
                  type="text"
                  id="officeAddress"
                  name="officeAddress"
                  value={createGlobalLocationData.officeAddress}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-2">
                <label
                  className="block text-gray-800 text-sm font-bold mb-2"
                  htmlFor="file"
                >
                  Gmail
                </label>
                <input
                  type="text"
                  id="gmail"
                  name="gmail"
                  value={createGlobalLocationData.gmail}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <div className="mb-2">
                  <label
                    className="block text-gray-800 text-sm font-bold mb-2"
                    htmlFor="file"
                  >
                    Contact No
                  </label>
                  <input
                    type="text"
                    id="contactNo"
                    name="contactNo"
                    value={createGlobalLocationData.contactNo}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-2">
                  <label
                    className="block text-gray-800 text-sm font-bold mb-2"
                    htmlFor="file"
                  >
                    Home Address
                  </label>
                  <input
                    type="text"
                    id="homeAddress"
                    name="homeAddress"
                    value={createGlobalLocationData.homeAddress}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>


                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    {/* Add */}
                  </button>
                </div>
              </div>
              </div>
          </form>
        </div>
      </Modal>
    </div>
    );
};
export default CreateGlobalLocations;