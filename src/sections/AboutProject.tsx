import { useTranslation, Trans } from 'react-i18next';
import '../styles/pages/aboutproject.sass';
import bannerImg from '../assets/banner.png';

const AboutProject = () => {
    const { t } = useTranslation();    

    return (
        <>
            <div className="container aboutproject">
                <div className="banner container">
                    <img
                    src={bannerImg}
                    alt=""
                    className="banner-img" />

                    <h1 className="banner-text">
                        {t("BannerText")}
                    </h1>
                </div>

                <div className="slogan">
                    <p className="slogan-text">
                        <Trans i18nKey="Slogan" />
                    </p>
                </div>
            </div>
        </>
    );
};

export default AboutProject;