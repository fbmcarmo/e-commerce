import Breadcrumb from "@/components/Breadcrumb";
import PageWrapper from "@/components/PageWrapper";
import ProductImages from "@/components/ProductImages";
import ProductInfo from "@/components/ProductInfo";
import Skeleton from "@/components/Skeleton";
import ProductSkeleton from "@/components/Skeletons/ProductSkeletonPage";
import getProductMock from "@/helpers/getProductMock";
import { ProductDetails } from "@/interfaces/productDetails";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductPage(){
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState<ProductDetails>({} as ProductDetails);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProduct(){
            setLoading(true)

            if(id){
                const product = getProductMock({ id: Number(id) })

                if(product){
                    setProduct(product)
                }
            }

            setLoading(false)
        }

        fetchProduct()
    }, [id])

    return (
        <PageWrapper>
            {loading ? (
                <ProductSkeleton />
            ) : (
                <>
                    <Breadcrumb 
                        items={[
                            {title: product.category},
                            {title: product.name}
                        ]}
                    />
                    <div className="grid lg:grid-cols-2 gap-8 mb-12">
                        <ProductImages 
                            images={product.images}
                        />
                        <ProductInfo
                            product={product}
                        />
                    </div>
                </>
            )}
            
        </PageWrapper>
    )
}