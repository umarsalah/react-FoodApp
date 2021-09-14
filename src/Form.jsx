import React from "react";

import {FieldSet} from './FieldSet'
import {CatagorySet} from './CatagorySet'

export const Form = ({ min, max ,category ,setPrice,categories,setCategory}) => (
  <form>
   <FieldSet min={min} max={max} setPrice={setPrice} />
   <CatagorySet categories={categories} setCategory={setCategory} category={category} />
  </form>
);
