export function extractInitials(fullName) {
  if (!fullName || typeof fullName !== 'string') {
    return 'N/A';
  }

  const nameParts = fullName.trim().split(/\s+/);

  if (nameParts.length === 0) {
    return 'N/A';
  }

  if (nameParts.length === 1) {
    return nameParts[0].charAt(0).toUpperCase();
  }

  // Get first letter of first name and first letter of last name
  const firstInitial = nameParts[0].charAt(0).toUpperCase();
  const lastInitial = nameParts[nameParts.length - 1].charAt(0).toUpperCase();

  return `${firstInitial}${lastInitial}`;
}