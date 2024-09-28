import React, {useState} from "react";
import { PRODUCTS } from "../../data/products";
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import CakeIcon from '@mui/icons-material/Cake';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ProductCard from "./ProductCard";
import ProductEdit from "./ProductEdit";


const ProductsList = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    name: "",
    price: ""
  });

  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-1 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-1 xl:gap-x-8">
          <Accordion defaultExpanded sx={{ borderRadius: "0.375rem" }}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon  sx={{ fontSize: "1.5rem", color: "#99613f" }}/>}
              aria-controls="panel1-content"
              id="panel1-header"             
            >
              <Typography sx={{ fontSize: "1.5rem", color: "#99613f", fontWeight: '500' }}>
                <EmojiFoodBeverageIcon sx={{ fontSize: "1.5rem", color: "#99613f" }}/>
                <span className="px-2">Hot Drinks</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {PRODUCTS.drinks.map((product, index) => (
                  <ProductCard product={product} index={index} key={index} openForm={() => {
                    setOpen(true);
                    setData({
                      ...data,
                      name: product.name,
                      price: product.price
                    });
                  }} />
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ borderRadius: "0.375rem", position: 'static' }}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon  sx={{ fontSize: "1.5rem", color: "#99613f" }}/>}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ border: '0' }}
              >
            
              <Typography sx={{ fontSize: "1.5rem", color: "#99613f", fontWeight: '500' }}>
                <CakeIcon sx={{ fontSize: "1.5rem", color: "#99613f" }}/>
                  <span className="px-2">Cakes</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {PRODUCTS.cakes.map((product, index) => (
                  <ProductCard product={product} index={index} key={index} openForm={() => {
                    setOpen(true);
                    setData({
                      ...data,
                      name: product.name,
                      price: product.price
                    });
                  }} />
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        <ProductEdit open={open} handleClose={() => setOpen(false)} data={data} />
      </div>
    </>
  );
};

export default ProductsList;
