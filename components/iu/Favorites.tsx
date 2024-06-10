import React from "react";
import { Grid } from "@nextui-org/react";
import { FavoritePokemonCard } from "../pokemon/FavoritePokemonCard";

interface Props {
  pokemons: number[];
}

export const Favorites = ({ pokemons }: Props) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <FavoritePokemonCard id={id} />
      ))}
    </Grid.Container>
  );
};
