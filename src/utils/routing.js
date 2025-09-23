export function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
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
    const module = await import('../data/retireeData.json');
    const allData = module.default;

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
    const module = await import('../data/retireeData.json');
    const allData = module.default;

    return Object.keys(allData).map(id => ({
      id,
      name: allData[id].name
    }));
  } catch (error) {
    console.error('Error loading profiles:', error);
    return [];
  }
}