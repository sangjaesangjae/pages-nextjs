import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages 정적 배포 — 빌드 산출물은 out/ (Pages 빌드 설정: output dir = out)
  output: "export",
  // 정적 export에는 이미지 옵티마이저 서버가 없다 — 원본 경로 그대로 서빙
  images: { unoptimized: true },
};

export default nextConfig;
