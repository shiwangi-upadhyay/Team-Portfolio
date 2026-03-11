import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: {
    compilationMode: "annotation",
  },
  transpilePackages: ["@paper-design/shaders-react", "@paper-design/shaders"],
};

export default nextConfig;
