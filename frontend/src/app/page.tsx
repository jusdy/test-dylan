"use client";
import React from "react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BadgeSection from "@/components/layout/BadgeSection";
import LastActivitySection from "@/components/layout/LastActivitySection";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Toaster } from "react-hot-toast";

const client = new ApolloClient({
  uri: "http://localhost:8080/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "YthA9lp6rZ1XVAEkKu5FwH3wlJPaNc7GFC6cLzIJN1PUM30o7o2a9bx3WBgLxAf9",
  },
});

const MainPage = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <Toaster toastOptions={{
          className:'!bg-elevation-2 !text-secondary'
        }} position="top-center" reverseOrder={false} />
        <Header />
        <main className="py-24 px-16 md:py-40 md:px-32 w-full mx-auto max-w-1280 flex flex-col gap-24">
          <LastActivitySection />
          <BadgeSection />
        </main>
      </ApolloProvider>
      <Footer />
    </>
  );
};

export default MainPage;
