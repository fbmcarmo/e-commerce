import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import requestApi from "@/helpers/requestApi";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdMail } from "react-icons/md";

export default function VerifyEmail(){
    const router = useRouter();
    const { token } = router.query;

    async function resendEmail(){
        try {
            await requestApi({
                url: "/resend-active-email",
                method: "POST",
                data: {
                    token
                }
            })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="min-h-screen bg-[#111418] flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center 
                     justify-center rounded-full bg-[#5593f7]/10">
                        <MdMail color="#5593f7" size={40} />
                     </div>
                     <CardTitle>Verifique seu email</CardTitle>
                     <CardDescription className="text-base">
                        Para acessar sua conta, você precisa confirmar seu endereço de email.
                     </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="rounded-lg bg-[#21252b] p-4 text-sm text-gray-400">
                        <p>
                            Enviamos um link de verificação para o seu email. Clique no link para ativar sua conta.
                        </p>
                        <p className="mt-2">
                            Não encontrou? Verifique também sua pasta de <strong>spam</strong>.
                        </p>
                    </div>

                    <div className="space-y-3 mt-4">
                        <Button 
                        onClick={resendEmail}
                        className="w-full bg-[#5593f7]">
                            Reenviar email de verificação
                        </Button>
                        <div className="text-center">
                            <Link href="/login" className="text-sm text-[#5593f7]">
                                Voltar para o login
                            </Link>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}