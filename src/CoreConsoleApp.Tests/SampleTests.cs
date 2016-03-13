using Xunit;

namespace CoreConsoleApp.Tests
{
    public class SampleTests
    {
        [Fact]
        public void PassingTest()
        {
            Assert.Equal(4, Add(2, 2));
        }
        
        int Add(int x, int y)
        {
            return x + y;
        }
    }
}
