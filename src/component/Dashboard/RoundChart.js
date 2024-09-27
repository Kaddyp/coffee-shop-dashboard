import React from 'react';
import { DonutChart } from '@tremor/react';

const dataHero = [
  {
    name: 'Desktop',
    value: 75,
  },
  {
    name: 'Mobile',
    value: 20,
  },
  {
    name: 'Tablet',
    value: 5,
  },
];

  
const RoundChart = () =>{
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-1 lg:max-w-7xl lg:px-8">    
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">        
            <div className="group relative rounded-md border px-4 py-3 bg-white">

      
            <div className="mx-auto space-y-12">
              <div className="space-y-3">
                <span className="text-center block font-mono text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                  Users By device
                </span>
                <div className="flex justify-center">
                  <DonutChart
                    data={dataHero}
                    variant="donut"
                    onValueChange={(v) => console.log(v)}
                    colors={['#99613f', '#ba6f42', '#cea993']}
                  />
                </div>
              </div>              
            </div>






            </div>
        </div>        
    </div>
  )
}

export default RoundChart;