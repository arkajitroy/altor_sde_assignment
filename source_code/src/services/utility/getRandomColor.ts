export const getRandomColor = (): string => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 70; // Ensure colors are not too pale
  const lightness = 50; // Ensure colors are not too dark
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
