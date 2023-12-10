import React, { useCallback, useRef } from 'react';
import { useVehiclesList } from '../../../../store/hooks/useVehicleList';
import { SearchBarContainer, StyledSearchContainer, StyledSearchIcon } from './styles';

export function SearchBar() {
    const { search, setSearch } = useVehiclesList();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }, [setSearch]);

    const focusInput = useCallback(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <SearchBarContainer>
            <StyledSearchContainer>
                <input
                    ref={inputRef}
                    type="text"
                    value={search}
                    onChange={handleSearchChange}
                    placeholder="Buscar veículo..."
                />
                <StyledSearchIcon size={34} onClick={focusInput} />
            </StyledSearchContainer>
        </SearchBarContainer>
    );
}
