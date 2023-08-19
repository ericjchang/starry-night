export function isMobileDevice() {
  const userAgent = navigator.userAgent;
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
}
