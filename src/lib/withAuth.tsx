import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";

export function withAuth(gssp?: GetServerSideProps){
    return async (context: GetServerSidePropsContext) => {
        const session = await getServerSession(context.req, context.res, authOptions)

        if(!session){
            return {
                redirect: {
                    destination: "/login",
                    permanent: false
                }
            }
        }

        if(gssp){
            const gsspData = await gssp(context)

            if('props' in gsspData){
                return {
                    props: {
                        ...gsspData.props,
                        session
                    }
                }
            }

            return gsspData
        }

        return {
            props: {
                session
            }
        }
    }
}