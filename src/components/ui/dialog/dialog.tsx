import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import OrangeButton from '@/components/ui/button/OrangeButton';
import BleuButton from '@/components/ui/button/BleuButton';
import RedButton from '@/components/ui/button/RedButton';
import GreenButton from '@/components/ui/button/GreenButton';
interface DialogOrderProps {
  title: string; 
  content: React.ReactElement; 
}

export default function DailogOrder( props: DialogOrderProps ) {
  const [open, setOpen] = useState(true);
  const { title, content } = props;

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto" 
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="flex justify-center items-center h-full">
            <Dialog.Panel
              className={`relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-xl w-full max-w-3xl`} // Set maximum width for larger screens
            >
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <section className="pt-8 dark:bg-slate-600">
                <div className="w-full flex justify-start mt-1 mb-3">
                  <h1 className="text-lg font-bold text-blue-800 text-start w-fit mx-3 bg-gradient-to-t to-yellow-300 from-pink-500 p-2 rounded-tl-lg rounded-br-lg">
                  {title}                  </h1>
                </div>
                {content}
            
              </section>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}
