import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ABOUT_ROUTE, BLOG_ROUTE, CONTACT_ROUTE, GALLERY_ROUTE, HOME_ROUTE } from "../constants/routesPathnames";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import PageLoader from "./PageLoader";

const About = lazy(() => import(/*webpackChunkName: "About"*/ "../pages/AboutPage"));
const Blog = lazy(() => import(/*webpackChunkName: "Blog"*/ "../pages/BlogPage"));
const Gallery = lazy(() => import(/*webpackChunkName: "Gallery"*/ "../pages/GalleryPage"));
const Contact = lazy(() => import(/*webpackChunkName: "Contact"*/ "../pages/ContactPage"));

const Router: React.FC = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route path={HOME_ROUTE} element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path={ABOUT_ROUTE} element={<About />} />
                    <Route path={GALLERY_ROUTE} element={<Gallery />} />
                    <Route path={CONTACT_ROUTE} element={<Contact />} />
                    <Route path={BLOG_ROUTE} element={<Blog />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default Router;
