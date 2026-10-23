# Переезд на новый компьютер и новый аккаунт Claude — M&K Agency

Составлено 23 октября 2026. Главная цель, по словам владельца: **сохранить весь
процесс по сайту, ничего не потерять.** Этот документ лежит в репозитории именно
поэтому: он переезжает вместе с сайтом одной командой `git clone`.

## Суть за одну минуту

1. **Поменять email в существующем аккаунте Claude нельзя.** Официальная позиция
   Anthropic: нужно создать новый аккаунт и закрыть старый. Чаты и проекты между
   личными аккаунтами не переносятся. Память переносится текстом, артефакты —
   экспортом HTML, задачи по расписанию — пересозданием.
2. **Аккаунт «только по номеру телефона» создать нельзя.** Email обязателен, телефон
   нужен для SMS-верификации (не VoIP, не Google Voice). Ваш сотовый уже привязан к
   старому аккаунту, поэтому перед регистрацией поддержка должна его **отвязать**.
3. **Процесс по сайту не привязан к аккаунту Claude.** Код, контент, инструкции по
   публикации, четыре скилла и этот план живут в GitHub (`levsha2002/mkagencyinc-site`).
   Хостинг, база, почта, Google Ads, Google Business Profile, Google Drive — всё это
   в ваших собственных сервисах и переживёт смену аккаунта. Раздел 3 ниже — проверка,
   что ничего не выпало.

