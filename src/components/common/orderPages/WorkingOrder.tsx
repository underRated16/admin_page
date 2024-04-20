import OrangeButton from '@/components/ui/button/OrangeButton';
import BleuButton from '@/components/ui/button/BleuButton';
import RedButton from '@/components/ui/button/RedButton';
import GreenButton from '@/components/ui/button/GreenButton';


import React from 'react';

function WorkingOrder() {
  return (
    <section className="pt-8 dark:bg-slate-600">
      <div className="w-full flex justify-start mt-1 mb-3 ">
        <h1 className="text-lg font-bold text-blue-800 text-start w-fit mx-3 bg-gradient-to-t to-yellow-300 from-pink-500 p-2 rounded-tl-lg rounded-br-lg">
           Payment Order
        </h1>
      </div>
     
        
        <div className="flex gap-2 justify-center">
    
        <GreenButton title="Accept"  />
        <RedButton title="Decline" />
      
        <OrangeButton title="Admin Notepad" />
        <OrangeButton title="Project Documentation upload" />
        <OrangeButton title="File Deletion Date" />

        <OrangeButton title="Status" />

        <GreenButton title="save"  />
        </div>
     
      <div className="flex flex-col items-start gap-2">

      <div className="flex flex-col gap-2 mt-20">
        <BleuButton title="Project is required" />
        <BleuButton title="What currency do you want to pay in ?" />
        <BleuButton title="Upload the project file" />
        <BleuButton title="Provides athor project files" />
      </div>      </div>

    </section>
  );
}

export default WorkingOrder;
