"use client";

import { createTRPCProxyClient, loggerLink, unstable_httpBatchStreamLink } from "@trpc/client";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getUrl, transformer } from "./shared";

import { AppRouter } from "@/app/__shared/server/root";

// import { createTRPCReact } from "@trpc/react-query";
// import { useState } from "react";

const getCookies = () => ({
  cookie: window.document.cookie,
  "x-trpc-source": "react",
})

export const api = createTRPCProxyClient<AppRouter>({
  transformer,
  links: [
    loggerLink({
      enabled: (op) =>
        process.env.NODE_ENV === "development" ||
        (op.direction === "down" && op.result instanceof Error),
    }),
    unstable_httpBatchStreamLink({
      url: getUrl(),
      // You can pass any HTTP headers you wish here
      async headers() {
        return getCookies()
      },
    }),
  ],
});

// export const api = createTRPCReact<AppRouter>();

// export function TRPCReactProvider(props: {
//   children: React.ReactNode;
//   cookies: string;
// }) {
//   const [queryClient] = useState(() => new QueryClient());

//   const [trpcClient] = useState(() =>
//     api.createClient({
//       transformer,
//       links: [
//         loggerLink({
//           enabled: (op) =>
//             process.env.NODE_ENV === "development" ||
//             (op.direction === "down" && op.result instanceof Error),
//         }),
//         unstable_httpBatchStreamLink({
//           url: getUrl(),
//           headers() {
//             return {
//               cookie: props.cookies,
//               "x-trpc-source": "react",
//             };
//           },
//         }),
//       ],
//     })
//   );

//   return (
//     <QueryClientProvider client={queryClient}>
//       <api.Provider client={trpcClient} queryClient={queryClient}>
//         {props.children}
//       </api.Provider>
//     </QueryClientProvider>
//   );
// }