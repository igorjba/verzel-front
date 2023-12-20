
import { UserCircle } from '@phosphor-icons/react';
import { useState } from 'react';
import { useContextSelector } from 'use-context-selector';
import { ThemeContext } from '../../store/contexts/themeContext';
import { useLocation } from 'react-router-dom';
import { BuyCarButton, HeaderAvatarFallback, HeaderAvatarImage, HeaderAvatarRoot, HeaderContainer, HeaderContent, HeaderNavbar, HeaderProfile, KavakAppButton, LoginButton, LogoContainer, SellCarButton, SignUpButton, StyledCaretDown, StyledCaretUp, StyledCollapsibleContent, StyledCollapsibleRoot, StyledCollapsibleTrigger, ToggleThemeButton, ToggleThemeSwitchRoot, ToggleThemeSwitchThumb, TooltipContainer } from './styles';

export function Header() {
    const [open, setOpen] = useState(false);
    const theme = useContextSelector(ThemeContext, context => context.theme);
    const toggleTheme = useContextSelector(ThemeContext, context => context.toggleTheme);

    const location = useLocation();

    const isDarkMode = theme === 'dark';

    const userName = "";
    const userImage = "";
    const userInitials = userName.split(" ").map((n) => n[0]).join("").toUpperCase();

    const handleRedirect = (url: string) => {
        window.location.href = url;
    };

    const showSignUpButton = location.pathname !== "/sign-up";
    const showLoginButton = location.pathname !== "/login";

    return (
        <HeaderContainer>
            <HeaderContent>
                <LogoContainer theme={theme} />
                <TooltipContainer>
                    <HeaderNavbar>
                        <BuyCarButton onClick={() => handleRedirect('')}> Comprar carro</BuyCarButton>
                        <SellCarButton onClick={() => handleRedirect('')}>Vender carro</SellCarButton>
                        <KavakAppButton onClick={() => handleRedirect('')}>App Kavak</KavakAppButton>
                        <StyledCollapsibleRoot open={open} onOpenChange={setOpen}>
                            <StyledCollapsibleTrigger asChild className={open ? 'open' : ''}>
                                <button>
                                    Sobre nós
                                    {open ? <StyledCaretUp weight='bold' size={16} /> : <StyledCaretDown weight='bold' size={16} />}
                                </button>
                            </StyledCollapsibleTrigger>

                            <StyledCollapsibleContent>
                                <div className="Repository">
                                    <a href="">Onde estamos</a>
                                </div>
                                <div className="Repository">
                                    <a href="">Guia de preço</a>
                                </div>
                                <div className="Repository">
                                    <a href="">Blog</a>
                                </div>

                            </StyledCollapsibleContent>
                        </StyledCollapsibleRoot>
                    </HeaderNavbar>
                    <ToggleThemeButton onClick={toggleTheme}>
                        <ToggleThemeSwitchRoot className="SwitchRoot" id="theme-mode-switch" checked={isDarkMode}>
                            <ToggleThemeSwitchThumb className={`SwitchThumb ${isDarkMode ? 'dark' : 'light'}`} />
                        </ToggleThemeSwitchRoot>
                    </ToggleThemeButton>

                    <HeaderProfile>
                        <HeaderAvatarRoot className="AvatarRoot">
                            <HeaderAvatarImage
                                className="AvatarImage"
                                src={userImage}
                                alt="Imagem do Perfil"
                            />
                            <HeaderAvatarFallback className="AvatarFallback" delayMs={600}>
                                {userInitials || <UserCircle size={24} />}
                            </HeaderAvatarFallback>
                        </HeaderAvatarRoot>
                    </HeaderProfile>
                    <HeaderNavbar>
                        {showSignUpButton && (
                            <SignUpButton onClick={() => handleRedirect('')}>
                                Cadastre-se
                            </SignUpButton>
                        )}
                        {showLoginButton && (
                            <LoginButton onClick={() => handleRedirect('')}>
                                Login
                            </LoginButton>
                        )}
                    </HeaderNavbar>
                </TooltipContainer>
            </HeaderContent >
        </HeaderContainer >
    )
}
