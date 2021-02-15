import { Logo } from "../../theme/Logo";
import { Button } from "../Button";
import { Text } from "../../foundation/Text";
import { MenuWrapper } from "./styles/MenuWrapper";


export default function Menu (){

    const links = [
        {
            texto:'Home',
            url:'/'
        },
        {
            texto:'Perguntas frequentes',
            url:'/faqs'
        },
        {
            texto:'Sobre',
            url:'/sobre'
        }
    ]

    return (
        <MenuWrapper>

            <MenuWrapper.LeftSide>
                <Logo/>
            </MenuWrapper.LeftSide>

            <MenuWrapper.CentralSide>
                {
                    links.map((link,index) => {
                        return (
                            <li key={index}>
                                <Text variant="smallestException" tag="a" href={link.url}>
                                    {link.texto}
                                </Text>
                            </li>
                        )
                    })
                }
            </MenuWrapper.CentralSide>

            <MenuWrapper.RightSide>
                <Button ghost variant="secondary.main">
                    Entrar
                </Button>
                <Button variant="primary.main">
                    Cadastrar
                </Button>
            </MenuWrapper.RightSide>
        </MenuWrapper>
    );
}
