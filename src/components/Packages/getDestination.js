import destinationsData from "../../components/Packages/destinations.json";

export async function getDestinations() {
  // In a real application, this would likely be an API call
  // For now, we're just returning the data from our JSON file
  return destinationsData.destinations;
}
