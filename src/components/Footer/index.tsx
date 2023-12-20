
import { useContextSelector } from 'use-context-selector';
import { ThemeContext } from '../../store/contexts/themeContext';
import { FooterAddress, FooterContainer, FooterContent, FooterNavbar, FooterTermsAddressContainer, FooterTermsNavbar, Line, LogoContainer, LogoNavContainer, NavFirstColumn, NavSecondColumn, TooltipContainer } from './styles';

export function Footer() {
    const theme = useContextSelector(ThemeContext, context => context.theme);

    const handleRedirect = (url: string) => {
        window.location.href = url;
    };

    return (
        <FooterContainer>
            <FooterContent>
                <TooltipContainer>
                    <LogoNavContainer>
                        <LogoContainer theme={theme} />
                        <FooterNavbar>
                            <NavFirstColumn>
                                <button onClick={() => handleRedirect('')}> Comprar carro</button>
                                <button onClick={() => handleRedirect('')}>Vender carro</button>
                                <button onClick={() => handleRedirect('')}>App Kavak</button>
                                <button onClick={() => handleRedirect('')}>Onde estamos </button>
                                <button onClick={() => handleRedirect('')}>Perguntas frequentes</button>
                            </NavFirstColumn>
                            <NavSecondColumn>
                                <button onClick={() => handleRedirect('')}> Blog</button>
                                <button onClick={() => handleRedirect('')}>Guia de preços</button>
                                <button onClick={() => handleRedirect('')}>Carreiras</button>
                                <button onClick={() => handleRedirect('')}>Contato</button>
                                <button onClick={() => handleRedirect('')}>Imprensa</button>
                            </NavSecondColumn>
                        </FooterNavbar>
                    </LogoNavContainer>
                </TooltipContainer>
                <Line></Line>
                <FooterTermsAddressContainer>
                    <FooterTermsNavbar>
                        <span>Copyright © 2022 KAVAK. Todos os direitos reservados.</span>
                        <li><button onClick={() => handleRedirect('')}>Política de Privacidade</button></li>
                        <li><button onClick={() => handleRedirect('')}>Termos e Condições</button></li>
                        <li><button onClick={() => handleRedirect('')}>Definições de cookies</button></li>
                        <li><button onClick={() => handleRedirect('')}>Transparência</button></li>
                    </FooterTermsNavbar>
                    <FooterAddress>
                        KAVAK TECNOLOGIA E COMERCIO DE VEICULOS LTDA., inscrita no CNPJ sob o nº 36.740.390/0001-83, com sede na Estrada dos Alpes, nº 855, Galpão A, Módulo 1, Jardim Belval, Barueri/SP, CEP 06.423-080
                    </FooterAddress>
                </FooterTermsAddressContainer>
            </FooterContent >
        </FooterContainer >
    )
}
