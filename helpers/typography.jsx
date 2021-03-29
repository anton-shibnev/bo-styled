import styled from 'styled-components';
import { FONT_FAMILY_SECOND } from '../config/theme';
import { font } from '../modal/font';

export const Title = styled.h2`
  ${font({
    'font-size': { mob: '24px', xs: '36px' },
    'line-height': { mob: '31px', xs: '46px' },
    'font-weight': 'bold',
    'font-family': FONT_FAMILY_SECOND,
  })};
`;

export const Desc = styled.p`
  ${font({
    'font-size': '18px',
    'line-height': '32px',
    'font-weight': 'normal',
  })};
`;
