echo "\033[0;32mУстановка зависимостей..." &&
echo '' &&
npm ci &&
echo '' &&
echo '\033[0;32mСборка...\033[0m' &&
echo '' &&
npm run build &&
echo '' &&
echo '\033[0;32mГотово! Изменения опубликованы'
