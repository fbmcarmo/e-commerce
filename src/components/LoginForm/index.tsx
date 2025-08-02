import { CiMail } from "react-icons/ci";

export default function LoginForm(){
    return (
        <div className="w-full max-w-md mx-auto">
            <div className="bg-gradient-to-br from-[#181b20cc] to-[#1d2025e6]
            backdrop-blur-lg border border-[#2c313a]/50 rounded-lg">
                <div className="flex flex-col p-6 text-center">
                    <h1 className="text-2xl font-semibold bg-gradient-to-r
                     from-[#5593f7] to-[#1d4fd7] text-transparent bg-clip-text">
                        Bem-vindo de volta
                    </h1>
                    <p className="text-sm text-gray-400">
                        Entre na sua conta para continuar
                    </p>
                </div>
                <div className="pt-0 p-6 space-y-6">
                    <form onSubmit={() => {}} className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-[#F1F2F3]">
                                Email
                            </label>
                            <div className="relative">
                                <CiMail 
                                    className="absolute text-gray-500 left-3 top-1/2 transform -translate-y-1/2" 
                                    size={20}
                                />
                                <input 
                                    type="email" 
                                    id="email" 
                                    placeholder="seu@email.com"
                                    required
                                    className="bg-[#21252b80] border border-[#2c313a]/50
                                    focus:border-[#5593f7] outline-none rounded-md py-2 w-full
                                    placeholder:text-gray-500 text-[#F1F2F3] pl-10"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}