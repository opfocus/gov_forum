// "use client";

// // 1. Import dependencies
// import * as Realm from "realm-web";
// import {
//   ApolloClient,
//   ApolloProvider,
//   HttpLink,
//   InMemoryCache,
//   useQuery,
// } from "@apollo/client";
// import { useApp } from "@/hook/myHook";
// import React from "react";
// import { GET_CATEGORY } from '@/utils/graphql'
// import { useEffect, useState } from "react";
// import { access } from "fs";

// // 2. Add GraphQL client provider
// function GraphQLProvider({ children }: { children: React.ReactNode }) {
//    const [app, setApp] = useState<Realm.App | null>(null);
//   // Run in useEffect so that App is not created in server-side environment
//   useEffect(() => {
//     setApp(Realm.getApp(process.env.NEXT_PUBLIC_APP_ID!));
//   }, []);

//   useEffect(() => {
//     // If no logged in user, log in
//     if (app && !app.currentUser) {
//       const anonymousUser = Realm.Credentials.anonymous();
//       app.logIn(anonymousUser);
//     }
//   }, [app, app?.currentUser]);

//   const client = new ApolloClient({
//     link: new HttpLink({
//       uri: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT,
//       // We get the latest access token on each request
//       fetch: async (uri, options) => {
//         if (app === null) console.error("Connect mongoDB fail");
//         else {
//           const accessToken = app.currentUser?.accessToken;
//           console.log(accessToken)
//           if (options?.headers === undefined)
//             console.error("Mission accessToken when create Apollo client");
//           else {
//             const headers: Record<string, string> = options.headers as Record<
//               string,
//               string
//             >;
//             headers.Authorization = `Bearer ${accessToken}`;
//           }
//         }

//         // return fetch(uri, options);
//       },
//     }),
//     cache: new InMemoryCache(),
//   });
//   console.log(app === null)

//   return <ApolloProvider client={client}>{children}</ApolloProvider>;
// }

// // 4. Consumer of provider and query
// function PlantInformation({ index }: {
//   index: number
// }) {
//   const { loading, error, data } = useQuery(GET_CATEGORY, {
//     variables: { index },
//   });
//   if (loading || !data) return <p>Loading ...</p>;
//   if (error) console.error("Failed with error:", error);
//   return (
//     <div>
//       {data.category ? (
//         <div>
//           <p>{data.category.name}</p>
//           <p>{data.category.description}</p>
//         </div>
//       ) : (
//         "no category"
//       )}
//     </div>
//   );
// }
// // 5. Export page with the GraphQL query
// export default function FullGraphQL() {
//   return (
//     <GraphQLProvider>
//       <PlantInformation index={1} />
//     </GraphQLProvider>
//   );
// }
