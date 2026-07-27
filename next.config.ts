import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages 정적 배포 — 빌드 산출물은 out/ (Pages 빌드 설정: output dir = out)
  output: "export",
};

export default nextConfig;
