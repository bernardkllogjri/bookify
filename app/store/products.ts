import { Product, ProductInCart } from "../types/Product";
import { createSelectors, createStore } from "./config";

import formatCurrency from "../utils/formatCurrency";
import parseCurrency from "../utils/parseCurrency";

type State = {
  products: Product[];
  productsInCart: ProductInCart[];
  selectedProduct: Product | null;
};

type Actions = {
  selectProduct: (id: string) => void;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  getProductsInCartTotalPrice: () => string;
};

export const useProductsStore = createSelectors(createStore<State & Actions>(
  "products-storage",
  (set, get) => ({
    products: [
      {
        id: 1,
        name: "Earthen Bottle",
        price: "$48",
        images: [
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
            alt: "Two each of gray, white, and black shirts laying flat.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
            alt: "Model wearing plain black basic tee.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
            alt: "Model wearing plain gray basic tee.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
            alt: "Model wearing plain white basic tee.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
            alt: "Two each of gray, white, and black shirts laying flat.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
            alt: "Model wearing plain black basic tee.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
            alt: "Model wearing plain gray basic tee.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
            alt: "Model wearing plain white basic tee.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
            alt: "Two each of gray, white, and black shirts laying flat.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
            alt: "Model wearing plain black basic tee.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
            alt: "Model wearing plain gray basic tee.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
            alt: "Model wearing plain white basic tee.",
          },
        ],
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
        imageAlt:
          "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
        rating: 3.9,
        reviews: { href: "#", average: 4, totalCount: 117 },
        breadcrumbs: [
          { id: 1, name: "Men", href: "#" },
          { id: 2, name: "Clothing", href: "#" },
        ],
        description:
          'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        highlights: [
          "Hand cut and sewn locally",
          "Dyed with our proprietary colors",
          "Pre-washed & pre-shrunk",
          "Ultra-soft 100% cotton",
        ],
        details:
          'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
        metadata: {
          colors: [
            {
              name: "White",
              class: "bg-white",
              selectedClass: "ring-gray-400",
            },
            {
              name: "Gray",
              class: "bg-gray-200",
              selectedClass: "ring-gray-400",
            },
            {
              name: "Black",
              class: "bg-gray-900",
              selectedClass: "ring-gray-900",
            },
          ],
          sizes: [
            { name: "XXS", inStock: true },
            { name: "XS", inStock: true },
            { name: "S", inStock: true },
            { name: "M", inStock: true },
            { name: "L", inStock: true },
            { name: "XL", inStock: true },
            { name: "XXL", inStock: true },
            { name: "XXXL", inStock: false },
          ],
        },
      },
      {
        id: 2,
        name: "Nomad Tumbler",
        price: "$35",
        images: [
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
            alt: "Two each of gray, white, and black shirts laying flat.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
            alt: "Model wearing plain black basic tee.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
            alt: "Model wearing plain gray basic tee.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
            alt: "Model wearing plain white basic tee.",
          },
        ],
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
        imageAlt:
          "Olive drab green insulated bottle with flared screw lid and flat top.",
        rating: 3.9,
        reviews: { href: "#", average: 4, totalCount: 117 },
        breadcrumbs: [
          { id: 1, name: "Men", href: "#" },
          { id: 2, name: "Clothing", href: "#" },
        ],
        description:
          'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        highlights: [
          "Hand cut and sewn locally",
          "Dyed with our proprietary colors",
          "Pre-washed & pre-shrunk",
          "Ultra-soft 100% cotton",
        ],
        details:
          'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
        metadata: {
          colors: [
            {
              name: "White",
              class: "bg-white",
              selectedClass: "ring-gray-400",
            },
            {
              name: "Gray",
              class: "bg-gray-200",
              selectedClass: "ring-gray-400",
            },
            {
              name: "Black",
              class: "bg-gray-900",
              selectedClass: "ring-gray-900",
            },
          ],
          sizes: [
            { name: "XXS", inStock: true },
            { name: "XS", inStock: true },
            { name: "S", inStock: true },
            { name: "M", inStock: true },
            { name: "L", inStock: true },
            { name: "XL", inStock: true },
            { name: "XXL", inStock: true },
            { name: "XXXL", inStock: false },
          ],
        },
      },
      {
        id: 3,
        name: "Focus Paper Refill",
        price: "$89",
        images: [
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
            alt: "Two each of gray, white, and black shirts laying flat.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
            alt: "Model wearing plain black basic tee.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
            alt: "Model wearing plain gray basic tee.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
            alt: "Model wearing plain white basic tee.",
          },
        ],
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
        imageAlt:
          "Person using a pen to cross a task off a productivity paper card.",
        rating: 3.9,
        reviews: { href: "#", average: 4, totalCount: 117 },
        breadcrumbs: [
          { id: 1, name: "Men", href: "#" },
          { id: 2, name: "Clothing", href: "#" },
        ],
        description:
          'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        highlights: [
          "Hand cut and sewn locally",
          "Dyed with our proprietary colors",
          "Pre-washed & pre-shrunk",
          "Ultra-soft 100% cotton",
        ],
        details:
          'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
        metadata: {
          colors: [
            {
              name: "White",
              class: "bg-white",
              selectedClass: "ring-gray-400",
            },
            {
              name: "Gray",
              class: "bg-gray-200",
              selectedClass: "ring-gray-400",
            },
            {
              name: "Black",
              class: "bg-gray-900",
              selectedClass: "ring-gray-900",
            },
          ],
          sizes: [
            { name: "XXS", inStock: true },
            { name: "XS", inStock: true },
            { name: "S", inStock: true },
            { name: "M", inStock: true },
            { name: "L", inStock: true },
            { name: "XL", inStock: true },
            { name: "XXL", inStock: true },
            { name: "XXXL", inStock: false },
          ],
        },
      },
      {
        id: 4,
        name: "Machined Mechanical Pencil",
        price: "$35",
        images: [
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
            alt: "Two each of gray, white, and black shirts laying flat.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
            alt: "Model wearing plain black basic tee.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
            alt: "Model wearing plain gray basic tee.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
            alt: "Model wearing plain white basic tee.",
          },
        ],
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
        imageAlt:
          "Hand holding black machined steel mechanical pencil with brass tip and top.",
        rating: 3.9,
        reviews: { href: "#", average: 4, totalCount: 117 },
        breadcrumbs: [
          { id: 1, name: "Men", href: "#" },
          { id: 2, name: "Clothing", href: "#" },
        ],
        description:
          'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        highlights: [
          "Hand cut and sewn locally",
          "Dyed with our proprietary colors",
          "Pre-washed & pre-shrunk",
          "Ultra-soft 100% cotton",
        ],
        details:
          'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
        metadata: {
          colors: [
            {
              name: "White",
              class: "bg-white",
              selectedClass: "ring-gray-400",
            },
            {
              name: "Gray",
              class: "bg-gray-200",
              selectedClass: "ring-gray-400",
            },
            {
              name: "Black",
              class: "bg-gray-900",
              selectedClass: "ring-gray-900",
            },
          ],
          sizes: [
            { name: "XXS", inStock: true },
            { name: "XS", inStock: true },
            { name: "S", inStock: true },
            { name: "M", inStock: true },
            { name: "L", inStock: true },
            { name: "XL", inStock: true },
            { name: "XXL", inStock: true },
            { name: "XXXL", inStock: false },
          ],
        },
      },
      {
        id: 5,
        name: "Earthen Bottle",
        price: "$48",
        images: [
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
            alt: "Two each of gray, white, and black shirts laying flat.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
            alt: "Model wearing plain black basic tee.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
            alt: "Model wearing plain gray basic tee.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
            alt: "Model wearing plain white basic tee.",
          },
        ],
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
        imageAlt:
          "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
        rating: 3.9,
        reviews: { href: "#", average: 4, totalCount: 117 },
        breadcrumbs: [
          { id: 1, name: "Men", href: "#" },
          { id: 2, name: "Clothing", href: "#" },
        ],
        description:
          'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        highlights: [
          "Hand cut and sewn locally",
          "Dyed with our proprietary colors",
          "Pre-washed & pre-shrunk",
          "Ultra-soft 100% cotton",
        ],
        details:
          'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
        metadata: {
          colors: [
            {
              name: "White",
              class: "bg-white",
              selectedClass: "ring-gray-400",
            },
            {
              name: "Gray",
              class: "bg-gray-200",
              selectedClass: "ring-gray-400",
            },
            {
              name: "Black",
              class: "bg-gray-900",
              selectedClass: "ring-gray-900",
            },
          ],
          sizes: [
            { name: "XXS", inStock: true },
            { name: "XS", inStock: true },
            { name: "S", inStock: true },
            { name: "M", inStock: true },
            { name: "L", inStock: true },
            { name: "XL", inStock: true },
            { name: "XXL", inStock: true },
            { name: "XXXL", inStock: false },
          ],
        },
      },
      {
        id: 6,
        name: "Nomad Tumbler",
        price: "$35",
        images: [
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
            alt: "Two each of gray, white, and black shirts laying flat.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
            alt: "Model wearing plain black basic tee.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
            alt: "Model wearing plain gray basic tee.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
            alt: "Model wearing plain white basic tee.",
          },
        ],
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
        imageAlt:
          "Olive drab green insulated bottle with flared screw lid and flat top.",
        rating: 3.9,
        reviews: { href: "#", average: 4, totalCount: 117 },
        breadcrumbs: [
          { id: 1, name: "Men", href: "#" },
          { id: 2, name: "Clothing", href: "#" },
        ],
        description:
          'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        highlights: [
          "Hand cut and sewn locally",
          "Dyed with our proprietary colors",
          "Pre-washed & pre-shrunk",
          "Ultra-soft 100% cotton",
        ],
        details:
          'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
        metadata: {
          colors: [
            {
              name: "White",
              class: "bg-white",
              selectedClass: "ring-gray-400",
            },
            {
              name: "Gray",
              class: "bg-gray-200",
              selectedClass: "ring-gray-400",
            },
            {
              name: "Black",
              class: "bg-gray-900",
              selectedClass: "ring-gray-900",
            },
          ],
          sizes: [
            { name: "XXS", inStock: true },
            { name: "XS", inStock: true },
            { name: "S", inStock: true },
            { name: "M", inStock: true },
            { name: "L", inStock: true },
            { name: "XL", inStock: true },
            { name: "XXL", inStock: true },
            { name: "XXXL", inStock: false },
          ],
        },
      },
      {
        id: 7,
        name: "Focus Paper Refill",
        price: "$89",
        images: [
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
            alt: "Two each of gray, white, and black shirts laying flat.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
            alt: "Model wearing plain black basic tee.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
            alt: "Model wearing plain gray basic tee.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
            alt: "Model wearing plain white basic tee.",
          },
        ],
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
        imageAlt:
          "Person using a pen to cross a task off a productivity paper card.",
        rating: 3.9,
        reviews: { href: "#", average: 4, totalCount: 117 },
        breadcrumbs: [
          { id: 1, name: "Men", href: "#" },
          { id: 2, name: "Clothing", href: "#" },
        ],
        description:
          'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        highlights: [
          "Hand cut and sewn locally",
          "Dyed with our proprietary colors",
          "Pre-washed & pre-shrunk",
          "Ultra-soft 100% cotton",
        ],
        details:
          'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
        metadata: {
          colors: [
            {
              name: "White",
              class: "bg-white",
              selectedClass: "ring-gray-400",
            },
            {
              name: "Gray",
              class: "bg-gray-200",
              selectedClass: "ring-gray-400",
            },
            {
              name: "Black",
              class: "bg-gray-900",
              selectedClass: "ring-gray-900",
            },
          ],
          sizes: [
            { name: "XXS", inStock: true },
            { name: "XS", inStock: true },
            { name: "S", inStock: true },
            { name: "M", inStock: true },
            { name: "L", inStock: true },
            { name: "XL", inStock: true },
            { name: "XXL", inStock: true },
            { name: "XXXL", inStock: false },
          ],
        },
      },
      {
        id: 8,
        name: "Machined Mechanical Pencil",
        price: "$35",
        images: [
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
            alt: "Two each of gray, white, and black shirts laying flat.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
            alt: "Model wearing plain black basic tee.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
            alt: "Model wearing plain gray basic tee.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
            alt: "Model wearing plain white basic tee.",
          },
        ],
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
        imageAlt:
          "Hand holding black machined steel mechanical pencil with brass tip and top.",
        rating: 3.9,
        reviews: { href: "#", average: 4, totalCount: 117 },
        breadcrumbs: [
          { id: 1, name: "Men", href: "#" },
          { id: 2, name: "Clothing", href: "#" },
        ],
        description:
          'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        highlights: [
          "Hand cut and sewn locally",
          "Dyed with our proprietary colors",
          "Pre-washed & pre-shrunk",
          "Ultra-soft 100% cotton",
        ],
        details:
          'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
        metadata: {
          colors: [
            {
              name: "White",
              class: "bg-white",
              selectedClass: "ring-gray-400",
            },
            {
              name: "Gray",
              class: "bg-gray-200",
              selectedClass: "ring-gray-400",
            },
            {
              name: "Black",
              class: "bg-gray-900",
              selectedClass: "ring-gray-900",
            },
          ],
          sizes: [
            { name: "XXS", inStock: true },
            { name: "XS", inStock: true },
            { name: "S", inStock: true },
            { name: "M", inStock: true },
            { name: "L", inStock: true },
            { name: "XL", inStock: true },
            { name: "XXL", inStock: true },
            { name: "XXXL", inStock: false },
          ],
        },
      },
    ],
    productsInCart: [],
    selectedProduct: null,
    getProductsInCartTotalPrice: () => formatCurrency(get().productsInCart.reduce((sum, product) => sum + (product.quantity * parseCurrency(product.price)), 0)),
    selectProduct: (productId) =>
      set(({ products }) => ({
        selectedProduct: products.find(({ id }) => id === parseInt(productId)),
      })),
    addToCart: (productId) => {
      set((state) => {
        let product = state.products.find(
          ({ id }) => id === productId
        ) as ProductInCart;
        const productInCartIdx = state.productsInCart.findIndex(
          ({ id }) => id === productId
        );
        const productInCart = state.productsInCart[productInCartIdx];
        if (productInCartIdx !== -1) {
          productInCart.quantity = productInCart.quantity + 1;
          state.productsInCart[productInCartIdx] = productInCart;
        } else {
          product = { ...product, quantity: 1 };
          state.productsInCart = [...state.productsInCart, product];
        }
      });
    },
    removeFromCart: (productId) => {
      set((state) => {
        const { productsInCart } = state;
        const productIdx = productsInCart.findIndex(
          ({ id }) => id === productId
        );
        const product = productsInCart[productIdx];
        if (product.quantity > 1) {
          state.productsInCart[productIdx].quantity = product.quantity - 1;
        } else if (productIdx !== -1) {
          state.productsInCart = productsInCart.toSpliced(productIdx, 1);
        }
      });
    },
  })
));

