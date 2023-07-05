export const getcolor = () => {
  return `hsl(${Math.random() * 360} ${50 + Math.random() * 100}% ${
    25 + Math.random() * 50
  }%)`;
}