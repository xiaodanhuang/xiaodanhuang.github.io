const change_language = 'change_language';
export function changeLanguage(text) {
   return {
        type: change_language,
        text:text
    }
}