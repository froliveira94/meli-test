export const getMask = val => {
  const intVal = parseInt(val);
  const hasPoint = intVal / 1000;
  const int = "#".repeat(
    hasPoint > 1 ? hasPoint.toString().split(".")[0].length : 0
  );
  const point = hasPoint > 1 ? "." : "";
  return int + point + "###";
};
