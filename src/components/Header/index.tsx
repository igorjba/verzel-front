
import React, { useState } from 'react';
import { UserCircle, SignOut } from '@phosphor-icons/react';
import { useContextSelector } from 'use-context-selector';
import { ThemeContext } from '../../store/contexts/themeContext';
import { useAuth } from '../../store/contexts/authContext';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    HeaderContainer, HeaderContent, HeaderNavbar, HeaderProfile,
    BuyCarButton, SellCarButton, KavakAppButton, LoginButton, SignUpButton,
    LogoContainer, StyledCaretDown, StyledCaretUp, StyledCollapsibleContent,
    StyledCollapsibleRoot, StyledCollapsibleTrigger, ToggleThemeButton,
    ToggleThemeSwitchRoot, ToggleThemeSwitchThumb, TooltipContainer,
    HeaderAvatarRoot, HeaderAvatarImage, HeaderAvatarFallback, LogoutButton
} from './styles';

export function Header() {
    const [open, setOpen] = useState(false);
    const theme = useContextSelector(ThemeContext, context => context.theme);
    const toggleTheme = useContextSelector(ThemeContext, context => context.toggleTheme);
    const { authData, clearAuthData } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const isDarkMode = theme === 'dark';
    const isLoggedIn = Boolean(authData);

    const userName = authData?.user.name || "";
    const userImage = "";

    const userInitials = (() => {
        if (!userName) {
            return "";
        }
        const names = userName.trim().split(" ");
        if (names.length > 1) {
            return `${names[0][0]}${names[names.length - 1][0]}`;
        }
        return names[0][0];
    })().toUpperCase();

    const handleRedirect = (url: string) => {
        navigate(url);
    };

    const handleLogout = () => {
        clearAuthData();
    };

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
                        {!isLoggedIn && location.pathname !== "/sign-up" && (
                            <SignUpButton onClick={() => handleRedirect('/sign-up')}>
                                Cadastre-se
                            </SignUpButton>
                        )}
                        {!isLoggedIn && location.pathname !== "/login" && (
                            <LoginButton onClick={() => handleRedirect('/login')}>
                                Login
                            </LoginButton>
                        )}
                        {isLoggedIn && (
                            <LogoutButton onClick={handleLogout}>
                                <SignOut size={24} />
                                Sair
                            </LogoutButton>
                        )}
                    </HeaderNavbar>
                </TooltipContainer>
            </HeaderContent >
        </HeaderContainer >
    )
}
