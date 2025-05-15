import { useTranslation } from 'react-i18next';
import Title from '../components/Title';
import '../styles/pages/aboutus.sass';

const AboutUs = () => {
    const { t } = useTranslation();

    return (
        <>
            <Title title={t("AboutUs")} />
            <div className="container">
                <div className="ab-1">
                    <div className="container aboutus">
                        <div className="aboutus-img logo">
                            <img src="/physapp.png" alt="aa" />
                        </div>
                        <p dangerouslySetInnerHTML={{ __html: t('AboutUsA') }} />
                    </div>

                    <div className="container aboutus">
                        <p dangerouslySetInnerHTML={{ __html: t('AboutUsB') }} />
                        <div className="aboutus-img banner">
                            <img src="/banner.png" alt="aa" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
