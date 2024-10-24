export const formatSalary = (salary: number): string => {
  if (salary >= 10000000) {
    return `₹${(salary / 10000000).toFixed(2)} Cr`;
  }
  if (salary >= 100000) {
    return `₹${(salary / 100000).toFixed(2)} L`;
  }
  return `₹${(salary / 1000).toFixed(0)}K`;
};

export const formatDate = (date: string): string => {
  const postedDate = new Date(date);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - postedDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays <= 7) return `${diffDays} days ago`;
  return postedDate.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};