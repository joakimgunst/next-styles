import { styled } from "@stitches/react";
import tw from "twin.macro";

const Button = styled("button", {
  ...tw`py-2 px-4 rounded-sm border-2 text-md border-rockBlack dark:border-pureWhite hover:scale-105 transition font-ui`,
  variants: {
    variant: {
      primary: tw`bg-rockBlack text-pureWhite dark:bg-pureWhite dark:text-rockBlack`,
      secondary: tw`bg-pureWhite text-rockBlack dark:bg-rockBlack dark:text-pureWhite`,
    },
  },
});

export default Button;
