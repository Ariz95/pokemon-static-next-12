import React from "react";
import { SmallPokemon } from "../../interfaces";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

export const PokemonCard = ({ id, img, name, url }: SmallPokemon) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/name/${name}`);
  };

  return (
    <Grid xs={6} sm={3} xl={1} key={id}>
      <Card hoverable clickable onClick={onClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={img} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{name}</Text>
            <Text>{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
