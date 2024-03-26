interface ITelegramUser {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  language_code: string;
}

interface ITelegramButtonParams {
  text: string,
  color?: string,
  text_color?: string,
  is_active?: boolean,
  is_visible?: boolean
}

interface IWebApp {
  initData: string;
  initDataUnsafe: {
    query_id: string;
    user: ITelegramUser;
    auth_date: string;
    hash: string;
  };
  version: string;
  platform: string;
  colorScheme: string;
  themeParams: {
    link_color: string;
    button_color: string;
    button_text_color: string;
    secondary_bg_color: string;
    hint_color: string;
    bg_color: string;
    text_color: string;
  };
  isExpanded: boolean;
  viewportHeight: number;
  viewportStableHeight: number;
  isClosingConfirmationEnabled: boolean;
  headerColor: string;
  backgroundColor: string;
  BackButton: {
    isVisible: boolean;
    hide: () => void;
    show: () => void;
  };
  MainButton: {
    text: string;
    color: string;
    textColor: string;
    isVisible: boolean;
    isProgressVisible: boolean;
    isActive: boolean;
    showProgress: (leaveActive?: boolean) => void;
    hideProgress: () => void;
    hide: () => boolean;
    show: () => boolean;
    setParams: (params: ITelegramButtonParams) => void;
  };
  HapticFeedback: unknown;
  enableClosingConfirmation: () => void;
  requestContact: (callbackFn?: unknown) => void;
  showAlert: (message: string, callbackFn?: unknown) => void;
  showConfirm: (message: string, callbackFn?: unknown) => void;
  close: () => boolean; 
  onEvent: (eventType: string, eventHandler: unknown) => void;
  offEvent: (eventType: string, eventHandler: unknown) => void;
  expand: () => void;
}

type TUser = {
  name: string;
}