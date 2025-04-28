import type { NextConfig } from "next";
import { createContentCollectionPlugin } from "@content-collections/next";

const nextConfig: NextConfig = {
  images: {
    domains: ["randomuser.me", "img.logo.dev"],
  },
};

const withPlugin = createContentCollectionPlugin({
  configPath: "./actions/content-collections.ts",
});
 
export default withPlugin(nextConfig);