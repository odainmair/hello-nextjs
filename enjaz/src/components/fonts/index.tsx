import localFont from "next/font/local"

const myFont = localFont({
  src: [
    {
      path: "../../../public/fonts/Objektiv_Mk1_Arbc_Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Objektiv_Mk1_Arbc_Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Objektiv_Mk1_Arbc_Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Objektiv_Mk1_Arbc_Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Objektiv_Mk1_Arbc_SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Objektiv_Mk1_Arbc_Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
})

export default myFont
