import CustomInput from "@/components/CustomInput";
import { PageWrapper } from "@/components/PageWrapper";
import { IoSearch } from "react-icons/io5";

export default function ProductsPage(){
    return (
        <PageWrapper.Root>
            <PageWrapper.Header />
            <PageWrapper.Content 
                title="Todos os produtos"
                subtitle="8 produtos encontrados"
            >
                <div className="mb-8 space-y-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <CustomInput 
                            type="text"
                            placeholder="Buscar produtos"
                            icon={<IoSearch />}
                        />
                    </div>
                </div>
            </PageWrapper.Content>
        </PageWrapper.Root>
    )
}