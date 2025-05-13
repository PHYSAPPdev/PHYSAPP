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
                        <p className="aboutus-text a">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum corporis aliquam cupiditate explicabo quisquam expedita enim dolor quibusdam, vero excepturi soluta quod aut dolorem aperiam quo error accusamus at! In?</p>
                    </div>

                    <div className="container aboutus">
                        <p className="aboutus-text b">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum corporis aliquam cupiditate explicabo quisquam expedita enim dolor quibusdam, vero excepturi soluta quod aut dolorem aperiam quo error accusamus at! In?</p>
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
