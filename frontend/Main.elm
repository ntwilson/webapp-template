import Html exposing (..)
import Html.App exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)


main =
  Html.App.beginnerProgram { model = model, view = view, update = update }


-- MODEL

type ViewMode = StillEntering | GoodPassword | BadPassword

type alias Model =
  { viewMode: ViewMode,
    name : String,
    password : String,
    passwordAgain : String
  }


model : Model
model =
  Model StillEntering "" "" ""


-- UPDATE

type Msg
    = Submit
    | Name String
    | Password String
    | PasswordAgain String

passwordsMatch model = model.password == model.passwordAgain

update : Msg -> Model -> Model
update msg model =
  case msg of
    Submit ->
      { model | viewMode = if passwordsMatch model then GoodPassword else BadPassword }

    Name name ->
      { model | name = name }

    Password password ->
      { model | password = password }

    PasswordAgain password ->
      { model | passwordAgain = password }


-- VIEW

view : Model -> Html Msg
view model =
  case model.viewMode of
    StillEntering -> 
      enterForm model
    
    BadPassword ->
      viewBadValidation model

    GoodPassword ->
      viewGoodValidationMessage model

enterForm model = 
  div []
    [ input [ type' "text", placeholder "Name", onInput Name ] []
    , input [ type' "password", placeholder "Password", onInput Password ] []
    , input [ type' "password", placeholder "Re-enter Password", onInput PasswordAgain ] []
    , button [ onClick Submit ] [ text "Submit" ]
    ]

viewGoodValidationMessage model =
  let (color, message) =
    ("green", "OK")
  in viewValidationMessage color message

viewBadValidationMessage model = 
  let (color, message) =
    ("red", "Passwords do not match!")
  in viewValidationMessage color message

viewValidationMessage color message = 
  div [ style [("color", color)] ] [ text message ]

viewBadValidation model =
  div []
    [ (enterForm model), (viewBadValidationMessage model) ]
