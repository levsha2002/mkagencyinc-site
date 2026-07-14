# Установка: 4 новые страницы (condo, motorcycle, classic car, homeowners)

Я собрал сайт с этими файлами — сборка чистая, все 4 страницы на 3 языках (EN/ES/RU) прошли проверку (canonical, H1, FAQ-схема, форма заявки).

## Что внутри архива
- `app/[lang]/condo-insurance-florida-city/page.tsx` — новая страница
- `app/[lang]/motorcycle-insurance-florida-city/page.tsx` — новая страница
- `app/[lang]/classic-car-insurance-florida-city/page.tsx` — новая страница
- `app/[lang]/homeowners-insurance-florida-city/page.tsx` — новая страница
- `app/sitemap.ts` — обновлён (добавлены 4 новых адреса, sitemap вырос со 102 URL)

## Шаги (3 минуты)

1. Распакуй `mk-4-geo-landings.zip` в `C:\Users\a0c5016\Desktop\mk-agency-next` (Заменить все / Replace all).
2. В cmd:
```
cd C:\Users\a0c5016\Desktop\mk-agency-next
git add -A
git commit -m "Add geo landing pages: condo, motorcycle, classic car, homeowners insurance"
git push
```
3. Через 2-3 минуты (после деплоя на Vercel) проверь ссылки — они должны открываться на английском, испанском и русском:
   - mkagencyinc.com/en/condo-insurance-florida-city
   - mkagencyinc.com/en/motorcycle-insurance-florida-city
   - mkagencyinc.com/en/classic-car-insurance-florida-city
   - mkagencyinc.com/en/homeowners-insurance-florida-city
   (и /es/…, /ru/… для каждой)

Напиши мне "задеплоено" — я проверю все 12 страниц (4 × 3 языка) со своей стороны.

## Дальше — ускорить индексацию в Google

После деплоя зайди в Google Search Console (search.google.com/search-console):

1. Слева — **Sitemaps**. Sitemap `sitemap.xml` там уже есть и подтягивается автоматически — Google сам подхватит новые страницы при следующем обходе (обычно 1-7 дней).
2. Чтобы не ждать — ускорь вручную: вставь в строку поиска вверху полный адрес одной из новых страниц, например `https://mkagencyinc.com/en/condo-insurance-florida-city`, нажми **Request indexing**. Повтори для каждой из 4 новых страниц (по желанию — и для /es/, /ru/ версий, если хочешь ускорить все 12 сразу).

## Про боковую ветку "boat/jet ski" — не забыл

У тебя уже есть готовые страницы про лодки и гидроциклы (`boat-insurance`, `jet-ski-insurance`) в общем разделе `/insurance/` — просто не в виде отдельного гео-лендинга с формой заявки, как эти четыре. Если результаты по этим 4 страницам пойдут хорошо (через 3-4 недели по данным Search Console), сделаю такую же гео-страницу и под лодки/гидроциклы.
