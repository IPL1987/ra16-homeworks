export const fetchRequest = async (id = 0) => {
  const response = await fetch(`${'http://localhost:7070/api/services/'}${id ? `/${id}` : ""}`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};