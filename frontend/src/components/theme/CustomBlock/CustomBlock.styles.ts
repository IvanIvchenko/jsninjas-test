import styled from 'styled-components';
import { getColor, getProp, ifProp } from 'utils/helpers/styleHelpers';
import { ICustomBlockInputProps } from './CustomBlock.types';

export const SCustomBlock = styled.div<ICustomBlockInputProps>`
  position: relative;
  display: flex;
  width: ${getProp('width')};
  align-items: flex-start;
  margin-bottom: ${getProp('marginBottom')}px;
  margin-top: ${getProp('marginTop')}px;
  margin-left: ${getProp('marginLeft')}px;
  margin-right: ${getProp('marginRight')}px;
  padding-bottom: ${getProp('paddingBottom')}px;
  padding-top: ${getProp('paddingTop')}px;
  padding-left: ${getProp('paddingLeft')}px;
  padding-right: ${getProp('paddingRight')}px;
  cursor: ${ifProp('cursorPointer', 'pointer', 'default')};
  min-height: ${getProp('minHeight')};
  background: ${getColor('white')};
  border: 1px solid ${getColor('grey300')};
  border-radius: 6px;
`