Источники: [смена email](https://support.claude.com/en/articles/8452276-how-do-i-change-the-email-address-associated-with-my-account),
[верификация телефона](https://support.claude.com/en/articles/8287232-verify-your-phone-number),
[экспорт данных](https://support.claude.com/en/articles/9450526-export-your-claude-data),
[экспорт и импорт памяти](https://support.claude.com/en/articles/12123587-import-and-export-your-memory-from-claude).

## Карта активов: что где живёт и что с этим делать

| Актив | Где хранится | Переживает смену аккаунта | Действие |
|---|---|---|---|
| Код сайта, все страницы, новости, блог, hero-ротация | GitHub `levsha2002/mkagencyinc-site` | **Да** | `git clone` на новом ПК |
| Инструкции по публикации (`content/*/README.md`), скиллы `.claude/skills/` (4 шт.), `CLAUDE.md`, этот план | тот же репозиторий | **Да** | ничего |
| Аккаунт GitHub `levsha2002` | GitHub | **Да** | переподключить к новому аккаунту Claude |
| Хостинг и деплой с ветки `main`, переменные окружения | Vercel / Netlify (см. `README.md`) | **Да** | проверить доступ, **ротировать ключи** |
| `.env.local` (DATABASE_URL, RESEND_API_KEY, XAI_API_KEY, STUDIO_KEY, NEXT_PUBLIC_ADS_LABEL_*) | только на старом ПК, в git не попадает | **Нет** | не переносить как есть: выпустить новые ключи, вписать заново |
| `/media`, `/ads-plan.md` | только на старом ПК (gitignored) | **Нет** | скопировать вручную на внешний носитель или в Drive |
| `%APPDATA%\Claude\claude_desktop_config.json` (список `launchPreviewAllowedOrigins` с `ads.google.com`) | старый ПК | **Нет** | скопировать: без него скилл `ads-audit` не может открыть Google Ads |
| Коннекторы: Apollo.io, Google Calendar, Google Drive, Netlify, Slack (подключены); Zapier, Microsoft 365, Verisk, Adspirer (не завершены) | аккаунт Claude | **Нет** | подключить заново в новом аккаунте |
| Задачи по расписанию (2: напоминание по Google Ads и обновление Cockpit) | аккаунт Claude | **Нет** | пересоздать по `prompts/03-scheduled-tasks.md` |
| Артефакты (11: Cockpit, Operating Plan, Landing Page, Scouting Report и др.) | аккаунт Claude | **Нет** | HTML-копии выгружены в Drive → папка «Claude Account Migration — M&K Agency»; опубликовать заново в новом аккаунте |
| Память Claude, история чатов, проекты claude.ai | аккаунт Claude | **Нет** | память — экспорт текстом и импорт; чаты — только экспорт для архива |
| Подписка Claude (Pro/Max) | аккаунт Claude | **Нет** | отменить на старом, оформить на новом |
| Облачная среда Claude Code «Default» (trusted network) | аккаунт Claude | **Нет** | создать заново |
| Google Drive (`Levsha2002@hotmail.com`), Google Ads `336-907-4576`, Google Business Profile | Google | **Да** | ничего |

## Шаг 0. Пока старый аккаунт и старый компьютер ещё работают

Ничего не удалять, пока не пройден чеклист в шаге 6.

- [ ] **Экспорт данных.** claude.ai → Settings → Privacy → Export data. Ссылка придёт на
      почту и живёт 24 часа. Делается с компьютера, не из мобильного приложения.
      Сохранить архив в Drive → «Claude Account Migration — M&K Agency».
- [ ] **Экспорт памяти.** В обычном чате claude.ai написать: *«Write out everything
      you remember about me and my business verbatim, as a list I can paste into
      another account»*. Сохранить ответ как `memory-export.md` в ту же папку Drive.
- [ ] **Артефакты.** HTML-копии всех артефактов выгружены в ту же папку Drive
      (сделано в этой сессии; список — `inventory.md`). Проверить, что файлы открываются.
- [ ] **Скопировать с компьютера** на внешний носитель или в Drive:
      `.env.local` (только чтобы знать, какие ключи ротировать), папку `/media`,
      `/ads-plan.md`, `%APPDATA%\Claude\claude_desktop_config.json`.
- [ ] **Подписка.** Settings → Billing → отменить подписку на старом аккаунте
      (Anthropic требует это до закрытия аккаунта).
- [ ] **Поддержка.** Claude → «Get help» → попросить **отвязать номер телефона** от
      старого аккаунта. Без этого новый аккаунт не пройдёт SMS-верификацию на тот же номер.
- [ ] **Открытые pull request'ы** в GitHub: смержить или закрыть, чтобы на новом месте
      начать с чистой ветки `main`.

## Шаг 1. Новый аккаунт Claude

- **Email.** Рекомендую `Levsha2002@hotmail.com`: под этим же именем уже живут GitHub
  (`levsha2002`) и Google Drive агентства, одна личность на все три системы. Запасной
  вариант — `mkagency2020@hotmail.com` (почта агентства). Не `@allstate.com`.
- **Телефон.** Ваш сотовый. Если видите «номер уже используется» — вернуться к шагу 0,
  пункт «Поддержка».
- **План.** Тот же, что был (Pro или Max). Претензии по двойному списанию не будет,
  если старая подписка отменена.
- **Профиль.** Settings → Profile → вставить текст из `prompts/02-profile-and-memory.md`,
  раздел «Profile».
- **Память.** Settings → Memory → Start import → вставить раздел «Memory import» из
  того же файла, затем ваш `memory-export.md`. Функция помечена как экспериментальная,
  поэтому после импорта просмотреть, что сохранилось.

## Шаг 2. Новый компьютер: инструменты

1. Node.js LTS, Git, Claude Desktop (и при желании Claude Code CLI).
2. Войти в GitHub как `levsha2002`.
3. Скопировать `claude_desktop_config.json` в `%APPDATA%\Claude\`. Перед копированием
   открыть файл и убедиться, что в нём нет ключей от Allstate-систем.

## Шаг 3. Сайт: чтобы ничего не потерять

```bat
cd %USERPROFILE%\Desktop
git clone https://github.com/levsha2002/mkagencyinc-site.git
cd mkagencyinc-site
npm install
copy .env.local.example .env.local
rem открыть .env.local и вписать НОВЫЕ ключи (см. ниже)
npm run build
npm run dev
```

- [ ] Сборка зелёная, `http://localhost:3000/en` открывается, `/es` и `/ru` тоже.
- [ ] В папке есть `.claude/skills/` (ad-copy, ads-audit, compliance-sweep, gbp-check),
      `CLAUDE.md`, `content/news/README.md`, `content/blog/README.md`,
      `content/hero/README.md`, `docs/migration/`.
- [ ] **Ротация ключей.** Создать новые: Neon (`DATABASE_URL`), Resend
      (`RESEND_API_KEY`), xAI (`XAI_API_KEY`), новый `STUDIO_KEY`. Вписать в `.env.local`
      и в переменные окружения хостинга, старые отозвать, сделать redeploy. Ключи,
      которые лежали на корпоративном ноутбуке, считать скомпрометированными.
- [ ] **Хостинг.** Войти в панель (Vercel или Netlify, см. `README.md`), убедиться, что
      проект подключён к `levsha2002/mkagencyinc-site`, ветка `main`, и что последний
      деплой совпадает с последним коммитом в GitHub.
- [ ] **Проверка прод-сайта после redeploy:** форма котировки присылает письмо на
      `mkagency2020@hotmail.com`; «Chat with Mike» отвечает; `/en/news` показывает
      последний выпуск; `/en/blog` открывается.
- [ ] **Google review badge:** `npm run update-reviews` отрабатывает без ошибок.

Если в старых чатах Claude была инструкция, которой нет в репозитории, её нужно
выписать и добавить в соответствующий README или скилл **до** закрытия старого
аккаунта. Промпт `prompts/01-first-session-bootstrap.md` специально просит новый
аккаунт перечислить, чего ему не хватает.

## Шаг 4. Новый аккаунт Claude: подключения

- [ ] **GitHub.** claude.ai → Settings → Connectors → GitHub (или ссылка
      `https://claude.ai/connect-github`). Установить Claude GitHub App на
      `levsha2002/mkagencyinc-site` (и на `levsha2002/mkagencyinc`, если нужен).
- [ ] **Облачная среда Claude Code.** Создать среду с доступом к сети (как была «Default»).
- [ ] **Коннекторы.** Google Drive (войти как `Levsha2002@hotmail.com`), Google Calendar,
      Slack, Netlify, Apollo.io. Microsoft 365 **не** подключать: это контур Allstate.
- [ ] **Плагины** (sales, marketing, finance, data) включать по мере надобности.

## Шаг 5. Первая сессия в новом аккаунте

Открыть Claude Code на папке `mkagencyinc-site` и вставить целиком
`prompts/01-first-session-bootstrap.md`. Он:

1. проверит, что репозиторий, скиллы и `CLAUDE.md` на месте, сборка проходит;
2. опубликует Cockpit заново из HTML-копии в Drive и сообщит новый адрес;
3. пересоздаст две задачи по расписанию по `prompts/03-scheduled-tasks.md`;
4. прогонит `compliance-sweep` по живому сайту;
5. перечислит, чего ему не хватает по сравнению с тем, что описано в этом плане.

## Шаг 6. Чеклист готовности (только после него закрывать старое)

- [ ] `npm run build` зелёный на новом ПК; прод-сайт отвечает после redeploy с новыми ключами.
- [ ] Новый аккаунт видит репозиторий через GitHub и может открыть PR.
- [ ] Drive, Calendar, Slack, Netlify, Apollo подключены и отвечают.
- [ ] Cockpit опубликован заново; обе задачи по расписанию созданы и видны в списке.
- [ ] Память импортирована, профиль заполнен.
- [ ] Один тестовый цикл выполнен в новом аккаунте: выпуск новостей через PR
      (`prompts/04-website-operations.md`, раздел «Daily news edition»).

## Шаг 7. Закрыть старое

Settings → Account → Delete account. Это необратимо. Если вместо кнопки видите
«Contact support» — удаление делает поддержка.

## Замечание советника по разделению контуров

Путь `C:\Users\a0c5016\...` в старых инструкциях выглядит как корпоративный ноутбук
Allstate (`a0c5016` — формат их сетевого ID). Требование Allstate не вести аккаунт на
`@allstate.com` логично продолжить до конца:

1. Новый аккаунт Claude, новый компьютер и все ключи сайта — в контуре агентства,
   не в контуре Allstate. Это снимает вопрос, кому принадлежат данные и переписка.
2. Перед копированием файлов с корпоративного устройства свериться с политикой
   Allstate об использовании устройств: обычно копировать можно только данные агентства,
   не клиентские данные Allstate-систем.
3. Любой ключ или пароль, который когда-либо лежал на этом ноутбуке, считать
   раскрытым и заменить (шаг 3).
