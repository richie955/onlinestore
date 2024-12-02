import { toast } from "sonner";
export default async function RemovebyOne(cartobject) {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const jwt = sessionStorage.getItem("token");
  
   
    if (!jwt) {
      console.error("User not authenticated. Please log in.");
      alert("User not authenticated. Please log in.");
      return;
    }
    console.log("product: "+JSON.stringify(cartobject.product.documentId)+"quan: "+cartobject.cartquantity+"docud: "+cartobject.documentId)
    const url = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"+"/api/carts/"+cartobject.documentId; // Use an environment variable or fallback
  
    const body = {
      data: {
        users_permissions_user: user?.documentId,
        product: cartobject.product.documentId,
        cartquantity:cartobject.cartquantity-1,
      },
    };

    
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${jwt}`, // Bearer token
          "Content-Type": "application/json", // JSON format
        },
        body: JSON.stringify(body), // Convert the body object to JSON
      });
  
      if (response.ok) {
        toast("Item decremented by One")
        return true; // Success
      } else {
        throw new Error('Failed to add product');
      }
    } catch (error) {
      console.error('Error:', error.message);
      return false; // Failure
    
    }
  }
  