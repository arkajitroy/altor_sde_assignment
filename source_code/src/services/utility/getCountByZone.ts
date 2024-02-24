export const getCountByZone = (_parsedData: any[]): { [key: string]: number } => {
  const result: { [key: string]: number } = {};

  // Iterate over each array in data
  _parsedData.forEach((array: any[], index: number) => {
    let zone = `Zone_${index + 1}`;
    let sum = 0;

    // Iterate over each object in the array
    array.forEach((obj: { value: number }) => {
      // Add the value to the sum
      sum += obj.value;
    });

    // Assign the sum to the corresponding zone key
    result[zone] = sum;
  });

  return result;
};
