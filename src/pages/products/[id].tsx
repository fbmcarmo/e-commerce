import Breadcrumb from "@/components/Breadcrumb";
import PageWrapper from "@/components/PageWrapper";
import ProductImages from "@/components/ProductImages";
import ProductInfo from "@/components/ProductInfo";
import Skeleton from "@/components/Skeleton";
import ProductSkeleton from "@/components/Skeletons/ProductSkeletonPage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
                    <Tabs
                        defaultValue="description"
                        className="w-full"
                    >
                        <TabsList>
                            <TabsTrigger value="description">Descrição</TabsTrigger>
                            <TabsTrigger value="specifications">Especificações</TabsTrigger>
                            <TabsTrigger value="reviews">Avaliações</TabsTrigger>
                        </TabsList>

                        <TabsContent value="description">
                            <div className="rounded-lg border border-[#343942] bg-[#181B20]">
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold mb-4">Características Principais</h3>
                                    <ul className="space-y-2">
                                        {product?.features.map((feature, index) => {
                                            return (
                                                <li className="flex items-center gap-2" key={index}>
                                                    <div className="w-2 h-2 rounded-full bg-[#5593f7]"></div>
                                                    <span>{feature}</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="specifications">
                            <p>Aqui é as Especificações</p>
                        </TabsContent>

                        <TabsContent value="reviews">
                            <p>Aqui é as Avaliações</p>
                        </TabsContent>
                    </Tabs>
                </>
            )}
            
        </PageWrapper>
    )
}