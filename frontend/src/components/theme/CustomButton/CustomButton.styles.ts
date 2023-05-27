import styled, { css } from 'styled-components/macro';
import { Button } from 'antd';
import { getColor, getProp, ifProp, getColorByProp } from 'utils/helpers/styleHelpers';
import { Link } from 'react-router-dom';
import { ICustomButtonProps, ILinkWrapperProps } from './CustomButton.types';

export const SCustomButton = styled(Button)<ICustomButtonProps>`
  margin-bottom: ${getProp('marginBottom')}px;
  margin-top: ${getProp('marginTop')}px;
  margin-left: ${getProp('marginLeft')}px;
  margin-right: ${getProp('marginRight')}px;
  cursor: ${ifProp('cursorPointer', 'pointer', 'default')};
  
  &.ant-btn-primary {
    box-shadow: none;
    text-shadow: none;
  }

  &.ant-btn-primary,
  &.ant-btn-default,
  &.ant-btn-dashed,
  &.ant-btn-link,
  &.ant-btn-text {
    border-color: transparent;
    &:hover,
    &:not([disabled]):hover {
      border-color: transparent;
      background: ${getColorByProp('bgColor')};
    }
  }

  ${({ uppercase }) =>
    uppercase === true &&
    css`
      text-transform: ${ifProp('uppercase', 'uppercase', 'none')};
    `}

  ${({ capitalize }) =>
    capitalize === true &&
    css`
      text-transform: ${ifProp('capitalize', 'capitalize', 'none')};
    `}

  ${({ type }) =>
    type === 'primary' &&
    css`
      color: ${getColorByProp('textColor')};
      background: ${getColorByProp('bgColor')};
      width: ${ifProp('fluid', '100%', 'auto')};
      border-color: ${getColorByProp('borderColor')} !important;

      &:not([disabled]):hover {
        color: ${getColorByProp('textColor')};
        background: ${getColorByProp('bgColor')};
      }

      &[disabled],
      &[disabled]:hover {
        color: ${getColorByProp('disabledTextColor', 'cream')};
        background: ${getColorByProp('disabledBgColor', 'charcoal60')} !important;
        border-color: ${getColorByProp('disabledBorderColor', 'charcoal60')} !important;
      }
    `}

  ${({ type }) =>
    type === 'text' &&
    css`
      background: none;
      width: auto;
      height: auto;
    `}

  ${({ type }) =>
    type === 'default' &&
    css`
      background: transparent;
      border: 1px solid ${getColorByProp('borderColor')} !important;

      span {
        color: ${getColorByProp('textColor')} !important;
      }

      &:hover {
        background: transparent !important;
      }
    `}

    ${({ page }) =>
    page === 'welcome' &&
    css`
      color: ${getColor('blue')};
      background-color: ${getColor('grey300')};
    `}
  
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
  white-space: unset;

  ${({ buttonSize }) =>
    buttonSize === 'large' &&
    css`
      height: 42px;
      padding: 6px;
      width: 100%;
    `}
  ${({ buttonSize }) =>
    buttonSize === 'middle' &&
    css`
      height: 40px;
      padding: 3px;
      width: 193px;
    `}
  ${({ buttonSize }) =>
    buttonSize === 'small' &&
    css`
      height: 40px;
      padding: 3px;
      width: 76px;
    `}
  ${({ buttonSize }) =>
    buttonSize === 'average' &&
    css`
      height: 36px;
      width: 244px;
    `}

  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    ${({ size }) =>
      size === 'large' &&
      css`
        font-size: 18px;
      `}
    ${({ size }) =>
      size === 'middle' &&
      css`
        font-size: 16px;
      `}
    ${({ size }) =>
      size === 'small' &&
      css`
        font-size: 14px;
      `}

    letter-spacing: 0.05rem;

    ${({ type }) =>
      type === 'default' &&
      css`
        color: ${getColor('blue')};
      `}
  }
`;

export const BtnLinkWrapper = styled(Link)<ILinkWrapperProps>`
  margin-bottom: ${getProp('marginBottom')}px;
  margin-top: ${getProp('marginTop')}px;
  width: ${ifProp('fluid', '100%', 'auto')};
`;
