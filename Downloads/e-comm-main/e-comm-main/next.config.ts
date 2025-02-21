// import type { NextConfig } from "next";
// import { NextFederationPlugin } from "@module-federation/nextjs-mf";
//
// const nextConfig: NextConfig = {
//     images: {
//         domains: ["fakestoreapi.com"],
//     },
//     webpack(config) {
//         config.plugins.push(
//             new NextFederationPlugin({
//                 name: 'host',
//                 filename: 'remoteEntry',
//                 remotes: {
//                     product: 'product@http://localhost:8002/remoteEntry.js',
//                     // basket: 'basket@http://localhost:3002/remoteEntry.js',
//                 },
//                 shared: {
//                     react: {
//                         singleton: true,
//                         requiredVersion: false,
//                     },
//                     'react-dom': {
//                         singleton: true,
//                         requiredVersion: false,
//                     },
//                 },
//                 extraOptions: {
//                 },
//             })
//         );
//         return config;
//     },
//     experimental: {
//         turbo: {
//             // ...
//         },
//     },
// };
//
// export default nextConfig;

// import type { NextConfig } from "next";
// import { NextFederationPlugin } from "@module-federation/nextjs-mf";
//
// const remotes = (isServer: boolean): Record<string, string> => {
//     const location = isServer ? "http://localhost:8002" : "http://localhost:8002";
//     return {
//         product: `product@${location}/remoteEntry.js`,
//     };
// };
//
// const nextConfig: NextConfig = {
//     images: {
//         domains: ["fakestoreapi.com"],
//     },
//     webpack(config, { isServer }) {
//         config.plugins.push(
//             new NextFederationPlugin({
//                 name: 'host',
//                 filename: 'static/chunks/remoteEntry.js',
//                 remotes: remotes(isServer),
//                 shared: {
//                     react: {
//                         singleton: true,
//                         requiredVersion: false,
//                         eager: true
//                     },
//                     'react-dom': {
//                         singleton: true,
//                         requiredVersion: false,
//                         eager: true
//                     },
//                 },
//                 extraOptions: {
//                     exposePages: true,
//                     skipSharingNextInternals: true,
//                 }
//             })
//         );
//         return config;
//     },
// };
//
// export default nextConfig;

import type { NextConfig } from "next";
import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const nextConfig: NextConfig = {
    images: {
        domains: ["fakestoreapi.com"],
    },
    webpack(config) {
        config.plugins.push(
            new NextFederationPlugin({
                extraOptions: {},
                name: 'host',
                filename: 'static/chunks/remoteEntry.js',
                remotes: {
                    product: `product@http://localhost:8002/_next/static/chunks/remoteEntry.js`,
                },
                shared: {
                    react: {
                        singleton: true,
                        requiredVersion: false,
                    },
                    'react-dom': {
                        singleton: true,
                        requiredVersion: false,
                    },
                }
            })
        );
        return config;
    },
    experimental: {
        turbo: {
            // ...
        },
    },
};

export default nextConfig;