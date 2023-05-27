import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ROUTES } from "vars/consts/ROUTES";
import { MainLayout } from "components/layouts/MainLayout/MainLayout";
import { MainPage } from "views/Main/MainPage";
import { DetailsPage } from "views/Details/DetailsPage";

export const App = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/*" element={<Navigate to={ROUTES.main.path} replace />} />
      <Route element={<MainLayout />}>
        <Route path={ROUTES.main.path} element={<MainPage />} />
        <Route path={`${ROUTES.details.path}/:id`} element={<DetailsPage />} />
      </Route>
    </Routes>
  );
};
