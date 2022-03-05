# jest-spy-on-issue
sample code that shows how jest spy doesn't call the real function after the first test

When spying on a method that returns a promise in the same file as the method being tested, the first test behaves as expected.  Any consecutive tests though fail because the spy does not actually call the underlying real method (this is evident from the lack of logs for the second test execution).

This happens with both ts-jest and jest w/ babel.