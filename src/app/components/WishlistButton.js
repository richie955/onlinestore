// components/WishlistButton.js
import { useEffect, useState } from 'react';
import AddToList from "../utils/AddToList";

const WishlistButton = ({ product, productId, id }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const checkWishlistStatus = async () => {
      try {
        const url = `http://localhost:1337/api/wishlists?filters[product][id][$eq]=${productId}&filters[users_permissions_user][id][$eq]=${id}&populate=*`;

        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch wishlist');
        }

        const data = await response.json();
        setIsInWishlist(data.data && data.data.length > 0);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    checkWishlistStatus();
  }, [productId, id]);


  const removeFromWishlist = async () => {
    try {
      const url = `http://localhost:1337/api/wishlists?filters[product][id][$eq]=${productId}&filters[users_permissions_user][id][$eq]=${id}&populate=*`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      const wishlistItemId = data.data[0]?.documentId;

      console.log("imp"+wishlistItemId)

      if (wishlistItemId) {
        const deleteResponse = await fetch(`http://localhost:1337/api/wishlists/${wishlistItemId}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (deleteResponse.ok) {
          setIsInWishlist(false);
          alert('Product removed from your wishlist');
        } else {
          throw new Error('Failed to delete wishlist item');
        }
      }
    } catch (error) {
      console.error('Error:', error.message);
      alert('Failed to remove product from wishlist.');
    }
  };

  const addToWishlist = async () => {
    try {
      const success = await AddToList(product);

      if (success) {
        setIsInWishlist(true); // Update state to reflect the addition
        alert('Product added to your wishlist');
      } else {
        alert('Failed to add product to wishlist');
      }
    } catch (error) {
      console.error('Error:', error.message);
      alert('Failed to add product to wishlist');
    }
  };

  return (
    <div>
      {isInWishlist ? (
        <button onClick={removeFromWishlist}>Remove from Wishlist</button>
      ) : (
        <button onClick={addToWishlist}>Add to Wishlist</button>
      )}
    </div>
  );
};

export default WishlistButton;
