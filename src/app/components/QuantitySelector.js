import { useState } from "react";

const QuantitySelector = ({ initialQuantity = 1, min = 1, max = 99, onChange }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrement = () => {
    if (quantity < max) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      if (onChange) onChange(newQuantity);
    }
  };

  const handleDecrement = () => {
    if (quantity > min) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      if (onChange) onChange(newQuantity);
    }
  };

  const handleChange = (e) => {
    const value = Math.max(min, Math.min(max, Number(e.target.value)));
    setQuantity(value);
    if (onChange) onChange(value);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleDecrement}
        disabled={quantity <= min}
        className="w-8 h-8 bg-gray-200 border border-gray-300 text-lg font-bold text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
      >
        -
      </button>
      <input
        type="number"
        value={quantity}
        onChange={handleChange}
        min={min}
        max={max}
        className="w-12 h-8 text-center border border-gray-300 rounded"
      />
      <button
        onClick={handleIncrement}
        disabled={quantity >= max}
        className="w-8 h-8 bg-gray-200 border border-gray-300 text-lg font-bold text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
