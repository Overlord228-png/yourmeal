import styled from "styled-components";
import { rem } from "polished";
import Container from "./Container";
import Basket from "./Basket";
import Cards from "././card/Cards";
import { useLabel } from "./LabelContext"
import { ICard } from "../types";
import { useState } from "react";
import { data } from "./data";

const Main = () => {
    const { selectedLabel } = useLabel();
    const [basketData, setBasketData] = useState<ICard[]>([]);
    const [addedItems, setAddedItems] = useState<number[]>([]);

    const addToBasket = (card: ICard) => {
        setBasketData((prevBasketData) => [...prevBasketData, card]);
        setAddedItems((prevAddedItems) => [...prevAddedItems, card.id]);
    };

    return (
        <MainContainer>
            <MainInner>
                <Basket cards={basketData} />
                    <Cards
                    cards={data}
                    selectedLabel={selectedLabel}
                    addToBasket={addToBasket}
                    addedItems={addedItems}
                    />
            </MainInner>
        </MainContainer>
    );
};

const MainContainer = styled.main`
    margin-bottom: ${rem(50)};
`;

const MainInner = styled(Container)`
    display: grid;
    align-items: flex-start;
    gap: ${rem(30)};
    grid-template-columns: ${rem(300)} 1fr;
`;

export default Main;
