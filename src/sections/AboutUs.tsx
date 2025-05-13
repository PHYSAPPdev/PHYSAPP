import { useTranslation } from 'react-i18next';
import Title from '../components/Title';

const AboutUs = () => {
    const { t } = useTranslation();    

    return (
        <>
            <Title title={t("AboutUs")} />
        </>
    );
};

export default AboutUs;