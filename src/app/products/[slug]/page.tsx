

// import Footer from "@/app/Components/footer";
// import Navbar from "@/app/Components/navbar2";
// import ProductDetails from "@/app/ProductDetails/page";
// import { client } from "@/sanity/lib/client";

// interface PageProps {
//   params: {
//     slug: string;
//   };
// }

// export default async function Page({ params }: PageProps) {
//   const { slug } = params;  // params is already available synchronously

//   // Sanity query
//   const query = `*[_type=='product' && slug.current=="${slug}"]{
//     title, image, price, discountPrice, slug, description, colors, sizes, quantity
//   }[0]`;

//   const product = await client.fetch(query);

//   if (!product) {
//     return (
//       <div className="text-center text-red-500 font-extrabold text-4xl p-10">
//         <h2>Product not found</h2>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       <ProductDetails product={product} />
//       <Footer />
//     </>
//   );
// }



// import { IProduct } from "@/types/page";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import Navbar from "@/app/Components/navbar2";
// import ProductDetails from "@/app/ProductDetails/page";
// import Footer from "@/app/Components/footer";

// interface PageProps {
//   params: {
//     slug: string;
//   };
// }

// export default async function Page({ params }: PageProps) {
//   const { slug } = params;

//   // Sanity query to fetch product based on the slug
//   const query = `*[_type=='product' && slug.current=="${slug}"]{
//     title, image, price, discountPrice, slug, description, colors, sizes, quantity
//   }[0]`;

//   const product = await client.fetch(query);

//   if (!product) {
//     return (
//       <div className="text-center text-red-500 font-extrabold text-4xl p-10">
//         <h2>Product not found</h2>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       <ProductDetails product={product} />
//       <Footer />
//     </>
//   );
// // }

import IProduct from "@/types/page";
import 'react-toastify/dist/ReactToastify.css';
import ProductDetails from "@/app/ProductDetails/page";
import Footer from "@/app/Components/footer";
import Navbar from "@/app/Components/navbar2";
import { client } from "@/sanity/lib/client";
interface PageProps {
  params: {
    slug: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const { slug } = params;

  // Sanity query
  const query = `*[_type=='product' && slug.current=="${slug}"]{
    title, image, price, discountPrice, slug, description, colors, sizes, quantity
  }[0]`;

  const product: IProduct = await client.fetch(query);

  // if (!product) {
  //   return (
  //     <div className="text-center text-red-500 font-extrabold text-4xl p-10">
  //       <h2>Product not found</h2>
  //     </div>
  //   );
  // }

  if (!product || !product.image) {
    return (
      <div className="text-center text-red-500 font-extrabold text-4xl p-10">
        <h2>Product not found or missing image</h2>
      </div>
    );
  }
  

  return (
    <>
      <Navbar />
      <ProductDetails product={product} />
      <Footer />
    </>
  );
};

export default Page;