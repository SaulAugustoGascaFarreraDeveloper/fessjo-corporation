"use client"
import { Button } from "@/components/ui/button";
import {Flex, HStack, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {IoIosFlash} from "react-icons/io"

const HeaderComponent = () => {

    const router = useRouter()

    return (
        <Flex
            width="100%"
            flexDirection="column"
            marginX="auto"
            maxWidth="container.lg"
            px="2"
        >

            <div className="flex flex-row gap-3 justify-between p-3">
                <Flex role="group" 
                    as={Link} 
                    href="/"
                    alignItems="center"
                    fontWeight="bold"
                    fontSize="2xl"
                >

                    <Icon transition="200ms all" _groupHover={{color: "brand.500"}} as={IoIosFlash} />

                   <Text display={{base:"inherit",md:"inherit"}}>
                        FESSJO.
                   </Text>
                </Flex>

                

                {/*<HStack spacing={1}>
                    <Button as={Link} href="https://fessjo.vercel.app" colorScheme="beige" 
                    variant="ghost" size="sm" className="border-b-2 border-black" >
                        Ir al sitio actual de FESSJOO
                    </Button>
                    
                </HStack>*/}

                
                <Button  onClick={() => router.push("/sales")} className="hover:bg-black/70 bg-blue-500 " >
                    Venta Maquinaria
                </Button>
                

                

            </div>

        </Flex>
    );
}
 
export default HeaderComponent;