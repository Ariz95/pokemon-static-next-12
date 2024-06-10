import React from "react";
import Head from "next/head";
import { Navbar } from "../iu";

interface Props {
  title?: string;
  children: React.ReactNode;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Aldo Ariz" />
        <meta name="description" content={`Data from pokemons ${title}`} />
        <meta name="keywords" content={`${title},pokemon, pokedex`} />

        <meta property="og:title" content={`Abput ${title}`} />
        <meta property="og:description" content={`Page about ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
