using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FOMS.API.Controllers;

[ApiController]
[Route("api/secure")]
public class SecureController : ControllerBase
{
    [Authorize]
    [HttpGet]
    public IActionResult GetSecureData()
    {
        return Ok(new
        {
            message = "You have successfully accessed a protected endpoint.",
            username = User.Identity?.Name,
            authenticated = User.Identity?.IsAuthenticated
        });
    }
}