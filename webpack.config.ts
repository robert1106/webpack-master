import path from 'path';
import { buildWebpack } from "./config/build";
import type { BuildMode, BuildPaths } from "./config/build";

interface EnvVariables {
  mode: BuildMode;
  port: number;
  analyzer?: bigint
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    public: path.resolve(__dirname, 'public'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    tsconfig: path.resolve(__dirname, './tsconfig.json')
  }

  const config = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? "development",
    paths,
    analyzer: env?.analyzer,
  })

  return config
}