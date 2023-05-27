import React from "react";
import { Outlet } from "react-router-dom";
import {
  SLayout,
  SLayoutInner,
  SLayoutContent,
  SMainLayoutHeaderWrapper,
} from "./MainLayout.styles";
import { MainLayoutHeader } from "./Header/Header";

export const MainLayout: React.FC = () => (
  <SLayout>
    <SMainLayoutHeaderWrapper>
      <MainLayoutHeader />
    </SMainLayoutHeaderWrapper>

    <SLayoutInner>
      <SLayoutContent>
        <Outlet />
      </SLayoutContent>
    </SLayoutInner>
  </SLayout>
);
