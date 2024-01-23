import { SubmitKey } from "../store/config";
import type { PartialLocaleType } from "./index";

const ru: PartialLocaleType = {
  WIP: "Скоро...",
  Error: {
    Unauthorized:
      "Несанкционированный доступ. Пожалуйста, введите код доступа на [странице](/#/auth) настроек.",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} сообщений`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} сообщений`,
    EditMessage: {
      Title: "Редактирование сообщений",
      Topic: {
        Title: "Тема разговора",
        SubTitle: "Измените текущую тему разговора",
      },
    },
    Actions: {
      ChatList: "Перейти к списку чатов",
      CompressedHistory: "Промпт сжатой истории чата",
      Export: "Экспортировать все сообщения в формате Markdown",
      Copy: "Копировать",
      Stop: "Остановить",
      Retry: "Повторить",
      Pin: "Закрепить",
      PinToastContent: "Закреплено 1 сообщение как контекстный промпт",
      PinToastAction: "Посмотреть",
      Delete: "Удалить",
      Edit: "Редактировать",
    },
    Commands: {
      new: "Начать новый чат",
      newm: "Начать новый чат с маской",
      next: "Следующий чат",
      prev: "Предыдущий чат",
      clear: "Очистить контекст",
      del: "Удалить чат",
    },
    InputActions: {
      Stop: "Остановить",
      ToBottom: "К последнему",
      Theme: {
        auto: "Автоматически",
        light: "Светлая тема",
        dark: "Тёмная тема",
      },
      Prompt: "Промпты",
      Masks: "Маски",
      Clear: "Очистить контекст",
      Settings: "Настройки",
      EnablePlugins: "Включить плагины",
      DisablePlugins: "Выключить плагины",
      SelectImage: "Выбрать изображение",
    },
    Rename: "Переименовать чат",
    Typing: "Печатает…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} для отправки сообщения`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter для переноса строки";
      }
      return inputHints + ", / для поиска подсказок";
    },
    Send: "Отправить",
    Config: {
      Reset: "Сбросить настройки",
      SaveAs: "Сохранить как маску",
    },
  },
  Export: {
    Title: "Экспорт сообщений",
    Copy: "Копировать все",
    Download: "Скачать",
    MessageFromYou: "Сообщение от вас",
    MessageFromChatGPT: "Сообщение от ChatGPT",
    Share: "Поделиться в ShareGPT",
    Format: {
      Title: "Формат экспорта",
      SubTitle: "Markdown или PNG",
    },
    IncludeContext: {
      Title: "Включаемый контент",
      SubTitle: "Экспортировать контекстные подсказки в маске или нет",
    },
    Steps: {
      Select: "Подобрать",
      Preview: "Просмотр",
    },
    Image: {
      Toast: "Создание изображения...",
      Modal: "Long press or right click to save image",
    },
  },
  Select: {
    Search: "Поиск",
    All: "Выбрать все",
    Latest: "Выбрать последние",
    Clear: "Снять выделение",
  },
  Memory: {
    Title: "Память",
    EmptyContent: "Пусто.",
    Send: "Отправить память",
    Copy: "Копировать память",
    Reset: "Сбросить сессию",
    ResetConfirm:
      "При сбросе текущая история переписки и историческая память будут удалены. Вы уверены, что хотите сбросить?",
  },
  Home: {
    NewChat: "Новый чат",
    DeleteChat: "Вы действительно хотите удалить выбранный разговор?",
    DeleteToast: "Чат удален",
    Revert: "Отмена",
  },
  Settings: {
    Title: "Настройки",
    SubTitle: "Все настройки",
    Danger: {
      Reset: {
        Title: "Сбросить все настройки",
        SubTitle: "Сброс к настройкам по умолчанию",
        Action: "Сбросить",
        Confirm: "Подтверждаете сброс всех настроек до значений по умолчанию?",
      },
      Clear: {
        Title: "Удалить все данные",
        SubTitle: "Удалить все сообщения и настройки",
        Action: "Удалить",
        Confirm: "Подтверждаете удаление всех сообщений и настроек?",
      },
    },
    Lang: {
      Name: "Language", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Все языки",
    },
    Avatar: "Аватар",
    FontSize: {
      Title: "Размер шрифта",
      SubTitle: "Настроить размер шрифта контента чата",
    },
    InjectSystemPrompts: {
      Title: "Вставить системные подсказки",
      SubTitle:
        "Принудительно добавить симулированную системную подсказку ChatGPT в начало списка сообщений для каждого запроса",
    },
    Update: {
      Version: (x: string) => `Версия: ${x}`,
      IsLatest: "Последняя версия",
      CheckUpdate: "Проверить обновление",
      IsChecking: "Проверка обновления...",
      FoundUpdate: (x: string) => `Найдена новая версия: ${x}`,
      GoToUpdate: "Обновить",
    },
    SendKey: "Клавиша отправки",
    Theme: "Тема",
    TightBorder: "Узкая граница",
    SendPreviewBubble: {
      Title: "Предпросмотр сообщений",
      SubTitle: "Предварительный просмотр набираемых сообщений с Markdown",
    },
    AutoGenerateTitle: {
      Title: "Автоматическое создание заголовка",
      SubTitle: "Создавать подходящий заголовок на основе содержания разговора",
    },
    Mask: {
      Splash: {
        Title: "Экран заставки маски",
        SubTitle: "Показывать экран заставки маски перед началом нового чата",
      },
      Builtin: {
        Title: "Скрыть встроенные маски",
        SubTitle: "Скрыть встроенные маски в списке масок",
      },
    },
    Prompt: {
      Disable: {
        Title: "Отключить автозаполнение",
        SubTitle: "Ввод / для запуска автозаполнения",
      },
      List: "Список подсказок",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} встроенных, ${custom} пользовательских`,
      Edit: "Редактировать",
      Modal: {
        Title: "Список подсказок",
        Add: "Добавить",
        Search: "Поиск подсказок",
      },
      EditModal: {
        Title: "Редактировать подсказку",
      },
    },
    HistoryCount: {
      Title: "Количество прикрепляемых сообщений",
      SubTitle:
        "Количество отправляемых сообщений, прикрепляемых к каждому запросу",
    },
    CompressThreshold: {
      Title: "Порог сжатия истории",
      SubTitle:
        "Будет сжимать, если длина несжатых сообщений превышает указанное значение",
    },

    Usage: {
      Title: "Баланс аккаунта",
      SubTitle(used: any, total: any) {
        return `Текущий баланс $${total}`;
      },
      IsChecking: "Проверка...",
      Check: "Проверить",
      NoAccess: "Введите API ключ, чтобы проверить баланс",
    },
    Access: {
      AccessCode: {
        Title: "Код доступа",
        SubTitle: "Контроль доступа включен",
        Placeholder: "Введите код",
      },
      CustomEndpoint: {
        Title: "Custom Endpoint",
        SubTitle: "Use custom Azure or OpenAI service",
      },
      Provider: {
        Title: "Model Provider",
        SubTitle: "Select Azure or OpenAI",
      },
      OpenAI: {
        ApiKey: {
          Title: "OpenAI API Key",
          SubTitle: "User custom OpenAI Api Key",
          Placeholder: "sk-xxx",
        },

        Endpoint: {
          Title: "OpenAI Endpoint",
          SubTitle: "Must starts with http(s):// or use /api/openai as default",
        },
      },
      Azure: {
        ApiKey: {
          Title: "Azure Api Key",
          SubTitle: "Check your api key from Azure console",
          Placeholder: "Azure Api Key",
        },

        Endpoint: {
          Title: "Azure Endpoint",
          SubTitle: "Example: ",
        },

        ApiVerion: {
          Title: "Azure Api Version",
          SubTitle: "Check your api version from azure console",
        },
      },
      CustomModel: {
        Title: "Пользовательские модели",
        SubTitle: "Пользовательские модели, разделенные запятой.",
      },
      Google: {
        ApiKey: {
          Title: "API Key",
          SubTitle:
            "Bypass password access restrictions using a custom Google AI Studio API Key",
          Placeholder: "Google AI Studio API Key",
        },

        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "Example:",
        },

        ApiVerion: {
          Title: "API Version (gemini-pro api version)",
          SubTitle: "Select a specific part version",
        },
      },
    },

    Model: "Модель",
    Temperature: {
      Title: "Температура",
      SubTitle: "Чем выше значение, тем более случайный вывод",
    },
    MaxTokens: {
      Title: "Максимальное количество токенов",
      SubTitle: "Максимальная длина вводных и генерируемых токенов",
    },
    PresencePenalty: {
      Title: "Штраф за повторения",
      SubTitle:
        "Чем выше значение, тем больше вероятность общения на новые темы",
    },
    FrequencyPenalty: {
      Title: "Штраф за частоту",
      SubTitle:
        "Большее значение снижает вероятность повторения одной и той же строки",
    },
    Plugin: {
      Enable: {
        Title: "Включить плагины",
        SubTitle: "Включить вызов плагинов",
      },
      MaxIteration: {
        Title: "Максимум итераций",
        SubTitle: "Максимум вызовов плагина",
      },
      ReturnIntermediateStep: {
        Title: "Показывать промежуточные шаги",
        SubTitle: "Показывать промежуточные шаги для вызова плагина",
      },
    },
  },
  Store: {
    DefaultTopic: "Новый разговор",
    BotHello: "Здравствуйте! Как я могу вам помочь сегодня?",
    Error: "Что-то пошло не так. Пожалуйста, попробуйте еще раз позже.",
    Prompt: {
      History: (content: string) =>
        "Это краткое содержание истории чата между ИИ и пользователем: " +
        content,
      Topic:
        "Пожалуйста, создайте заголовок из четырех или пяти слов, который кратко описывает нашу беседу, без введения, знаков пунктуации, кавычек, точек, символов или дополнительного текста. Удалите кавычки.",
      Summarize:
        "Кратко изложите нашу дискуссию в 200 словах или менее для использования в будущем контексте.",
    },
  },
  Copy: {
    Success: "Скопировано в буфер обмена",
    Failed:
      "Не удалось скопировать, пожалуйста, предоставьте разрешение на доступ к буферу обмена",
  },
  Context: {
    Toast: (x: any) => `С ${x} контекстными подсказками`,
    Edit: "Контекстные и памятные подсказки",
    Add: "Добавить подсказку",
    Clear: "Контекст очищен",
    Revert: "Вернуть",
  },
  Plugin: {
    Name: "Плагины",
    Page: {
      Title: "Плагины",
      SubTitle: (count: number) => `${count} плагинов`,
      Search: "Поиск",
      Create: "Создать",
    },
    Item: {
      View: "Посмотреть",
      Edit: "Редактировать",
      Delete: "Удалить",
      DeleteConfirm: "Подтверждаете удаление?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Edit Plugin Template ${readonly ? "(readonly)" : ""}`,
      Download: "Скачать",
      Clone: "Клонировать",
    },
    RuntimeWarning: "Доступно только при развертывании в среде, отличной от Vercel.",
  },
  FineTuned: {
    Sysmessage: "Вы - ассистент, который",
  },
  Mask: {
    Name: "Маска",
    Page: {
      Title: "Шаблон подсказки",
      SubTitle: (count: number) => `${count} шаблонов подсказок`,
      Search: "Поиск шаблонов",
      Create: "Создать",
    },
    Item: {
      Info: (count: number) => `${count} подсказок`,
      Chat: "Чат",
      View: "Просмотр",
      Edit: "Редактировать",
      Delete: "Удалить",
      DeleteConfirm: "Подтвердить удаление?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Редактирование шаблона подсказки ${
          readonly ? "(только для чтения)" : ""
        }`,
      Download: "Скачать",
      Clone: "Клонировать",
    },
    Config: {
      Avatar: "Аватар бота",
      Name: "Имя бота",
    },
  },
  NewChat: {
    Return: "Вернуться",
    Skip: "Пропустить",
    Title: "Выберите маску",
    SubTitle: "Общайтесь с душой за маской",
    More: "Найти еще",
    NotShow: "Не показывать снова",
    ConfirmNoShow:
      "Подтвердите отключение? Вы можете включить это позже в настройках.",
  },

  UI: {
    Confirm: "Подтвердить",
    Cancel: "Отмена",
    Close: "Закрыть",
    Create: "Создать",
    Edit: "Редактировать",
    Export: "Экспорт",
    Import: "Импорт",
    Sync: "Синхронизировать",
    Config: "Настройки",
  },
  Exporter: {
    Description: {
      Title: "Будут отображаться сообщения только после очистки контекста",
    },
    Model: "Модель",
    Messages: "Сообщения",
    Topic: "Тема разговора",
    Time: "Время",
  },
};

export default ru;
