import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const {
        className,
    } = props;

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button type="button" onClick={onToggle}>Toggle</button>

            <div className={classNames(cls.switchers)}>
                <ThemeSwitcher />
                <LangSwitcher className={cls["lang-switcher"]} />
            </div>
        </div>
    );
};
