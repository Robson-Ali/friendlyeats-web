import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { storage } from "@/src/lib/firebase/clientApp";

import { updateRestaurantImageReference } from "@/src/lib/firebase/firestore";

function applyQueryFilters(q, { category, city, price, sort }) {
  if (category) {
    q = query(q, where("category", "==", category));
  }
  if (city) {
    q = query(q, where("city", "==", city));
  }
  if (price) {
    q = query(q, where("price", "==", price.length));
  }
  if (sort === "Rating" || !sort) {
    q = query(q, orderBy("avgRating", "desc"));
  } else if (sort === "Review") {
    q = query(q, orderBy("numRatings", "desc"));
  }
  return q;
}

export async function getRestaurants(db = db, filters = {}) {
  let q = query(collection(db, "restaurants"));

  q = applyQueryFilters(q, filters);
  const results = await getDocs(q);
  return results.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
      // Only plain objects can be passed to Client Components from Server Components
      timestamp: doc.data().timestamp.toDate(),
    };
  });
}

export async function updateRestaurantImage(restaurantId, image) {
  try {
    if (!restaurantId) {
      throw new Error("No restaurant ID has been provided.");
    }

    if (!image || !image.name) {
      throw new Error("A valid image has not been provided.");
    }

    const publicImageUrl = await uploadImage(restaurantId, image);
    await updateRestaurantImageReference(restaurantId, publicImageUrl);

    return publicImageUrl;
  } catch (error) {
    console.error("Error processing request:", error);
  }
}

async function uploadImage(restaurantId, image) {
  const filePath = `images/${restaurantId}/${image.name}`;
  const newImageRef = ref(storage, filePath);
  await uploadBytesResumable(newImageRef, image);

  return await getDownloadURL(newImageRef);
}
