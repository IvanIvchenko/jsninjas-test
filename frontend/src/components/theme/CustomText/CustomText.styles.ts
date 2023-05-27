import styled from 'styled-components/macro';
import { getProp, ifProp } from 'utils/helpers/styleHelpers';
import {
  ICustomTextText,
  ISCustomTextContainerProps,
  TTextSizeProp,
  TTextWeightProp,
} from './CustomText.types';

const TEXT_SIZE: Record<TTextSizeProp, string | number> = {
  smaller: '10px',
  small: '12px',
  normal: '14px',
  big: '16px',
  bigger: '20px',
  xl: '24px',
  xxl: '28px',
  biggest: '31px',
};

const TEXT_WEIGHT: Record<TTextWeightProp, string> = {
  normal: '400',
  strong: '500',
  stronger: '600',
  strongest: '700',
};

export const SCustomTextContainer = styled.div<ISCustomTextContainerProps>`
  display: ${getProp('display', 'flex')};
  flex-direction: row;
  align-items: center;

  .svg-icon {
    position: relative;
    margin-right: 12px;
  }
`;
export const SCustomText = styled.div<ICustomTextText>`
  font-style: normal;
  font-family: ${getProp('font')};
  font-size: ${({ size }) => TEXT_SIZE[size]};
  font-weight: ${({ fontWeight }) => TEXT_WEIGHT[fontWeight]};
  color: ${({ color, theme }) => theme[color]};
  margin-right: ${getProp('marginRight')}px;
  margin-top: ${getProp('marginTop')}px;
  margin-bottom: ${getProp('marginBottom')}px;
  margin-left: ${getProp('marginLeft')}px;
  text-align: ${getProp('textAlign')};
  display: ${getProp('display', 'block')};
  line-height: ${getProp('lineHeight', 1.2)};
  cursor: ${ifProp('cursorPointer', 'pointer', 'default')};
`;
