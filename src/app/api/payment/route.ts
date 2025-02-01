// import { NextResponse } from "next/server";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// // POST handler
// export async function POST(req: Request) {
//     try {
//         const body = await req.json(); // Parse JSON body
//         const { product } = body; //1st add the object name here

//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ["card"],
//             line_items: [
//                 {
//                     price_data: {
//                         currency: "usd",
//                         product_data: {
//                             name: product.name,//2nd add product name here
//                         },
//                         unit_amount: product.price * 100, // 3rd add product Price in cents
//                     },
//                     quantity: 1, //4th add quantity here
//                 },
//             ],
//             mode: "payment",
//             success_url: `${req.headers.get("origin")}/success`,
//             cancel_url: `${req.headers.get("origin")}/cancel`,
//         });

//         return NextResponse.json({ url: session.url });
//     } catch (error: any) {
//         return NextResponse.json({ error: error.message }, { status: 500 });
//     }
// }






// import { NextResponse } from "next/server";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// // POST handler
// export async function POST(req: Request) {
//     try {
//         const body = await req.json();
//         const { products } = body; // Expecting products array

//         // Prepare the line items for Stripe
//         const lineItems = products.map((product: any) => ({
//             price_data: {
//                 currency: "usd",
//                 product_data: {
//                     name: product.title, 
//                 },
//                 unit_amount: product.price * 100, 
//             },
//             quantity: product.quantity, 
//         }));

//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ["card"],
//             line_items: lineItems,
//             mode: "payment",
//             success_url: `${req.headers.get("origin")}/success`,
//             cancel_url: `${req.headers.get("origin")}/cancel`,
//         });

//         return NextResponse.json({ url: session.url });
//     } catch (error: any) {
//         return NextResponse.json({ error: error.message }, { status: 500 });
//     }
// }

// // Method Not Allowed for other HTTP methods
// export async function GET() {
//     return NextResponse.json(
//         { error: "Method Not Allowed" },
//         { status:405});
// }


import { NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize Stripe with secret key from environment variables
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-01-27.acacia", // Ensure you set the proper API version
});

// POST handler for initiating Stripe Checkout session
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { products } = body;

    // Validate products data
    if (!products || !Array.isArray(products)) {
      return NextResponse.json(
        { error: "Invalid products data" },
        { status: 400 }
      );
    }

    // Prepare line items for Stripe Checkout
    const lineItems = products.map((product: any) => {
      // Ensure required fields are present and unit_amount is a number
      const price = Number(product.price);
      if (!product.title || !price || !product.quantity) {
        throw new Error("Invalid product data");
      }
      return {
        price_data: {
          currency: "usd",
          product_data: {
            
            name: product.title,
          },
          unit_amount: price * 100, // Convert dollars to cents
        },
        quantity: product.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${req.headers.get("origin")}/success`,
      cancel_url: `${req.headers.get("origin")}/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// GET handler to disallow other methods
export async function GET() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}
