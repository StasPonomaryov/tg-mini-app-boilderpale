import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const tg = (window as any).Telegram?.WebApp as IWebApp;

const useTelegram = () => {
  const navigate = useNavigate();

  const onClose = () => {
    tg.close();
  };

  const onClickBackButton = () => {
    navigate(-1);
  };

  const onWarning = (message: string) => {
    tg.showAlert(message);
  };

  const onConfirm = (message: string, callback?: unknown) => {
    tg.showConfirm(message, callback);
  }

  return {
    onClose,
    onClickBackButton,
    onWarning,
    onConfirm,
    tg,
    user: tg.initDataUnsafe?.user,
    queryId: tg.initDataUnsafe?.query_id,
  };
};

export default useTelegram;
