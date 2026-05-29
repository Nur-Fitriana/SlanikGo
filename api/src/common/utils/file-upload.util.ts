export function generateFileName(originalName: string): string {
  const timestamp = Date.now();
  const random = Math.round(Math.random() * 1e9);
  const extension = originalName.split('.').pop();
  return `${timestamp}-${random}.${extension}`;
}

export function validateImageType(mimeType: string): boolean {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
  return allowedTypes.includes(mimeType);
}
