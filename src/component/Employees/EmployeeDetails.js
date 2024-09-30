import React, { useEffect, useState } from 'react';
import { EMPLOYEES } from "../../data/employees";
import { useParams } from 'react-router-dom';
import { Button } from "@mui/material";

function EmployeeDetails() {
  let [person, setPerson] = useState('');
  let { Id } = useParams();
  
  useEffect(() => {
    const employee = EMPLOYEES.find((employee) => employee.id === parseInt(Id));
    if (!employee) return null;
    console.log(employee);
    setPerson(employee);
  }, [Id]);

  console.log(person);
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-1 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-1 xl:gap-x-8">
          <div className="group relative rounded-md border px-4 py-3 bg-white">
              <h6 className="text-center my-4 text-sm text-gray-500 font-bold">
                Edit Employee Details
              </h6>


              <div className="grid grid-cols-3 gap-4">           
                <div className="group relative rounded-md border px-4 py-3 h-auto" style={{backgroundColor:'#e0d4ce', color:'#99613f'}} >
                  
                  <div className="relative mt-8 flex items-center justify-center gap-x-6">

                    <img alt={person.name} src={require("../../assets/images/" +
                    person.photo +
                    ".jpg")} className="h-32 w-32 rounded-full"/>

                    <div className="text-sm leading-6">
                      <h2 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        <a href={person.name}>
                          <span className="absolute inset-0" />
                          {person.name}
                        </a>
                      </h2>                      
                    </div>

                  </div>
                  
                  <div className="col-span-full text-center mt-8">                    
                    <div className="mt-2 flex items-center justify-center gap-x-3">                       
                      <h2 className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</h2>
                    </div>
                  </div>

                  <div className="col-span-full text-center mt-8">                    
                    <div className="mt-2 flex items-center justify-center gap-x-3">                       
                      <button
                        type="button"
                        className="rounded-md bg-white px-3 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        style={{backgroundColor:'#e0d4ce', color:'#99613f'}}
                      >
                        CHANGE IMAGE
                      </button>
                    </div>
                  </div>             
               
                </div>
                  

                <div className="col-span-2 group relative rounded-md border px-4 py-3" style={{backgroundColor:'#e0d4ce', color:'#99613f'}} >
                  <div className="border-b border-gray-900/10 pb-12">
                          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                First name
                              </label>
                              <div className="mt-2">
                                <input
                                  id="first-name"
                                  name="first-name"
                                  type="text"
                                  autoComplete="given-name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-3">
                              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Last name
                              </label>
                              <div className="mt-2">
                                <input
                                  id="last-name"
                                  name="last-name"
                                  type="text"
                                  autoComplete="family-name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-3">
                              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                              </label>
                              <div className="mt-2">
                                <input
                                  id="email"
                                  name="email"
                                  type="email"
                                  autoComplete="email"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                            <div className="sm:col-span-3">
                              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                                Phone
                              </label>
                              <div className="mt-2">
                                <input
                                  id="phone"
                                  name="phone"
                                  type="phone"
                                  autoComplete="phone"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-3">
                              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                City
                              </label>
                              <div className="mt-2">
                                <input
                                  id="city"
                                  name="city"
                                  type="city"
                                  autoComplete="city"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                            <div className="sm:col-span-3">
                              <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900">
                                State
                              </label>
                              <div className="mt-2">
                                <input
                                  id="state"
                                  name="state"
                                  type="state"
                                  autoComplete="state"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>



                            <div className="sm:col-span-3">
                              <label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-900">
                                Role
                              </label>
                              <div className="mt-2">
                                <select
                                  id="role"
                                  name="role"
                                  autoComplete="role"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                  <option>Barista</option>
                                  <option>Baker</option>
                                  <option>Chief Baker</option>
                                  <option>Administrator</option>
                                </select>
                              </div>
                            </div>



                        </div>
                  </div>

                  <div className="mt-6 flex items-center justify-center gap-x-6">
                        <Button variant="contained" style={{backgroundColor:'#e0d4ce', color:'#99613f'}} 
                          type="submit"
                          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                         
                        >
                          SAVE
                        </Button>

                        <Button variant="contained" style={{backgroundColor:'#e0d4ce', color:'#99613f'}} >
                          CANCEL
                        </Button>
                        
                        <Button variant="contained" style={{backgroundColor:'#e0d4ce', color:'#99613f'}}
                          
                        >
                          SOFT DELETE
                        </Button>
                  </div>
                </div>

             </div>
          </div>
        </div>
    </div>
  )
}

export default EmployeeDetails