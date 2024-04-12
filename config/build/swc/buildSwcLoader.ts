import { BuildOptions } from "../types";

export const buildSwcLoader = ({ mode }: BuildOptions) => {
  return {
    test: /\.tsx?$/,
    exclude: /(node_modules)/,
    use: {
      loader: "swc-loader"
    }
  }
}