module TestRunner exposing (..)

import ElmTest exposing (..)
import MessagingSpec

main =
    runSuite MessagingSpec.specs