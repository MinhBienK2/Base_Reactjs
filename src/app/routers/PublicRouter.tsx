import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function PublicRouter() {
  return <Outlet />;
}
export default PublicRouter;
