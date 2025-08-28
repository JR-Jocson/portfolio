// Helper function to handle asset paths with base URL
export function getAssetPath(path) {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return import.meta.env.BASE_URL + '/' + cleanPath;
}
