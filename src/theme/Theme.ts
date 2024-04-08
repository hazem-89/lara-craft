/**
 * Converts a pixel size to a rem value based on the base font size.
 * @param pixelSize - The size in pixels to convert.
 * @param baseFontSize - The base font size in pixels.
 * @returns The converted size as a string with the "rem" unit.
 */
export const remFy = (pixelSize: number, baseFontSize: number): string => {
  return `${pixelSize / baseFontSize}rem`;
};
