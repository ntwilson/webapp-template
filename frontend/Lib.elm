port module ElmLib exposing (..)

import Platform
import Messaging exposing (getTestMessage)
import Json.Decode

port js2ElmTestMessage : (String -> msg) -> Sub msg
port elm2JsTestMessage : String -> Cmd msg
port js2ElmTestInt : (Int -> msg) -> Sub msg
port elm2JsTestInt : Int -> Cmd msg

main = Platform.program 
  { init = ({ }, Cmd.none), 
    update = update, 
    subscriptions = subscriptions }

type ActionType = 
  GetTestMessage String
  | GetTestInt Int

update action model = 
  case action of 
    GetTestMessage str ->
      let result = getTestMessage str
      in (model, elm2JsTestMessage result)
    GetTestInt i ->
      let result = i + 5
      in (model, elm2JsTestInt result)

subscriptions _ = 
  Sub.batch [ js2ElmTestMessage GetTestMessage, js2ElmTestInt GetTestInt ]