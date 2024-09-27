import React from 'react';
import { BarChart } from '@tremor/react';

const data = [
  {    day: 'Mon',    'Start of Day': 68,    'End of Day': 28,  },  
  {    day: 'Thu',    'Start of Day': 70,    'End of Day': 30,  },  
  {    day: 'Wed',    'Start of Day': 80,    'End of Day': 70,  },  
  {    day: 'Thus',   'Start of Day': 55,    'End of Day': 45,  },  
  {    day: 'Fri',    'Start of Day': 56,    'End of Day': 80,  },  
  {    day: 'Sat',    'Start of Day': 100,   'End of Day': 85, },  
  {    day: 'Sun',    'Start of Day': 85,    'End of Day': 45,  }  
];


const Charts = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-1 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-1 xl:gap-x-8">
          <div className="group relative rounded-md border px-4 py-3 bg-white">
          <>
            <div className="sm:mx-auto sm:max-w-2xl">
              <h6 className="text-center my-4 text-sm text-gray-500">
                Daily Sales Revenue
              </h6>
             
              <BarChart
                //type="stacked"
                className="h-80 text-xs text-gray-500"
                data={data}
                index="day"
                categories={['End of Day', 'Start of Day']}
                colors={['#ba6f42','#99613f']}
                showLegend={false}
                yAxisLabel="Revenue"
            />
           
            </div>
          </>
          </div>
        </div>
      </div>
  )
}
export default Charts;