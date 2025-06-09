import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      gray: string;
      lightGray: string;
      lightBlue: string;
    };
    spacing: {
      sm: string;
      md: string;
    };
  }
}

export default {
  colors: {
    primary: "#007BFF",
    gray: "#CCC",
    lightGray: "#F5F5F5",
    lightBlue: "#E6F7FF",
  },
  spacing: { sm: "8px", md: "16px" },
};
