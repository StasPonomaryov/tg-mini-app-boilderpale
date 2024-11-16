/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { log } from '../lib/logger';

const tg = (window as any).Telegram?.WebApp as IWebApp;

const useTelegram = () => {
  const navigate = useNavigate();
  const [isTelegram, setIsTelegram] = useState(false);
  const onClickBackButton = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  useEffect(() => {
    const checkTelegramApp = () => {
      if ((window as any).Telegram !== 'undefined' && (window as any).Telegram?.WebApp !== 'undefined') {
        log({ message: '>>>TELEGRAM WEBAPP DETECTED', data: (window as any).Telegram });
        log({ message: '>>>IS TELEGRAM (@HOOK)', data: (window as any).Telegram.WebApp.platform });
        if ((window as any).Telegram.WebApp.platform !== 'unknown') {
          setIsTelegram(true);
        }
      }
    };

    checkTelegramApp();
  }, []);

  useEffect(() => {
    tg.onEvent('backButtonClicked', onClickBackButton);
    return () => {
      tg.offEvent('backButtonClicked', onClickBackButton);
    };
  }, [onClickBackButton]);

  function onClose() {
    tg.close();
  }
 

  function onWarning(message: string) {
    tg.showAlert(message);
  }

  function onConfirm(message: string, callback?: unknown) {
    tg.showConfirm(message, callback);
  }  

  return {
    onClose,
    onWarning,
    onConfirm,
    tg,
    isTelegram,
    user: tg.initDataUnsafe?.user,
    queryId: tg.initDataUnsafe?.query_id,
  };
};

export default useTelegram;
