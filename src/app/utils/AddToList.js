export default async function AddToList(product) {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const jwt = sessionStorage.getItem("token");
  
    // Check for authentication
    if (!jwt) {
      console.error("User not authenticated. Please log in.");
      alert("User not authenticated. Please log in.");
      return;
    }
  
    // Construct request body
    const body = {
      data: {
        users_permissions_user: user?.documentId,
        product: product?.documentId,
      },
    };
  
    const url = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337/api/wishlists"; // Use an environment variable or fallback
  
    try {
      // Make API call
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${jwt}`, // Bearer token
          "Content-Type": "application/json", // JSON format
        },
        body: JSON.stringify(body), // Convert the body object to JSON
      });
  
      if (response.ok) {
        return true; // Success
      } else {
        throw new Error('Failed to add product');
      }
    } catch (error) {
      console.error('Error:', error.message);
      return false; // Failure
    
    }
  }
  