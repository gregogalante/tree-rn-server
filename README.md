# Application

This is a Ruby on Rails application.

## Installation

```shell
git clone application

cd application

bundle install

rails db:migrate

rails s
```

## Tasks and commands

```shell
rails db:migrate # create the database
rails db:seed # create fake data on database
```

## Files structure

All Frontend code can be found on **app/javascript** folder.

## Data structure

All data structure rappresentations can be found on **app/models** folder.

## Other informations

...

## GIOCO

TRE FASI

FASE 1:

- Autenticazione
- Refresh token ad ogni avvio
- Lista carte
- Profilo utente
- Singola carta -> nome, gioco, descrizione, cta di trasferimento
- Schermata di scambio carta tramite inserimento codice su TextInput

FASE 2:

- Scambio carta tramite QR Code
- Messaggio di errore se app offline
- Filtro carte per gioco

FASE 3:

- Trasferimento di carte multiple
- Modifica indirizzo email
- Modifica password

## API

### Login [POST]

**Endpoint**
```
https://tree-rn-server.herokuapp.com/authentication/login-action
```
**Parametri**
```
{
  username_email: string,
  password: string
}
```

### Signup [POST]

**Endpoint**
```
https://tree-rn-server.herokuapp.com/authentication/signup-action
```
**Parametri**
```
{
  name: string,
  surname: string,
  email: string,
  password: string,
  password_confirmation: string,
  username: string
}
```

### Refresh token [POST]

**Endpoint**
```
https://tree-rn-server.herokuapp.com/refresh-token
```
**Parametri**
```
{}
```

**Header**
```
Authorization: <token>
```

### Refresh portfolio code [POST]

**Endpoint**
```
https://tree-rn-server.herokuapp.com/refresh-portfolio-code
```
**Parametri**
```
{}
```

**Header**
```
Authorization: <token>
```

### Get cards [GET]

**Endpoint**
```
https://tree-rn-server.herokuapp.com/get-cards
```
**Parametri**
```
{}
```

**Header**
```
Authorization: <token>
```

### Move card [POST]

**Endpoint**
```
https://tree-rn-server.herokuapp.com/move-card
```
**Parametri**
```
{
  "card_id": integer,
  "portfolio_code": string
}
```

**Header**
```
Authorization: <token>
```
