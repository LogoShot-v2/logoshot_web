// import { Dimensions } from "react-native";

// const { width, height } = Dimensions.get("window");

export const COLORS = {
  // base colors
  primary: "#00996D", // Green
  secondary: "#606d87", // Gray

  // colors
  black: "#1E1F20",
  white: "#FFFFFF",
  lightGray: "#eff2f5",
  gray: "#BEC1D2",

  // https://www.figma.com/community/file/963797805297200933
  orange: "#FFE3D3",
  yellow: "#FFFACA",
  green: "#EAFFFB",
  blue: "#E7F6FF",
  purple: "#EEE5FF",
  pink: "#FFE8EC",
};

export const SIZES = {
  // Global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // Font sizes
  superlargeTitle: 52,
  largeTitle: 44,
  mediumTitle: 38,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

  // App dimensions
  width: 500,
  height: 500,
};

export const FONTS = {
  superlargeTitle: { fontFamily: "Roboto-Black", fontSize: SIZES.superlargeTitle, height: 55 },
  largeTitle: { fontFamily: "Roboto-Black", fontSize: SIZES.largeTitle, height: 55 },
  mediumTitle: { fontFamily: "Roboto-Black", fontSize: SIZES.mediumTitle, height: 55 },
  h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, height: 36 },
  h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, height: 30 },
  h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, height: 22 },
  h4: { fontFamily: "Roboto-Regular", fontSize: SIZES.h4, height: 22 },
  body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, height: 36 },
  body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, height: 30 },
  body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, height: 22 },
  body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, height: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
