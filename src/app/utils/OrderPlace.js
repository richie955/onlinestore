export default async function OrderPlace(body) {


    const user = JSON.parse(sessionStorage.getItem("user"));
    const jwt = sessionStorage.getItem("token");
  
    
    if (!jwt) {
      console.error("User not authenticated. Please log in.");
      alert("User not authenticated. Please log in.");
      return;
    }
  
    const url =  "http://localhost:1337/api/orderdetails"; // Use an environment variable or fallback
  
    try {
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
        throw new Error('Failed to place order');
      }
    } catch (error) {
      console.error('Error:', error.message);
      return false; // Failure
    
    }
  }
  