import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
    "inline-flex items-center rounded-full border text-xs px-2.5 py-0.5 font-semibold transition-colors",
    {
        variants: {
            variant: {
                default: "border-transparent bg-[#5593f7] hover:bg-[#5593f7]/80",
                destructive: "border-transparent bg-red-500 hover:bg-red-500/80"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }
)

export interface BadgeProps 
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}



export default function Badge(){
    return (
        <div className=""></div>
    )
}