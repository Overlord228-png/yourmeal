import React from "react";
import {
  QuantityContainer,
  QuantityButton,
  QuantityValue,
} from "../styles/QuantityStyles";

interface QuantityProps {
  count?: number;
  setCount: (count: number) => void;
}

const Quantity: React.FC<QuantityProps> = ({ count = 1, setCount }) => {
  const decrementQuantity = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incrementQuantity = () => {
    setCount(count + 1);
  };

  return (
    <QuantityContainer>
      <QuantityButton
        disabled={count === 1}
        type="button"
        onClick={decrementQuantity}
      >
        -
      </QuantityButton>
      <QuantityValue>{count}</QuantityValue>
      <QuantityButton type="button" onClick={incrementQuantity}>
        +
      </QuantityButton>
    </QuantityContainer>
  );
};

export default Quantity;
