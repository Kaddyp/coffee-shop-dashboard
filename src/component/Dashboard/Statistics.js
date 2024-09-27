import React from 'react'
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const stats = [
  {
    id: 1,
    name: 'Total Visitors',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    percentage: '75',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Followers',
    href: '#',
    percentage: '2.5',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Net Profit',
    href: '#',
    percentage: '3.2',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Average Bill',
    href: '#',
    percentage: '55',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    color: 'Black',
  },
  // More products...
]

const Statistics = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-1 lg:max-w-7xl lg:px-8">    
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {stats.map((product) => (
            <div key={product.id} className="group relative rounded-md border px-4 py-3 bg-white">
              <div className="border-b aspect-h-1 aspect-w-1 w-full">
                <h6 className="mt-1 text-sm text-gray-500">{product.name}</h6>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    To last month
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.percentage > '50' ? 
                    <ArrowUpwardIcon sx={{fontSize: "1.5rem", color: '#1b5e20'}} /> 
                    : 
                    <ArrowDownwardIcon sx={{fontSize: "1.5rem", color: '#d50000'}} />}
                  {product.percentage}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Statistics;