"use client"

import useCart from "@/lib/hooks/useCart";
import Link from "next/link";
import {useEffect} from "react";
import Image from "next/image";

const SuccessfulPayment = () => {
    const cart = useCart();

    useEffect(() => {
        cart.clearCart();
    }, []);

    return (
        <div style={{height: '85vh'}} className="h-screen flex flex-col justify-center items-center gap-5">
            <Image
                style={{width: '10vw', height: '10vw', objectPosition: 'center'}}
                src="/success-payment.png"
                alt="banner"
                width={225}
                height={225}
                className="w-screen"
            />
            <p className="text-heading4-bold text-green-500">Successful Payment</p>
            <p>Thank you for your purchase</p>
            <Link
                href="/"
                className="p-4 border text-base-bold hover:bg-black hover:text-white"
            >
                CONTINUE TO SHOPPING
            </Link>
        </div>
    );
};

export default SuccessfulPayment;
