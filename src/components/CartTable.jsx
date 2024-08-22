import React from "react";

const CartTable = () => {
  return (
    <>
      <div className="flex flex-wrap -mx-3 mb-5">
        <div className="w-full max-w-full px-3 mb-6  mx-auto">
          <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
            <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
              <h1 className="text-center font-bold text-xl underline text-blue-900">
                Cart Products
              </h1>

              {/* card body  */}
              <div className="flex-auto block py-8 pt-6 px-9">
                <div className="overflow-x-auto">
                  <table className="w-full my-0 align-middle text-dark border-neutral-200">
                    <thead className="align-bottom">
                      <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                        <th className="pb-3 text-start min-w-[100px]">S.No.</th>
                        <th className="pb-3 text-start min-w-[100px]">Title</th>
                        <th className="pb-3 text-start min-w-[100px]">Price</th>
                        <th className="pb-3 text-start min-w-[100px]">
                          Total Product
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-dashed last:border-b-0">
                        <td className="p-3 pl-0">
                          <div className="flex items-center">
                            <div className="relative inline-block shrink-0 rounded-2xl me-3">
                              1
                            </div>
                          </div>
                        </td>
                        <td className="p-3 pl-0">
                          <div className="flex flex-col justify-start">
                            <a
                              href="javascript:void(0)"
                              className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                            >
                              {" "}
                              Social Media API{" "}
                            </a>
                          </div>
                        </td>
                        <td className="p-3 pr-0 text-start">
                          <span className="font-semibold text-light-inverse text-md/normal">
                            Olivia Cambell
                          </span>
                        </td>
                        <td className="p-3 pr-0 text-start">
                          <span className="font-semibold text-light-inverse text-md/normal">
                            Olivia Cambell
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTable;
