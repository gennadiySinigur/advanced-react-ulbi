import React from "react";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;

}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={classNames(cls.links)}>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/">
                Main page
            </AppLink>

            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                About page
            </AppLink>
        </div>
    </div>
);
