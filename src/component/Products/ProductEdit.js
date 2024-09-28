import React, {useEffect, useState} from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline';
import { DrawerHeader } from '../mainLayout/materialItem';
import { Button } from "@mui/material";

const ProductEdit = ({open, handleClose, data}) => {
  const [newName, setNewName] = useState('');
  const [newPrice, setNewPrice] = useState('');

  useEffect(()=>{
    setNewName(data.name);
    setNewPrice(data.price);
  }, [data]);

  //Edit Product
  const saveHandler = (e) =>{
    e.preventDefault();
    setNewName(newName);
    setNewPrice(newPrice);
    console.log(newName, newPrice)
    handleClose();
  }

  //Soft Delete Product
  const softDeleteHandler = (e) =>{
      e.preventDefault();
  }

  return (
    <Dialog open={open} onClose={handleClose} className="relative z-10">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <DialogPanel
                  transition
                  className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                >
                  <TransitionChild>
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        onClick={handleClose}
                        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                      </button>
                    </div>
                  </TransitionChild>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <DrawerHeader />
                    <div className="px-4 sm:px-6">
                      <DialogTitle className="text-base font-semibold leading-6 text-gray-900"></DialogTitle>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">


                    <form>
                      <div className="space-y-12">
                        <div className="">


                       
                          <div className="sm:col-span-4 py-5">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                              Name
                            </label>
                            <div className="mt-2">
                              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                  id="name"
                                  name="name"
                                  type="text"
                                  placeholder="Coffee Name"
                                  autoComplete="name"
                                  value={newName}
                                  onChange={(e) => setNewName(e.target.value)}
                                  className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                          </div>


                          <div className="col-span-full py-5">
                            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                              Price
                            </label>
                            <div className="mt-2">
                              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    id="price"
                                    name="price"
                                    type="text"
                                    placeholder="Price"
                                    autoComplete="price"
                                    value={newPrice}
                                    onChange={(e) => setNewPrice(e.target.value)}
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                  />
                                </div>
                            </div>                          
                          </div>

                          <div className="col-span-full">                           
                            <div className="mt-2 flex justify-center rounded-lg  border-gray-900/25 px-6 py-10">
                              <div className="text-center">
                                <div className="flex text-sm leading-6 text-gray-600">

                                  <Button variant="contained" style={{backgroundColor:'#e0d4ce', color:'#99613f'}} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    <label htmlFor="file-upload"
                                      className="relative cursor-pointer rounded-md text-white-600 font-semibold focus-within:outline-none focus-within:ring-2  focus-within:ring-offset-2"
                                    >
                                      <span>UPLOAD IMAGE</span>
                                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                    </label>  
                                  </Button>                           
                                </div>                               
                              </div>
                            </div>
                          </div>
         

                        </div>
                      </div>
                      <div className="mt-6 flex items-center justify-end gap-x-6">
                        <Button variant="contained" style={{backgroundColor:'#e0d4ce', color:'#99613f'}} 
                          type="submit"
                          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          onClick={saveHandler}
                        >
                          SAVE
                        </Button>

                        <Button variant="contained" onClick={handleClose} style={{backgroundColor:'#e0d4ce', color:'#99613f'}} >
                          CANCEL
                        </Button>
                        
                        <Button variant="contained" style={{backgroundColor:'#e0d4ce', color:'#99613f'}}
                          onClick={softDeleteHandler}
                        >
                          SOFT DELETE
                        </Button>
                      </div>
                    </form>    




                    </div>
                  </div>
                </DialogPanel>
              </div>
            </div>
          </div>
        </Dialog>
  )
}

export default ProductEdit;