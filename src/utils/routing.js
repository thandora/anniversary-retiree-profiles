export function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

export function isValidUUID(str) {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(str);
}

async function loadCSVData() {
  try {
    const { parseCSV } = await import('./csvParser');
    const csvText = await import('../data/retireeData.csv?raw');
    return parseCSV(csvText.default);
  } catch (error) {
    console.error('Error loading CSV data:', error);
    throw error;
  }
}

export function setQueryParam(param, value) {
  const url = new URL(window.location);
  url.searchParams.set(param, value);
  window.history.pushState({}, '', url);
}

export function removeQueryParam(param) {
  const url = new URL(window.location);
  url.searchParams.delete(param);
  window.history.pushState({}, '', url);
}

export async function loadRetireeData(profileId) {
  try {
    if (!isValidUUID(profileId)) {
      throw new Error(`Invalid profile ID format: ${profileId}`);
    }

    const allData = await loadCSVData();

    if (!allData[profileId]) {
      throw new Error(`Profile not found: ${profileId}`);
    }

    return allData[profileId];
  } catch (error) {
    console.error('Error loading retiree data:', error);
    throw error;
  }
}

export async function getAvailableProfiles() {
  try {
    const allData = await loadCSVData();

    return Object.keys(allData).map(id => ({
      id,
      name: allData[id].name
    }));
  } catch (error) {
    console.error('Error loading profiles:', error);
    return [];
  }
}