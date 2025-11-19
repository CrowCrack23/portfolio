import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Si tu repo se llama "tu-usuario.github.io", deja basePath comentado
  // Si se llama otra cosa, descomenta y pon: basePath: '/nombre-del-repo',
};

export default nextConfig;
