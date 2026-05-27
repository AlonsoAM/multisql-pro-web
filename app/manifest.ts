import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description: site.description,
    start_url: '/es',
    display: 'standalone',
    background_color: '#0e1218',
    theme_color: '#0e1218',
    orientation: 'portrait',
    categories: ['developer', 'productivity', 'utilities'],
    lang: 'es-ES',
    icons: [
      { src: '/icon.svg', type: 'image/svg+xml', sizes: 'any', purpose: 'any' },
      { src: '/apple-icon.svg', type: 'image/svg+xml', sizes: '180x180', purpose: 'maskable' },
    ],
  };
}
