interface CustomInputProps {
    label: string;
    icon?: React.ReactNode;
    type: "text" | "email" | "password";
    placeholder?: string;
    required?: boolean;
}

export default function CustomInput({ label, icon, type, placeholder, required } : CustomInputProps) {
  return (
    <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-[#F1F2F3]">
            Email
        </label>
        <div 
            className="relative">
                <CiMail
                className="absolute text-gray-400 left-3 top-1/2 transform -translate-y-1/2"
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
  )
}
