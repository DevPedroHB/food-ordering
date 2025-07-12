# FoodOrdering

## 📋 Índice

- [FoodOrdering](#foodordering)
  - [📋 Índice](#-índice)
  - [📖 Sobre o Projeto](#-sobre-o-projeto)
  - [✨ Funcionalidades](#-funcionalidades)
  - [🚀 Tecnologias Utilizadas](#-tecnologias-utilizadas)
  - [🏗️ Arquitetura do Projeto](#️-arquitetura-do-projeto)
  - [🏁 Como Executar](#-como-executar)
  - [📝 Licença](#-licença)

---

## 📖 Sobre o Projeto

FoodOrdering é um aplicativo móvel de delivery de comida, permitindo que os usuários naveguem por um cardápio, personalizem seus pedidos e os recebam onde estiverem.

## ✨ Funcionalidades

- **Autenticação**: Cadastro e login de usuários.
- **Navegação**: Navegação por abas para Home, Carrinho, Perfil e Busca.
- **Cardápio**: Visualização de categorias e itens do cardápio.
- **Carrinho**: Adicione e remova itens do carrinho de compras.
- **Perfil**: Visualize e edite informações do usuário.
- **Busca**: Encontre itens do cardápio rapidamente.

## 🚀 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS (NativeWind)](https://www.nativewind.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Query](https://tanstack.com/query/v5)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Appwrite](https://appwrite.io/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)

## 🏗️ Arquitetura do Projeto

O projeto segue uma arquitetura baseada em componentes, com uma separação clara de responsabilidades.

- **`src/app`**: Contém as rotas e telas do aplicativo, usando a navegação baseada em arquivos do Expo Router.
- **`src/components`**: Componentes reutilizáveis da interface do usuário.
- **`src/constants`**: Constantes usadas em todo o aplicativo.
- **`src/functions`**: Funções utilitárias.
- **`src/http`**: Funções para fazer requisições HTTP.
- **`src/libs`**: Configuração de bibliotecas de terceiros.
- **`src/providers`**: Provedores de contexto da aplicação.
- **`src/stores`**: Lojas de gerenciamento de estado com Zustand.
- **`src/types`**: Definições de tipos TypeScript.

## 🏁 Como Executar

```bash
# Instale as dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm start

# Inicie no Android
pnpm android

# Inicie no iOS
pnpm ios

# Inicie na Web
pnpm web
```

## 📝 Licença

Este projeto está licenciado sob a licença do [MIT](https://choosealicense.com/licenses/mit).

---

Feito com ❤️ por Pedro Henrique Bérgamo 🚀 [Never stop learning!](https://github.com/DevPedroHB)
