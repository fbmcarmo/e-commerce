import { Product } from "@/interfaces/products"
import Image from "next/image";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="group overflow-hidden hover:shadow-lg transition-all
        duration-300 backdrop-blur-lg bg-[#181c22]">
            <div className="relative aspect-square overflow-hidden">
                <Image
                    src={product.image} 
                    alt={product.name} 
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover transition-transform duration-300
                    group-hover:scale-105"
                />

                <div className="absolute top-3 flex flex-col gap-2 left-3">
                    
                </div>
            </div>
        </div>
    )
}