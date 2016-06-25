port module ElmLib exposing (..)

import Html.App exposing (..)
import Html exposing (..)

getTestMessage : String -> String
getTestMessage msg = msg ++ " from elm!!" 

port dispatchGetTestMessage : (String -> msg) -> Sub msg
port testMessage : String -> Cmd msg

main = Html.App.program 
  { init = init, 
    update = update, 
    subscriptions = subscriptions, 
    view = view }

type Msg = GetTestMessage String

update msg model = 
  case msg of 
    GetTestMessage str ->
      (model, testMessage (getTestMessage str))

subscriptions model = 
  dispatchGetTestMessage GetTestMessage

init = ({ }, Cmd.none)

view model = text ""