"use client";
import { Product } from "@/sanity.types";
import React from "react";
import toast from "react-hot-toast";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import QuantityButtons from "./QuantityButtons";
import PriceFormatter from "./PriceFormatter";
import useCartStore from "@/store";
interface Props {
    product: Product;
    className?: string;
}

const AddToCartButton = ({ product, className }: Props) => {
    const { addItem, getItemCount } = useCartStore();
    const itemCount = getItemCount(product?._id);
    const isOutOfStock = product?.stock === 0;

    return (
        <div className="w-full h-12 flex items-center">
            {itemCount ? (
                <div className="w-full text-sm">
                    <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground text-pink-600">Quantity</span>
                        <QuantityButtons product={product} />
                    </div>
                    <div className="flex items-center justify-between border-t pt-1 text-pink-900">
                        <span className="text-xs font-semibold text-pink-500">Subtotal</span>
                        <PriceFormatter
                            amount={product?.price ? product?.price * itemCount : 0}
                        />
                    </div>
                </div>
            ) : (
                <Button
                    onClick={() => {
                        addItem(product);
                        toast.success(
                            `${product?.name?.substring(0, 12)}... added successfully!`
                        );
                    }}
                    disabled={isOutOfStock}
                    className={cn(
                        "w-full bg-transparent text-pink-600 shadow-none border border-b font-semibold tracking-wide hover:bg-pink-600 hover:text-white hoverEffect",
                        className
                    )}
                >
                    Add to cart
                </Button>
            )}
        </div>
    );
};

export default AddToCartButton;