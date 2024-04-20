import CurrencyData from "@/components/ui/temp/CurrencyData";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { ChunkData } from "@/types/ChunkData";
const AllPayments: React.FC = () => {
  const rowsPerPage = 65;



  const chunkedData: object[] = [];
  for (let i = 0; i < CurrencyData.length; i += rowsPerPage) {
    chunkedData.push(CurrencyData.slice(i, i + rowsPerPage));
  }
  // console.log(chunkedData);
  return (
    <section className="pt-8 dark:bg-slate-600 ">
       <div className="w-full flex justify-start mt-1 mb-3 ">

<h1 className="text-lg font-bold text-blue-800 text-start w-fit  mx-3 bg-gradient-to-t to-yellow-300 from-pink-500 p-2 rounded-tl-lg rounded-br-lg   ">All Payments</h1>
</div>
      <div className="flex gap-6 justify-around ">
        <div className="flex bg-[#3949ac] p-2 items-center text-lg  ">
          <input type="date" className="p-2" />
          <section className="pt-8 dark:bg-slate-600 ">
            <div className="flex gap-6 justify-around ">
              <div className="flex bg-[#3949ac] p-2 items-center text-lg  ">
                <input type="date" className="p-2" />
                <h1 className="mx-3 text-white">TO</h1>
                <input type="date" className="p-2" />
                {/* <input type="text" name="" id="" /> */}
              </div>
              <div className="flex gap-1 h-9 pr-2 mt-3 border-2  border-[#3949ac] dark:border-white outline-none rounded-2xl  ">
                <button
                  className={`text-2xl  hover:scale-125  text-black dark:text-white`}
                >
                  <CiSearch />
                </button>
                <input
                  type="text"
                  className={`outline-none border-none hover:border-none w-[350px] h-8 border-black text-white pl-2 `}
                  placeholder="Write to Search...."
                />
              </div>
            </div>
            <div className="flex gap-4">
              {chunkedData.map((chunk: any, tableIndex: number) => {
                return (
                  <div key={tableIndex} className="0 felx-1  ">
                    <table className="table my-8  border text-black dark:text-white   border-none  items-center justify-center border-gray-500  ">
                      <thead>

                        <tr className="bg-[#39b7ea] text-white ">
                          <th className="py-2 text-sm px-2 w-5  border border-gray-50 ">
                            SR{" "}
                          </th>

                          <th className="py-2 text-sm px-1 w-12 ">Currency Name</th>
                          <th className="py-2 text-sm px-2 w-12 text-start ">
                            Currency ISO Code
                          </th>
                          <th className="py-2 text-sm px-1 w-12  ">Money Arrived</th>
                        </tr>
                      </thead>
                      <tbody>
                        {chunk.map((item: any, rowIndex: number) => (
                          <tr
                            key={rowIndex + tableIndex * rowsPerPage}
                            className={rowIndex % 2 === 0 ? "bg-gray-100" : "bg-white"}
                          >
                            <td className="py-3 text-sm  px-1 border-gray-50 border">
                              {rowIndex + 1 + tableIndex * rowsPerPage}
                            </td>
                            <td className="py-2 text-sm px-1 border-gray-200  border">
                              {item.currency}
                            </td>
                            <td className="py-2 text-sm px-1 flex gap-2   items-center justify-center   border-gray-200 border">
                              {item.isoCode}
                            </td>
                            <td className="py-2 text-sm px-lex gap-2  text-red-500   items-center justify-center  border-gray-200 border">
                              {item.country}
                            </td>
                          </tr>
                        ))}
                        {/* </tbody> */}

                        {/* Just for Demo  Displaying  Remove Upper Code  */}
                      </tbody>
                    </table>
                  </div>
                )
              })}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};


export default AllPayments;
