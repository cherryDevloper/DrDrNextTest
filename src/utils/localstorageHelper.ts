export const saveDataToLocalStorage = (key: string, data: any) => {
  try {
    const existingData = localStorage.getItem(key);
    let newData = [];

    if (existingData) {
      newData = JSON.parse(existingData);
    }

    // Check if the item already exists and update the quantity
    const existingItemIndex = newData.findIndex(
      (item: any) => item.id === data.id
    );
    if (existingItemIndex !== -1) {
      newData[existingItemIndex].quantity += data.quantity;
    } else {
      newData.push({ ...data, quantity: data.quantity || 1 });
    }

    localStorage.setItem(key, JSON.stringify(newData));
  } catch (err) {
    console.error("Error saving to localStorage", err);
  }
};

export const getDataFromLocalStorage = (key: string) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error("Error getting data from localStorage", err);
  }
};
export const removeDataFromLocalStorage = (key: string, id: string) => {
  try {
    const existingData = localStorage.getItem(key);
    if (!existingData) {
      return;
    }

    const data = JSON.parse(existingData);
    const newData = data.filter((item: any) => item.id.toString() !== id);
    localStorage.setItem(key, JSON.stringify(newData));
  } catch (err) {
    console.error("Error removing data from localStorage", err);
  }
};
