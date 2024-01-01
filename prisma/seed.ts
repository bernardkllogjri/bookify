import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const products = [
  {
    name: "Earthen Bottle",
    price: "$48",
    images: {
      create: [
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
    },
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    rating: 3.9,
    // reviews: { href: "#", average: 4, totalCount: 117 },
    breadcrumbs: {
      create: [
        { name: "Men", href: "#" },
        { name: "Clothing", href: "#" },
      ],
    },
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
    reviews: {
      create: [
        {
          rating: 4.5,
          comment: "Opa",
        },
        {
          rating: 3.2,
          comment: "Opa",
        },
        {
          rating: 5.0,
          comment: "Opa",
        },
        {
          rating: 4.2,
          comment: "Opa",
        },
      ],
    },
  },
  {
    name: "Nomad Tumbler",
    price: "$35",
    images: {
      create: [
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
    },
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
    rating: 3.9,
    // reviews: { href: "#", average: 4, totalCount: 117 },
    breadcrumbs: {
      create: [
        { name: "Men", href: "#" },
        { name: "Clothing", href: "#" },
      ],
    },
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
    reviews: {
      create: [
        {
          rating: 4.5,
          comment: "Opa",
        },
        {
          rating: 3.2,
          comment: "Opa",
        },
        {
          rating: 5.0,
          comment: "Opa",
        },
        {
          rating: 4.2,
          comment: "Opa",
        },
      ],
    },
  },
  {
    name: "Focus Paper Refill",
    price: "$89",
    images: {
      create: [
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
    },
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    rating: 3.9,
    // reviews: { href: "#", average: 4, totalCount: 117 },
    breadcrumbs: {
      create: [
        { name: "Men", href: "#" },
        { name: "Clothing", href: "#" },
      ],
    },
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
    reviews: {
      create: [
        {
          rating: 4.5,
          comment: "Opa",
        },
        {
          rating: 3.2,
          comment: "Opa",
        },
        {
          rating: 5.0,
          comment: "Opa",
        },
        {
          rating: 4.2,
          comment: "Opa",
        },
      ],
    },
  },
  {
    name: "Machined Mechanical Pencil",
    price: "$35",
    images: {
      create: [
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
    },
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    rating: 3.9,
    // reviews: { href: "#", average: 4, totalCount: 117 },
    breadcrumbs: {
      create: [
        { name: "Men", href: "#" },
        { name: "Clothing", href: "#" },
      ],
    },
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
    reviews: {
      create: [
        {
          rating: 4.5,
          comment: "Opa",
        },
        {
          rating: 3.2,
          comment: "Opa",
        },
        {
          rating: 5.0,
          comment: "Opa",
        },
        {
          rating: 4.2,
          comment: "Opa",
        },
      ],
    },
  },
  {
    name: "Earthen Bottle",
    price: "$48",
    images: {
      create: [
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
    },
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    rating: 3.9,
    // reviews: { href: "#", average: 4, totalCount: 117 },
    breadcrumbs: {
      create: [
        { name: "Men", href: "#" },
        { name: "Clothing", href: "#" },
      ],
    },
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
    reviews: {
      create: [
        {
          rating: 4.5,
          comment: "Opa",
        },
        {
          rating: 3.2,
          comment: "Opa",
        },
        {
          rating: 5.0,
          comment: "Opa",
        },
        {
          rating: 4.2,
          comment: "Opa",
        },
      ],
    },
  },
  {
    name: "Nomad Tumbler",
    price: "$35",
    images: {
      create: [
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
    },
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
    rating: 3.9,
    // reviews: { href: "#", average: 4, totalCount: 117 },
    breadcrumbs: {
      create: [
        { name: "Men", href: "#" },
        { name: "Clothing", href: "#" },
      ],
    },
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
    reviews: {
      create: [
        {
          rating: 4.5,
          comment: "Opa",
        },
        {
          rating: 3.2,
          comment: "Opa",
        },
        {
          rating: 5.0,
          comment: "Opa",
        },
        {
          rating: 4.2,
          comment: "Opa",
        },
      ],
    },
  },
  {
    name: "Focus Paper Refill",
    price: "$89",
    images: {
      create: [
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
    },
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    rating: 3.9,
    // reviews: { href: "#", average: 4, totalCount: 117 },
    breadcrumbs: {
      create: [
        { name: "Men", href: "#" },
        { name: "Clothing", href: "#" },
      ],
    },
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
    reviews: {
      create: [
        {
          rating: 4.5,
          comment: "Opa",
        },
        {
          rating: 3.2,
          comment: "Opa",
        },
        {
          rating: 5.0,
          comment: "Opa",
        },
        {
          rating: 4.2,
          comment: "Opa",
        },
      ],
    },
  },
  {
    name: "Machined Mechanical Pencil",
    price: "$35",
    images: {
      create: [
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
    },
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    rating: 3.9,
    // reviews: { href: "#", average: 4, totalCount: 117 },
    breadcrumbs: {
      create: [
        { name: "Men", href: "#" },
        { name: "Clothing", href: "#" },
      ],
    },
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
    reviews: {
      create: [
        {
          rating: 4.5,
          comment: "Opa",
        },
        {
          rating: 3.2,
          comment: "Opa",
        },
        {
          rating: 5.0,
          comment: "Opa",
        },
        {
          rating: 4.2,
          comment: "Opa",
        },
      ],
    },
  },
];

async function main() {
  products.forEach(async (product) => {
    await prisma.product.create({
      data: product,
      include: { images: true, breadcrumbs: true, reviews: true },
    });
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
