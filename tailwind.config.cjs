/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      clip: {
        none: "rect(0 0 0 0)",
      },
      backgroundImage: {
        bgImage: "url('../fundo.jpg')",
      },
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.18)",
      },
      gridTemplateAreas: {
        clientHydrometerDetails: [
          "title title title title title",
          "empresa empresa fantasia cnpj cnpj",
          "responsavel telefone email endereco endereco",
          "cidade estado cep serie serie",
          "nome latitude longitude vazao montadoem",
        ],
        clientDetails: [
          "title title title title title title",
          "empresa empresa fantasia fantasia cnpj cnpj",
          "endereco endereco endereco endereco endereco endereco",
          "responsavel responsavel responsavel responsavel responsavel responsavel",
          "telefone telefone telefone email email email",
          "cidade cidade estado estado cep cep",
          "cadastradoEm cadastradoEm cadastradoEm ultimaAtualizacao ultimaAtualizacao ultimaAtualizacao",
        ],
      },
      gridTemplateColumns: {
        clientDetails: "1fr 1fr 1fr 1fr 1fr",
      },
      gridTemplateRows: {
        clientDetails: "",
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
  variants: {
    gridTemplateAreas: ["responsive"],
  },
};
