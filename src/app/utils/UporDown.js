import { toast } from "sonner"

export default async function UporDown(cartobject,isUp) {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const jwt = sessionStorage.getItem("token");

  if (!jwt) {
    console.error("User not authenticated. Please log in.");
    alert("User not authenticated. Please log in.");
    return null; // Return null in case of failure
  }

  const url = process.env.NEXT_PUBLIC_STRAPI_URL || `http://localhost:1337/api/carts/${cartobject.documentId}`;

  const body = {
    data: {
      users_permissions_user: user?.documentId,
      product: cartobject.product.documentId,
      cartquantity: isUp?  cartobject.cartquantity + 1:cartobject.cartquantity - 1,
    },
  };

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      const updatedCartItem = await response.json(); // Parse the updated item
      toast("Item incremented by one");
      {
      return updatedCartItem.data; // Return the updated cart item
      
      }
    } else {
      throw new Error("Failed to add product");
    }
  } catch (error) {
    console.error("Error:", error.message);
    return null; // Return null in case of an error
  }
}
