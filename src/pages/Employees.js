import React from "react";
import EmployeeList from "../component/Employees/EmployeesList";
import { EMPLOYEES } from "../data/employees";
const Employees = () => {

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-1 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-1 xl:gap-x-8">
          <div className="group relative rounded-md border px-4 py-3 bg-white">
              <h6 className="text-center my-4 text-sm text-gray-500 font-bold">
                Employees
              </h6>
              <ul className="divide-y divide-gray-100">
                {EMPLOYEES.map((person, index) => (
                  <EmployeeList person={person} key={index}/>
                ))}
              </ul>
          </div>
        </div>
    </div>
  );
};

export default Employees;

