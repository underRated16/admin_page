'use client'
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import BannerLogoPage from '@/components/serverComponents/BannerLogoPage'
import CardThreeUpdate from '@/components/serverComponents/CardThreeUpdate'
import CardFourUpdate from '@/components/serverComponents/CardFourUpdate'
import CardTwoUpdate from '@/components/serverComponents/CardTwoUpdate'
import PhotoVideoUpdate from '@/components/serverComponents/PhotoVideoUpdate'
import IconUpload from '@/components/serverComponents/IconUpload'

type Service = {
  id: number;
  file: File | null;
  service_title: string;
  service_message: string;
};

type Category = {
  id: number;
  name: string;
};

const Services = () => {
  const [isVisible, setIsVisible] = useState<string | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [categoryId, setCategoryId] = useState<number>(1);
  const [category, setCategory] = useState<string>("");
  const [categories, setCategories] = useState<Category[]>([]);

  const [formData, setFormData] = useState<Service>({
    id: 0,
    file: null,
    service_title: "",
    service_message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        file: e.target.files[0],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { file, service_title, service_message } = formData;
    const newService = { id: categoryId, file, service_title, service_message };
    setServices([...services, newService]);
    setFormData({
      id: 0,
      file: null,
      service_title: "",
      service_message: "",
    });
    setIsVisible(null);
    setCategoryId(categoryId + 1);
  };

  const handleCategoryFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCategory = { id: categoryId, name: category };
    setCategories([...categories, newCategory]);
    setCategoryId(categoryId + 1);
    setCategory("");
  };

  const handleCategoryDelete = (id: number) => {
    const updatedCategories = categories.filter((category) => category.id !== id);
    setCategories(updatedCategories);
  };

  const buttonStyle =
    "bg-indigo-600 p-2 w-40 text-lg font-semibold text-white mt-4  rounded-md border border-indigo-500 flex items-center justify-center gap-2 hover:bg-indigo-100";
  
  return (
    <div className="min-h-screen">
      {/* Buttons to toggle visibility */}
      <div>
        <h1 className="text-2xl text-center font-semibold m-10">
          Our services and technologies
        </h1>
      </div>
      <div className="flex items-center space-x-1 justify-between ml-20 mr-20">
        <button className={buttonStyle} onClick={() => setIsVisible('logo')}>
        Logo/Banner 
        </button>
        <button className={buttonStyle} onClick={() => setIsVisible('threeCard')}>
            3 Card
          </button>
          <button className={buttonStyle} onClick={() => setIsVisible('fourCard')}>
          4 Card 
          </button>
          <button className={buttonStyle} onClick={() => setIsVisible('secondCard')}>
          2 Card 
          </button>
          <button className={`p-3 px-2  bg-indigo-600 mt-4  rounded-md w-48  font-semibold border-indigo-500 flex items-center justify-center text-white`} onClick={() => setIsVisible("photoVideo")}>
          Banner/Company_logo
          </button>
          <button className={buttonStyle} onClick={() => setIsVisible("iconUpload")}>
          Page Icon
          </button>
       
      </div>
      {/* Display categories */}
      {categories.length > 0 && (
        <div className="pt-10">
          <h2 className="font-bold text-xl px-0 pl-6">CATEGORIES</h2>
          <div className="max-w-full m-auto px-4 pb-12 pt-2">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 pb-6 pt-2">
              {categories.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-100 hover:bg-white cursor-pointer duration-500 rounded-lg p-4 flex gap-2 items-center"
                >
                  <p className="text-sm">{item.name}</p>
                  <MdDelete className="text-red-500" onClick={() => handleCategoryDelete(item.id)} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Conditional rendering */}
      {isVisible === "logo" && <BannerLogoPage />}
      {isVisible === "threeCard" && <CardThreeUpdate />}
      {isVisible === "fourCard" && <CardFourUpdate />}
      {isVisible === "secondCard" && <CardTwoUpdate />}
      {isVisible === "photoVideo" && <PhotoVideoUpdate />}
      {isVisible === "iconUpload" && <IconUpload />}
    </div>
  );
};

export default Services;
