// Import necessary functions from Firebase Firestore and Storage SDKs
import { collection, getDocs } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

// Import initialized Firestore (db) and Storage (storage) instances from your Firebase configuration file
import { db, storage } from './firebase';

// Define an asynchronous function to fetch data from Firestore and corresponding images from Firebase Storage
const fetchDataWithImages = async () => {
  try {
    // Fetch all documents from the "worksData" collection in Firestore
    const querySnapshot = await getDocs(collection(db, "worksData"));
    
    // Map through each document in the query snapshot and create an array of data objects
    const dataList = querySnapshot.docs.map(doc => ({
      id: doc.id, // Include the document ID
      ...doc.data() // Spread the rest of the document data
    }));

    // For each data object, fetch the corresponding image URL from Firebase Storage
    const dataWithImageUrls = await Promise.all(dataList.map(async (data) => {
      // Construct the image name based on the document ID (e.g., "01.png", "02.png", etc.)
      const imageName = `${data.id.toString().padStart(2, '0')}.png`;
      // Create a reference to the image in Firebase Storage
      const imageRef = ref(storage, `images/${imageName}`);
      try {
        // Attempt to get the download URL for the image
        const imageUrl = await getDownloadURL(imageRef);
        // Return the original data object with the added image URL
        return { ...data, imageUrl };
      } catch (error) {
        // Handle the case where the image does not exist in Storage
        if (error.code === 'storage/object-not-found') {
          console.error(`Error fetching image for ID ${data.id}: File does not exist.`);
          // Return the data object with a null imageUrl
          return { ...data, imageUrl: null };
        } else {
          // Handle other potential errors when fetching the image URL
          console.error(`Error fetching image for ID ${data.id}:`, error);
          // Return the data object with a null imageUrl
          return { ...data, imageUrl: null };
        }
      }
    }));

    // Return the array of data objects with their corresponding image URLs
    return dataWithImageUrls;
  } catch (error) {
    // Log any errors encountered during the fetching process
    console.error("Error fetching data or images:", error);
    // Return an empty array in case of an error
    return [];
  }
};

// Export the function as the default export
export default fetchDataWithImages;
