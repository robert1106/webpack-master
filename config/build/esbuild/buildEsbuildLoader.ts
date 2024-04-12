import { BuildOptions } from "../types";

export const buildEsbuildLoader = ({ paths }: BuildOptions) => {
  return {
    test: /\.tsx?$/,
    loader: 'esbuild-loader',
    exclude: /node_modules/,
    options: {
       tsconfig: paths.tsconfig,
    },
  }
}