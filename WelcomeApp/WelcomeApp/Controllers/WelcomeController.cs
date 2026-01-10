using Microsoft.AspNetCore.Mvc;

namespace WelcomeApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WelcomeController : ControllerBase
    {
        [HttpGet]
        public string Get()
        {
            return "welcome Tech world";
        }
    }
}
