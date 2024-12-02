
import { useEffect, useState } from 'react';
import AddToCart from "../utils/AddtoCart";
import { toast } from "sonner"

const CartButton = ({ product, productId, id,cqty,size }) => {

  const [isInCart, setIsInCart] = useState(false);
  const token = sessionStorage.getItem("token");

  useEffect(() => {

    const checkCartStatus = async () => {
      try {
        const url = `http://localhost:1337/api/carts?filters[product][id][$eq]=${productId}&filters[users_permissions_user][id][$eq]=${id}&populate=*`;

        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch Cart');
        }

        const data = await response.json();
        setIsInCart(data.data && data.data.length > 0);
        console.log(data.data)
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    checkCartStatus();
  }, [productId, id]);


  // const removeFromCart = async () => {
  //   try {
  //     const url = `http://localhost:1337/api/carts?filters[product][id][$eq]=${productId}&filters[users_permissions_user][id][$eq]=${id}&populate=*`;

  //     const response = await fetch(url, {
  //       method: 'GET',
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     const data = await response.json();
  //     const CartItemId = data.data[0]?.documentId;

  //     console.log("imp"+CartItemId)

  //     if (CartItemId) {
  //       const deleteResponse = await fetch(`http://localhost:1337/api/carts/${CartItemId}`, {
  //         method: 'DELETE',
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           'Content-Type': 'application/json',
  //         },
  //       });

  //       if (deleteResponse.ok) {
  //         setIsInCart(false);
  //         toast('Product removed from your Cart');
  //       } else {
  //         throw new Error('Failed to delete Cart item');
  //       }
  //     }
  //   } catch (error) {
  //     console.error('Error:', error.message);
  //     toast('Failed to remove product from Cart.');
  //   }
  // };

  const addToCart = async () => {
    try {
      const success = await AddToCart(product,cqty,size);

      if (success) {
        setIsInCart(true); // Update state to reflect the addition
        toast('Product added to your Cart');
      } else {
        toast('Failed to add product to Cart');
      }
    } catch (error) {
      console.error('Error:', error.message);
      toast('Failed to add product to Cart');
    }
  };

  return (
    <div>
      {
        <button onClick={addToCart}>Add to Cart</button>
      }
    </div>
  );
};

export default CartButton;
