export function createPageUrl(name) {
  if (!name) return '/';
  // Simple mapping used by layout. Adjust to your app's routing if needed.
  return `/${name}`;
}

export default { createPageUrl };