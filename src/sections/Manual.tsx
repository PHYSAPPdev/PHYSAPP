import { useTranslation } from 'react-i18next';
import Title from '../components/Title';

const Manual = () => {
    const { t } = useTranslation();    

    return (
        <>
            <Title title={t("Manual")}/>
        </>
    );
};

export default Manual;