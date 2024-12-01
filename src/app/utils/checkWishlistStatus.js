export default async function checkWishlistStatus(productId, userId, token) {
    const url = `http://localhost:1337/api/wishlists?filters[product][id][$eq]=${productId}&filters[users_permissions_user][id][$eq]=${userId}&populate=*`;
  
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch wishlist status');
      }
  
      const data = await response.json();
      return data.data && data.data.length > 0; // Return true if the product is in the wishlist
    } catch (error) {
      console.error('Error in checkWishlistStatus:', error.message);
      throw error;
    }
  }
  