export default async function removeFromWishlist(productId, userId, token) {
    const url = `http://localhost:1337/api/wishlists?filters[product][id][$eq]=${productId}&filters[users_permissions_user][id][$eq]=${userId}&populate=*`;
  
    try {
      // Fetch the wishlist item
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch wishlist item');
      }
  
      const data = await response.json();
      const wishlistItemId = data.data[0]?.id; // Get the wishlist item ID
  
      if (!wishlistItemId) {
        throw new Error('Wishlist item not found');
      }
  
      // Delete the wishlist item
      const deleteResponse = await fetch(`http://localhost:1337/api/wishlists/${wishlistItemId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (!deleteResponse.ok) {
        throw new Error('Failed to delete wishlist item');
      }
  
      return true; // Indicate success
    } catch (error) {
      console.error('Error in removeFromWishlist:', error.message);
      throw error;
    }
  }
  