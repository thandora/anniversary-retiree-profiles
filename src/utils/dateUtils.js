export function calculateServiceDuration(startDate, endDate) {
  // Handle missing dates
  if (!startDate || !endDate) {
    return null;
  }

  const start = new Date(startDate);
  const end = new Date(endDate);

  // Handle invalid dates
  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return null;
  }

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  if (end.getDate() < start.getDate()) {
    months--;
    if (months < 0) {
      years--;
      months += 12;
    }
  }

  return { years, months };
}

export function formatServiceDuration(serviceDuration) {
  if (!serviceDuration) {
    return null;
  }

  const { years, months } = serviceDuration;
  return months > 0
    ? `${years} Years, ${months} Months`
    : `${years} Years`;
}

export function formatDateReadable(dateString) {
  if (!dateString) return '';

  const date = new Date(dateString);

  if (isNaN(date.getTime())) return dateString;

  const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  };

  return date.toLocaleDateString('en-US', options);
}