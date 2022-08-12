import { createServer, Model } from "miragejs";
import { Coffee } from "phosphor-react";

function makeServer() {
  return createServer({
    models: {
      coffee: Model.extend<Partial<typeof Coffee>>({}),
    },
    seeds(server) {
      server.db.loadData({
        coffees: [
          {
            id: 1,
            name: "American Espresso",
            image: "american",
            tags: ["Tradicional"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 9.9,
          },
          {
            id: 2,
            name: "Arabian",
            image: "arabian",
            tags: ["Special"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 9.9,
          },
          {
            id: 3,
            name: "Capuccino",
            image: "capuccino",
            tags: ["Tradicional", "With milk"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 9.9,
          },
          {
            id: 4,
            name: "Coffee with Milk",
            image: "coffee-with-milk",
            tags: ["Tradicional", "With milk"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 9.9,
          },
          {
            id: 5,
            name: "Cold Espresso",
            image: "cold-coffee",
            tags: ["Tradicional", "Cold"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 9.9,
          },
          {
            id: 6,
            name: "Creamy Espresso",
            image: "creamy-espresso",
            tags: ["Tradicional"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 9.9,
          },
          {
            id: 7,
            name: "Cuban",
            image: "cuban",
            tags: ["Special", "Alcoholic", "Cold"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 9.9,
          },
          {
            id: 8,
            name: "Tradicional Espresso",
            image: "espresso",
            tags: ["Tradicional"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 9.9,
          },
          {
            id: 9,
            name: "Hawaiian",
            image: "hawaiian",
            tags: ["Special"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 9.9,
          },
          {
            id: 10,
            name: "Hot Chocolate",
            image: "hot-chocolate",
            tags: ["Special", "With milk"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 9.9,
          },
          {
            id: 11,
            name: "Irish",
            image: "irish",
            tags: ["Special", "Alcoholic"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 9.9,
          },
          {
            id: 12,
            name: "Latte",
            image: "latte",
            tags: ["Tradicional", "With milk"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 9.9,
          },
          {
            id: 13,
            name: "Macchiato",
            image: "macchiato",
            tags: ["Tradicional", "With milk"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 9.9,
          },
          {
            id: 14,
            name: "Mocaccino",
            image: "mocaccino",
            tags: ["Tradicional", "With milk"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 9.9,
          },
        ],
      });
    },
    routes() {
      this.namespace = "api/v1/";
      this.timing = 1000;
      this.get("/coffees");
      this.namespace = "";
    },
  });
}

export default makeServer;
