import localFont from "next/font/local";

export const proximaNova = localFont({
  src: [
    {
      path: "./ProximaNovaT-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./ProximaNova-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./ProximaNova-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./ProximaNova-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./ProximaNova-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./ProximaNova-Extrabold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./ProximaNova-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-proxima-nova",
});
