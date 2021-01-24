from hello_world_submission import hello_world

class TestHelloWorld:

    def test_hello_world(self):
        assert hello_world()  == "Hello World"