import { collection, getDocs } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { db, storage } from './firebase';

const fetchDataWithImages = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "worksData"));
    const dataList = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    const dataWithImageUrls = await Promise.all(dataList.map(async (data) => {
      const imageName = `${data.id.toString().padStart(2, '0')}.png`;
      const imageRef = ref(storage, `images/${imageName}`);
      try {
        const imageUrl = await getDownloadURL(imageRef);
        return { ...data, imageUrl };
      } catch (error) {
        if (error.code === 'storage/object-not-found') {
          console.error(`Error fetching image for ID ${data.id}: File does not exist.`);
          return { ...data, imageUrl: null };
        } else {
          console.error(`Error fetching image for ID ${data.id}:`, error);
          return { ...data, imageUrl: null };
        }
      }
    }));

    return dataWithImageUrls;
  } catch (error) {
    console.error("Error fetching data or images:", error);
    return [];
  }
};

export default fetchDataWithImages;
