import styled from 'styled-components/macro';
import { Layout } from 'antd';
import { getColor } from 'utils/helpers/styleHelpers';

const { Header } = Layout;

export const SMainLayoutHeader = styled(Header)`
  position: relative;
  height: 86px;
  display: flex;
  flex-direction: row;
  aling-items: center;
  padding: 0 130px;
  background: ${getColor('white')};
  margin-bottom: 20px;
`;