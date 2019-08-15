export class Tienda {
  tiendaItems: Array<Object>;

  constructor() {
    this.tiendaItems = [
      {
        texto:
          "H+ Sport is dedicated to creating eco-friendly, high-quality, nutrient-rich, nutritional products that enhance active lifestyles.",
        titulo: "Orange Mineral Water ",
        imagen: "mineralwater-orange.jpg",
        precio: 20
      },
      {
        texto:
          "H+ Sport is dedicated to creating eco-friendly, high-quality, nutrient-rich, nutritional products that enhance active lifestyles.",
        titulo: "Strawberry Mineral Water ",
        imagen: "mineralwater-strawberry.jpg",
        precio: 33
      },
      {
        texto:
          "H+ Sport is dedicated to creating eco-friendly, high-quality, nutrient-rich, nutritional products that enhance active lifestyles.",
        titulo: "Chocolate Protein Bar",
        imagen: "proteinbar-chocolate.jpg",
        precio: 120
      }
    ];
  }
}
