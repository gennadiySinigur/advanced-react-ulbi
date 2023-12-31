import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButtton } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
    };

    return (
        <Button
            className={classNames("", {}, [className])}
            theme={ThemeButtton.CLEAR}
            onClick={toggleLanguage}
        >
            {t("language")}
        </Button>
    );
};

export default LangSwitcher;
