import Breadcrumb from "@/components/Breadcrumb";
import PageWrapper from "@/components/PageWrapper";
import ProductImages from "@/components/ProductImages";
import ProductInfo from "@/components/ProductInfo";
import ProductSkeleton from "@/components/Skeletons/ProductSkeletonPage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import requestApi from "@/helpers/requestApi";
import { ProductDetails } from "@/interfaces/productDetails";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function ProductPage(){
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState<ProductDetails>({} as ProductDetails);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProduct(){
            setLoading(true)

            try {
                if(!id) return

                const response = await requestApi({
                    url: `/products/${id}`,
                    method: "GET"
                })

                setProduct(response.data)
            } catch (error) {
                console.error(error)
                toast.error("Erro ao buscar produto")
            } finally {
                setLoading(false)
            }

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
                                        {product?.features?.map((feature, index) => {
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
                            <div className="rounded-lg border border-[#343942] bg-[#181b20]">
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold mb-4">
                                        Especificações Técnicas
                                    </h3>
                                    <div className="space-y-3">
                                        {
                                            Object.entries(product?.specifications || {}).map(([key, value]) => {
                                                return (
                                                    <div key={key} className="flex justify-between py-2 border-b border-[#2c313a]/50">
                                                        <span className="font-medium">{key}</span>
                                                        <span className="text-gray-400">{value}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
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