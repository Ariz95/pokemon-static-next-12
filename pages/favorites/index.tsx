import React, { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { Favorites, NoFavorites } from "../../components/iu";
import { localFavorites } from "../../utils";
import { Card, Grid } from "@nextui-org/react";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokemons - Favorites">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <Grid.Container gap={2} direction="row" justify="flex-start">
          <Favorites pokemons={favoritePokemons} />
        </Grid.Container>
      )}
    </Layout>
  );
};

export default FavoritesPage;
