port module Main exposing (..)

import MessagingSpec
import Test.Runner.Node exposing (run, TestProgram)
import Json.Encode exposing (Value)


main : TestProgram
main =
    run emit MessagingSpec.specs


port emit : ( String, Value ) -> Cmd msg
