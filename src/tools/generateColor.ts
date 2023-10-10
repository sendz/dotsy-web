export const generateHslaColors = (
  saturation: number,
  lightness: number,
  alpha: number,
  amount: number
): string[] => {
  let colors = [];
  let huedelta = Math.trunc(360 / amount);

  for (let i = 0; i < amount; i++) {
    let hue = i * huedelta;
    colors.push(`hsla(${hue},${saturation}%,${lightness}%,${alpha})`);
  }

  return colors;
};

export const randomRgbaString = (amount: number): string[] => {
  const colors = [];
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let a = 1;

  const randomAlphaIndex = Math.floor(Math.random() * amount);

  for (let i = 0; i < amount; i++) {
    if (randomAlphaIndex === i) {
      a = Math.random();
    } else {
      a = 1;
    }
    colors.push(`rgba(${r},${g},${b},${a})`);
  }
  return colors;
};
