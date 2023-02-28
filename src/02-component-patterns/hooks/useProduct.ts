import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs{
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({product, onChange, value = 0, initialValues}: useProductArgs) => {
  const [counter, setCounter] = useState( initialValues?.count || value);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
  }, [])

  useEffect(() => {
    if (isMounted.current) {
      setCounter(initialValues?.count ?? value);
    }
  }, [value, initialValues?.count]);

  const reset = () => {
    setCounter(initialValues?.count ?? value )
  }

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    if (initialValues?.maxCount){
      newValue = Math.min(newValue, initialValues?.maxCount);
    }
    setCounter(newValue);
    onChange && onChange({product: product, count: newValue});    
  };

  return { 
    counter,     
    isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter, 
    maxCount: initialValues?.maxCount,
    increaseBy, 
    reset 
  };
};
