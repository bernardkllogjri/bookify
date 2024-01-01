"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var products = [
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
        imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
        imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
        rating: 3.9,
        // reviews: { href: "#", average: 4, totalCount: 117 },
        breadcrumbs: {
            create: [
                { name: "Men", href: "#" },
                { name: "Clothing", href: "#" },
            ],
        },
        description: 'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        highlights: [
            "Hand cut and sewn locally",
            "Dyed with our proprietary colors",
            "Pre-washed & pre-shrunk",
            "Ultra-soft 100% cotton",
        ],
        details: 'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
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
        imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
        imageAlt: "Olive drab green insulated bottle with flared screw lid and flat top.",
        rating: 3.9,
        // reviews: { href: "#", average: 4, totalCount: 117 },
        breadcrumbs: {
            create: [
                { name: "Men", href: "#" },
                { name: "Clothing", href: "#" },
            ],
        },
        description: 'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        highlights: [
            "Hand cut and sewn locally",
            "Dyed with our proprietary colors",
            "Pre-washed & pre-shrunk",
            "Ultra-soft 100% cotton",
        ],
        details: 'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
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
        imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
        imageAlt: "Person using a pen to cross a task off a productivity paper card.",
        rating: 3.9,
        // reviews: { href: "#", average: 4, totalCount: 117 },
        breadcrumbs: {
            create: [
                { name: "Men", href: "#" },
                { name: "Clothing", href: "#" },
            ],
        },
        description: 'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        highlights: [
            "Hand cut and sewn locally",
            "Dyed with our proprietary colors",
            "Pre-washed & pre-shrunk",
            "Ultra-soft 100% cotton",
        ],
        details: 'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
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
        imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
        imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
        rating: 3.9,
        // reviews: { href: "#", average: 4, totalCount: 117 },
        breadcrumbs: {
            create: [
                { name: "Men", href: "#" },
                { name: "Clothing", href: "#" },
            ],
        },
        description: 'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        highlights: [
            "Hand cut and sewn locally",
            "Dyed with our proprietary colors",
            "Pre-washed & pre-shrunk",
            "Ultra-soft 100% cotton",
        ],
        details: 'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
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
        imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
        imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
        rating: 3.9,
        // reviews: { href: "#", average: 4, totalCount: 117 },
        breadcrumbs: {
            create: [
                { name: "Men", href: "#" },
                { name: "Clothing", href: "#" },
            ],
        },
        description: 'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        highlights: [
            "Hand cut and sewn locally",
            "Dyed with our proprietary colors",
            "Pre-washed & pre-shrunk",
            "Ultra-soft 100% cotton",
        ],
        details: 'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
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
        imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
        imageAlt: "Olive drab green insulated bottle with flared screw lid and flat top.",
        rating: 3.9,
        // reviews: { href: "#", average: 4, totalCount: 117 },
        breadcrumbs: {
            create: [
                { name: "Men", href: "#" },
                { name: "Clothing", href: "#" },
            ],
        },
        description: 'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        highlights: [
            "Hand cut and sewn locally",
            "Dyed with our proprietary colors",
            "Pre-washed & pre-shrunk",
            "Ultra-soft 100% cotton",
        ],
        details: 'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
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
        imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
        imageAlt: "Person using a pen to cross a task off a productivity paper card.",
        rating: 3.9,
        // reviews: { href: "#", average: 4, totalCount: 117 },
        breadcrumbs: {
            create: [
                { name: "Men", href: "#" },
                { name: "Clothing", href: "#" },
            ],
        },
        description: 'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        highlights: [
            "Hand cut and sewn locally",
            "Dyed with our proprietary colors",
            "Pre-washed & pre-shrunk",
            "Ultra-soft 100% cotton",
        ],
        details: 'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
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
        imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
        imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
        rating: 3.9,
        // reviews: { href: "#", average: 4, totalCount: 117 },
        breadcrumbs: {
            create: [
                { name: "Men", href: "#" },
                { name: "Clothing", href: "#" },
            ],
        },
        description: 'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        highlights: [
            "Hand cut and sewn locally",
            "Dyed with our proprietary colors",
            "Pre-washed & pre-shrunk",
            "Ultra-soft 100% cotton",
        ],
        details: 'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
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
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            products.forEach(function (product) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prisma.product.create({
                                data: product,
                                include: { images: true, breadcrumbs: true, reviews: true },
                            })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    });
}
main()
    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })
    .catch(function (e) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.error(e);
                return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                process.exit(1);
                return [2 /*return*/];
        }
    });
}); });
