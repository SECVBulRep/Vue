export const SUCCESS = '0';
export const ERROR_SERVER = '500';
export const ERROR_AUTH_INCORRECT_LOGIN_PASSWORD = '400';


export function handleError(code) {

    switch (code) {
        case ERROR_AUTH_INCORRECT_LOGIN_PASSWORD:
            return 'Не корректный логин/пароль';
        default:
            return 'Неизвестная ошибка';
    }
}