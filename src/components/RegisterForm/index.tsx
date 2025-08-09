import { FiUser } from "react-icons/fi";
import CustomInput from "../CustomInput";

export default function RegisterForm(){
    return (
        <div className="w-full max-w-md mx-auto bg-gradient-to-br
         from-[#181b20cc] to-[#1d2025e6] border
         border-[#2c313a]/50 backdrop-blur-xl shadow-[#181b1f]
         rounded-lg text-gray-400">
            <div className="p-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r
                     from-[#5593f7] to-[#1d4fd7] text-transparent bg-clip-text">
                        Criar Conta
                     </h2>
                     <p>Preencha os dados para criar sua conta</p>
                </div>
                <form 
                    onSubmit={() => {}}
                    className="space-y-6"
                >
                    <CustomInput 
                        label="Nome Completo"
                        type="text"
                        placeholder="Seu nome completo"
                        icon={<FiUser />}
                        required={true}
                    />
                </form>
            </div>
         </div>
    )
}