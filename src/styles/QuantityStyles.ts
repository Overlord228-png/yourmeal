import styled from "styled-components";
import { rem } from "polished";
import { colors } from "../styles/theme";

export const QuantityContainer = styled.div`
  display: inline-flex;
  align-items: center;
  align-self: center;
  gap: ${rem(8)};
  background: ${colors.gray};
  border-radius: ${rem(12)};
`;

export const QuantityButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${rem(40)};
  height: ${rem(40)};
  font-size: ${rem(16)};
  border-radius: ${rem(12)};
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${colors.lightOrange};
    color: ${colors.white};
    transition: all 0.3s ease-in-out;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.2;
  }
`;

export const QuantityValue = styled.output`
  font-size: ${rem(16)};
`;
