module MessagingSpec exposing (..)

import ElmTestBDDStyle exposing (..)
import Messaging exposing (getTestMessage)

specs = 
  describe "Messaging"
    [ it "adds 'from elm' to the end of any string"
        <| expect (getTestMessage "hello") toBe "hello from elm!!" ]
