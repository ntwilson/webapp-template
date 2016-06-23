import Html exposing (..)
import Html.App exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)


main =
  Html.App.beginnerProgram { model = model, view = view, update = update }


-- MODEL

type alias Model =
  { viewMode: ViewMode,
    name : String,
    password : String,
    passwordAgain : String }

type ViewMode = ZeroPassword | GoodPassword | BadPassword | Done | YDumb

viewMode pwd pwdAgain =
  case (pwd, pwdAgain) of
    ("", _) -> ZeroPassword
    (_, "") -> ZeroPassword
    (p1, p2) -> if (p1 == p2) then GoodPassword else BadPassword

passwordsMatch model = 
  model.password == model.passwordAgain

newModel = 
  let (pwd, pwdAgain) = ("", "") in
  Model (viewMode pwd pwdAgain) "" pwd pwdAgain

model = newModel

-- UPDATE

type Msg = 
  Submit
  | Reset
  | Name String
  | Password String
  | PasswordAgain String

update msg model =
  case msg of
    Reset ->
      newModel

    Submit ->
      { model | viewMode = if passwordsMatch model then Done else YDumb }

    Name name ->
      { model | name = name }

    Password password ->
      { model | password = password, viewMode = viewMode password model.passwordAgain }

    PasswordAgain password ->
      { model | passwordAgain = password, viewMode = viewMode model.password password }

-- VIEW

view model =
  case model.viewMode of
    ZeroPassword ->
      viewNoValidation model

    BadPassword ->
      viewBadValidation model

    GoodPassword ->
      viewGoodValidation model

    Done ->
      viewDoneMessage model

    YDumb ->
      viewYDumbMessage model

enterForm model = 
  div []
    [ input [ type' "text", placeholder "Name", content model.name, onInput Name ] [], 
      input [ type' "password", placeholder "Password", content model.password, onInput Password ] [], 
      input [ type' "password", placeholder "Re-enter Password", content model.passwordAgain, onInput PasswordAgain ] [], 
      button [ onClick Submit ] [ text "Submit" ] ]

viewNoValidation model =
  div []
    [ (enterForm model) ]

viewGoodValidation model =
  div []
    [ (enterForm model), (viewGoodValidationMessage) ]

viewBadValidation model =
  div []
    [ (enterForm model), (viewBadValidationMessage) ]

viewGoodValidationMessage =
  let (color, message) =
    ("green", "OK")
  in viewValidationMessage color message

viewBadValidationMessage = 
  let (color, message) =
    ("red", "Passwords do not match!")
  in viewValidationMessage color message

viewValidationMessage color message = 
  div [ style [("color", color)] ] [ text message ]

viewDoneMessage model =
  let (color, message) =
    ("green", "You're all set!")
  in viewValidationMessage color message

viewYDumbMessage model =
  let (color, message) = 
    ("red", "Y' Dumb!  Didn't you see the sign??")
  in 
    div [] 
      [ (viewValidationMessage color message),
        button [ onClick Reset ] [ text "Try Again" ] ]
  