import { useTranslation } from 'react-i18next';
import Title from '../components/Title';
import '../styles/pages/download.sass';

const Download = () => {
    const { t } = useTranslation();    

    return (
        <>
            <Title title={t("Download")}/>
            <div className="buttons-container">
                <a href="">
                    <button className="download-button">
                        <img src="" alt="" />
                        Github
                    </button>
                </a>
                <a href="">
                    <button className="download-button">
                        <img src="" alt="" />
                        F-Droid
                    </button>
                </a>
            </div>
        </>
    );
};

export default Download;