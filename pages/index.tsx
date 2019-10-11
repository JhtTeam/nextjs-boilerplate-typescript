import { useTranslation } from "react-i18next";

const IndexPage = () => {
  const { t } = useTranslation();
  return <h1>{t('wellcome')}</h1>;
};

export default IndexPage;
