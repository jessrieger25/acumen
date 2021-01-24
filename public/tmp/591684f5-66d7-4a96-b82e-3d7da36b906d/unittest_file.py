from hello_world_submission import hello_world

class TestHelloWorld:

    def test_hello_world(self):
        assert hello_world()  == "Hello World"


def test_synthesis(module_results_dct):
    """
    In this test we just look at the synthesis of all tests 
    executed before it, in that module.
    """
    # print the keys in the synthesis dictionary
    print("\n   Available `module_results_dct` keys:")
    for k in module_results_dct:
        print("    - " + k)

    # print what is available for a single test
    print("\n   Contents of 'test_foo[world]':")
    for k, value in module_results_dct.items():
        print(value)
    # for k, v in module_results_dct['test_foo[world]'].items():
    #     if k != 'status_details':
    #         print("    - '%s': %s" % (k, v))
    #     else:
    #         print("    - '%s':" % k)
    #         for kk, vv in v.items():
    #             print("      - '%s': %s" % (kk, vv))