import React from "react";
import {
  HeroBanner2,
  InformationContainer,
  SpotifyContainer,
} from "./components";
import { Footer } from "../../components/footer";
export function Group() {
  return (
    <div>
      <HeroBanner2 />
      <InformationContainer />
      <SpotifyContainer />
      <Footer />
    </div>
  );
}
