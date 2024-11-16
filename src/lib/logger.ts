import { API } from '../utilities';

type TLog = {
  data: unknown;
  message: string;
  severity?: 'info' | 'error' | 'warn';
}

const sendLogsToServer = (logData: TLog) => {
  API.post('/webAppLogger', {
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    data: logData
  })
    .then((response) => {
      if (!response) {
        throw new Error('Failed to send logs to the server');
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

export const log = (logData: TLog) => {
  if (import.meta.env.MODE === 'staging'
    || import.meta.env.MODE === 'development') {
    if (logData.severity) {
      let style;
      switch (logData.severity) {
        case 'info': style = 'background: #00c; color: #fff'; break;
        case 'warn': style = 'background: #ffa500; color: #000'; break;
        case 'error': style = 'background: #c00; color: #fff'; break;
      }
      console.log(`%c ${logData.message}`, style);

      return console.log(logData.data);
    }

    return console.log(logData);
  }

  return sendLogsToServer(logData);
};