export const getRandomColor = (): string => {
  const hue = Math.floor(Math.random() * 50) + 200; // Blue hues
  const saturation = Math.floor(Math.random() * 30) + 50; // Adjust saturation for variation
  const lightness = Math.floor(Math.random() * 20) + 60; // Adjust lightness for variation
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
