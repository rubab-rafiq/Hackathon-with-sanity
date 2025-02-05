
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// POST handler
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { products } = body; // Expecting products array

        // Prepare the line items for Stripe
        const lineItems = products.map((product: any) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: product.title, 
                },
                unit_amount: product.price * 100, 
            },
            quantity: product.quantity, 
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: `${req.headers.get("origin")}/success`,
            cancel_url: `${req.headers.get("origin")}/cancel`,
        });

        return NextResponse.json({ url: session.url });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// Method Not Allowed for other HTTP methods
export async function GET() {
    return NextResponse.json(
        { error: "Method Not Allowed" },
        { status:405});
}
