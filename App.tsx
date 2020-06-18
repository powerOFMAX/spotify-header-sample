import React, { useState, useEffect } from "react";
import { Asset } from "expo-asset";
import { StatusBar } from "react-native";
import { AppLoading } from "expo";

import Album from "./components/Album.tsx";
import { Album as AlbumModel } from "./components/Model.tsx";

const album: AlbumModel = {
  name: "Remote Control",
  artist: "Maxi Vega",
  release: 2016,
  // eslint-disable-next-line global-require
  cover: require("./assets/react.png"),
  tracks: [
    { name: "Soy Cordobez" },
    { name: "Más", artist: "Maxi Vega, No tomo Licor" },
    { name: "Piso vacio" },
    { name: "El gran escape" },
    { name: "Ruido en la oscuridad" },
    { name: "Walking", artist: "Maxi Vega, Rodrigo" },
    { name: "Mismo Error" },
    {
      name: "Somos los que somos",
      artist: "Maxi Vega, Rodrigo"
    },
    { name: "De vuelta en el Taxi" },
    { name: "Ataque fantasma" },
    { name: "Todo esta bien" },
    { name: "Todo sigue igual" },
    { name: "Voy por la calle" },
    { name: "Caminando" },
    { name: "Siguiendo el mismo rumbo" },
    { name: "En el Abismo" }
  ]
};

export default () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    (async () => {
      await Asset.loadAsync(album.cover);
      setReady(true);
    })();
  });
  if (!ready) {
    return <AppLoading />;
  }
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Album {...{ album }} />
    </>
  );
};
